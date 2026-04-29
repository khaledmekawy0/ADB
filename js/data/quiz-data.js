/* ===================================================
   DBHub — QUIZ DATA
   With Egyptian Arabic Explanations
   =================================================== */

const QUIZ_DATA = {
    'create-db': [
        {
            q: 'Which statement creates a new database?',
            options: [
                'CREATE DATABASE',
                'MAKE DATABASE',
                'NEW DATABASE',
                'ADD DATABASE'
            ],
            correct: 0,
            explanation: 'CREATE DATABASE is the SQL statement used to create a new database container.',
            explanationAr: 'CREATE DATABASE هو الأمر اللي بنستخدمه عشان نعمل قاعدة بيانات جديدة.'
        },
        {
            q: 'What does the USE statement do?',
            options: [
                'Selects a database to work with',
                'Creates a new user',
                'Updates the database schema',
                'Deletes the database'
            ],
            correct: 0,
            explanation: 'USE database_name selects that database as the current database for subsequent operations.',
            explanationAr: 'USE اسم_القاعدة بيختار القاعدة دي عشان نشتغل عليها. كل الأوامر اللي جاية هتطبق على القاعدة دي.'
        },
        {
            q: 'What does IF NOT EXISTS do in CREATE DATABASE?',
            options: [
                'Prevents an error if the database already exists',
                'Deletes the existing database',
                'Updates the existing database',
                'Renames the existing database'
            ],
            correct: 0,
            explanation: 'IF NOT EXISTS makes the CREATE DATABASE statement safe - it won\'t throw an error if the database already exists.',
            explanationAr: 'IF NOT EXISTS بيخلي الأمر آمن - لو القاعدة موجودة، مش هيطلع خطأ، هيعدّي بس.'
        },
    ],
    'create-table': [
        {
            q: 'Which constraint ensures a column cannot have NULL values?',
            options: [
                'NOT NULL',
                'NO EMPTY',
                'REQUIRED',
                'MANDATORY'
            ],
            correct: 0,
            explanation: 'NOT NULL constraint ensures that a column must always have a value and cannot be left empty.',
            explanationAr: 'NOT NULL بيضمن إن العمود لازم يكون فيه قيمة على طول ومينفعش يتساب فاضي.'
        },
        {
            q: 'What is AUTO_INCREMENT used for?',
            options: [
                'Automatically generating unique ID values',
                'Increasing the table size automatically',
                'Adding more columns automatically',
                'Automatically deleting old records'
            ],
            correct: 0,
            explanation: 'AUTO_INCREMENT automatically generates a unique number for each new row, typically used for primary key columns.',
            explanationAr: 'AUTO_INCREMENT بيعمل رقم فريد اوتوماتيك لكل صف جديد، غالباً للمفتاح الأساسي (Primary Key).'
        },
        {
            q: 'What is the purpose of a FOREIGN KEY?',
            options: [
                'To create a relationship between two tables',
                'To make a column unique',
                'To prevent NULL values',
                'To automatically delete records'
            ],
            correct: 0,
            explanation: 'A FOREIGN KEY establishes a link between two tables by referencing the primary key of another table.',
            explanationAr: 'المفتاح الأجنبي (FOREIGN KEY) بيربط جدولين مع بعض بإنه بيشاور على المفتاح الأساسي في الجدول التاني.'
        },
    ],
    'data-types': [
        {
            q: 'Which data type is best for storing prices with exact precision?',
            options: [
                'DECIMAL',
                'FLOAT',
                'DOUBLE',
                'INT'
            ],
            correct: 0,
            explanation: 'DECIMAL provides exact precision for financial calculations, avoiding rounding errors that can occur with FLOAT or DOUBLE.',
            explanationAr: 'DECIMAL بيدي دقة كاملة للحسابات المالية، ومش بيحصل فيه أخطاء التقريب اللي بتحصل في FLOAT أو DOUBLE.'
        },
        {
            q: 'What is the difference between CHAR and VARCHAR?',
            options: [
                'CHAR has fixed length, VARCHAR has variable length',
                'CHAR is for numbers, VARCHAR is for text',
                'CHAR can store more characters',
                'There is no difference'
            ],
            correct: 0,
            explanation: 'CHAR(n) always stores n characters (padding with spaces), while VARCHAR(n) stores up to n characters without padding.',
            explanationAr: 'CHAR(n) بيخزن n حرف دايماً (يكمل بمسافات)، لكن VARCHAR(n) بيخزن لحد n حرف من غير ما يكمل بمسافات.'
        },
        {
            q: 'Which data type stores both date and time?',
            options: [
                'DATETIME',
                'DATE',
                'TIME',
                'YEAR'
            ],
            correct: 0,
            explanation: 'DATETIME stores both date and time information (YYYY-MM-DD HH:MM:SS).',
            explanationAr: 'DATETIME بيخزن التاريخ والوقت مع بعض (YYYY-MM-DD HH:MM:SS).'
        },
    ],
    'select': [
        {
            q: 'What does SELECT * do?',
            options: [
                'Returns all columns from a table',
                'Returns only the first row',
                'Returns only numeric columns',
                'Deletes all data'
            ],
            correct: 0,
            explanation: 'The asterisk (*) is a wildcard that represents all columns in a table.',
            explanationAr: 'علامة النجمة (*) تعني "كل الأعمدة" في الجدول.'
        },
        {
            q: 'What does the AS keyword do?',
            options: [
                'Creates an alias (alternate name) for a column',
                'Adds two columns together',
                'Sorts the results',
                'Filters the data'
            ],
            correct: 0,
            explanation: 'AS creates an alias, giving a column a different name in the query results.',
            explanationAr: 'AS بيعمل اسم مستعار (Alias)، يعني بيدي العمود اسم مختلف في نتيجة الاستعلام.'
        },
        {
            q: 'What does DISTINCT do?',
            options: [
                'Returns only unique values, removing duplicates',
                'Sorts results in descending order',
                'Limits results to 10 rows',
                'Joins two tables'
            ],
            correct: 0,
            explanation: 'DISTINCT eliminates duplicate rows from the result set, returning only unique values.',
            explanationAr: 'DISTINCT بيشيل التكرار من النتيجة وبيخلي كل قيمة تظهر مرة واحدة بس.'
        },
    ],
    'where': [
        {
            q: 'What is the purpose of the WHERE clause?',
            options: [
                'To filter rows based on conditions',
                'To sort the results',
                'To group data',
                'To join tables'
            ],
            correct: 0,
            explanation: 'WHERE filters rows, returning only those that meet the specified condition.',
            explanationAr: 'WHERE بيفلتر الصفوف ويرجع بس اللي بيطابق الشرط اللي اتحدد.'
        },
        {
            q: 'Which operator means "not equal to" in SQL?',
            options: [
                '<> or !=',
                '=',
                '><',
                '!!'
            ],
            correct: 0,
            explanation: 'Both <> and != can be used to check for inequality in most SQL databases.',
            explanationAr: 'علامتي <> و != معناهم "لا يساوي" في معظم قواعد البيانات.'
        },
        {
            q: 'What does the LIKE operator do?',
            options: [
                'Pattern matching for strings',
                'Adds two numbers',
                'Sorts alphabetically',
                'Counts rows'
            ],
            correct: 0,
            explanation: 'LIKE is used for pattern matching in string comparisons, using % for wildcards and _ for single characters.',
            explanationAr: 'LIKE بيستخدم للبحث بنمط في النصوص، بنستخدم % للأي حاجة و _ لحرف واحد.'
        },
    ],
    'insert': [
        {
            q: 'Which statement adds new data to a table?',
            options: [
                'INSERT INTO',
                'ADD DATA',
                'NEW RECORD',
                'CREATE ROW'
            ],
            correct: 0,
            explanation: 'INSERT INTO is the SQL statement used to add new rows to a table.',
            explanationAr: 'INSERT INTO هو الأمر اللي بنستخدمه عشان نضيف صفوف جديدة للجدول.'
        },
        {
            q: 'Can you insert multiple rows in a single INSERT statement?',
            options: [
                'Yes, by separating row values with commas',
                'No, only one row at a time',
                'Only with a special permission',
                'Only in Oracle databases'
            ],
            correct: 0,
            explanation: 'MySQL allows inserting multiple rows with: INSERT INTO table VALUES (row1), (row2), (row3);',
            explanationAr: 'MySQL بيسمح نضيف أكتر من صف في أمر واحد: INSERT INTO جدول VALUES (صف1)، (صف2)، (صف3);'
        },
        {
            q: 'What happens if you omit a NOT NULL column in INSERT?',
            options: [
                'An error occurs',
                'NULL is inserted',
                'The row is skipped',
                'A random value is generated'
            ],
            correct: 0,
            explanation: 'If a column is defined as NOT NULL and you don\'t provide a value, the database will return an error.',
            explanationAr: 'لو العمود NOT NULL وم حطناش قيمة، قاعدة البيانات هتطلع خطأ.'
        },
    ],
    'update': [
        {
            q: 'What happens if you run UPDATE without WHERE?',
            options: [
                'All rows in the table are updated',
                'Only the first row is updated',
                'An error occurs',
                'Nothing happens'
            ],
            correct: 0,
            explanation: 'Without WHERE, UPDATE affects ALL rows in the table - be very careful!',
            explanationAr: 'من غير WHERE، الـ UPDATE هيعمل على كل الصفوف في الجدول - خلّي بالك جداً!'
        },
        {
            q: 'Can UPDATE change multiple columns at once?',
            options: [
                'Yes, separate columns with commas',
                'No, one column at a time',
                'Only in Oracle',
                'Only with a stored procedure'
            ],
            correct: 0,
            explanation: 'UPDATE can modify multiple columns in a single statement: SET col1=value1, col2=value2',
            explanationAr: 'UPDATE ممكن يعدّل أكتر من عمود في نفس الوقت: SET عمود1=قيمة1، عمود2=قيمة2'
        },
        {
            q: 'What is the correct order for UPDATE syntax?',
            options: [
                'UPDATE table SET column=value WHERE condition',
                'UPDATE SET table.column=value WHERE condition',
                'SET UPDATE table column=value WHERE condition',
                'UPDATE WHERE condition SET table.column=value'
            ],
            correct: 0,
            explanation: 'The correct order is: UPDATE table_name SET column=value WHERE condition;',
            explanationAr: 'الترتيب الصح: UPDATE اسم_الجدول SET عمود=قيمة WHERE شرط;'
        },
    ],
    'delete': [
        {
            q: 'What happens if you run DELETE without WHERE?',
            options: [
                'All rows are permanently deleted',
                'Only the first row is deleted',
                'The table is dropped',
                'Nothing happens'
            ],
            correct: 0,
            explanation: 'DELETE without WHERE removes ALL rows from the table permanently. This cannot be undone!',
            explanationAr: 'DELETE من غير WHERE هيمسح كل الصفوف نهائياً! ومش ممكن ترجّعهم بعد كده!'
        },
        {
            q: 'What is the difference between DELETE and TRUNCATE?',
            options: [
                'TRUNCATE is faster but cannot use WHERE',
                'There is no difference',
                'DELETE is faster',
                'TRUNCATE only deletes the first row'
            ],
            correct: 0,
            explanation: 'TRUNCATE removes all rows instantly without logging each deletion, but cannot use WHERE clause.',
            explanationAr: 'TRUNCATE بيمسح كل الصفوف فوراً من غير ما يسجل كل حذف، بس مش ممكن نستخدم WHERE معاه.'
        },
        {
            q: 'Is DELETE reversible?',
            options: [
                'No, unless you have a backup or transaction rollback',
                'Yes, with UNDO command',
                'Yes, it moves data to recycle bin',
                'Yes, automatically after 24 hours'
            ],
            correct: 0,
            explanation: 'DELETE is permanent. You need a backup or must use transactions (with ROLLBACK capability) to recover.',
            explanationAr: 'DELETE نهائي. عشان ترجّع البيانات لازم يكون عندك backup أو تكون مستخدم transaction.'
        },
    ],
    'joins': [
        {
            q: 'What does INNER JOIN return?',
            options: [
                'Only rows that have matching values in both tables',
                'All rows from the left table',
                'All rows from both tables',
                'Only rows that don\'t match'
            ],
            correct: 0,
            explanation: 'INNER JOIN returns only rows where there is a match in both tables based on the join condition.',
            explanationAr: 'INNER JOIN بيرجع بس الصفوف اللي فيها تطابق في الجدولين مع بعض.'
        },
        {
            q: 'What does LEFT JOIN return?',
            options: [
                'All rows from the left table, plus matching rows from the right',
                'Only matching rows from both',
                'All rows from the right table',
                'Rows that don\'t match'
            ],
            correct: 0,
            explanation: 'LEFT JOIN returns all records from the left table, and the matched records from the right table.',
            explanationAr: 'LEFT JOIN بيرجع كل الصفوف من الجدول الشمال (الأول)، والصفوف المتطابقة من اليمين.'
        },
        {
            q: 'What is required for a JOIN condition?',
            options: [
                'A common column between the tables',
                'The tables must have the same name',
                'The tables must have the same number of rows',
                'Both tables must be empty'
            ],
            correct: 0,
            explanation: 'JOINs require a related column (usually primary key = foreign key) to match rows between tables.',
            explanationAr: 'الـ JOIN محتاج عمود مشترك (عادة Primary Key = Foreign Key) عشان يطابق الصفوف بين الجدولين.'
        },
    ],
    'aggregate': [
        {
            q: 'What does COUNT(*) return?',
            options: [
                'The total number of rows',
                'The sum of all values',
                'The average of all values',
                'The highest value'
            ],
            correct: 0,
            explanation: 'COUNT(*) returns the total number of rows in the result set, including rows with NULL values.',
            explanationAr: 'COUNT(*) بيرجع عدد الصفوف كلها، حتى لو فيها NULL.'
        },
        {
            q: 'Which function calculates the average?',
            options: [
                'AVG()',
                'MEAN()',
                'AVERAGE()',
                'MEDIAN()'
            ],
            correct: 0,
            explanation: 'AVG() calculates the arithmetic mean (average) of a set of values.',
            explanationAr: 'AVG() بيحسب المتوسط الحسابي (Mean) لمجموعة قيم.'
        },
        {
            q: 'What happens to NULL values in aggregate functions?',
            options: [
                'They are ignored (except in COUNT(*))',
                'They are counted as 0',
                'They cause an error',
                'They are counted as 1'
            ],
            correct: 0,
            explanation: 'Aggregate functions ignore NULL values, except COUNT(*) which counts all rows regardless of NULLs.',
            explanationAr: 'دوال التجميع بتتجاهل الـ NULL، ما عدا COUNT(*) اللي بيعد كل الصفوف حتى لو فيها NULL.'
        },
    ],
    'group-by': [
        {
            q: 'What does GROUP BY do?',
            options: [
                'Groups rows with the same values into summary rows',
                'Sorts the results alphabetically',
                'Filters rows based on a condition',
                'Joins multiple tables'
            ],
            correct: 0,
            explanation: 'GROUP BY groups rows that have the same values in specified columns into aggregated groups.',
            explanationAr: 'GROUP BY بتجمع الصفوف اللي ليها نفس القيمة في أعمدة محددة في مجموعات مجمّعة.'
        },
        {
            q: 'What is the difference between WHERE and HAVING?',
            options: [
                'WHERE filters rows before grouping, HAVING filters after',
                'There is no difference',
                'WHERE is faster',
                'HAVING can only be used with COUNT'
            ],
            correct: 0,
            explanation: 'WHERE filters individual rows before grouping, while HAVING filters groups after aggregation.',
            explanationAr: 'WHERE بيفلتر الصفوف الواحدة قبل التجميع، لكن HAVING بيفلتر المجموعات بعد التجميع.'
        },
        {
            q: 'Can you use regular columns with aggregate functions without GROUP BY?',
            options: [
                'No, you must GROUP BY all non-aggregated columns',
                'Yes, always',
                'Only in MySQL',
                'Only with COUNT'
            ],
            correct: 0,
            explanation: 'When using aggregate functions with regular columns, all non-aggregated columns must be in the GROUP BY clause.',
            explanationAr: 'لما نستخدم دوال التجميع مع أعمدة عادية، لازم كل الأعمدة غير المجمّعة تكون في GROUP BY.'
        },
    ],
    'subqueries': [
        {
            q: 'What is a subquery?',
            options: [
                'A query inside another query',
                'A query that runs faster',
                'A query with no results',
                'A query that deletes data'
            ],
            correct: 0,
            explanation: 'A subquery is a query nested inside another query, used to provide values for the outer query.',
            explanationAr: 'الـ Subquery هو استعلام جوة استعلام تاني، بيستخدم عشان يدّي قيم للاستعلام الخارجي.'
        },
        {
            q: 'Where can subqueries be used?',
            options: [
                'In SELECT, FROM, WHERE, and HAVING clauses',
                'Only in WHERE clause',
                'Only in SELECT clause',
                'Only in FROM clause'
            ],
            correct: 0,
            explanation: 'Subqueries can be used in SELECT, FROM, WHERE, and HAVING clauses for various purposes.',
            explanationAr: 'الـ Subqueries ممكن نستخدمها في SELECT، FROM، WHERE، و HAVING.'
        },
        {
            q: 'Which operator is used with multi-row subqueries?',
            options: [
                'IN',
                '=',
                '+',
                '>'
            ],
            correct: 0,
            explanation: 'IN is used to check if a value matches any value in a list returned by a subquery.',
            explanationAr: 'IN بيستخدم عشان نشوف إذا كانت القيمة موجودة في القائمة اللي رجعها الـ Subquery.'
        },
    ],
    'indexes': [
        {
            q: 'What is the main purpose of an index?',
            options: [
                'To speed up data retrieval',
                'To store more data',
                'To encrypt the database',
                'To delete old records'
            ],
            correct: 0,
            explanation: 'Indexes are data structures that improve the speed of data retrieval operations on database tables.',
            explanationAr: 'الـ Indexes هيا هياكل بيانات بتسّرّع عمليات جلب البيانات من الجداول.'
        },
        {
            q: 'What is the trade-off of using indexes?',
            options: [
                'Faster reads but slower writes and more storage',
                'Slower reads but faster writes',
                'No trade-off, only benefits',
                'Less storage but slower everything'
            ],
            correct: 0,
            explanation: 'Indexes speed up SELECT queries but slow down INSERT, UPDATE, DELETE operations and use additional disk space.',
            explanationAr: 'الـ Indexes بتسّرّع الـ SELECT بس بتبطّي الـ INSERT، UPDATE، DELETE وبتاخد مساحة أكتر.'
        },
        {
            q: 'Are primary keys automatically indexed?',
            options: [
                'Yes',
                'No',
                'Only in Oracle',
                'Only in MySQL'
            ],
            correct: 0,
            explanation: 'Primary keys are automatically indexed in most database systems for fast lookups and uniqueness enforcement.',
            explanationAr: 'المفاتيح الأساسية (Primary Keys) بيتعملها Index اوتوماتيك في معظم قواعد البيانات.'
        },
    ],
    // MySQL Course Topics (matching course-content.js IDs)
    'mysql-intro': [
        {
            q: 'What is MySQL?',
            options: [
                'An open-source relational database management system',
                'A programming language',
                'A web server',
                'An operating system'
            ],
            correct: 0,
            explanation: 'MySQL is the world\'s most popular open-source relational database management system.',
            explanationAr: 'MySQL هو أشهر نظام مفتوح المصدر لإدارة قواعد البيانات العلائقية في العالم.'
        },
        {
            q: 'Which companies use MySQL?',
            options: [
                'Facebook, Twitter, YouTube, Wikipedia',
                'Only small websites',
                'Only banking systems',
                'Only mobile apps'
            ],
            correct: 0,
            explanation: 'MySQL powers many of the world\'s largest websites including Facebook, Twitter, YouTube, and Wikipedia.',
            explanationAr: 'MySQL بيشغل كتير من أكبر مواقع العالم زي Facebook و Twitter و YouTube و Wikipedia.'
        },
        {
            q: 'What does RDBMS stand for?',
            options: [
                'Relational Database Management System',
                'Random Data Base Management Software',
                'Relational Data Building and Management System',
                'Real Database Management Solution'
            ],
            correct: 0,
            explanation: 'RDBMS stands for Relational Database Management System.',
            explanationAr: 'RDBMS يعني Relational Database Management System - نظام إدارة قواعد البيانات العلائقية.'
        },
    ],
    'mysql-rdbms': [
        {
            q: 'What is a table in RDBMS?',
            options: [
                'A collection of related data entries organized in rows and columns',
                'A piece of furniture',
                'A type of chart',
                'A database user'
            ],
            correct: 0,
            explanation: 'A table is a collection of related data entries organized in rows (records) and columns (fields).',
            explanationAr: 'الجدول هو مجموعة من السجلات المتعلقة ببعض، منظمة في صفوف وأعمدة.'
        },
        {
            q: 'What is a Primary Key?',
            options: [
                'A unique identifier for each row in a table',
                'The main password for the database',
                'The first column in every table',
                'The most important data in the table'
            ],
            correct: 0,
            explanation: 'A Primary Key uniquely identifies each row in a table and cannot be NULL.',
            explanationAr: 'المفتاح الأساسي (Primary Key) بيميز كل صف في الجدول بشكل فريد ومش ممكن يكون NULL.'
        },
    ],
    'mysql-sql': [
        {
            q: 'What does SQL stand for?',
            options: [
                'Structured Query Language',
                'Simple Question Language',
                'System Query Logic',
                'Structured Question Link'
            ],
            correct: 0,
            explanation: 'SQL stands for Structured Query Language - the standard language for managing relational databases.',
            explanationAr: 'SQL يعني Structured Query Language - اللغة القياسية لإدارة قواعد البيانات العلائقية.'
        },
        {
            q: 'Is SQL case-sensitive?',
            options: [
                'No, SQL keywords are not case-sensitive',
                'Yes, everything must be in UPPERCASE',
                'Yes, everything must be in lowercase',
                'Only table names are case-sensitive'
            ],
            correct: 0,
            explanation: 'SQL is generally case-insensitive for keywords, though it is convention to write keywords in UPPERCASE.',
            explanationAr: 'SQL مش حساسة لحالة الحروف، بس الاتفاق إننا نكتب الكلمات المفتاحية بحروف كبيرة.'
        },
    ],
    'mysql-select': [
        {
            q: 'What does SELECT * do?',
            options: [
                'Returns all columns from a table',
                'Returns only the first row',
                'Returns only numeric columns',
                'Deletes all data'
            ],
            correct: 0,
            explanation: 'The asterisk (*) is a wildcard that represents all columns in a table.',
            explanationAr: 'علامة النجمة (*) تعني "كل الأعمدة" في الجدول.'
        },
        {
            q: 'What does the AS keyword do?',
            options: [
                'Creates an alias (alternate name) for a column',
                'Adds two columns together',
                'Sorts the results',
                'Filters the data'
            ],
            correct: 0,
            explanation: 'AS creates an alias, giving a column a different name in the query results.',
            explanationAr: 'AS بيعمل اسم مستعار (Alias)، يعني بيدي العمود اسم مختلف في النتيجة.'
        },
    ],
    'mysql-select-distinct': [
        {
            q: 'What does DISTINCT do?',
            options: [
                'Returns only unique values, removing duplicates',
                'Sorts results in descending order',
                'Limits results to 10 rows',
                'Joins two tables'
            ],
            correct: 0,
            explanation: 'DISTINCT eliminates duplicate rows from the result set.',
            explanationAr: 'DISTINCT بيشيل التكرار من النتيجة وبيخلي كل قيمة تظهر مرة واحدة بس.'
        },
    ],
    'mysql-where': [
        {
            q: 'What is the purpose of the WHERE clause?',
            options: [
                'To filter rows based on conditions',
                'To sort the results',
                'To group data',
                'To join tables'
            ],
            correct: 0,
            explanation: 'WHERE filters rows, returning only those that meet the specified condition.',
            explanationAr: 'WHERE بيفلتر الصفوف ويرجع بس اللي بيطابق الشرط.'
        },
        {
            q: 'Which operator means "not equal to" in SQL?',
            options: [
                '<> or !=',
                '=',
                '><',
                '!!'
            ],
            correct: 0,
            explanation: 'Both <> and != can be used to check for inequality in most SQL databases.',
            explanationAr: 'علامتي <> و != معناهم "لا يساوي" في معظم قواعد البيانات.'
        },
    ],
    'mysql-and': [
        {
            q: 'What does the AND operator do?',
            options: [
                'Requires both conditions to be true',
                'Requires either condition to be true',
                'Negates a condition',
                'Sorts the results'
            ],
            correct: 0,
            explanation: 'AND requires both conditions to be true for a row to be included in the result.',
            explanationAr: 'AND بيRequire إن الشرطين يكونوا صحيحين عشان الصف يتضمن في النتيجة.'
        },
    ],
    'mysql-or': [
        {
            q: 'What does the OR operator do?',
            options: [
                'Requires either condition to be true',
                'Requires both conditions to be true',
                'Negates a condition',
                'Limits the results'
            ],
            correct: 0,
            explanation: 'OR requires at least one of the conditions to be true.',
            explanationAr: 'OR بيRequire إن شرط واحد على الأقل يكون صحيح.'
        },
    ],
    'mysql-not': [
        {
            q: 'What does the NOT operator do?',
            options: [
                'Negates a condition (opposite of the condition)',
                'Adds two conditions together',
                'Sorts in reverse order',
                'Deletes records'
            ],
            correct: 0,
            explanation: 'NOT reverses the meaning of the condition it precedes.',
            explanationAr: 'NOT بيعكس معنى الشرط اللي قبله.'
        },
    ],
    'mysql-order-by': [
        {
            q: 'What does ORDER BY do?',
            options: [
                'Sorts the result set',
                'Filters rows',
                'Groups data',
                'Joins tables'
            ],
            correct: 0,
            explanation: 'ORDER BY sorts the result set in ascending or descending order.',
            explanationAr: 'ORDER BY بيرتب النتيجة تصاعدياً أو تنازلياً.'
        },
        {
            q: 'What is the default sort order?',
            options: [
                'Ascending (ASC)',
                'Descending (DESC)',
                'Random',
                'Alphabetical'
            ],
            correct: 0,
            explanation: 'The default sort order is ascending (ASC).',
            explanationAr: 'الترتيب الافتراضي هو تصاعدي (ASC).'
        },
    ],
    'mysql-insert': [
        {
            q: 'Which statement adds new data to a table?',
            options: [
                'INSERT INTO',
                'ADD DATA',
                'NEW RECORD',
                'CREATE ROW'
            ],
            correct: 0,
            explanation: 'INSERT INTO is the SQL statement used to add new rows to a table.',
            explanationAr: 'INSERT INTO هو الأمر اللي بنستخدمه عشان نضيف صفوف جديدة للجدول.'
        },
    ],
    'mysql-null': [
        {
            q: 'What does NULL represent?',
            options: [
                'A missing or unknown value',
                'Zero',
                'An empty string',
                'False'
            ],
            correct: 0,
            explanation: 'NULL represents a missing or unknown value, different from zero or empty string.',
            explanationAr: 'NULL بيمثل قيمة مفقودة أو غير معروفة، مختلفة عن الصفر أو النص الفاضي.'
        },
    ],
    'mysql-update': [
        {
            q: 'What happens if you run UPDATE without WHERE?',
            options: [
                'All rows in the table are updated',
                'Only the first row is updated',
                'An error occurs',
                'Nothing happens'
            ],
            correct: 0,
            explanation: 'Without WHERE, UPDATE affects ALL rows in the table - be very careful!',
            explanationAr: 'من غير WHERE، الـ UPDATE هيعمل على كل الصفوف في الجدول - خلّي بالك!'
        },
    ],
    'mysql-delete': [
        {
            q: 'What happens if you run DELETE without WHERE?',
            options: [
                'All rows are permanently deleted',
                'Only the first row is deleted',
                'The table is dropped',
                'Nothing happens'
            ],
            correct: 0,
            explanation: 'DELETE without WHERE removes ALL rows from the table permanently.',
            explanationAr: 'DELETE من غير WHERE هيمسح كل الصفوف نهائياً!'
        },
    ],
    'mysql-limit': [
        {
            q: 'What does LIMIT do?',
            options: [
                'Limits the number of records returned',
                'Limits column values',
                'Limits table size',
                'Limits database connections'
            ],
            correct: 0,
            explanation: 'LIMIT restricts the number of records returned by a query.',
            explanationAr: 'LIMIT بيحد عدد السجلات اللي الاستعلام بيرجعها.'
        },
    ],
    'mysql-min-max': [
        {
            q: 'What does MIN() return?',
            options: [
                'The smallest value in a column',
                'The largest value in a column',
                'The average value',
                'The total count'
            ],
            correct: 0,
            explanation: 'MIN() returns the smallest value in a set of values.',
            explanationAr: 'MIN() بيرجع أصغر قيمة في مجموعة قيم.'
        },
        {
            q: 'What does MAX() return?',
            options: [
                'The largest value in a column',
                'The smallest value in a column',
                'The average value',
                'The total count'
            ],
            correct: 0,
            explanation: 'MAX() returns the largest value in a set of values.',
            explanationAr: 'MAX() بيرجع أكبر قيمة في مجموعة قيم.'
        },
    ],
    'mysql-count': [
        {
            q: 'What does COUNT(*) return?',
            options: [
                'The total number of rows',
                'The sum of all values',
                'The average of all values',
                'The highest value'
            ],
            correct: 0,
            explanation: 'COUNT(*) returns the total number of rows, including NULL values.',
            explanationAr: 'COUNT(*) بيرجع عدد الصفوف كلها، حتى لو فيها NULL.'
        },
    ],
    'mysql-sum': [
        {
            q: 'What does SUM() do?',
            options: [
                'Calculates the total of a numeric column',
                'Counts the number of rows',
                'Finds the average',
                'Finds the maximum value'
            ],
            correct: 0,
            explanation: 'SUM() calculates the total sum of a numeric column.',
            explanationAr: 'SUM() بيحسب المجموع الكلي لعمود رقمي.'
        },
    ],
    'mysql-avg': [
        {
            q: 'Which function calculates the average?',
            options: [
                'AVG()',
                'MEAN()',
                'AVERAGE()',
                'MEDIAN()'
            ],
            correct: 0,
            explanation: 'AVG() calculates the arithmetic mean of a set of values.',
            explanationAr: 'AVG() بيحسب المتوسط الحسابي لمجموعة قيم.'
        },
    ],
    'mysql-like': [
        {
            q: 'What is the LIKE operator used for?',
            options: [
                'Pattern matching in strings',
                'Adding two numbers',
                'Sorting alphabetically',
                'Counting rows'
            ],
            correct: 0,
            explanation: 'LIKE is used for pattern matching with wildcards % and _.',
            explanationAr: 'LIKE بيستخدم للبحث بنمط في النصوص، بنستخدم % و _ كـ wildcards.'
        },
    ],
    'mysql-wildcards': [
        {
            q: 'What does the % wildcard represent?',
            options: [
                'Zero or more characters',
                'Exactly one character',
                'A single digit',
                'A space character'
            ],
            correct: 0,
            explanation: '% matches any sequence of zero or more characters.',
            explanationAr: '% بيطابق أي تسلسل من صفر أو أكتر من الحروف.'
        },
        {
            q: 'What does the _ wildcard represent?',
            options: [
                'Exactly one character',
                'Zero or more characters',
                'A number',
                'A special character'
            ],
            correct: 0,
            explanation: '_ matches exactly one single character.',
            explanationAr: '_ بيطابق حرف واحد بالظبط.'
        },
    ],
    'mysql-in': [
        {
            q: 'What does the IN operator do?',
            options: [
                'Checks if a value matches any value in a list',
                'Sorts values in ascending order',
                'Joins two tables',
                'Creates a new index'
            ],
            correct: 0,
            explanation: 'IN allows you to specify multiple values in a WHERE clause.',
            explanationAr: 'IN بيسمح لك تحدد قيم كتير في جملة WHERE.'
        },
    ],
    'mysql-between': [
        {
            q: 'What does BETWEEN do?',
            options: [
                'Selects values within a given range',
                'Joins two tables',
                'Groups data',
                'Sorts results'
            ],
            correct: 0,
            explanation: 'BETWEEN selects values within a range (inclusive).',
            explanationAr: 'BETWEEN بيختار القيم ضمن نطاق معين (شامل).'
        },
    ],
    'mysql-aliases': [
        {
            q: 'What is an alias in SQL?',
            options: [
                'A temporary name for a table or column',
                'A type of database user',
                'A foreign key constraint',
                'A backup copy of data'
            ],
            correct: 0,
            explanation: 'An alias is a temporary name given to a table or column using the AS keyword.',
            explanationAr: 'الـ Alias هو اسم مؤقت لجدول أو عمود باستخدام كلمة AS.'
        },
    ],
    'mysql-joins': [
        {
            q: 'What does a JOIN do?',
            options: [
                'Combines rows from two or more tables',
                'Creates a new database',
                'Deletes records',
                'Sorts data'
            ],
            correct: 0,
            explanation: 'JOIN combines rows from two or more tables based on a related column.',
            explanationAr: 'JOIN بيجمع صفوف من جدولين أو أكتر بناءً على عمود مشترك.'
        },
    ],
    'mysql-inner-join': [
        {
            q: 'What does INNER JOIN return?',
            options: [
                'Only rows that have matching values in both tables',
                'All rows from the left table',
                'All rows from both tables',
                'Only rows that don\'t match'
            ],
            correct: 0,
            explanation: 'INNER JOIN returns only rows where there is a match in both tables.',
            explanationAr: 'INNER JOIN بيرجع بس الصفوف اللي فيها تطابق في الجدولين.'
        },
    ],
    'mysql-left-join': [
        {
            q: 'What does LEFT JOIN return?',
            options: [
                'All rows from the left table, plus matching rows from the right',
                'Only matching rows from both',
                'All rows from the right table',
                'Rows that don\'t match'
            ],
            correct: 0,
            explanation: 'LEFT JOIN returns all records from the left table and matched records from the right.',
            explanationAr: 'LEFT JOIN بيرجع كل السجلات من الجدول الشمال والمطابقة من اليمين.'
        },
    ],
    'mysql-right-join': [
        {
            q: 'What does RIGHT JOIN return?',
            options: [
                'All rows from the right table, plus matching rows from the left',
                'Only matching rows from both',
                'All rows from the left table',
                'Rows that don\'t match'
            ],
            correct: 0,
            explanation: 'RIGHT JOIN returns all records from the right table and matched records from the left.',
            explanationAr: 'RIGHT JOIN بيرجع كل السجلات من الجدول اليمين والمطابقة من الشمال.'
        },
    ],
    'mysql-cross-join': [
        {
            q: 'What does CROSS JOIN return?',
            options: [
                'All possible combinations of rows from both tables',
                'Only matching rows',
                'Only rows from the first table',
                'Rows from both tables merged'
            ],
            correct: 0,
            explanation: 'CROSS JOIN produces the Cartesian product of both tables.',
            explanationAr: 'CROSS JOIN بينتج كل التوافيق الممكنة من الصفوف في الجدولين.'
        },
    ],
    'mysql-self-join': [
        {
            q: 'What is a SELF JOIN?',
            options: [
                'A table joined with itself',
                'A join between two different tables',
                'A join with a subquery',
                'An automatic join'
            ],
            correct: 0,
            explanation: 'SELF JOIN is a regular join but the table is joined with itself.',
            explanationAr: 'SELF JOIN هو join عادي بس الجدول بيتjoin مع نفسه.'
        },
    ],
    'mysql-union': [
        {
            q: 'What does UNION do?',
            options: [
                'Combines result sets of two or more SELECT statements',
                'Joins two tables horizontally',
                'Creates a new database',
                'Deletes duplicate rows'
            ],
            correct: 0,
            explanation: 'UNION combines the results of two or more SELECT statements.',
            explanationAr: 'UNION بيجمع نتائج استعلامين SELECT أو أكتر.'
        },
    ],
    'mysql-group-by': [
        {
            q: 'What does GROUP BY do?',
            options: [
                'Groups rows with the same values into summary rows',
                'Sorts the results alphabetically',
                'Filters rows based on a condition',
                'Joins multiple tables'
            ],
            correct: 0,
            explanation: 'GROUP BY groups rows with the same values into aggregated groups.',
            explanationAr: 'GROUP BY بتجمع الصفوف اللي ليها نفس القيمة في مجموعات مجمّعة.'
        },
    ],
    'mysql-having': [
        {
            q: 'What is the difference between WHERE and HAVING?',
            options: [
                'WHERE filters rows before grouping, HAVING filters after',
                'There is no difference',
                'WHERE is faster',
                'HAVING can only be used with COUNT'
            ],
            correct: 0,
            explanation: 'WHERE filters individual rows before grouping, while HAVING filters groups after.',
            explanationAr: 'WHERE بيفلتر الصفوف قبل التجميع، HAVING بيفلتر المجموعات بعد التجميع.'
        },
    ],
    'mysql-exists': [
        {
            q: 'What does EXISTS check?',
            options: [
                'Whether a subquery returns any rows',
                'If a table exists',
                'If a column exists',
                'If a database exists'
            ],
            correct: 0,
            explanation: 'EXISTS checks if a subquery returns one or more records.',
            explanationAr: 'EXISTS بيتشيك لو الـ subquery بيرجع صف واحد أو أكتر.'
        },
    ],
    'mysql-create-db': [
        {
            q: 'Which statement creates a new database?',
            options: [
                'CREATE DATABASE',
                'MAKE DATABASE',
                'NEW DATABASE',
                'ADD DATABASE'
            ],
            correct: 0,
            explanation: 'CREATE DATABASE is the SQL statement used to create a new database.',
            explanationAr: 'CREATE DATABASE هو الأمر اللي بنستخدمه عشان نعمل قاعدة بيانات جديدة.'
        },
    ],
    'mysql-drop-db': [
        {
            q: 'Which statement deletes a database?',
            options: [
                'DROP DATABASE',
                'DELETE DATABASE',
                'REMOVE DATABASE',
                'CLEAR DATABASE'
            ],
            correct: 0,
            explanation: 'DROP DATABASE permanently removes a database and all its tables.',
            explanationAr: 'DROP DATABASE بيمسح قاعدة البيانات وجميع جداولها نهائياً.'
        },
    ],
    'mysql-create-table': [
        {
            q: 'Which statement creates a new table?',
            options: [
                'CREATE TABLE',
                'MAKE TABLE',
                'NEW TABLE',
                'ADD TABLE'
            ],
            correct: 0,
            explanation: 'CREATE TABLE is used to create a new table in the database.',
            explanationAr: 'CREATE TABLE بيستخدم عشان نعمل جدول جديد في قاعدة البيانات.'
        },
        {
            q: 'Which constraint ensures a column cannot have NULL values?',
            options: [
                'NOT NULL',
                'NO EMPTY',
                'REQUIRED',
                'MANDATORY'
            ],
            correct: 0,
            explanation: 'NOT NULL ensures a column must always have a value.',
            explanationAr: 'NOT NULL بيضمن إن العمود لازم يكون فيه قيمة على طول.'
        },
    ],
    'mysql-drop-table': [
        {
            q: 'Which statement deletes a table?',
            options: [
                'DROP TABLE',
                'DELETE TABLE',
                'REMOVE TABLE',
                'CLEAR TABLE'
            ],
            correct: 0,
            explanation: 'DROP TABLE removes a table and all its data permanently.',
            explanationAr: 'DROP TABLE بيمسح الجدول وجميع بياناته نهائياً.'
        },
    ],
    'mysql-alter-table': [
        {
            q: 'What does ALTER TABLE do?',
            options: [
                'Modifies an existing table structure',
                'Creates a new table',
                'Deletes a table',
                'Renames the database'
            ],
            correct: 0,
            explanation: 'ALTER TABLE is used to add, delete, or modify columns in an existing table.',
            explanationAr: 'ALTER TABLE بيستخدم عشان نضيف، نمسح، أو نعدّل أعمدة في جدول موجود.'
        },
    ],
    'mysql-constraints': [
        {
            q: 'What are constraints?',
            options: [
                'Rules enforced on data columns',
                'Table relationships',
                'Query conditions',
                'Index types'
            ],
            correct: 0,
            explanation: 'Constraints are rules enforced on data columns to maintain data integrity.',
            explanationAr: 'الـ Constraints هي قواعد مفروضة على أعمدة البيانات عشان نحافظ على سلامة البيانات.'
        },
    ],
    'mysql-not-null': [
        {
            q: 'What does NOT NULL ensure?',
            options: [
                'A column must always have a value',
                'A column can be empty',
                'A column must be unique',
                'A column must be a number'
            ],
            correct: 0,
            explanation: 'NOT NULL ensures a column cannot have a NULL value.',
            explanationAr: 'NOT NULL بيضمن إن العمود مينفعش يكون NULL.'
        },
    ],
    'mysql-unique': [
        {
            q: 'What does UNIQUE ensure?',
            options: [
                'All values in a column are different',
                'A column cannot be NULL',
                'A column must be a number',
                'A column must be indexed'
            ],
            correct: 0,
            explanation: 'UNIQUE ensures all values in a column are different.',
            explanationAr: 'UNIQUE بيضمن إن كل القيم في العمود مختلفة.'
        },
    ],
    'mysql-primary-key': [
        {
            q: 'What is a PRIMARY KEY?',
            options: [
                'A unique identifier for each record',
                'A column that can have duplicates',
                'A foreign key reference',
                'An index on multiple columns'
            ],
            correct: 0,
            explanation: 'A PRIMARY KEY uniquely identifies each record and cannot be NULL.',
            explanationAr: 'PRIMARY KEY بيعرّف كل سجل بشكل فريد ومش بيقبل NULL.'
        },
    ],
    'mysql-foreign-key': [
        {
            q: 'What is a FOREIGN KEY?',
            options: [
                'A key that links two tables together',
                'A primary key in another table',
                'A unique constraint',
                'An auto-increment column'
            ],
            correct: 0,
            explanation: 'A FOREIGN KEY establishes a relationship between two tables.',
            explanationAr: 'FOREIGN KEY بيعمل علاقة بين جدولين.'
        },
    ],
    'mysql-check': [
        {
            q: 'What does CHECK constraint do?',
            options: [
                'Ensures all values satisfy a specific condition',
                'Checks if table exists',
                'Checks data types',
                'Checks for NULL values'
            ],
            correct: 0,
            explanation: 'CHECK ensures all values in a column satisfy a specific condition.',
            explanationAr: 'CHECK بيضمن إن كل القيم في العمود تحقق شرط معين.'
        },
    ],
    'mysql-default': [
        {
            q: 'What does DEFAULT do?',
            options: [
                'Sets a default value for a column',
                'Deletes default constraints',
                'Checks default values',
                'Sets the primary key'
            ],
            correct: 0,
            explanation: 'DEFAULT sets a default value for a column when no value is specified.',
            explanationAr: 'DEFAULT بيحط قيمة افتراضية للعمود لما مفيش قيمة محددة.'
        },
    ],
    'mysql-create-index': [
        {
            q: 'What is the purpose of an index?',
            options: [
                'To speed up data retrieval',
                'To store more data',
                'To encrypt the database',
                'To delete old records'
            ],
            correct: 0,
            explanation: 'Indexes improve the speed of data retrieval operations.',
            explanationAr: 'الـ Indexes بتسّرّع عمليات جلب البيانات.'
        },
    ],
    'mysql-auto-increment': [
        {
            q: 'What does AUTO_INCREMENT do?',
            options: [
                'Generates a unique number automatically for new records',
                'Increases table size automatically',
                'Updates records automatically',
                'Creates backups automatically'
            ],
            correct: 0,
            explanation: 'AUTO_INCREMENT generates a unique number for each new record.',
            explanationAr: 'AUTO_INCREMENT بيولد رقم فريد لكل سجل جديد.'
        },
    ],
    'mysql-dates': [
        {
            q: 'Which data type stores both date and time?',
            options: [
                'DATETIME',
                'DATE',
                'TIME',
                'YEAR'
            ],
            correct: 0,
            explanation: 'DATETIME stores both date and time (YYYY-MM-DD HH:MM:SS).',
            explanationAr: 'DATETIME بيخزن التاريخ والوقت مع بعض.'
        },
    ],
    'mysql-views': [
        {
            q: 'What is a VIEW?',
            options: [
                'A virtual table based on a query',
                'A physical table copy',
                'A database backup',
                'A type of index'
            ],
            correct: 0,
            explanation: 'A VIEW is a virtual table based on the result-set of a SELECT statement.',
            explanationAr: 'الـ VIEW هو جدول افتراضي مبني على نتيجة استعلام SELECT.'
        },
    ],
};

