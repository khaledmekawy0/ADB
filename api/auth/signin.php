<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

requirePostWithCsrf();
$body = getJsonBody();

$email = strtolower(trim((string) ($body['email'] ?? '')));
$password = (string) ($body['password'] ?? '');
$rememberMe = (bool) ($body['remember_me'] ?? false);

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $password === '') {
    jsonResponse(['ok' => false, 'message' => 'Invalid email or password.'], 422);
}

$pdo = db();
$stmt = $pdo->prepare('SELECT id, full_name, email, password_hash FROM students WHERE email = :email LIMIT 1');
$stmt->execute([':email' => $email]);
$student = $stmt->fetch();

if (!$student || !password_verify($password, (string) $student['password_hash'])) {
    jsonResponse(['ok' => false, 'message' => 'Invalid email or password.'], 401);
}

$updateStmt = $pdo->prepare('UPDATE students SET last_login = NOW() WHERE id = :id');
$updateStmt->execute([':id' => (int) $student['id']]);

setLoginSession((int) $student['id'], $rememberMe);

jsonResponse([
    'ok' => true,
    'message' => 'Signed in successfully.',
    'student' => [
        'id' => (int) $student['id'],
        'full_name' => (string) $student['full_name'],
        'email' => (string) $student['email'],
    ],
    'expires_at' => $_SESSION['auth_expires_at'],
]);

