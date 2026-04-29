<?php
declare(strict_types=1);

if (session_status() !== PHP_SESSION_ACTIVE) {
    $isHttps = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'domain' => '',
        'secure' => $isHttps,
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_start();
}

if (isset($_SESSION['auth_expires_at']) && is_int($_SESSION['auth_expires_at'])) {
    if (time() > $_SESSION['auth_expires_at']) {
        session_unset();
        session_destroy();
        session_start();
    }
}

function db(): PDO
{
    static $pdo = null;
    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $cfg = require __DIR__ . '/../config/database.php';
    $dsn = sprintf(
        'mysql:host=%s;port=%d;dbname=%s;charset=%s',
        $cfg['host'],
        $cfg['port'],
        $cfg['dbname'],
        $cfg['charset']
    );

    $pdo = new PDO($dsn, $cfg['username'], $cfg['password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
    return $pdo;
}

function jsonResponse(array $payload, int $statusCode = 200): void
{
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function getJsonBody(): array
{
    $raw = file_get_contents('php://input');
    if (!$raw) {
        return [];
    }
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

function sanitizeText(string $value): string
{
    return trim(filter_var($value, FILTER_SANITIZE_FULL_SPECIAL_CHARS));
}

function ensureCsrfToken(): string
{
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function verifyCsrfFromHeader(): bool
{
    $headerToken = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    $sessionToken = $_SESSION['csrf_token'] ?? '';
    return is_string($headerToken) && is_string($sessionToken) && hash_equals($sessionToken, $headerToken);
}

function requirePostWithCsrf(): void
{
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        jsonResponse(['ok' => false, 'message' => 'Method not allowed.'], 405);
    }
    if (!verifyCsrfFromHeader()) {
        jsonResponse(['ok' => false, 'message' => 'Invalid CSRF token.'], 403);
    }
}

function requireAuthStudentId(): int
{
    $studentId = $_SESSION['student_id'] ?? null;
    if (!is_int($studentId)) {
        jsonResponse(['ok' => false, 'message' => 'Authentication required.'], 401);
    }
    return $studentId;
}

function setLoginSession(int $studentId, bool $rememberMe = false): void
{
    session_regenerate_id(true);
    $_SESSION['student_id'] = $studentId;
    $_SESSION['auth_expires_at'] = time() + ($rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24);
}

