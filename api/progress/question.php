<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

requirePostWithCsrf();
$studentId = requireAuthStudentId();
$body = getJsonBody();

$questionId = (int) ($body['question_id'] ?? 0);
$isCorrect = (bool) ($body['is_correct'] ?? false);
if ($questionId <= 0) {
    jsonResponse(['ok' => false, 'message' => 'Invalid question id.'], 422);
}

$pdo = db();
$existsQuestion = $pdo->prepare('SELECT question_id FROM quiz_questions WHERE question_id = :question_id LIMIT 1');
$existsQuestion->execute([':question_id' => $questionId]);
if (!$existsQuestion->fetch()) {
    jsonResponse(['ok' => false, 'message' => 'Question not found in database.'], 404);
}

$stmt = $pdo->prepare(
    'INSERT INTO question_attempts (student_id, question_id, is_correct, attempts_count, last_attempted_at)
     VALUES (:student_id, :question_id, :is_correct, 1, NOW())
     ON DUPLICATE KEY UPDATE
       is_correct = VALUES(is_correct),
       attempts_count = question_attempts.attempts_count + 1,
       last_attempted_at = NOW()'
);
$stmt->execute([
    ':student_id' => $studentId,
    ':question_id' => $questionId,
    ':is_correct' => $isCorrect ? 1 : 0,
]);

jsonResponse(['ok' => true, 'message' => 'Question attempt tracked.']);

