<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

requirePostWithCsrf();
$studentId = requireAuthStudentId();
$body = getJsonBody();

$taskId = (int) ($body['task_id'] ?? 0);
$status = (string) ($body['status'] ?? 'not_started');
$score = isset($body['score']) ? (float) $body['score'] : null;
$allowedStatuses = ['not_started', 'in_progress', 'completed'];

if ($taskId <= 0) {
    jsonResponse(['ok' => false, 'message' => 'Invalid task id.'], 422);
}
if (!in_array($status, $allowedStatuses, true)) {
    jsonResponse(['ok' => false, 'message' => 'Invalid task status.'], 422);
}
if ($score !== null) {
    $score = max(0.0, min(100.0, $score));
}

$pdo = db();
$existsTask = $pdo->prepare('SELECT task_id FROM tasks WHERE task_id = :task_id LIMIT 1');
$existsTask->execute([':task_id' => $taskId]);
if (!$existsTask->fetch()) {
    jsonResponse(['ok' => false, 'message' => 'Task not found in database.'], 404);
}

$stmt = $pdo->prepare(
    'INSERT INTO task_submissions (student_id, task_id, status, score, submitted_at)
     VALUES (:student_id, :task_id, :status, :score, NOW())
     ON DUPLICATE KEY UPDATE
       status = VALUES(status),
       score = VALUES(score),
       submitted_at = NOW()'
);
$stmt->execute([
    ':student_id' => $studentId,
    ':task_id' => $taskId,
    ':status' => $status,
    ':score' => $score,
]);

jsonResponse(['ok' => true, 'message' => 'Task submission tracked.']);

