<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

requirePostWithCsrf();
$body = getJsonBody();

$fullName = sanitizeText((string) ($body['full_name'] ?? ''));
$email = strtolower(trim((string) ($body['email'] ?? '')));
$password = (string) ($body['password'] ?? '');

if ($fullName === '' || mb_strlen($fullName) < 3) {
    jsonResponse(['ok' => false, 'message' => 'Full name must be at least 3 characters.'], 422);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(['ok' => false, 'message' => 'Please enter a valid email address.'], 422);
}
if (strlen($password) < 8) {
    jsonResponse(['ok' => false, 'message' => 'Password must be at least 8 characters.'], 422);
}

$pdo = db();
$existsStmt = $pdo->prepare('SELECT id FROM students WHERE email = :email LIMIT 1');
$existsStmt->execute([':email' => $email]);
if ($existsStmt->fetch()) {
    jsonResponse(['ok' => false, 'message' => 'This email is already registered.'], 409);
}

$passwordHash = password_hash($password, PASSWORD_BCRYPT);
$insertStmt = $pdo->prepare(
    'INSERT INTO students (full_name, email, password_hash, created_at) VALUES (:full_name, :email, :password_hash, NOW())'
);
$insertStmt->execute([
    ':full_name' => $fullName,
    ':email' => $email,
    ':password_hash' => $passwordHash,
]);

$studentId = (int) $pdo->lastInsertId();
setLoginSession($studentId, false);

jsonResponse([
    'ok' => true,
    'message' => 'Account created successfully.',
    'student' => [
        'id' => $studentId,
        'full_name' => $fullName,
        'email' => $email,
    ],
]);

