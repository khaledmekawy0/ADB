-- =========================================================
-- DBHub — Advanced Databases (ADB) — canonical MySQL schema
-- Target: MySQL 8+ / MariaDB 10.4+ (utf8mb4)
--
-- Install (fresh):
--   1. Import this file (creates DB + all tables used by the PHP API).
--   2. Import database/migrations/20260430_auth_progress_scoring.sql
--      ONLY if your database was created before this schema included
--      students/topic_progress/etc. (migration is idempotent).
--   3. Import database/seeds/quiz_questions_from_quiz_data.sql
--      (syncs MCQs with js/data/quiz-data.js for progress + API mapping).
--
-- Regenerate quiz seed after quiz-data changes:
--   node tools/generate-quiz-seed.mjs
-- =========================================================

CREATE DATABASE IF NOT EXISTS adb_learning_platform
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE adb_learning_platform;

-- -------- Accounts (used by api/auth/*.php — not legacy `users`) --------

CREATE TABLE IF NOT EXISTS students (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    INDEX idx_students_email (email)
) ENGINE=InnoDB;

-- -------- Course taxonomy --------

CREATE TABLE IF NOT EXISTS topics (
    topic_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    topic_code VARCHAR(80) NOT NULL UNIQUE,
    app_name ENUM('dbhub', 'opti') NOT NULL DEFAULT 'dbhub',
    title VARCHAR(150) NOT NULL,
    short_description VARCHAR(255) NULL,
    display_order INT UNSIGNED NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS quiz_questions (
    question_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    topic_id INT UNSIGNED NOT NULL,
    question_text TEXT NOT NULL,
    option_a VARCHAR(255) NOT NULL,
    option_b VARCHAR(255) NOT NULL,
    option_c VARCHAR(255) NOT NULL,
    option_d VARCHAR(255) NOT NULL,
    correct_option CHAR(1) NOT NULL,
    explanation TEXT NULL,
    question_type ENUM('mcq', 'text') NOT NULL DEFAULT 'mcq',
    CONSTRAINT chk_quiz_correct_option
        CHECK (correct_option IN ('A', 'B', 'C', 'D')),
    CONSTRAINT fk_quiz_questions_topic
        FOREIGN KEY (topic_id)
        REFERENCES topics (topic_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    INDEX idx_quiz_questions_topic (topic_id)
) ENGINE=InnoDB;

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

-- -------- Progress & scoring (used by api/progress/*.php, api/score/*.php) --------

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