/**
 * Resolves mini-quiz questions for a course topic id (see course-content.js).
 * Lesson ids often use shorter slugs than keys in QUIZ_DATA (e.g. `limit` → `mysql-limit`).
 */
function getQuizQuestionsForTopic(topicId) {
    if (!topicId || typeof QUIZ_DATA === 'undefined') {
        return [];
    }

    const idRedirects = {
        'insert-into': 'mysql-insert',
        'null-values': 'mysql-null',
    };

    const candidates = [];
    candidates.push(topicId);
    const redirected = idRedirects[topicId];
    if (redirected) candidates.push(redirected);
    candidates.push(`mysql-${topicId}`);

    const seen = new Set();
    for (const key of candidates) {
        if (!key || seen.has(key)) continue;
        seen.add(key);
        const list = QUIZ_DATA[key];
        if (Array.isArray(list) && list.length > 0) {
            return list;
        }
    }

    return [];
}

window.getQuizQuestionsForTopic = getQuizQuestionsForTopic;

// Practice exercises data
const PRACTICE_EXERCISES = [
    {
        id: 1,
        title: 'Find All Computer Science Students',
        difficulty: 'Easy',
        description: 'Write a query to find all students majoring in Computer Science.',
        hint: 'Use SELECT with WHERE and the major column.',
        solution: "SELECT * FROM students WHERE major = 'Computer Science';",
        checkQuery: (query) => query.toLowerCase().includes('computer science') && query.toLowerCase().includes('select')
    },
    {
        id: 2,
        title: 'Count Students by Major',
        difficulty: 'Easy',
        description: 'Count how many students are in each major.',
        hint: 'Use COUNT(*) with GROUP BY.',
        solution: 'SELECT major, COUNT(*) as student_count FROM students GROUP BY major;',
        checkQuery: (query) => query.toLowerCase().includes('count') && query.toLowerCase().includes('group by')
    },
    {
        id: 3,
        title: 'Students with High GPA',
        difficulty: 'Medium',
        description: 'Find students with GPA of 3.5 or higher, ordered by GPA descending.',
        hint: 'Use WHERE with >= and ORDER BY DESC.',
        solution: 'SELECT first_name, last_name, gpa FROM students WHERE gpa >= 3.5 ORDER BY gpa DESC;',
        checkQuery: (query) => query.toLowerCase().includes('gpa') && query.toLowerCase().includes('>=') || query.toLowerCase().includes('3.5')
    },
    {
        id: 4,
        title: 'Course Enrollment Count',
        difficulty: 'Medium',
        description: 'List all courses with the number of enrolled students.',
        hint: 'Use JOIN between courses and enrollments, then GROUP BY.',
        solution: `SELECT c.course_name, COUNT(e.student_id) as enrolled_students
FROM courses c
LEFT JOIN enrollments e ON c.course_id = e.course_id
GROUP BY c.course_id, c.course_name;`,
        checkQuery: (query) => query.toLowerCase().includes('join') && query.toLowerCase().includes('count')
    },
    {
        id: 5,
        title: 'Honor Roll Students',
        difficulty: 'Medium',
        description: 'Find students with GPA above average who have taken at least 3 courses.',
        hint: 'Use a subquery for average GPA and HAVING for course count.',
        solution: `SELECT s.first_name, s.last_name, s.gpa, COUNT(e.course_id) as course_count
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
WHERE s.gpa > (SELECT AVG(gpa) FROM students)
GROUP BY s.student_id
HAVING COUNT(e.course_id) >= 3;`,
        checkQuery: (query) => query.toLowerCase().includes('avg') && query.toLowerCase().includes('having')
    },
];
