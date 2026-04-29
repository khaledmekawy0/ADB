<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$sql = "SELECT q.question_id, q.question_text, t.topic_code
        FROM quiz_questions q
        INNER JOIN topics t ON t.topic_id = q.topic_id";
$rows = db()->query($sql)->fetchAll();

$normalize = static function (string $text): string {
    $text = mb_strtolower(trim($text));
    $text = preg_replace('/\s+/', ' ', $text);
    return $text ?? '';
};

$map = [];
foreach ($rows as $row) {
    $key = $normalize((string) $row['question_text']);
    if ($key !== '' && !isset($map[$key])) {
        $map[$key] = [
            'question_id' => (int) $row['question_id'],
            'topic_code' => (string) $row['topic_code'],
        ];
    }
}

jsonResponse(['ok' => true, 'questions_map' => $map]);

