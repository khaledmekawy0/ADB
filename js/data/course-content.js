/* ===================================================
   DBHub — MySQL COURSE CONTENT DATA
   Based on W3 Schools MySQL Curriculum
   With Egyptian Arabic (Egyptian Colloquial) Explanations
   =================================================== */

// Legacy helper for old `videoUrl` values.
const YOUTUBE_URL = (id) => `https://www.youtube.com/embed/${id}`;

const COURSE_CONTENT = [
    // ===================== MYSQL HOME =====================
    {
        id: 'mysql-intro',
        title: 'MySQL Introduction',
        icon: 'fas fa-star',
        description: 'Introduction to MySQL - the most popular open-source relational database.',
        videoUrl: YOUTUBE_URL('zpnHsWOy0RY'),
        learningObjectives: [
            'Understand what MySQL is and why it is popular',
            'Learn about MySQL history and features',
            'Know where MySQL is used in real-world applications',
        ],
        explanation: `
            <p><strong>MySQL</strong> is the world's most popular open-source relational database management system (RDBMS). It is developed, distributed, and supported by Oracle Corporation.</p>
            <p>MySQL is used by many of the world's largest websites including Facebook, Twitter, YouTube, and Wikipedia. It powers web applications, data warehousing, e-commerce, and logging applications.</p>
            <h4>Key Features of MySQL:</h4>
            <ul class="key-points">
                <li><strong>Free and Open Source:</strong> Available under GPL license</li>
                <li><strong>Fast and Reliable:</strong> Proven performance with large datasets</li>
                <li><strong>Scalable:</strong> Can handle millions of records</li>
                <li><strong>Secure:</strong> Supports SSL encryption and access control</li>
                <li><strong>Cross-Platform:</strong> Runs on Windows, Linux, macOS</li>
                <li><strong>Easy to Use:</strong> Simple SQL syntax, great documentation</li>
            </ul>
        `,
        explanationAr: `
            <p><strong>MySQL</strong> هو أشهر نظام لإدارة قواعد البيانات العلائقية مفتوح المصدر في العالم. تطوره وتوزعه شركة Oracle.</p>
            <p>MySQL بيستخدم في أكبر مواقع العالم زي Facebook و Twitter و YouTube و Wikipedia. بيشغل تطبيقات الويب، تخزين البيانات، التجارة الإلكترونية، وتطبيقات التسجيل.</p>
            <h5>مميزات MySQL:</h5>
            <ul class="key-points">
                <li><strong>مجاني ومفتوح المصدر:</strong> متاح تحت رخصة GPL</li>
                <li><strong>سريع وموثوق:</strong> أداء ممتع مع البيانات الكبيرة</li>
                <li><strong>قابل للتوسع:</strong> يقدر يتعامل مع ملايين السجلات</li>
                <li><strong>آمن:</strong> يدعم تشفير SSL والتحكم في الوصول</li>
                <li><strong>يعمل على كل الأنظمة:</strong> Windows، Linux، macOS</li>
                <li><strong>سهل الاستخدام:</strong> صياغة SQL بسيطة، توثيق ممتاز</li>
            </ul>
        `,
        keyPoints: [
            'MySQL is open-source and free to use',
            'It uses SQL (Structured Query Language)',
            'MySQL is used by major websites worldwide',
            'It supports multiple storage engines (InnoDB, MyISAM)',
            'MySQL has excellent PHP integration (LAMP stack)',
        ],
        code: `-- Check MySQL version
SELECT VERSION();

-- This shows the installed MySQL version
-- Example output: 8.0.32`,
        codeExplanationAr: [
            { line: 2, text: 'SELECT VERSION(): بيجيب إصدار MySQL المثبت' },
            { line: 3, text: 'الأمر ده بيظهر نسخة MySQL اللي عندك' },
        ],
        taNotes: 'Explain that MySQL is often used with PHP (LAMP stack: Linux, Apache, MySQL, PHP). Mention that XAMPP is an easy way to get started locally.',
    },
    {
        id: 'mysql-rdbms',
        title: 'MySQL RDBMS',
        icon: 'fas fa-database',
        description: 'Understanding Relational Database Management Systems.',
        videoUrl: YOUTUBE_URL('zpnHsWOy0RY'),
        learningObjectives: [
            'Understand RDBMS concepts',
            'Learn about tables, rows, and columns',
            'Understand primary keys and foreign keys',
        ],
        explanation: `
            <p><strong>RDBMS</strong> stands for <strong>Relational Database Management System</strong>. It is based on the relational model introduced by E.F. Codd.</p>
            <h4>RDBMS Data is organized into:</h4>
            <ul class="key-points">
                <li><strong>Tables:</strong> Collections of related data entries</li>
                <li><strong>Rows (Records/Tuples):</strong> Each individual entry in a table</li>
                <li><strong>Columns (Fields/Attributes):</strong> Vertical entities in a table containing specific data types</li>
            </ul>
            <h4>Key Concepts:</h4>
            <ul class="key-points">
                <li><strong>Primary Key:</strong> Unique identifier for each record</li>
                <li><strong>Foreign Key:</strong> Links tables together</li>
                <li><strong>Relationships:</strong> One-to-One, One-to-Many, Many-to-Many</li>
            </ul>
        `,
        explanationAr: `
            <p><strong>RDBMS</strong> يعني <strong>نظام إدارة قواعد البيانات العلائقية</strong>. بيعتمد على الموديل العلائقي اللي اخترعه E.F. Codd.</p>
            <h5>البيانات في RDBMS منظمة في:</h5>
            <ul class="key-points">
                <li><strong>جداول (Tables):</strong> مجموعات من البيانات المتعلقة ببعض</li>
                <li><strong>صفوف (Rows):</strong> كل سجل فردي في الجدول</li>
                <li><strong>أعمدة (Columns):</strong> موجودة رأسية في الجدول وفيها نوع معين من البيانات</li>
            </ul>
            <h5>المفاهيم الأساسية:</h5>
            <ul class="key-points">
                <li><strong>Primary Key:</strong> معرف فريد لكل سجل</li>
                <li><strong>Foreign Key:</strong> بيربط الجداول ببعض</li>
                <li><strong>Relationships:</strong> العلاقات بين الجداول</li>
            </ul>
        `,
        code: `-- Example of a simple table structure
-- Table: students
-- Columns: student_id, name, email, age
-- Rows: individual student records

SELECT * FROM students;`,
        codeExplanationAr: [
            { line: 2, text: 'جدول الطلاب: students' },
            { line: 3, text: 'الأعمدة: رقم الطالب، الاسم، الإيميل، العمر' },
            { line: 4, text: 'الصفوف: سجلات الطلاب الفردية' },
        ],
        taNotes: 'Draw a simple table on the board showing rows and columns. Use a classroom analogy: rows are like students, columns are like student attributes.',
    },
    {
        id: 'mysql-sql',
        title: 'MySQL SQL',
        icon: 'fas fa-code',
        description: 'Introduction to SQL - the language of databases.',
        videoUrl: YOUTUBE_URL('zpnHsWOy0RY'),
        learningObjectives: [
            'Understand what SQL is',
            'Learn SQL syntax basics',
            'Know SQL statement types',
        ],
        explanation: `
            <p><strong>SQL</strong> stands for <strong>Structured Query Language</strong>. It is the standard language for accessing and manipulating databases.</p>
            <h4>SQL Categories:</h4>
            <ul class="key-points">
                <li><strong>DDL</strong> - Data Definition Language (CREATE, ALTER, DROP)</li>
                <li><strong>DML</strong> - Data Manipulation Language (INSERT, UPDATE, DELETE)</li>
                <li><strong>DQL</strong> - Data Query Language (SELECT)</li>
                <li><strong>DCL</strong> - Data Control Language (GRANT, REVOKE)</li>
            </ul>
            <h4>SQL Syntax Rules:</h4>
            <ul class="key-points">
                <li>SQL keywords are NOT case sensitive (select = SELECT)</li>
                <li>Some database systems require semicolon at the end</li>
                <li>Single quotes for text values, no quotes for numbers</li>
            </ul>
        `,
        explanationAr: `
            <p><strong>SQL</strong> يعني <strong>لغة الاستعلام المنظمة</strong>. هي اللغة القياسية للوصول والتعامل مع قواعد البيانات.</p>
            <h5>أنواع SQL:</h5>
            <ul class="key-points">
                <li><strong>DDL</strong> - لغة تعريف البيانات (CREATE, ALTER, DROP)</li>
                <li><strong>DML</strong> - لغة معالجة البيانات (INSERT, UPDATE, DELETE)</li>
                <li><strong>DQL</strong> - لغة الاستعلام (SELECT)</li>
                <li><strong>DCL</strong> - لغة التحكم (GRANT, REVOKE)</li>
            </ul>
            <h5>قواعد صياغة SQL:</h5>
            <ul class="key-points">
                <li>كلمات SQL مش حساسة لحالة الحروف (select = SELECT)</li>
                <li>بعض الأنظمة بتحتاج فاصلة منقوطة في الآخر</li>
                <li>علامات تنصيص مفردة للنصوص، من غير تنصيص للأرقام</li>
            </ul>
        `,
        code: `-- My first SQL query
SELECT 'Hello, MySQL!' AS greeting;

-- SQL is not case sensitive
select 'This works too' AS message;
SELECT 'This also works' AS message;`,
        codeExplanationAr: [
            { line: 2, text: 'SELECT: الأمر الأساسي لجلب البيانات' },
            { line: 3, text: 'AS: بيدي اسم للعمود في النتيجة' },
            { line: 6, text: 'SQL مش حساسة لحالة الحروف' },
        ],
        taNotes: 'Have students type their first SELECT query to build confidence. Explain that semicolons are good practice even if not always required.',
    },
    // ===================== MYSQL SELECT =====================
    {
        id: 'select',
        title: 'MySQL SELECT',
        icon: 'fas fa-magnifying-glass',
        description: 'Retrieve data from a database using the SELECT statement.',
        videoUrl: YOUTUBE_URL('af4LckivJT8'),
        learningObjectives: [
            'Use SELECT to retrieve data',
            'Select specific columns',
            'Select all columns using *',
        ],
        explanation: `
            <p>The <strong>SELECT</strong> statement is used to select data from a database. The data returned is stored in a result table, called the result-set.</p>
            <h4>Basic SELECT Syntax:</h4>
            <ul class="key-points">
                <li><strong>SELECT column1, column2:</strong> Select specific columns</li>
                <li><strong>SELECT *:</strong> Select all columns</li>
                <li><strong>FROM table_name:</strong> Specify which table to select from</li>
            </ul>
        `,
        explanationAr: `
            <p>أمر <strong>SELECT</strong> بيستخدم عشان نجيب بيانات من قاعدة البيانات. البيانات اللي ترجع بتتخزن في جدول نتيجة.</p>
            <h5>صياغة SELECT الأساسية:</h5>
            <ul class="key-points">
                <li><strong>SELECT عمود1، عمود2:</strong> اختيار أعمدة معينة</li>
                <li><strong>SELECT *:</strong> اختيار كل الأعمدة</li>
                <li><strong>FROM اسم_الجدول:</strong> تحديد الجدول</li>
            </ul>
        `,
        code: `-- Select specific columns
SELECT name, email FROM students;

-- Select all columns
SELECT * FROM students;

-- Select with column alias
SELECT name AS student_name, age AS student_age FROM students;`,
        codeExplanationAr: [
            { line: 2, text: 'اختيار أعمدة معينة: الاسم والإيميل بس' },
            { line: 5, text: 'اختيار كل الأعمدة من الجدول' },
            { line: 8, text: 'AS: تغيير اسم العمود في النتيجة' },
        ],
        taNotes: 'Practice SELECT extensively. This is the most used SQL statement.',
    },
    {
        id: 'select-distinct',
        title: 'MySQL SELECT DISTINCT',
        icon: 'fas fa-filter',
        description: 'Return only distinct (different) values using SELECT DISTINCT.',
        videoUrl: YOUTUBE_URL('af4LckivJT8'),
        learningObjectives: [
            'Use DISTINCT to eliminate duplicates',
            'Understand when to use DISTINCT',
        ],
        explanation: `
            <p>The <strong>SELECT DISTINCT</strong> statement is used to return only distinct (different) values. Inside a table, a column often contains many duplicate values; and sometimes you only want to list the different (distinct) values.</p>
        `,
        explanationAr: `
            <p>أمر <strong>SELECT DISTINCT</strong> بيرجع القيم المختلفة بس. في الجدول، العمود غالباً بيحتوي على قيم متكررة كتير، ومينفعش نحتاج نعرض كل القيم المتكررة.</p>
        `,
        code: `-- Select distinct (unique) values
SELECT DISTINCT major FROM students;

-- Count distinct values
SELECT COUNT(DISTINCT major) AS unique_majors FROM students;`,
        codeExplanationAr: [
            { line: 2, text: 'DISTINCT: بيجيب التخصصات المختلفة بس' },
            { line: 5, text: 'COUNT مع DISTINCT: بيعد القيم الفريدة' },
        ],
        taNotes: 'Explain that DISTINCT operates on the entire selected row, not just one column.',
    },
    {
        id: 'where',
        title: 'MySQL WHERE',
        icon: 'fas fa-search',
        description: 'Filter records using the WHERE clause.',
        videoUrl: YOUTUBE_URL('7S_tz1z_5bA'),
        learningObjectives: [
            'Filter data using WHERE clause',
            'Use comparison operators',
            'Combine conditions',
        ],
        explanation: `
            <p>The <strong>WHERE</strong> clause is used to filter records. It is used to extract only those records that fulfill a specified condition.</p>
            <h4>Comparison Operators:</h4>
            <ul class="key-points">
                <li><strong>=</strong> Equal</li>
                <li><strong><></strong> or <strong>!=</strong> Not equal</li>
                <li><strong>></strong> Greater than</li>
                <li><strong><</strong> Less than</li>
                <li><strong>>=</strong> Greater than or equal</li>
                <li><strong><=</strong> Less than or equal</li>
            </ul>
        `,
        explanationAr: `
            <p>جملة <strong>WHERE</strong> بيستخدمها عشان نفلتر السجلات. بنستخدمها عشان نجيب السجلات اللي بتنطبق عليها شرط معين بس.</p>
            <h5>علامات المقارنة:</h5>
            <ul class="key-points">
                <li><strong>=</strong> يساوي</li>
                <li><strong><></strong> أو <strong>!=</strong> لا يساوي</li>
                <li><strong>></strong> أكبر من</li>
                <li><strong><</strong> أصغر من</li>
                <li><strong>>=</strong> أكبر من أو يساوي</li>
                <li><strong><=</strong> أصغر من أو يساوي</li>
            </ul>
        `,
        code: `-- Filter with WHERE
SELECT * FROM students WHERE age > 20;

-- Multiple conditions with AND
SELECT * FROM students WHERE age > 20 AND major = 'CS';

-- OR condition
SELECT * FROM students WHERE major = 'CS' OR major = 'Engineering';`,
        codeExplanationAr: [
            { line: 2, text: 'WHERE: بيفلتر الطلاب اللي عمرهم أكتر من 20' },
            { line: 5, text: 'AND: لازم الشرطين يكونوا صح' },
            { line: 8, text: 'OR: واحد من الشرطين على الأقل' },
        ],
        taNotes: 'Emphasize that WHERE filters rows before any grouping or aggregation happens.',
    },
    {
        id: 'order-by',
        title: 'MySQL ORDER BY',
        icon: 'fas fa-sort',
        description: 'Sort results in ascending or descending order.',
        videoUrl: YOUTUBE_URL('7S_tz1z_5bA'),
        learningObjectives: [
            'Sort results using ORDER BY',
            'Use ASC and DESC',
            'Sort by multiple columns',
        ],
        explanation: `
            <p>The <strong>ORDER BY</strong> keyword is used to sort the result-set in ascending or descending order. By default, it sorts in ascending order.</p>
            <ul class="key-points">
                <li><strong>ASC:</strong> Ascending order (A-Z, 0-9) - default</li>
                <li><strong>DESC:</strong> Descending order (Z-A, 9-0)</li>
            </ul>
        `,
        explanationAr: `
            <p>كلمة <strong>ORDER BY</strong> بيستخدمها عشان نرتب النتيجة تصاعدياً أو تنازلياً. الافتراضي هو الترتيب التصاعدي.</p>
            <ul class="key-points">
                <li><strong>ASC:</strong> تصاعدي (أ-ي، 0-9) - الافتراضي</li>
                <li><strong>DESC:</strong> تنازلي (ي-أ، 9-0)</li>
            </ul>
        `,
        code: `-- Sort ascending (default)
SELECT * FROM students ORDER BY name;

-- Sort descending
SELECT * FROM students ORDER BY age DESC;

-- Sort by multiple columns
SELECT * FROM students ORDER BY major ASC, age DESC;`,
        codeExplanationAr: [
            { line: 2, text: 'ORDER BY: ترتيب أبجدي تصاعدي' },
            { line: 5, text: 'DESC: ترتيب تنازلي حسب العمر' },
            { line: 8, text: 'ترتيب بأكتر من عمود' },
        ],
        taNotes: 'Show how NULL values behave in sorting (usually first in ASC, last in DESC).',
    },
    {
        id: 'and',
        title: 'MySQL AND',
        icon: 'fas fa-check-double',
        description: 'Filter records based on multiple conditions where ALL must be true.',
        videoUrl: YOUTUBE_URL('xV046f8Ujsc'),
        learningObjectives: [
            'Use AND to combine conditions',
            'Understand that all conditions must be true',
        ],
        explanation: `
            <p>The <strong>AND</strong> operator is used to filter records based on more than one condition. It displays a record if all the conditions separated by AND are TRUE.</p>
        `,
        explanationAr: `
            <p>عامل <strong>AND</strong> بيستخدم عشان نفلتر السجلات حسب أكتر من شرط. بيظهر السجل لو كل الشروط اللي بينها AND كانت TRUE.</p>
        `,
        code: `-- AND operator - all conditions must be true
SELECT * FROM students 
WHERE age > 18 AND major = 'Computer Science' AND gpa >= 3.0;`,
        codeExplanationAr: [
            { line: 2, text: 'AND: لازم كل الشروط تتحقق' },
            { line: 3, text: 'العمر أكتر من 18 AND تخصص CS AND GPA عالي' },
        ],
        taNotes: 'Explain operator precedence: AND is evaluated before OR unless parentheses are used.',
    },
    {
        id: 'or',
        title: 'MySQL OR',
        icon: 'fas fa-check',
        description: 'Filter records where ANY of the conditions can be true.',
        videoUrl: YOUTUBE_URL('xV046f8Ujsc'),
        learningObjectives: [
            'Use OR to combine conditions',
            'Understand that at least one condition must be true',
        ],
        explanation: `
            <p>The <strong>OR</strong> operator is used to filter records based on more than one condition. It displays a record if any of the conditions separated by OR is TRUE.</p>
        `,
        explanationAr: `
            <p>عامل <strong>OR</strong> بيستخدم عشان نفلتر السجلات حسب أكتر من شرط. بيظهر السجل لو أي شرط من الشروط اللي بينها OR كان TRUE.</p>
        `,
        code: `-- OR operator - any condition can be true
SELECT * FROM students 
WHERE major = 'Computer Science' OR major = 'Engineering';

-- Combining AND and OR (use parentheses!)
SELECT * FROM students 
WHERE (major = 'CS' OR major = 'Engineering') AND gpa >= 3.0;`,
        codeExplanationAr: [
            { line: 2, text: 'OR: أي شرط منهم يكفي' },
            { line: 6, text: 'الأقواس مهمة عشان نحدد الأولوية' },
        ],
        taNotes: 'Always use parentheses when mixing AND and OR to avoid confusion.',
    },
    {
        id: 'not',
        title: 'MySQL NOT',
        icon: 'fas fa-times',
        description: 'Negate a condition using the NOT operator.',
        videoUrl: YOUTUBE_URL('xV046f8Ujsc'),
        learningObjectives: [
            'Use NOT to negate conditions',
            'Combine NOT with other operators',
        ],
        explanation: `
            <p>The <strong>NOT</strong> operator is used in combination with other operators to give the opposite result. It displays a record if the condition(s) is NOT TRUE.</p>
        `,
        explanationAr: `
            <p>عامل <strong>NOT</strong> بيستخدم مع العوامل التانية عشان يعطي النتيجة العكسية. بيظهر السجل لو الشرط مش TRUE.</p>
        `,
        code: `-- NOT operator
SELECT * FROM students WHERE NOT major = 'Computer Science';

-- NOT with IN
SELECT * FROM students WHERE major NOT IN ('CS', 'Engineering');

-- NOT with BETWEEN
SELECT * FROM students WHERE age NOT BETWEEN 18 AND 25;`,
        codeExplanationAr: [
            { line: 2, text: 'NOT: عكس الشرط، كل التخصصات ما عدا CS' },
            { line: 5, text: 'NOT IN: مش من التخصصات دي' },
            { line: 8, text: 'NOT BETWEEN: مش بين العمرين' },
        ],
        taNotes: 'NOT can make queries harder to read. Sometimes rewriting with positive logic is clearer.',
    },
    {
        id: 'insert-into',
        title: 'MySQL INSERT INTO',
        icon: 'fas fa-plus',
        description: 'Insert new records into a table.',
        videoUrl: YOUTUBE_URL('2HVsQnvV6mI'),
        learningObjectives: [
            'Insert single and multiple rows',
            'Insert specific columns',
            'Use INSERT with SELECT',
        ],
        explanation: `
            <p>The <strong>INSERT INTO</strong> statement is used to insert new records in a table.</p>
            <h4>Two ways to write INSERT:</h4>
            <ul class="key-points">
                <li>Specify both column names and values</li>
                <li>Specify values only (must match column order)</li>
            </ul>
        `,
        explanationAr: `
            <p>أمر <strong>INSERT INTO</strong> بيستخدم عشان نضيف سجلات جديدة في الجدول.</p>
            <h5>طريقتين لكتابة INSERT:</h5>
            <ul class="key-points">
                <li>تحديد أسماء الأعمدة والقيم</li>
                <li>تحديد القيم بس (لازم تكون بنفس ترتيب الأعمدة)</li>
            </ul>
        `,
        code: `-- Insert into specific columns
INSERT INTO students (name, email, age)
VALUES ('Ahmed Hassan', 'ahmed@nmu.edu.eg', 21);

-- Insert into all columns
INSERT INTO students 
VALUES (NULL, 'Sara Ali', 'sara@nmu.edu.eg', 20, 'CS', 3.5);

-- Insert multiple rows
INSERT INTO students (name, email, age) VALUES
('Mohamed', 'mohamed@nmu.edu.eg', 22),
('Fatima', 'fatima@nmu.edu.eg', 19),
('Omar', 'omar@nmu.edu.eg', 23);`,
        codeExplanationAr: [
            { line: 2, text: 'INSERT: تحديد الأعمدة والقيم' },
            { line: 6, text: 'بدون أسماء أعمدة: لازم كل القيم' },
            { line: 10, text: 'أكتر من صف في أمر واحد' },
        ],
        taNotes: 'Warn about inserting without column names - order matters! Also, show AUTO_INCREMENT behavior.',
    },
    {
        id: 'null-values',
        title: 'MySQL NULL Values',
        icon: 'fas fa-circle-question',
        description: 'Working with NULL values in MySQL.',
        videoUrl: YOUTUBE_URL('zG_4nN-rP_A'),
        learningObjectives: [
            'Understand what NULL means',
            'Use IS NULL and IS NOT NULL',
            'Know how NULL behaves in expressions',
        ],
        explanation: `
            <p>A field with a <strong>NULL</strong> value is a field with no value. It is different from a zero value or a field that contains spaces. A field with NULL has been left blank during record creation.</p>
            <h4>Important:</h4>
            <ul class="key-points">
                <li>NULL is not equal to NULL (use IS NULL instead of = NULL)</li>
                <li>NULL in calculations returns NULL</li>
                <li>Use IS NULL or IS NOT NULL to test for NULL</li>
            </ul>
        `,
        explanationAr: `
            <p>الحقل اللي قيمته <strong>NULL</strong> يعني فاضي، مالوش قيمة. مختلف عن الصفر أو المسافات. الحقل بيكون NULL لما نسيبه فاضي وقت إنشاء السجل.</p>
            <h5>مهم:</h5>
            <ul class="key-points">
                <li>NULL مش بيساوي NULL (استخدم IS NULL مش = NULL)</li>
                <li>NULL في الحسابات بيرجع NULL</li>
                <li>استخدم IS NULL أو IS NOT NULL عشان تختبر الـ NULL</li>
            </ul>
        `,
        code: `-- Find NULL values
SELECT * FROM students WHERE phone IS NULL;

-- Find non-NULL values
SELECT * FROM students WHERE phone IS NOT NULL;

-- COALESCE: Replace NULL with default value
SELECT name, COALESCE(phone, 'No phone') AS contact FROM students;`,
        codeExplanationAr: [
            { line: 2, text: 'IS NULL: اللي فاضي رقم التليفون' },
            { line: 5, text: 'IS NOT NULL: اللي عندهم رقم' },
            { line: 8, text: 'COALESCE: بدل NULL بقيمة تانية' },
        ],
        taNotes: 'NULL handling is a common source of bugs. Emphasize IS NULL vs = NULL distinction.',
    },
    {
        id: 'update',
        title: 'MySQL UPDATE',
        icon: 'fas fa-pen-to-square',
        description: 'Modify existing records in a table.',
        videoUrl: YOUTUBE_URL('4B5HL-Wm418'),
        learningObjectives: [
            'Update single or multiple records',
            'Use WHERE to target specific rows',
            'Update multiple columns',
        ],
        explanation: `
            <p>The <strong>UPDATE</strong> statement is used to modify the existing records in a table.</p>
            <p class="text-error"><strong>WARNING:</strong> Be careful when updating records. If you omit the WHERE clause, ALL records will be updated!</p>
        `,
        explanationAr: `
            <p>أمر <strong>UPDATE</strong> بيستخدم عشان نعدّل السجلات الموجودة في الجدول.</p>
            <p style="color: var(--error);"><strong>تحذير:</strong> خلي بالك وبتعمل UPDATE. لو نسيت WHERE، كل السجلات هتتعدّل!</p>
        `,
        code: `-- Update specific record
UPDATE students 
SET email = 'new.email@nmu.edu.eg' 
WHERE student_id = 1;

-- Update multiple columns
UPDATE students 
SET age = 22, major = 'Engineering' 
WHERE student_id = 1;

-- Update with calculation
UPDATE products 
SET price = price * 1.10 
WHERE category = 'Electronics';`,
        codeExplanationAr: [
            { line: 2, text: 'UPDATE مع WHERE: بيعدّل سجل واحد' },
            { line: 7, text: 'تعديل أكتر من عمود' },
            { line: 12, text: 'تعديل بحساب: زيادة السعر 10%' },
        ],
        taNotes: 'Always write WHERE clause first when drafting UPDATE statements. Test with SELECT before running.',
    },
    {
        id: 'delete',
        title: 'MySQL DELETE',
        icon: 'fas fa-trash',
        description: 'Delete records from a table.',
        videoUrl: YOUTUBE_URL('4B5HL-Wm418'),
        learningObjectives: [
            'Delete specific records with WHERE',
            'Understand DELETE vs TRUNCATE',
        ],
        explanation: `
            <p>The <strong>DELETE</strong> statement is used to delete existing records in a table.</p>
            <p class="text-error"><strong>DANGER:</strong> If you omit the WHERE clause in a DELETE statement, ALL records in the table will be deleted!</p>
        `,
        explanationAr: `
            <p>أمر <strong>DELETE</strong> بيستخدم عشان نمسح السجلات الموجودة في الجدول.</p>
            <p style="color: var(--error);"><strong>خطر:</strong> لو نسيت WHERE في DELETE، كل السجلات هتمسح!</p>
        `,
        code: `-- Delete specific records
DELETE FROM students WHERE graduation_year < 2020;

-- Delete all records (be careful!)
-- DELETE FROM students;

-- TRUNCATE - faster delete all (resets auto-increment)
-- TRUNCATE TABLE students;`,
        codeExplanationAr: [
            { line: 2, text: 'DELETE مع WHERE: مسح سجلات معينة' },
            { line: 8, text: 'TRUNCATE: أسرع، بيصفر العداد' },
        ],
        taNotes: 'DELETE is permanent. Practice on test data only. Show DELETE with JOIN for complex deletions.',
    },
    {
        id: 'limit',
        title: 'MySQL LIMIT',
        icon: 'fas fa-stop',
        description: 'Limit the number of records returned.',
        videoUrl: YOUTUBE_URL('dQ_6PNF6iYU'),
        learningObjectives: [
            'Limit the number of results',
            'Use LIMIT for pagination',
            'Use OFFSET',
        ],
        explanation: `
            <p>The <strong>LIMIT</strong> clause is used to specify the number of records to return. It is useful on large tables with thousands of records to improve performance.</p>
        `,
        explanationAr: `
            <p>جملة <strong>LIMIT</strong> بيستخدمها عشان نحدد عدد السجلات اللي ترجع. مفيدة في الجداول الكبيرة عشان نحسّن الأداء.</p>
        `,
        code: `-- Get top 5 students
SELECT * FROM students ORDER BY gpa DESC LIMIT 5;

-- Pagination: skip 10, get next 10
SELECT * FROM students LIMIT 10 OFFSET 10;

-- Alternative syntax
SELECT * FROM students LIMIT 10, 10; -- offset, limit`,
        codeExplanationAr: [
            { line: 2, text: 'TOP 5: أعلى 5 طلاب' },
            { line: 5, text: 'OFFSET: تخطي 10، جيب الـ 10 الجايين' },
            { line: 8, text: 'صياغة تانية: LIMIT offset, count' },
        ],
        taNotes: 'LIMIT is very useful for pagination in web applications.',
    },
    // ===================== MYSQL FUNCTIONS =====================
    {
        id: 'min-max',
        title: 'MySQL MIN() and MAX()',
        icon: 'fas fa-arrows-up-down',
        description: 'Find the minimum and maximum values in a column.',
        videoUrl: YOUTUBE_URL('9HXJUGT-06w'),
        learningObjectives: [
            'Use MIN() to find the smallest value',
            'Use MAX() to find the largest value',
            'Combine with WHERE clause',
        ],
        explanation: `
            <p>The <strong>MIN()</strong> function returns the smallest value of the selected column. The <strong>MAX()</strong> function returns the largest value of the selected column.</p>
        `,
        explanationAr: `
            <p>دالة <strong>MIN()</strong> بترجع أصغر قيمة في العمود المختار. دالة <strong>MAX()</strong> بترجع أكبر قيمة.</p>
        `,
        code: `-- Find minimum and maximum values
SELECT MIN(price) AS lowest_price FROM products;
SELECT MAX(price) AS highest_price FROM products;

-- MIN/MAX with WHERE
SELECT MIN(age) FROM students WHERE major = 'CS';
SELECT MAX(gpa) FROM students;`,
        codeExplanationAr: [
            { line: 2, text: 'MIN: أقل سعر في المنتجات' },
            { line: 3, text: 'MAX: أعلى سعر' },
            { line: 6, text: 'MIN مع WHERE: أصغر عمر في CS' },
        ],
        taNotes: 'MIN/MAX work with numbers, dates, and strings (alphabetical order).',
    },
    {
        id: 'count',
        title: 'MySQL COUNT()',
        icon: 'fas fa-hashtag',
        description: 'Count the number of rows that match a specified criterion.',
        videoUrl: YOUTUBE_URL('9HXJUGT-06w'),
        learningObjectives: [
            'Count all rows with COUNT(*)',
            'Count non-NULL values with COUNT(column)',
            'Use COUNT with DISTINCT',
        ],
        explanation: `
            <p>The <strong>COUNT()</strong> function returns the number of rows that matches a specified criterion. COUNT(*) counts all rows, while COUNT(column) counts non-NULL values only.</p>
        `,
        explanationAr: `
            <p>دالة <strong>COUNT()</strong> بترجع عدد الصفوف اللي بتطابق شرط معين. COUNT(*) بتعد كل الصفوف، COUNT(column) بتعد القيم مش NULL بس.</p>
        `,
        code: `-- Count all students
SELECT COUNT(*) AS total_students FROM students;

-- Count students with email (non-NULL)
SELECT COUNT(email) AS students_with_email FROM students;

-- Count unique majors
SELECT COUNT(DISTINCT major) AS unique_majors FROM students;`,
        codeExplanationAr: [
            { line: 2, text: 'COUNT(*): عدد كل الطلاب' },
            { line: 5, text: 'COUNT(email): اللي عندهم إيميل بس' },
            { line: 8, text: 'COUNT DISTINCT: عدد التخصصات المختلفة' },
        ],
        taNotes: 'COUNT(*) is generally faster than COUNT(column) because it does not check for NULLs.',
    },
    {
        id: 'sum',
        title: 'MySQL SUM()',
        icon: 'fas fa-plus',
        description: 'Calculate the total sum of a numeric column.',
        videoUrl: YOUTUBE_URL('9HXJUGT-06w'),
        learningObjectives: [
            'Calculate total sum of values',
            'Use SUM with WHERE',
            'Handle NULL values in SUM',
        ],
        explanation: `
            <p>The <strong>SUM()</strong> function returns the total sum of a numeric column. It ignores NULL values.</p>
        `,
        explanationAr: `
            <p>دالة <strong>SUM()</strong> بترجع مجموع القيم في عمود رقمي. بتتجاهل قيم NULL.</p>
        `,
        code: `-- Calculate total sales
SELECT SUM(price) AS total_sales FROM orders;

-- Sum with WHERE
SELECT SUM(salary) AS total_cs_salaries 
FROM employees WHERE department = 'CS';

-- Sum with GROUP BY
SELECT department, SUM(salary) AS total 
FROM employees GROUP BY department;`,
        codeExplanationAr: [
            { line: 2, text: 'SUM: مجموع المبيعات' },
            { line: 5, text: 'SUM مع WHERE: مجموع رواتب CS' },
            { line: 9, text: 'SUM مع GROUP BY: لكل قسم' },
        ],
        taNotes: 'SUM ignores NULL values. If all values are NULL, SUM returns NULL.',
    },
    {
        id: 'avg',
        title: 'MySQL AVG()',
        icon: 'fas fa-calculator',
        description: 'Calculate the average value of a numeric column.',
        videoUrl: YOUTUBE_URL('9HXJUGT-06w'),
        learningObjectives: [
            'Calculate average of values',
            'Use AVG with WHERE',
            'Combine with ROUND for precision',
        ],
        explanation: `
            <p>The <strong>AVG()</strong> function returns the average value of a numeric column. It ignores NULL values.</p>
        `,
        explanationAr: `
            <p>دالة <strong>AVG()</strong> بترجع المتوسط الحسابي لعمود رقمي. بتتجاهل قيم NULL.</p>
        `,
        code: `-- Calculate average GPA
SELECT AVG(gpa) AS average_gpa FROM students;

-- Average with ROUND
SELECT ROUND(AVG(price), 2) AS avg_price FROM products;

-- Average by category
SELECT category, AVG(price) AS avg_price 
FROM products GROUP BY category;`,
        codeExplanationAr: [
            { line: 2, text: 'AVG: متوسط GPA' },
            { line: 5, text: 'ROUND(AVG): متوسط مع رقمين عشريين' },
            { line: 8, text: 'AVG لكل فئة' },
        ],
        taNotes: 'AVG also ignores NULL values. Use ROUND() to control decimal places.',
    },
    {
        id: 'like',
        title: 'MySQL LIKE',
        icon: 'fas fa-font',
        description: 'Search for a specified pattern in a column.',
        videoUrl: YOUTUBE_URL('k-S6N-rP_Bw'),
        learningObjectives: [
            'Use LIKE for pattern matching',
            'Use % wildcard',
            'Use _ wildcard',
        ],
        explanation: `
            <p>The <strong>LIKE</strong> operator is used in a WHERE clause to search for a specified pattern in a column. There are two wildcards often used with LIKE:</p>
            <ul class="key-points">
                <li><strong>%</strong> - Represents zero, one, or multiple characters</li>
                <li><strong>_</strong> - Represents a single character</li>
            </ul>
        `,
        explanationAr: `
            <p>عامل <strong>LIKE</strong> بيستخدم في WHERE عشان نبحث عن نمط معين في عمود. في wildcards اتنين:</p>
            <ul class="key-points">
                <li><strong>%</strong> - صفر أو حرف أو كذا حرف</li>
                <li><strong>_</strong> - حرف واحد بس</li>
            </ul>
        `,
        code: `-- Names starting with A
SELECT * FROM students WHERE name LIKE 'A%';

-- Names ending with 'a'
SELECT * FROM students WHERE name LIKE '%a';

-- Names containing 'ah'
SELECT * FROM students WHERE name LIKE '%ah%';

-- 5-letter names starting with M
SELECT * FROM students WHERE name LIKE 'M____';`,
        codeExplanationAr: [
            { line: 2, text: 'A%: بيبدأ بـ A' },
            { line: 5, text: '%a: بينتهي بـ a' },
            { line: 8, text: '%ah%: فيه ah في أي مكان' },
            { line: 11, text: 'M____: 5 حروف ويبدأ بـ M' },
        ],
        taNotes: 'LIKE is case-insensitive in MySQL. Use LOWER() or UPPER() for case-sensitive matching.',
    },
    {
        id: 'wildcards',
        title: 'MySQL Wildcards',
        icon: 'fas fa-asterisk',
        description: 'Special characters used with LIKE to substitute one or more characters.',
        videoUrl: YOUTUBE_URL('k-S6N-rP_Bw'),
        learningObjectives: [
            'Use % for multiple characters',
            'Use _ for single character',
            'Combine wildcards',
        ],
        explanation: `
            <p>Wildcards are used with the LIKE operator to substitute one or more characters in a string:</p>
            <ul class="key-points">
                <li><strong>%</strong> - The percent sign represents zero, one, or multiple characters</li>
                <li><strong>_</strong> - The underscore represents a single character</li>
            </ul>
        `,
        explanationAr: `
            <p>الـ Wildcards بيستخدمها مع LIKE عشان نستبدل حرف أو أكتر في النص:</p>
            <ul class="key-points">
                <li><strong>%</strong> - علامة النسبة المئوية: صفر أو حرف أو أكتر</li>
                <li><strong>_</strong> - الشرطة السفلية: حرف واحد بس</li>
            </ul>
        `,
        code: `-- % wildcard examples
SELECT * FROM students WHERE email LIKE '%@nmu.edu.eg';
SELECT * FROM products WHERE name LIKE 'Laptop%';

-- _ wildcard examples
SELECT * FROM students WHERE name LIKE 'A_m_d'; -- Ahmed
SELECT * FROM students WHERE phone LIKE '010________';`,
        codeExplanationAr: [
            { line: 2, text: '%@nmu.edu.eg: أي إيميل ينتهي بالجامعة' },
            { line: 6, text: 'A_m_d: A ثم أي حرف ثم m ثم أي حرف ثم d' },
        ],
        taNotes: 'Wildcards are powerful but can slow down queries on large tables as they often prevent index usage.',
    },
    {
        id: 'in',
        title: 'MySQL IN',
        icon: 'fas fa-list',
        description: 'Specify multiple values in a WHERE clause.',
        videoUrl: YOUTUBE_URL('oQF1RIWf45U'),
        learningObjectives: [
            'Use IN to check multiple values',
            'Use IN with subqueries',
            'Use NOT IN',
        ],
        explanation: `
            <p>The <strong>IN</strong> operator allows you to specify multiple values in a WHERE clause. It is a shorthand for multiple OR conditions.</p>
        `,
        explanationAr: `
            <p>عامل <strong>IN</strong> بيسمح تحدد قيم متعددة في WHERE. هو اختصار لكذا شرط OR.</p>
        `,
        code: `-- IN with list of values
SELECT * FROM students WHERE major IN ('CS', 'Engineering', 'IT');

-- Equivalent to multiple OR
SELECT * FROM students 
WHERE major = 'CS' OR major = 'Engineering' OR major = 'IT';

-- NOT IN
SELECT * FROM products WHERE category NOT IN ('Electronics', 'Books');`,
        codeExplanationAr: [
            { line: 2, text: 'IN: أي تخصص من الثلاثة' },
            { line: 8, text: 'NOT IN: كل الفئات ما عدا دول' },
        ],
        taNotes: 'IN can also be used with subqueries: SELECT * FROM students WHERE id IN (SELECT student_id FROM enrollments).',
    },
    {
        id: 'between',
        title: 'MySQL BETWEEN',
        icon: 'fas fa-arrows-left-right',
        description: 'Select values within a given range.',
        videoUrl: YOUTUBE_URL('oQF1RIWf45U'),
        learningObjectives: [
            'Use BETWEEN for ranges',
            'Use with numbers, text, and dates',
            'Use NOT BETWEEN',
        ],
        explanation: `
            <p>The <strong>BETWEEN</strong> operator selects values within a given range. The values can be numbers, text, or dates. The range is inclusive (includes start and end values).</p>
        `,
        explanationAr: `
            <p>عامل <strong>BETWEEN</strong> بيختار قيم ضمن مدى معين. القيم ممكن تكون أرقام، نصوص، أو تواريخ. المدى شامل (بيشمل البداية والنهاية).</p>
        `,
        code: `-- Age between 18 and 25 (inclusive)
SELECT * FROM students WHERE age BETWEEN 18 AND 25;

-- Price range
SELECT * FROM products WHERE price BETWEEN 100 AND 500;

-- Date range
SELECT * FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';

-- NOT BETWEEN
SELECT * FROM students WHERE age NOT BETWEEN 18 AND 25;`,
        codeExplanationAr: [
            { line: 2, text: 'BETWEEN 18 AND 25: من 18 لـ 25 شامل' },
            { line: 5, text: 'نطاق السعر' },
            { line: 8, text: 'نطاق التاريخ' },
            { line: 11, text: 'NOT BETWEEN: برة النطاق' },
        ],
        taNotes: 'BETWEEN is inclusive. For dates, make sure to use proper date format YYYY-MM-DD.',
    },
    {
        id: 'aliases',
        title: 'MySQL Aliases',
        icon: 'fas fa-tag',
        description: 'Give a temporary name to a table or column.',
        videoUrl: YOUTUBE_URL('oQF1RIWf45U'),
        learningObjectives: [
            'Create column aliases with AS',
            'Create table aliases',
            'Use aliases in JOINs',
        ],
        explanation: `
            <p>SQL aliases are used to give a table, or a column in a table, a temporary name. Aliases are often used to make column names more readable. An alias only exists for the duration of that query.</p>
        `,
        explanationAr: `
            <p>الـ Aliases بيستخدمها عشان ندي للجدول أو العمود اسم مؤقت. بتخلي أسماء الأعمدة أسهل للقراءة. الاسم المستعار موجود بس لمدة الاستعلام.</p>
        `,
        code: `-- Column alias
SELECT name AS student_name, age AS student_age FROM students;

-- Table alias (useful in JOINs)
SELECT s.name, c.course_name
FROM students AS s
JOIN enrollments AS e ON s.id = e.student_id
JOIN courses AS c ON e.course_id = c.id;

-- Without AS keyword (also works)
SELECT name student_name FROM students;`,
        codeExplanationAr: [
            { line: 2, text: 'AS: اسم مستعار للأعمدة' },
            { line: 5, text: 'أسماء مستعارة للجداول في JOIN' },
        ],
        taNotes: 'Aliases are especially useful with calculated columns and self-joins.',
    },
    // ===================== MYSQL JOINS =====================
    {
        id: 'joins',
        title: 'MySQL Joins',
        icon: 'fas fa-link',
        description: 'Combine rows from two or more tables based on a related column.',
        videoUrl: YOUTUBE_URL('G3lJAxg1cy8'),
        learningObjectives: [
            'Understand why we need JOINs',
            'Different types of JOINs',
            'How JOINs work',
        ],
        explanation: `
            <p>A <strong>JOIN</strong> clause is used to combine rows from two or more tables, based on a related column between them. JOINs are essential for working with relational databases.</p>
            <h4>Types of MySQL JOINs:</h4>
            <ul class="key-points">
                <li><strong>INNER JOIN:</strong> Returns records with matching values in both tables</li>
                <li><strong>LEFT JOIN:</strong> Returns all records from left table, and matched from right</li>
                <li><strong>RIGHT JOIN:</strong> Returns all records from right table, and matched from left</li>
                <li><strong>CROSS JOIN:</strong> Returns all possible combinations</li>
                <li><strong>SELF JOIN:</strong> Joins a table with itself</li>
            </ul>
        `,
        explanationAr: `
            <p>جملة <strong>JOIN</strong> بتستخدم عشان تجمع صفوف من جدولين أو أكتر، بناءً على عمود مشترك بينهم. الـ JOINs أساسية في قواعد البيانات العلائقية.</p>
            <h5>أنواع JOINs في MySQL:</h5>
            <ul class="key-points">
                <li><strong>INNER JOIN:</strong> بيرجع السجلات المتطابقة في الجدولين</li>
                <li><strong>LEFT JOIN:</strong> كل سجلات الجدول الأيسر والمتطابقة من اليمين</li>
                <li><strong>RIGHT JOIN:</strong> كل سجلات الجدول الأيمن والمتطابقة من اليسار</li>
                <li><strong>CROSS JOIN:</strong> كل التوائف الممكنة</li>
                <li><strong>SELF JOIN:</strong> بيجمع الجدول مع نفسه</li>
            </ul>
        `,
        code: `-- Basic JOIN syntax
SELECT orders.order_id, customers.name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;

-- Without INNER keyword (same result)
SELECT orders.order_id, customers.name
FROM orders
JOIN customers ON orders.customer_id = customers.id;`,
        codeExplanationAr: [
            { line: 2, text: 'JOIN بين orders و customers' },
            { line: 3, text: 'ON: شرط الربط' },
        ],
        taNotes: 'Draw Venn diagrams to explain different JOIN types. This is crucial for understanding relational databases.',
    },
    {
        id: 'inner-join',
        title: 'MySQL INNER JOIN',
        icon: 'fas fa-intersection',
        description: 'Select records with matching values in both tables.',
        videoUrl: YOUTUBE_URL('G3lJAxg1cy8'),
        learningObjectives: [
            'Use INNER JOIN to get matching records',
            'Join multiple tables',
            'Use table aliases with JOINs',
        ],
        explanation: `
            <p>The <strong>INNER JOIN</strong> keyword selects records that have matching values in both tables. It returns only the rows where there is a match in both tables.</p>
        `,
        explanationAr: `
            <p>كلمة <strong>INNER JOIN</strong> بيختار السجلات اللي فيها قيم متطابقة في الجدولين. بيرجع بس الصفوف اللي فيها تطابق في الجدولين.</p>
        `,
        code: `-- Students and their enrollments
SELECT students.name, courses.course_name
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.id;

-- Using aliases
SELECT s.name, c.course_name
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c ON e.course_id = c.id;`,
        codeExplanationAr: [
            { line: 2, text: 'INNER JOIN: الطلاب والتسجيلات' },
            { line: 6, text: 'أسماء مستعارة للجداول' },
        ],
        taNotes: 'INNER JOIN is the most common type of JOIN. If there is no match, the row is not returned.',
    },
    {
        id: 'left-join',
        title: 'MySQL LEFT JOIN',
        icon: 'fas fa-arrow-left',
        description: 'Return all records from the left table, and matched records from the right.',
        videoUrl: YOUTUBE_URL('G3lJAxg1cy8'),
        learningObjectives: [
            'Use LEFT JOIN',
            'Understand NULL results',
            'Find orphaned records',
        ],
        explanation: `
            <p>The <strong>LEFT JOIN</strong> keyword returns all records from the left table (table1), and the matched records from the right table (table2). The result is NULL from the right side, if there is no match.</p>
        `,
        explanationAr: `
            <p>كلمة <strong>LEFT JOIN</strong> بترجع كل السجلات من الجدول الأيسر، والسجلات المتطابقة من اليمين. لو مفيش تطابق، بيرجع NULL من الجهة اليمين.</p>
        `,
        code: `-- All students and their courses (including students with no courses)
SELECT s.name, c.course_name
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
LEFT JOIN courses c ON e.course_id = c.id;

-- Find students with no enrollments
SELECT s.name
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
WHERE e.student_id IS NULL;`,
        codeExplanationAr: [
            { line: 2, text: 'LEFT JOIN: كل الطلاب حتى اللي مش مسجلين' },
            { line: 8, text: 'WHERE IS NULL: الطلاب اللي مش مسجلين في حاجة' },
        ],
        taNotes: 'LEFT JOIN is useful for finding missing relationships or orphaned records.',
    },
    {
        id: 'right-join',
        title: 'MySQL RIGHT JOIN',
        icon: 'fas fa-arrow-right',
        description: 'Return all records from the right table, and matched records from the left.',
        videoUrl: YOUTUBE_URL('G3lJAxg1cy8'),
        learningObjectives: [
            'Use RIGHT JOIN',
            'Understand when to use RIGHT vs LEFT',
        ],
        explanation: `
            <p>The <strong>RIGHT JOIN</strong> keyword returns all records from the right table (table2), and the matched records from the left table (table1). The result is NULL from the left side, when there is no match.</p>
        `,
        explanationAr: `
            <p>كلمة <strong>RIGHT JOIN</strong> بترجع كل السجلات من الجدول الأيمن، والسجلات المتطابقة من الشمال. لو مفيش تطابق، بيرجع NULL من الجهة الشمال.</p>
        `,
        code: `-- All courses and enrolled students
SELECT c.course_name, s.name AS student_name
FROM students s
RIGHT JOIN enrollments e ON s.id = e.student_id
RIGHT JOIN courses c ON e.course_id = c.id;

-- Note: RIGHT JOIN is less common. Most people use LEFT JOIN instead.`,
        codeExplanationAr: [
            { line: 2, text: 'RIGHT JOIN: كل المواد والطلاب المسجلين' },
            { line: 7, text: 'RIGHT JOIN أقل استخداماً، الناس بيستخدموا LEFT JOIN أكتر' },
        ],
        taNotes: 'RIGHT JOIN is rarely used because you can always swap table order and use LEFT JOIN.',
    },
    {
        id: 'cross-join',
        title: 'MySQL CROSS JOIN',
        icon: 'fas fa-arrows-cross',
        description: 'Return all records from both tables (Cartesian product).',
        videoUrl: YOUTUBE_URL('G3lJAxg1cy8'),
        learningObjectives: [
            'Understand CROSS JOIN',
            'Know when to use it',
            'Avoid accidental CROSS JOINs',
        ],
        explanation: `
            <p>The <strong>CROSS JOIN</strong> keyword returns all records from both tables (table1 and table2). It produces the Cartesian product of both tables.</p>
            <p class="text-warning"><strong>Warning:</strong> CROSS JOIN can produce very large result sets because it returns all possible combinations!</p>
        `,
        explanationAr: `
            <p>كلمة <strong>CROSS JOIN</strong> بترجع كل السجلات من الجدولين. بتنتج حاصل الضرب الديكارتي للجدولين.</p>
            <p style="color: var(--warning);"><strong>تحذير:</strong> CROSS JOIN ممكن ينتج نتائج ضخمة جداً لأنه بيرجع كل التوائف الممكنة!</p>
        `,
        code: `-- All combinations of students and courses
SELECT s.name, c.course_name
FROM students s
CROSS JOIN courses c;

-- If 100 students and 10 courses = 1000 rows!
-- Use with caution`,
        codeExplanationAr: [
            { line: 2, text: 'CROSS JOIN: كل التوائف' },
            { line: 6, text: '100 طالب × 10 مواد = 1000 صف' },
        ],
        taNotes: 'CROSS JOIN is rarely needed in practice. Most accidental CROSS JOINs happen when forgetting the ON clause.',
    },
    {
        id: 'self-join',
        title: 'MySQL Self Join',
        icon: 'fas fa-rotate',
        description: 'Join a table with itself.',
        videoUrl: YOUTUBE_URL('af4LckivJT8'),
        learningObjectives: [
            'Understand self-join concept',
            'Use table aliases',
            'Practical examples of self-join',
        ],
        explanation: `
            <p>A <strong>self join</strong> is a regular join, but the table is joined with itself. You must use table aliases to distinguish between the two instances of the table.</p>
        `,
        explanationAr: `
            <p>الـ <strong>Self Join</strong> هو JOIN عادي، بس الجدول بيتجمع مع نفسه. لازم تستخدم أسماء مستعارة عشان تميز بين النسختين من الجدول.</p>
        `,
        code: `-- Employees and their managers
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

-- Students in the same major
SELECT a.name AS student1, b.name AS student2, a.major
FROM students a
JOIN students b ON a.major = b.major AND a.id < b.id;`,
        codeExplanationAr: [
            { line: 2, text: 'Self Join: الموظفين والمدراء' },
            { line: 7, text: 'طلاب في نفس التخصص' },
        ],
        taNotes: 'Self joins are common in hierarchical data (org charts, categories with subcategories).',
    },
    {
        id: 'union',
        title: 'MySQL UNION',
        icon: 'fas fa-layer-group',
        description: 'Combine result sets from two or more SELECT statements.',
        videoUrl: YOUTUBE_URL('su-fxrvKTCk'),
        learningObjectives: [
            'Use UNION to combine results',
            'Understand UNION vs UNION ALL',
            'Ensure compatible columns',
        ],
        explanation: `
            <p>The <strong>UNION</strong> operator is used to combine the result-set of two or more SELECT statements. Each SELECT statement must have the same number of columns, with similar data types, and in the same order.</p>
            <ul class="key-points">
                <li><strong>UNION:</strong> Returns only distinct values</li>
                <li><strong>UNION ALL:</strong> Returns all values (including duplicates)</li>
            </ul>
        `,
        explanationAr: `
            <p>عامل <strong>UNION</strong> بيستخدم عشان يجمع نتيجة من SELECT اتنين أو أكتر. كل SELECT لازم يكون نفس عدد الأعمدة، وأنواع بيانات متشابهة، وبنفس الترتيب.</p>
            <ul class="key-points">
                <li><strong>UNION:</strong> بيرجع القيم المختلفة بس</li>
                <li><strong>UNION ALL:</strong> بيرجع كل القيم (مع التكرار)</li>
            </ul>
        `,
        code: `-- Combine lists from two tables
SELECT name, email FROM customers
UNION
SELECT name, email FROM suppliers;

-- UNION ALL (keeps duplicates)
SELECT city FROM customers
UNION ALL
SELECT city FROM suppliers
ORDER BY city;`,
        codeExplanationAr: [
            { line: 2, text: 'UNION: جمع النتائج من جدولين' },
            { line: 7, text: 'UNION ALL: مع التكرار' },
        ],
        taNotes: 'UNION ALL is faster than UNION because it does not need to remove duplicates.',
    },
    {
        id: 'group-by',
        title: 'MySQL GROUP BY',
        icon: 'fas fa-object-group',
        description: 'Group rows that have the same values into summary rows.',
        videoUrl: YOUTUBE_URL('su-fxrvKTCk'),
        learningObjectives: [
            'Use GROUP BY to aggregate data',
            'Combine with aggregate functions',
            'Group by multiple columns',
        ],
        explanation: `
            <p>The <strong>GROUP BY</strong> statement groups rows that have the same values into summary rows, like "find the number of customers in each country". It is often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns.</p>
        `,
        explanationAr: `
            <p>جملة <strong>GROUP BY</strong> بتجمع الصفوف اللي ليها نفس القيم في صفوف ملخصة. بتستخدم كتير مع دوال التجميع (COUNT, MAX, MIN, SUM, AVG) عشان نجمع النتيجة حسب عمود أو أكتر.</p>
        `,
        code: `-- Count students per major
SELECT major, COUNT(*) AS student_count
FROM students
GROUP BY major;

-- Average GPA per major
SELECT major, AVG(gpa) AS avg_gpa, MAX(gpa) AS max_gpa
FROM students
GROUP BY major
ORDER BY avg_gpa DESC;`,
        codeExplanationAr: [
            { line: 2, text: 'GROUP BY: عدد الطلاب في كل تخصص' },
            { line: 8, text: 'متوسط وأعلى GPA لكل تخصص' },
        ],
        taNotes: 'Any column in SELECT that is not an aggregate function must be in GROUP BY.',
    },
    {
        id: 'having',
        title: 'MySQL HAVING',
        icon: 'fas fa-filter',
        description: 'Filter grouped results (used after GROUP BY).',
        videoUrl: YOUTUBE_URL('su-fxrvKTCk'),
        learningObjectives: [
            'Use HAVING to filter groups',
            'Understand HAVING vs WHERE',
            'Combine with aggregate functions',
        ],
        explanation: `
            <p>The <strong>HAVING</strong> clause was added to SQL because the WHERE keyword could not be used with aggregate functions. HAVING filters groups after they have been created, while WHERE filters rows before grouping.</p>
        `,
        explanationAr: `
            <p>جملة <strong>HAVING</strong> اتضافت للـ SQL عشان WHERE مقدرش يستخدم مع دوال التجميع. HAVING بيفلتر المجموعات بعد ما تتكون، بينما WHERE بيفلتر الصفوف قبل التجميع.</p>
        `,
        code: `-- Majors with more than 5 students
SELECT major, COUNT(*) AS student_count
FROM students
GROUP BY major
HAVING COUNT(*) > 5;

-- WHERE vs HAVING
SELECT major, AVG(gpa) AS avg_gpa
FROM students
WHERE age > 18          -- Filter rows before grouping
GROUP BY major
HAVING AVG(gpa) > 3.0;  -- Filter groups after grouping`,
        codeExplanationAr: [
            { line: 5, text: 'HAVING: التخصصات اللي فيها أكتر من 5 طلاب' },
            { line: 12, text: 'WHERE: قبل التجميع | HAVING: بعد التجميع' },
        ],
        taNotes: 'WHERE filters rows; HAVING filters groups. WHERE executes before GROUP BY, HAVING executes after.',
    },
    {
        id: 'exists',
        title: 'MySQL EXISTS',
        icon: 'fas fa-check-circle',
        description: 'Test for existence of rows in a subquery.',
        videoUrl: YOUTUBE_URL('su-fxrvKTCk'),
        learningObjectives: [
            'Use EXISTS with subqueries',
            'Use NOT EXISTS',
            'Compare with IN',
        ],
        explanation: `
            <p>The <strong>EXISTS</strong> operator is used to test for the existence of any record in a subquery. It returns TRUE if the subquery returns one or more records. EXISTS is often more efficient than IN for large datasets.</p>
        `,
        explanationAr: `
            <p>عامل <strong>EXISTS</strong> بيستخدم عشان نختبر وجود أي سجل في subquery. بيرجع TRUE لو الـ subquery رجع سجل واحد أو أكتر. EXISTS أحياناً أسرع من IN في البيانات الكبيرة.</p>
        `,
        code: `-- Students who have enrollments
SELECT name FROM students s
WHERE EXISTS (SELECT 1 FROM enrollments e WHERE e.student_id = s.id);

-- Students with no enrollments
SELECT name FROM students s
WHERE NOT EXISTS (SELECT 1 FROM enrollments e WHERE e.student_id = s.id);`,
        codeExplanationAr: [
            { line: 2, text: 'EXISTS: الطلاب اللي عندهم تسجيلات' },
            { line: 6, text: 'NOT EXISTS: الطلاب اللي مفيهمش تسجيلات' },
        ],
        taNotes: 'EXISTS stops at the first match found, making it potentially faster than IN for large tables.',
    },
    // ===================== MYSQL DATABASE =====================
    {
        id: 'create-db',
        title: 'MySQL Create Database',
        icon: 'fas fa-database',
        description: 'Create a new database.',
        videoUrl: YOUTUBE_URL('-BoTia1gtqA'),
        learningObjectives: [
            'Create a database with CREATE DATABASE',
            'Use IF NOT EXISTS',
            'Select a database with USE',
        ],
        explanation: `
            <p>The <strong>CREATE DATABASE</strong> statement is used to create a new SQL database.</p>
        `,
        explanationAr: `
            <p>أمر <strong>CREATE DATABASE</strong> بيستخدم عشان نعمل قاعدة بيانات جديدة.</p>
        `,
        code: `-- Create a new database
CREATE DATABASE university_db;

-- Create only if it doesn't exist
CREATE DATABASE IF NOT EXISTS university_db;

-- Select database to use
USE university_db;

-- Show all databases
SHOW DATABASES;`,
        codeExplanationAr: [
            { line: 2, text: 'CREATE DATABASE: عمل قاعدة بيانات' },
            { line: 5, text: 'IF NOT EXISTS: لو مش موجودة' },
            { line: 8, text: 'USE: اختيار قاعدة البيانات' },
        ],
        taNotes: 'Database names should be descriptive and follow naming conventions.',
    },
    {
        id: 'drop-db',
        title: 'MySQL Drop Database',
        icon: 'fas fa-trash',
        description: 'Delete an existing database.',
        videoUrl: YOUTUBE_URL('-BoTia1gtqA'),
        learningObjectives: [
            'Delete a database with DROP DATABASE',
            'Use IF EXISTS',
            'Understand the dangers',
        ],
        explanation: `
            <p>The <strong>DROP DATABASE</strong> statement is used to drop an existing SQL database. This will delete all tables and data permanently!</p>
            <p class="text-error"><strong>DANGER:</strong> This operation cannot be undone!</p>
        `,
        explanationAr: `
            <p>أمر <strong>DROP DATABASE</strong> بيستخدم عشان نمسح قاعدة بيانات. هيمسح كل الجداول والبيانات نهائياً!</p>
            <p style="color: var(--error);"><strong>خطر:</strong> العملية دي مش هتتراجع!</p>
        `,
        code: `-- Drop a database
DROP DATABASE old_database;

-- Drop only if it exists
DROP DATABASE IF EXISTS old_database;

-- WARNING: This deletes everything in the database!
-- Make sure you have backups before dropping.`,
        codeExplanationAr: [
            { line: 2, text: 'DROP DATABASE: مسح قاعدة البيانات' },
            { line: 5, text: 'IF EXISTS: لو موجودة بس' },
        ],
        taNotes: 'Always backup before dropping. This is permanent and irreversible.',
    },
    {
        id: 'create-table',
        title: 'MySQL Create Table',
        icon: 'fas fa-table',
        description: 'Create a new table in the database.',
        videoUrl: YOUTUBE_URL('-BoTia1gtqA'),
        learningObjectives: [
            'Create tables with CREATE TABLE',
            'Define columns with data types',
            'Add constraints',
        ],
        explanation: `
            <p>The <strong>CREATE TABLE</strong> statement is used to create a new table in a database. You define column names, data types, and constraints.</p>
        `,
        explanationAr: `
            <p>أمر <strong>CREATE TABLE</strong> بيستخدم عشان نعمل جدول جديد في قاعدة البيانات. بتحدد أسماء الأعمدة، أنواع البيانات، والقيود.</p>
        `,
        code: `-- Create a simple table
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT,
    enrollment_date DATE DEFAULT CURRENT_DATE
);

-- Show table structure
DESCRIBE students;`,
        codeExplanationAr: [
            { line: 2, text: 'CREATE TABLE: عمل جدول' },
            { line: 3, text: 'AUTO_INCREMENT PRIMARY KEY: مفتاح أساسي متزايد' },
            { line: 4, text: 'VARCHAR: نص متغير الطول' },
            { line: 5, text: 'UNIQUE: مفيش قيمتين زي بعض' },
            { line: 7, text: 'DEFAULT: قيمة افتراضية' },
        ],
        taNotes: 'Choose appropriate data types and sizes to optimize storage and performance.',
    },
    {
        id: 'drop-table',
        title: 'MySQL Drop Table',
        icon: 'fas fa-trash',
        description: 'Delete an existing table.',
        videoUrl: YOUTUBE_URL('-BoTia1gtqA'),
        learningObjectives: [
            'Delete tables with DROP TABLE',
            'Use IF EXISTS',
            'Understand the risks',
        ],
        explanation: `
            <p>The <strong>DROP TABLE</strong> statement is used to drop an existing table in a database. This deletes the table structure and all its data permanently.</p>
        `,
        explanationAr: `
            <p>أمر <strong>DROP TABLE</strong> بيستخدم عشان نمسح جدول موجود في قاعدة البيانات. بيمسح هيكل الجدول وكل بياناته نهائياً.</p>
        `,
        code: `-- Drop a table
DROP TABLE old_students;

-- Drop only if it exists
DROP TABLE IF EXISTS old_students;

-- Drop multiple tables
DROP TABLE IF EXISTS table1, table2, table3;`,
        codeExplanationAr: [
            { line: 2, text: 'DROP TABLE: مسح الجدول' },
            { line: 5, text: 'IF EXISTS: لو موجود بس' },
        ],
        taNotes: 'Consider using TRUNCATE if you only want to delete data but keep the table structure.',
    },
    {
        id: 'alter-table',
        title: 'MySQL Alter Table',
        icon: 'fas fa-pen',
        description: 'Add, delete, or modify columns in an existing table.',
        videoUrl: YOUTUBE_URL('igfw6iv34eQ'),
        learningObjectives: [
            'Add columns with ALTER TABLE',
            'Modify existing columns',
            'Drop columns',
        ],
        explanation: `
            <p>The <strong>ALTER TABLE</strong> statement is used to add, delete, or modify columns in an existing table. It is also used to add and drop various constraints on an existing table.</p>
        `,
        explanationAr: `
            <p>أمر <strong>ALTER TABLE</strong> بيستخدم عشان نضيف، نمسح، أو نعدّل أعمدة في جدول موجود. كمان بنستخدمه عشان نضيف أو نمسح قيود على الجدول.</p>
        `,
        code: `-- Add a column
ALTER TABLE students ADD phone VARCHAR(20);

-- Add column with specific position
ALTER TABLE students ADD middle_name VARCHAR(50) AFTER first_name;

-- Modify column
ALTER TABLE students MODIFY phone VARCHAR(25);

-- Drop a column
ALTER TABLE students DROP COLUMN phone;

-- Rename column (MySQL 8.0+)
ALTER TABLE students RENAME COLUMN phone TO phone_number;`,
        codeExplanationAr: [
            { line: 2, text: 'ADD: إضافة عمود' },
            { line: 5, text: 'AFTER: تحديد موقع العمود' },
            { line: 8, text: 'MODIFY: تعديل نوع العمود' },
            { line: 11, text: 'DROP COLUMN: مسح عمود' },
            { line: 14, text: 'RENAME COLUMN: تغيير اسم العمود' },
        ],
        taNotes: 'ALTER TABLE can be slow on large tables as it may need to rebuild the entire table.',
    },
    {
        id: 'constraints',
        title: 'MySQL Constraints',
        icon: 'fas fa-lock',
        description: 'Rules enforced on data columns.',
        videoUrl: YOUTUBE_URL('5kiMg7GXAsY'),
        learningObjectives: [
            'Understand SQL constraints',
            'Types of constraints',
            'When to use each constraint',
        ],
        explanation: `
            <p>Constraints are used to specify rules for the data in a table. If there is any violation between the constraint and the data action, the action is aborted. Constraints can be specified when the table is created with the CREATE TABLE statement, or after the table is created with the ALTER TABLE statement.</p>
            <h4>Common Constraints:</h4>
            <ul class="key-points">
                <li><strong>NOT NULL:</strong> Column cannot have NULL values</li>
                <li><strong>UNIQUE:</strong> All values must be different</li>
                <li><strong>PRIMARY KEY:</strong> Unique + Not Null</li>
                <li><strong>FOREIGN KEY:</strong> Links to another table</li>
                <li><strong>CHECK:</strong> Must satisfy a condition</li>
                <li><strong>DEFAULT:</strong> Default value if none specified</li>
            </ul>
        `,
        explanationAr: `
            <p>الـ Constraints بيحددوا قواعد للبيانات في الجدول. لو فيه أي مخالفة بين القيد والعملية، العملية بتتوقف. ممكن نضيفها وقت إنشاء الجدول أو بعده.</p>
            <h5>القيود الشائعة:</h5>
            <ul class="key-points">
                <li><strong>NOT NULL:</strong> العمود مينفعش يكون NULL</li>
                <li><strong>UNIQUE:</strong> كل القيم لازم تكون مختلفة</li>
                <li><strong>PRIMARY KEY:</strong> فريد + مش NULL</li>
                <li><strong>FOREIGN KEY:</strong> بيربط بجدول تاني</li>
                <li><strong>CHECK:</strong> لازم يحقق شرط</li>
                <li><strong>DEFAULT:</strong> قيمة افتراضية</li>
            </ul>
        `,
        code: `-- Table with multiple constraints
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT CHECK (age >= 18),
    salary DECIMAL(10,2) DEFAULT 0.00,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);`,
        codeExplanationAr: [
            { line: 3, text: 'PRIMARY KEY AUTO_INCREMENT: مفتاح أساسي متزايد' },
            { line: 4, text: 'UNIQUE NOT NULL: فريد وإجباري' },
            { line: 5, text: 'CHECK: العمر لازم يكون 18 أو أكتر' },
            { line: 6, text: 'DEFAULT: قيمة افتراضية' },
            { line: 8, text: 'FOREIGN KEY: ربط بجدول الأقسام' },
        ],
        taNotes: 'Constraints ensure data integrity at the database level.',
    },
    {
        id: 'not-null',
        title: 'MySQL NOT NULL',
        icon: 'fas fa-ban',
        description: 'Ensure a column cannot have NULL values.',
        videoUrl: YOUTUBE_URL('5kiMg7GXAsY'),
        learningObjectives: [
            'Use NOT NULL constraint',
            'Add NOT NULL to existing column',
            'Remove NOT NULL',
        ],
        explanation: `
            <p>By default, a column can hold NULL values. The <strong>NOT NULL</strong> constraint enforces a column to NOT accept NULL values. This forces a field to always contain a value, which means you cannot insert a new record or update a record without adding a value to this field.</p>
        `,
        explanationAr: `
            <p>افتراضياً، العمود ممكن يحمل قيم NULL. قيد <strong>NOT NULL</strong> بيأكد إن العمود مش بيقبل NULL. ده بيأكد إن الحقل دايماً فيه قيمة، يعني مينفعش تضيف سجل جديد أو تعدّل سجل من غير ما تحط قيمة في الحقل ده.</p>
        `,
        code: `-- NOT NULL in CREATE TABLE
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20)  -- This can be NULL
);

-- Add NOT NULL to existing column
ALTER TABLE students MODIFY email VARCHAR(100) NOT NULL;

-- Remove NOT NULL
ALTER TABLE students MODIFY email VARCHAR(100);`,
        codeExplanationAr: [
            { line: 4, text: 'NOT NULL: الإسم والإيميل إجباريين' },
            { line: 5, text: 'التليفون اختياري (ممكن NULL)' },
            { line: 11, text: 'إزالة NOT NULL من عمود' },
        ],
        taNotes: 'Use NOT NULL for required fields like names, emails, or IDs.',
    },
    {
        id: 'unique',
        title: 'MySQL UNIQUE',
        icon: 'fas fa-fingerprint',
        description: 'Ensure all values in a column are different.',
        videoUrl: YOUTUBE_URL('5kiMg7GXAsY'),
        learningObjectives: [
            'Use UNIQUE constraint',
            'UNIQUE on multiple columns',
            'Difference from PRIMARY KEY',
        ],
        explanation: `
            <p>The <strong>UNIQUE</strong> constraint ensures that all values in a column are different. Both the UNIQUE and PRIMARY KEY constraints provide a guarantee for uniqueness for a column or set of columns. A PRIMARY KEY constraint automatically has a UNIQUE constraint.</p>
            <p><strong>Key differences:</strong></p>
            <ul class="key-points">
                <li>A table can have many UNIQUE constraints, but only one PRIMARY KEY</li>
                <li>UNIQUE allows NULL values (usually one NULL), PRIMARY KEY does not</li>
            </ul>
        `,
        explanationAr: `
            <p>قيد <strong>UNIQUE</strong> بيأكد إن كل القيم في العمود مختلفة. UNIQUE و PRIMARY KEY بيضمنوا التفرّد للعمود. PRIMARY KEY تلقائياً بيكون UNIQUE.</p>
            <p><strong>الاختلافات:</strong></p>
            <ul class="key-points">
                <li>الجدول ممكن يكون عنده UNIQUE كتير، بس PRIMARY KEY واحد بس</li>
                <li>UNIQUE بيسمح بـ NULL (عادة NULL واحد)، PRIMARY KEY لا</li>
            </ul>
        `,
        code: `-- UNIQUE constraint
CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20)
);

-- UNIQUE on multiple columns
CREATE TABLE products (
    id INT PRIMARY KEY,
    brand VARCHAR(50),
    model VARCHAR(50),
    UNIQUE (brand, model)  -- Combination must be unique
);`,
        codeExplanationAr: [
            { line: 4, text: 'UNIQUE: مفيش usernameين زي بعض' },
            { line: 5, text: 'UNIQUE: مفيش emailين زي بعض' },
            { line: 13, text: 'UNIQUE على أكتر من عمود: المجموعة لازم تكون فريدة' },
        ],
        taNotes: 'Use UNIQUE for fields that should not have duplicates like emails, usernames, or serial numbers.',
    },
    {
        id: 'primary-key',
        title: 'MySQL Primary Key',
        icon: 'fas fa-key',
        description: 'Uniquely identifies each record in a table.',
        videoUrl: YOUTUBE_URL('5kiMg7GXAsY'),
        learningObjectives: [
            'Understand PRIMARY KEY',
            'Create single and composite keys',
            'AUTO_INCREMENT with PRIMARY KEY',
        ],
        explanation: `
            <p>The <strong>PRIMARY KEY</strong> constraint uniquely identifies each record in a table. Primary keys must contain UNIQUE values and cannot contain NULL values. A table can have only ONE primary key, which may consist of single or multiple fields.</p>
        `,
        explanationAr: `
            <p>قيد <strong>PRIMARY KEY</strong> بيعرّف كل سجل في الجدول بشكل فريد. المفاتيح الأساسية لازم تحتوي على قيم فريدة ومش NULL. الجدول مينفعش يكون عنده أكتر من PRIMARY KEY واحد، واللي ممكن يكون عمود واحد أو أكتر.</p>
        `,
        code: `-- Single column primary key
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);

-- Composite primary key (multiple columns)
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id)
);`,
        codeExplanationAr: [
            { line: 3, text: 'PRIMARY KEY AUTO_INCREMENT: مفتاح أساسي متزايد' },
            { line: 10, text: 'PRIMARY KEY على أكتر من عمود: مفتاح مركب' },
        ],
        taNotes: 'Every table should have a primary key. AUTO_INCREMENT is commonly used with integer primary keys.',
    },
    {
        id: 'foreign-key',
        title: 'MySQL Foreign Key',
        icon: 'fas fa-link',
        description: 'Link two tables together.',
        videoUrl: YOUTUBE_URL('5kiMg7GXAsY'),
        learningObjectives: [
            'Create FOREIGN KEY constraints',
            'Understand referential integrity',
            'Use ON DELETE and ON UPDATE',
        ],
        explanation: `
            <p>A <strong>FOREIGN KEY</strong> is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table. The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table.</p>
        `,
        explanationAr: `
            <p>الـ <strong>FOREIGN KEY</strong> هو حقل (أو مجموعة حقول) في جدول، بيشاور على PRIMARY KEY في جدول تاني. الجدول اللي فيه foreign key اسمه جدول child، والجدول اللي فيه primary key اسمه referenced أو parent.</p>
        `,
        code: `-- Parent table
CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

-- Child table with foreign key
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- Add foreign key to existing table
ALTER TABLE employees
ADD CONSTRAINT fk_dept
FOREIGN KEY (department_id) REFERENCES departments(id);`,
        codeExplanationAr: [
            { line: 9, text: 'FOREIGN KEY: ربط بجدول departments' },
            { line: 10, text: 'ON DELETE SET NULL: لو الجدول الرئيسي اتمسح، خلّي NULL' },
            { line: 11, text: 'ON UPDATE CASCADE: لو اتعدّل في الرئيسي، عدّل هنا' },
        ],
        taNotes: 'ON DELETE options: CASCADE (delete child), SET NULL, RESTRICT (prevent deletion), NO ACTION.',
    },
    {
        id: 'check',
        title: 'MySQL Check',
        icon: 'fas fa-check-square',
        description: 'Ensure all values satisfy a specific condition.',
        videoUrl: YOUTUBE_URL('5kiMg7GXAsY'),
        learningObjectives: [
            'Use CHECK constraint',
            'Add multiple CHECK constraints',
            'Naming CHECK constraints',
        ],
        explanation: `
            <p>The <strong>CHECK</strong> constraint is used to limit the value range that can be placed in a column. If you define a CHECK constraint on a column it will allow only certain values for this column.</p>
        `,
        explanationAr: `
            <p>قيد <strong>CHECK</strong> بيستخدم عشان نحدد نطاق القيم اللي ممكن تتحط في العمود. لو عرّفت CHECK على عمود، هيسمح بس بقيم معينة.</p>
        `,
        code: `-- CHECK constraint
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT CHECK (age >= 18),
    gpa DECIMAL(3,2) CHECK (gpa >= 0 AND gpa <= 4.0),
    email VARCHAR(100)
);

-- Named CHECK constraint
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2),
    quantity INT,
    CONSTRAINT chk_price CHECK (price > 0),
    CONSTRAINT chk_qty CHECK (quantity >= 0)
);`,
        codeExplanationAr: [
            { line: 5, text: 'CHECK: العمر لازم يكون 18 أو أكتر' },
            { line: 6, text: 'CHECK: GPA بين 0 و 4' },
            { line: 15, text: 'CONSTRAINT: تسمية القيد' },
        ],
        taNotes: 'CHECK constraints enforce business rules at the database level.',
    },
    {
        id: 'default',
        title: 'MySQL Default',
        icon: 'fas fa-cog',
        description: 'Set a default value for a column.',
        videoUrl: YOUTUBE_URL('su-fxrvKTCk'),
        learningObjectives: [
            'Use DEFAULT constraint',
            'Common default values',
            'Add DEFAULT to existing column',
        ],
        explanation: `
            <p>The <strong>DEFAULT</strong> constraint is used to set a default value for a column. The default value will be added to all new records if no other value is specified.</p>
        `,
        explanationAr: `
            <p>قيد <strong>DEFAULT</strong> بيستخدم عشان نحط قيمة افتراضية للعمود. القيمة الافتراضية هتتضاف لكل السجلات الجديدة لو مفيش قيمة تانية محددة.</p>
        `,
        code: `-- DEFAULT values
CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'Pending',
    total DECIMAL(10,2) DEFAULT 0.00
);

-- Add DEFAULT to existing column
ALTER TABLE orders
ALTER COLUMN status SET DEFAULT 'Processing';`,
        codeExplanationAr: [
            { line: 5, text: 'DEFAULT CURRENT_TIMESTAMP: الوقت الحالي' },
            { line: 6, text: 'DEFAULT: حالة افتراضية' },
            { line: 12, text: 'إضافة DEFAULT لعمود موجود' },
        ],
        taNotes: 'Useful for timestamps, status fields, and boolean flags.',
    },
    {
        id: 'create-index',
        title: 'MySQL Create Index',
        icon: 'fas fa-bolt',
        description: 'Create indexes to speed up searches.',
        videoUrl: YOUTUBE_URL('BIlFTFrEFOI'),
        learningObjectives: [
            'Create indexes with CREATE INDEX',
            'Understand when to use indexes',
            'Types of indexes',
        ],
        explanation: `
            <p>The <strong>CREATE INDEX</strong> statement is used to create indexes in tables. Indexes are used to retrieve data from the database more quickly than otherwise. The users cannot see the indexes, they are just used to speed up searches/queries.</p>
            <p class="text-warning"><strong>Note:</strong> Updating a table with indexes takes more time than updating a table without (because the indexes also need an update). So, only create indexes on columns that will be frequently searched against.</p>
        `,
        explanationAr: `
            <p>أمر <strong>CREATE INDEX</strong> بيستخدم عشان نعمل indexes في الجداول. الـ Indexes بيستخدموا عشان نجيب البيانات من قاعدة البيانات بسرعة أكتر. المستخدمين مش بيشوفوا الـ indexes، هم بس بيستخدموا عشان يسرّعوا البحث.</p>
            <p style="color: var(--warning);"><strong>ملاحظة:</strong> تحديث جدول فيه indexes بياخد وقت أكتر من جدول من غير indexes (عشان الـ indexes كمان محتاجة تحديث). فعمل indexes بس على الأعمدة اللي هيتبحث فيها كتير.</p>
        `,
        code: `-- Create simple index
CREATE INDEX idx_email ON customers(email);

-- Create unique index
CREATE UNIQUE INDEX idx_username ON users(username);

-- Composite index (multiple columns)
CREATE INDEX idx_name_age ON employees(last_name, first_name, age);

-- Drop index
DROP INDEX idx_email ON customers;`,
        codeExplanationAr: [
            { line: 2, text: 'CREATE INDEX: إنشاء Index على الإيميل' },
            { line: 5, text: 'UNIQUE INDEX: Index فريد' },
            { line: 8, text: 'Composite Index: على أكتر من عمود' },
        ],
        taNotes: 'Indexes speed up SELECT but slow down INSERT, UPDATE, DELETE. Use them wisely.',
    },
    {
        id: 'auto-increment',
        title: 'MySQL Auto Increment',
        icon: 'fas fa-arrow-up',
        description: 'Automatically generate unique numbers.',
        videoUrl: YOUTUBE_URL('BIlFTFrEFOI'),
        learningObjectives: [
            'Use AUTO_INCREMENT',
            'Set starting value',
            'Understand how it works',
        ],
        explanation: `
            <p><strong>AUTO_INCREMENT</strong> allows a unique number to be generated automatically when a new record is inserted into a table. This is the primary key field that we would like to be created automatically every time a new record is inserted.</p>
        `,
        explanationAr: `
            <p>الـ <strong>AUTO_INCREMENT</strong> بيسمح بإنشاء رقم فريد تلقائياً لما نضيف سجل جديد للجدول. ده المفتاح الأساسي اللي عايزينه يتعمل تلقائياً كل مرة نضيف سجل جديد.</p>
        `,
        code: `-- Auto increment
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

-- Set starting value
ALTER TABLE users AUTO_INCREMENT = 1000;

-- Insert without specifying ID
INSERT INTO users (name, email) VALUES ('Ahmed', 'ahmed@test.com');
-- ID will be 1000 automatically`,
        codeExplanationAr: [
            { line: 3, text: 'AUTO_INCREMENT: رقم متزايد تلقائياً' },
            { line: 9, text: 'تحديد البداية من 1000' },
            { line: 12, text: 'مفيش حاجة في ID، هيتعمل تلقائياً' },
        ],
        taNotes: 'AUTO_INCREMENT is commonly used for ID columns. Only one AUTO_INCREMENT column per table.',
    },
    {
        id: 'dates',
        title: 'MySQL Dates',
        icon: 'fas fa-calendar',
        description: 'Working with dates and times in MySQL.',
        videoUrl: YOUTUBE_URL('BIlFTFrEFOI'),
        learningObjectives: [
            'Date and time data types',
            'Date functions',
            'Date formatting',
        ],
        explanation: `
            <p>MySQL has several date and time data types for different purposes. Common date functions help you manipulate and query date data.</p>
            <h4>Date Data Types:</h4>
            <ul class="key-points">
                <li><strong>DATE:</strong> YYYY-MM-DD</li>
                <li><strong>DATETIME:</strong> YYYY-MM-DD hh:mm:ss</li>
                <li><strong>TIMESTAMP:</strong> Like DATETIME, but auto-updates</li>
                <li><strong>TIME:</strong> hh:mm:ss</li>
                <li><strong>YEAR:</strong> YYYY</li>
            </ul>
        `,
        explanationAr: `
            <p>MySQL عنده أنواع بيانات date and time لمختلف الاستخدامات. دوال التواريخ المشهورة بتساعد في معالجة والاستعلام عن بيانات التواريخ.</p>
            <h5>أنواع بيانات التاريخ:</h5>
            <ul class="key-points">
                <li><strong>DATE:</strong> سنة-شهر-يوم</li>
                <li><strong>DATETIME:</strong> سنة-شهر-يوم ساعة:دقيقة:ثانية</li>
                <li><strong>TIMESTAMP:</strong> زي DATETIME، بس بيتحدث تلقائياً</li>
                <li><strong>TIME:</strong> ساعة:دقيقة:ثانية</li>
                <li><strong>YEAR:</strong> سنة</li>
            </ul>
        `,
        code: `-- Common date functions
SELECT CURDATE();  -- Current date
SELECT NOW();      -- Current datetime
SELECT YEAR(birth_date) FROM students;
SELECT MONTH(birth_date) FROM students;
SELECT DATEDIFF(NOW(), order_date) AS days_since_order FROM orders;

-- Date arithmetic
SELECT DATE_ADD(NOW(), INTERVAL 7 DAY) AS next_week;
SELECT DATE_SUB(NOW(), INTERVAL 1 MONTH) AS last_month;`,
        codeExplanationAr: [
            { line: 2, text: 'CURDATE: التاريخ الحالي' },
            { line: 3, text: 'NOW: التاريخ والوقت الحاليين' },
            { line: 4, text: 'YEAR: سنة من التاريخ' },
            { line: 6, text: 'DATEDIFF: الفرق بين تاريخين بالأيام' },
        ],
        taNotes: 'Always use YYYY-MM-DD format for dates. Use appropriate date type for your needs.',
    },
    {
        id: 'views',
        title: 'MySQL Views',
        icon: 'fas fa-eye',
        description: 'Virtual tables based on the result of a SQL statement.',
        videoUrl: YOUTUBE_URL('BIlFTFrEFOI'),
        learningObjectives: [
            'Create and use views',
            'Update and delete views',
            'Benefits of using views',
        ],
        explanation: `
            <p>A view is a virtual table based on the result-set of an SQL statement. A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.</p>
            <h4>Benefits of Views:</h4>
            <ul class="key-points">
                <li>Simplify complex queries</li>
                <li>Add extra security (hide sensitive columns)</li>
                <li>Present data in a customized way</li>
            </ul>
        `,
        explanationAr: `
            <p>الـ View هو جدول افتراضي بناءً على نتيجة استعلام SQL. الـ View بيحتوي على صفوف وأعمدة زي الجدول الحقيقي. الحقول في الـ View من جداول حقيقية في قاعدة البيانات.</p>
            <h5>فوايد الـ Views:</h5>
            <ul class="key-points">
                <li>تبسيط الاستعلامات المعقدة</li>
                <li>أمان إضافي (إخفاء أعمدة حساسة)</li>
                <li>عرض البيانات بطريقة مخصصة</li>
            </ul>
        `,
        code: `-- Create a view
CREATE VIEW high_gpa_students AS
SELECT name, gpa, major
FROM students
WHERE gpa >= 3.5;

-- Use the view
SELECT * FROM high_gpa_students;

-- Update the view
CREATE OR REPLACE VIEW high_gpa_students AS
SELECT name, gpa, major, email
FROM students
WHERE gpa >= 3.5;

-- Drop view
DROP VIEW IF EXISTS high_gpa_students;`,
        codeExplanationAr: [
            { line: 2, text: 'CREATE VIEW: عمل view جديد' },
            { line: 8, text: 'استخدام الـ View زي أي جدول' },
            { line: 11, text: 'CREATE OR REPLACE: تعديل الـ View' },
        ],
        taNotes: 'Views are not physical tables - they are just saved queries. Performance depends on underlying query.',
    },
];

