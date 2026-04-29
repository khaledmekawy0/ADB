<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$pdo = db();
$topics = $pdo->query('SELECT topic_id, topic_code, title FROM topics ORDER BY topic_id')->fetchAll();
$tasks = $pdo->query('SELECT task_id, task_title FROM tasks WHERE is_active = 1 ORDER BY task_id')->fetchAll();

jsonResponse([
    'ok' => true,
    'topics' => array_map(static fn(array $t): array => [
        'topic_id' => (int) $t['topic_id'],
        'topic_code' => (string) $t['topic_code'],
        'title' => (string) $t['title'],
    ], $topics),
    'tasks' => array_map(static fn(array $t): array => [
        'task_id' => (int) $t['task_id'],
        'task_title' => (string) $t['task_title'],
    ], $tasks),
]);

