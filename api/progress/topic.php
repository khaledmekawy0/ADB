<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

requirePostWithCsrf();
$studentId = requireAuthStudentId();
$body = getJsonBody();

$topicId = (int) ($body['topic_id'] ?? 0);
$visited = (bool) ($body['visited'] ?? true);
if ($topicId <= 0) {
    jsonResponse(['ok' => false, 'message' => 'Invalid topic id.'], 422);
}

$pdo = db();
$existsTopic = $pdo->prepare('SELECT topic_id FROM topics WHERE topic_id = :topic_id LIMIT 1');
$existsTopic->execute([':topic_id' => $topicId]);
if (!$existsTopic->fetch()) {
    jsonResponse(['ok' => false, 'message' => 'Topic not found in database.'], 404);
}

$stmt = $pdo->prepare(
    'INSERT INTO topic_progress (student_id, topic_id, visited, visited_at)
     VALUES (:student_id, :topic_id, :visited, IF(:visited = 1, NOW(), NULL))
     ON DUPLICATE KEY UPDATE
       visited = VALUES(visited),
       visited_at = IF(VALUES(visited) = 1, NOW(), topic_progress.visited_at)'
);
$stmt->execute([
    ':student_id' => $studentId,
    ':topic_id' => $topicId,
    ':visited' => $visited ? 1 : 0,
]);

jsonResponse(['ok' => true, 'message' => 'Topic progress updated.']);