// Direct videos for topics where we have a clearly suitable pick.
// Any topic not listed here automatically falls back to YouTube search by page title.
const TOPIC_VIDEO_MAP = {
    'mysql-intro': 'Cz3WcZLRaWc',
    'mysql-rdbms': 'uWkcxasFWzQ',
    'mysql-sql': '9ylj9NR0Lcg',
    'select': 'HYD8KjPB9F8',
    'select-distinct': 'zWtewD294W0',
    'where': 'MARn_mssG4A',
    'order-by': 'L7QXspb2NHk',
    'and': 'O2-SMRhk8DA',
    'or': 'O2-SMRhk8DA',
    'not': 'O2-SMRhk8DA',
    'insert-into': 'jsCvvSQwtMA',
    'null-values': 'uWkcxasFWzQ',
    'update': '9ylj9NR0Lcg',
    'delete': '9ylj9NR0Lcg',
    'limit': 'WEnavAPW4dk',
    'min-max': 'jcoJuc5e3RE',
    'count': 'jcoJuc5e3RE',
    'sum': 'jcoJuc5e3RE',
    'avg': 'jcoJuc5e3RE',
    'like': 'MO-a-5G_ZAI',
    'wildcards': 'MO-a-5G_ZAI',
    'in': 'MO-a-5G_ZAI',
    'between': 'OcfUmXGRvfg',
    'aliases': 'HYD8KjPB9F8',
    'joins': 'G3lJAxg1cy8',
    'inner-join': 'SYa2GQDT_g4',
    'left-join': 'SYa2GQDT_g4',
    'right-join': 'SYa2GQDT_g4',
    'cross-join': 'G3lJAxg1cy8',
    'self-join': 'G3lJAxg1cy8',
    'alter-table': 'XgBoG0UjuqM',
    'foreign-key': 'rFssfx37UJw',
};

COURSE_CONTENT.forEach((t) => {
    const videoId = TOPIC_VIDEO_MAP[t.id];
    if (videoId) {
        t.video = { mode: 'youtube-link', videoId };
    } else {
        const query = `${t.title} MySQL tutorial`;
        t.video = {
            mode: 'youtube-search-link',
            query,
            url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
        };
    }
    if ('videoUrl' in t) delete t.videoUrl;
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COURSE_CONTENT };
}
