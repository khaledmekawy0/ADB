-- =========================================================
-- Migration: Authentication, Progress Tracking, Scoring
-- Target DB: adb_learning_platform (MySQL 8+ / MariaDB 10.4+)
--
-- Intended for databases created from an older schema.sql snapshot.
-- Fresh installs should use ../schema.sql first (canonical tables), then:
--   1. This migration (topic/task seed + safe ALTER IF NOT EXISTS), or rely on
--      seed clauses below only.
--   2. ../seeds/quiz_questions_from_quiz_data.sql (run: node tools/generate-quiz-seed.mjs)
--
-- Safe execution: CREATE IF NOT EXISTS + ALTER IF NOT EXISTS
-- =========================================================

USE adb_learning_platform;

-- ---------------------------------------------------------
-- 1) students
-- ---------------------------------------------------------
CREATE TABLE IF NOT EXISTS students (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    INDEX idx_students_email (email)
) ENGINE=InnoDB;

-- ---------------------------------------------------------
-- 2) tasks (required parent table for task_submissions)
-- ---------------------------------------------------------
CREATE TABLE IF NOT EXISTS tasks (
    task_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    topic_id INT UNSIGNED NULL,
    task_title VARCHAR(180) NOT NULL,
    task_type ENUM('hands_on', 'written') NOT NULL DEFAULT 'hands_on',
    max_score DECIMAL(5,2) NOT NULL DEFAULT 100.00,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_tasks_topic
        FOREIGN KEY (topic_id)
        REFERENCES topics (topic_id)
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    INDEX idx_tasks_topic_id (topic_id),
    INDEX idx_tasks_active (is_active)
) ENGINE=InnoDB;

