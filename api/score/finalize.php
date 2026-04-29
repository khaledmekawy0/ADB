<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

requirePostWithCsrf();
$studentId = requireAuthStudentId();
$pdo = db();

$totalTopics = (int) $pdo->query('SELECT COUNT(*) FROM topics')->fetchColumn();
$visitedTopicsStmt = $pdo->prepare('SELECT COUNT(*) FROM topic_progress WHERE student_id = :student_id AND visited = 1');
$visitedTopicsStmt->execute([':student_id' => $studentId]);
$visitedTopics = (int) $visitedTopicsStmt->fetchColumn();

$totalQuestions = (int) $pdo->query('SELECT COUNT(*) FROM quiz_questions')->fetchColumn();
$questionScoreStmt = $pdo->prepare(
    "SELECT
        COALESCE(SUM(
            CASE
                WHEN is_correct = 1 THEN GREATEST(0, 1 - ((attempts_count - 1) * 0.10))
                ELSE 0
            END
        ), 0) AS effective_correct
     FROM question_attempts
     WHERE student_id = :student_id"
);
$questionScoreStmt->execute([':student_id' => $studentId]);
$effectiveCorrect = (float) $questionScoreStmt->fetchColumn();

$totalTasks = (int) $pdo->query('SELECT COUNT(*) FROM tasks')->fetchColumn();
$taskScoreStmt = $pdo->prepare(
    "SELECT COALESCE(SUM(
        CASE
            WHEN status = 'completed' THEN COALESCE(score, 100)
            ELSE 0
        END
    ), 0) AS earned_task_score
     FROM task_submissions
     WHERE student_id = :student_id"
);
$taskScoreStmt->execute([':student_id' => $studentId]);
$earnedTaskScore = (float) $taskScoreStmt->fetchColumn();

$topicRatio = $totalTopics > 0 ? $visitedTopics / $totalTopics : 0.0;
$questionRatio = $totalQuestions > 0 ? $effectiveCorrect / $totalQuestions : 0.0;
$taskRatio = $totalTasks > 0 ? ($earnedTaskScore / ($totalTasks * 100.0)) : 0.0;

$topicComponent = $topicRatio * 10.0;
$questionComponent = $questionRatio * 50.0;
$taskComponent = $taskRatio * 40.0;
$totalScore = round($topicComponent + $questionComponent + $taskComponent, 2);

$level = 'Needs Improvement';
if ($totalScore >= 90) {
    $level = 'Expert';
} elseif ($totalScore >= 75) {
    $level = 'Advanced';
} elseif ($totalScore >= 60) {
    $level = 'Intermediate';
} elseif ($totalScore >= 40) {
    $level = 'Beginner';
}

$isCompleted = (
    $totalTopics > 0 && $totalQuestions > 0 && $totalTasks > 0 &&
    $visitedTopics >= $totalTopics &&
    $effectiveCorrect >= $totalQuestions &&
    $taskRatio >= 1.0
);

$certificateId = null;
$existingScoreStmt = $pdo->prepare('SELECT certificate_id FROM student_scores WHERE student_id = :student_id LIMIT 1');
$existingScoreStmt->execute([':student_id' => $studentId]);
$existingScore = $existingScoreStmt->fetch();
if ($existingScore && !empty($existingScore['certificate_id'])) {
    $certificateId = (string) $existingScore['certificate_id'];
} elseif ($isCompleted) {
    $certificateId = bin2hex(random_bytes(16));
}

$upsertStmt = $pdo->prepare(
    'INSERT INTO student_scores (student_id, total_score, level, completed_at, certificate_id)
     VALUES (:student_id, :total_score, :level, :completed_at, :certificate_id)
     ON DUPLICATE KEY UPDATE
       total_score = VALUES(total_score),
       level = VALUES(level),
       completed_at = VALUES(completed_at),
       certificate_id = COALESCE(student_scores.certificate_id, VALUES(certificate_id))'
);
$upsertStmt->execute([
    ':student_id' => $studentId,
    ':total_score' => $totalScore,
    ':level' => $level,
    ':completed_at' => $isCompleted ? date('Y-m-d H:i:s') : null,
    ':certificate_id' => $certificateId,
]);

$studentStmt = $pdo->prepare('SELECT full_name, email FROM students WHERE id = :id');
$studentStmt->execute([':id' => $studentId]);
$student = $studentStmt->fetch();

jsonResponse([
    'ok' => true,
    'score' => [
        'total_score' => $totalScore,
        'level' => $level,
        'topic_component' => round($topicComponent, 2),
        'question_component' => round($questionComponent, 2),
        'task_component' => round($taskComponent, 2),
        'completed' => $isCompleted,
        'certificate_id' => $certificateId,
    ],
    'student' => $student ? [
        'full_name' => (string) $student['full_name'],
        'email' => (string) $student['email'],
    ] : null,
]);

