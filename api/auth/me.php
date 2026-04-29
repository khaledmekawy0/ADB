<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$studentId = $_SESSION['student_id'] ?? null;
if (!is_int($studentId)) {
    jsonResponse([
        'ok' => true,
        'authenticated' => false,
        'csrf_token' => ensureCsrfToken(),
    ]);
}

$stmt = db()->prepare('SELECT id, full_name, email, created_at, last_login FROM students WHERE id = :id LIMIT 1');
$stmt->execute([':id' => $studentId]);
$student = $stmt->fetch();
if (!$student) {
    session_unset();
    session_destroy();
    session_start();
    jsonResponse([
        'ok' => true,
        'authenticated' => false,
        'csrf_token' => ensureCsrfToken(),
    ]);
}

jsonResponse([
    'ok' => true,
    'authenticated' => true,
    'csrf_token' => ensureCsrfToken(),
    'student' => [
        'id' => (int) $student['id'],
        'full_name' => (string) $student['full_name'],
        'email' => (string) $student['email'],
        'created_at' => (string) $student['created_at'],
        'last_login' => $student['last_login'] ? (string) $student['last_login'] : null,
    ],
]);