-- ---------------------------------------------------------
-- 3) topic_progress
-- ---------------------------------------------------------
CREATE TABLE IF NOT EXISTS topic_progress (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    student_id INT UNSIGNED NOT NULL,
    topic_id INT UNSIGNED NOT NULL,
    visited TINYINT(1) NOT NULL DEFAULT 0,
    visited_at TIMESTAMP NULL,
    CONSTRAINT fk_topic_progress_student
        FOREIGN KEY (student_id)
        REFERENCES students (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_topic_progress_topic
        FOREIGN KEY (topic_id)
        REFERENCES topics (topic_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT uq_topic_progress_student_topic
        UNIQUE (student_id, topic_id),
    INDEX idx_topic_progress_student (student_id),
    INDEX idx_topic_progress_topic (topic_id),
    INDEX idx_topic_progress_visited (visited)
) ENGINE=InnoDB;

-- ---------------------------------------------------------
-- 4) question_attempts
-- ---------------------------------------------------------
CREATE TABLE IF NOT EXISTS question_attempts (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    student_id INT UNSIGNED NOT NULL,
    question_id INT UNSIGNED NOT NULL,
    is_correct TINYINT(1) NOT NULL DEFAULT 0,
    attempts_count INT UNSIGNED NOT NULL DEFAULT 1,
    last_attempted_at TIMESTAMP NULL,
    CONSTRAINT fk_question_attempts_student
        FOREIGN KEY (student_id)
        REFERENCES students (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_question_attempts_question
        FOREIGN KEY (question_id)
        REFERENCES quiz_questions (question_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT uq_question_attempts_student_question
        UNIQUE (student_id, question_id),
    INDEX idx_question_attempts_student (student_id),
    INDEX idx_question_attempts_question (question_id),
    INDEX idx_question_attempts_correct (is_correct)
) ENGINE=InnoDB;

-- ---------------------------------------------------------
-- 5) task_submissions
-- ---------------------------------------------------------
CREATE TABLE IF NOT EXISTS task_submissions (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    student_id INT UNSIGNED NOT NULL,
    task_id INT UNSIGNED NOT NULL,
    status ENUM('not_started', 'in_progress', 'completed') NOT NULL DEFAULT 'not_started',
    score DECIMAL(5,2) NULL,
    submitted_at TIMESTAMP NULL,
    CONSTRAINT fk_task_submissions_student
        FOREIGN KEY (student_id)
        REFERENCES students (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_task_submissions_task
        FOREIGN KEY (task_id)
        REFERENCES tasks (task_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT uq_task_submissions_student_task
        UNIQUE (student_id, task_id),
    INDEX idx_task_submissions_student (student_id),
    INDEX idx_task_submissions_task (task_id),
    INDEX idx_task_submissions_status (status)
) ENGINE=InnoDB;

-- ---------------------------------------------------------
-- 6) student_scores
-- ---------------------------------------------------------
CREATE TABLE IF NOT EXISTS student_scores (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    student_id INT UNSIGNED NOT NULL,
    total_score DECIMAL(6,2) NOT NULL DEFAULT 0.00,
    level VARCHAR(40) NOT NULL DEFAULT 'Needs Improvement',
    completed_at TIMESTAMP NULL,
    certificate_id CHAR(32) NULL,
    CONSTRAINT fk_student_scores_student
        FOREIGN KEY (student_id)
        REFERENCES students (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT uq_student_scores_student UNIQUE (student_id),
    CONSTRAINT uq_student_scores_certificate UNIQUE (certificate_id),
    INDEX idx_student_scores_level (level),
    INDEX idx_student_scores_completed_at (completed_at)
) ENGINE=InnoDB;

-- ---------------------------------------------------------
-- 7) Safe schema extensions for existing tables
-- ---------------------------------------------------------
ALTER TABLE topics
    ADD COLUMN IF NOT EXISTS display_order INT UNSIGNED NOT NULL DEFAULT 0;

ALTER TABLE quiz_questions
    ADD COLUMN IF NOT EXISTS question_type ENUM('mcq', 'text') NOT NULL DEFAULT 'mcq';

-- ---------------------------------------------------------
-- 8) Optional baseline topic seed
-- ---------------------------------------------------------
INSERT INTO topics (topic_code, app_name, title)
SELECT seed.topic_code, 'dbhub', seed.title
FROM (
    SELECT 'mysql-intro' AS topic_code, 'MySQL Introduction' AS title
    UNION ALL SELECT 'mysql-rdbms', 'MySQL RDBMS'
    UNION ALL SELECT 'mysql-sql', 'MySQL SQL'
    UNION ALL SELECT 'select', 'MySQL SELECT'
    UNION ALL SELECT 'select-distinct', 'MySQL SELECT DISTINCT'
    UNION ALL SELECT 'where', 'MySQL WHERE'
    UNION ALL SELECT 'order-by', 'MySQL ORDER BY'
    UNION ALL SELECT 'and', 'MySQL AND'
    UNION ALL SELECT 'or', 'MySQL OR'
    UNION ALL SELECT 'not', 'MySQL NOT'
    UNION ALL SELECT 'insert-into', 'MySQL INSERT INTO'
    UNION ALL SELECT 'null-values', 'MySQL NULL Values'
    UNION ALL SELECT 'update', 'MySQL UPDATE'
    UNION ALL SELECT 'delete', 'MySQL DELETE'
    UNION ALL SELECT 'limit', 'MySQL LIMIT'
    UNION ALL SELECT 'min-max', 'MySQL MIN() and MAX()'
    UNION ALL SELECT 'count', 'MySQL COUNT()'
    UNION ALL SELECT 'sum', 'MySQL SUM()'
    UNION ALL SELECT 'avg', 'MySQL AVG()'
    UNION ALL SELECT 'like', 'MySQL LIKE'
    UNION ALL SELECT 'wildcards', 'MySQL Wildcards'
    UNION ALL SELECT 'in', 'MySQL IN'
    UNION ALL SELECT 'between', 'MySQL BETWEEN'
    UNION ALL SELECT 'aliases', 'MySQL Aliases'
    UNION ALL SELECT 'joins', 'MySQL Joins'
    UNION ALL SELECT 'inner-join', 'MySQL INNER JOIN'
    UNION ALL SELECT 'left-join', 'MySQL LEFT JOIN'
    UNION ALL SELECT 'right-join', 'MySQL RIGHT JOIN'
    UNION ALL SELECT 'cross-join', 'MySQL CROSS JOIN'
    UNION ALL SELECT 'self-join', 'MySQL Self Join'
    UNION ALL SELECT 'union', 'MySQL UNION'
    UNION ALL SELECT 'group-by', 'MySQL GROUP BY'
    UNION ALL SELECT 'having', 'MySQL HAVING'
    UNION ALL SELECT 'exists', 'MySQL EXISTS'
    UNION ALL SELECT 'create-db', 'MySQL Create Database'
    UNION ALL SELECT 'drop-db', 'MySQL Drop Database'
    UNION ALL SELECT 'create-table', 'MySQL Create Table'
    UNION ALL SELECT 'drop-table', 'MySQL Drop Table'
    UNION ALL SELECT 'alter-table', 'MySQL Alter Table'
    UNION ALL SELECT 'constraints', 'MySQL Constraints'
    UNION ALL SELECT 'not-null', 'MySQL NOT NULL'
    UNION ALL SELECT 'unique', 'MySQL UNIQUE'
    UNION ALL SELECT 'primary-key', 'MySQL Primary Key'
    UNION ALL SELECT 'foreign-key', 'MySQL Foreign Key'
    UNION ALL SELECT 'check', 'MySQL Check'
    UNION ALL SELECT 'default', 'MySQL Default'
    UNION ALL SELECT 'create-index', 'MySQL Create Index'
    UNION ALL SELECT 'auto-increment', 'MySQL Auto Increment'
    UNION ALL SELECT 'dates', 'MySQL Dates'
    UNION ALL SELECT 'views', 'MySQL Views'
) AS seed
WHERE NOT EXISTS (
    SELECT 1
    FROM topics t
    WHERE t.topic_code = seed.topic_code
);

-- ---------------------------------------------------------
-- 9) Optional baseline task seed
--    (kept minimal; adapt topic_id values after topics are seeded)
-- ---------------------------------------------------------
INSERT INTO tasks (task_title, task_type, max_score)
SELECT 'Exercise 1: SELECT Basics', 'hands_on', 100.00
WHERE NOT EXISTS (SELECT 1 FROM tasks WHERE task_title = 'Exercise 1: SELECT Basics');

INSERT INTO tasks (task_title, task_type, max_score)
SELECT 'Exercise 2: WHERE Clause', 'hands_on', 100.00
WHERE NOT EXISTS (SELECT 1 FROM tasks WHERE task_title = 'Exercise 2: WHERE Clause');

INSERT INTO tasks (task_title, task_type, max_score)
SELECT 'Exercise 3: JOIN Tables', 'hands_on', 100.00
WHERE NOT EXISTS (SELECT 1 FROM tasks WHERE task_title = 'Exercise 3: JOIN Tables');

INSERT INTO tasks (task_title, task_type, max_score)
SELECT 'Exercise 4: Aggregate Functions', 'hands_on', 100.00
WHERE NOT EXISTS (SELECT 1 FROM tasks WHERE task_title = 'Exercise 4: Aggregate Functions');

INSERT INTO tasks (task_title, task_type, max_score)
SELECT 'Exercise 5: Subquery', 'hands_on', 100.00
WHERE NOT EXISTS (SELECT 1 FROM tasks WHERE task_title = 'Exercise 5: Subquery');

