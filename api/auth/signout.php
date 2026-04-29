<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

requirePostWithCsrf();

session_unset();
session_destroy();
session_start();

jsonResponse([
    'ok' => true,
    'message' => 'Signed out successfully.',
    'csrf_token' => ensureCsrfToken(),
]);

