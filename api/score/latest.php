<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$studentId = requireAuthStudentId();
$stmt = db()->prepare(
    'SELECT total_score, level, completed_at, certificate_id
     FROM student_scores
     WHERE student_id = :student_id
     LIMIT 1'
);
$stmt->execute([':student_id' => $studentId]);
$score = $stmt->fetch();

jsonResponse([
    'ok' => true,
    'score' => $score ? [
        'total_score' => (float) $score['total_score'],
        'level' => (string) $score['level'],
        'completed_at' => $score['completed_at'] ? (string) $score['completed_at'] : null,
        'certificate_id' => $score['certificate_id'] ? (string) $score['certificate_id'] : null,
    ] : null,
]);

