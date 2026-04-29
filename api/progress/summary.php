<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$studentId = requireAuthStudentId();
$pdo = db();

$totalTopics = (int) $pdo->query('SELECT COUNT(*) FROM topics')->fetchColumn();
$visitedTopicsStmt = $pdo->prepare('SELECT COUNT(*) FROM topic_progress WHERE student_id = :student_id AND visited = 1');
$visitedTopicsStmt->execute([':student_id' => $studentId]);
$visitedTopics = (int) $visitedTopicsStmt->fetchColumn();

$totalQuestions = (int) $pdo->query('SELECT COUNT(*) FROM quiz_questions')->fetchColumn();
$correctQuestionsStmt = $pdo->prepare('SELECT COUNT(*) FROM question_attempts WHERE student_id = :student_id AND is_correct = 1');
$correctQuestionsStmt->execute([':student_id' => $studentId]);
$correctQuestions = (int) $correctQuestionsStmt->fetchColumn();

$totalTasks = (int) $pdo->query('SELECT COUNT(*) FROM tasks')->fetchColumn();
$completedTasksStmt = $pdo->prepare("SELECT COUNT(*) FROM task_submissions WHERE student_id = :student_id AND status = 'completed'");
$completedTasksStmt->execute([':student_id' => $studentId]);
$completedTasks = (int) $completedTasksStmt->fetchColumn();

$completedItems = $visitedTopics + $correctQuestions + $completedTasks;
$totalItems = $totalTopics + $totalQuestions + $totalTasks;
$overallProgress = $totalItems > 0 ? round(($completedItems / $totalItems) * 100, 2) : 0.0;

$resumeStmt = $pdo->prepare(
    "SELECT t.topic_id, t.topic_code, t.title
     FROM topics t
     LEFT JOIN topic_progress tp
       ON tp.topic_id = t.topic_id AND tp.student_id = :student_id
     WHERE COALESCE(tp.visited, 0) = 0
     ORDER BY t.topic_id ASC
     LIMIT 1"
);
$resumeStmt->execute([':student_id' => $studentId]);
$resumeTopic = $resumeStmt->fetch() ?: null;

jsonResponse([
    'ok' => true,
    'progress' => [
        'overall_percent' => $overallProgress,
        'topics' => ['completed' => $visitedTopics, 'total' => $totalTopics],
        'questions' => ['correct' => $correctQuestions, 'total' => $totalQuestions],
        'tasks' => ['completed' => $completedTasks, 'total' => $totalTasks],
    ],
    'resume_topic' => $resumeTopic ? [
        'topic_id' => (int) $resumeTopic['topic_id'],
        'topic_code' => (string) $resumeTopic['topic_code'],
        'title' => (string) $resumeTopic['title'],
    ] : null,
]);

