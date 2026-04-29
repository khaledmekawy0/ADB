<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

jsonResponse([
    'ok' => true,
    'csrf_token' => ensureCsrfToken(),
]);

