/* ===================================================
   DBHub — SAMPLE UNIVERSITY DATABASE
   For SQL Practice Arena
   =================================================== */

const SAMPLE_DATABASE = {
    name: 'University',
    tables: {
        students: {
            columns: [
                { name: 'student_id', type: 'INT', primaryKey: true },
                { name: 'first_name', type: 'VARCHAR(50)' },
                { name: 'last_name', type: 'VARCHAR(50)' },
                { name: 'email', type: 'VARCHAR(100)' },
                { name: 'major', type: 'VARCHAR(50)' },
                { name: 'gpa', type: 'DECIMAL(3,2)' }
            ],
            data: [
                { student_id: 1, first_name: 'Khaled', last_name: 'Mekawy', email: 'khaled.mekawy@nmu.edu.eg', major: 'Computer Science', gpa: 3.75 },
                { student_id: 2, first_name: 'Zyad', last_name: 'Elleathy', email: 'zyad.elleathy@nmu.edu.eg', major: 'Medicine', gpa: 3.92 },
                { student_id: 3, first_name: 'Awatif', last_name: 'Nawar', email: 'awatif.nawar@nmu.edu.eg', major: 'Engineering', gpa: 3.45 },
                { student_id: 4, first_name: 'Sherif', last_name: 'Shiko', email: 'sherif.shiko@nmu.edu.eg', major: 'Computer Science', gpa: 3.85 },
                { student_id: 5, first_name: 'ENG', last_name: 'Salma', email: 'eng.salma@nmu.edu.eg', major: 'Engineering', gpa: 3.20 },
            ]
        },
        courses: {
            columns: [
                { name: 'course_id', type: 'INT', primaryKey: true },
                { name: 'course_name', type: 'VARCHAR(100)' },
                { name: 'department', type: 'VARCHAR(50)' },
                { name: 'credits', type: 'INT' }
            ],
            data: [
                { course_id: 1, course_name: 'Introduction to Programming', department: 'Computer Science', credits: 3 },
                { course_id: 2, course_name: 'Database Systems', department: 'Computer Science', credits: 3 },
                { course_id: 3, course_name: 'Engineering Mathematics', department: 'Engineering', credits: 4 },
                { course_id: 4, course_name: 'Anatomy', department: 'Medicine', credits: 4 },
                { course_id: 5, course_name: 'Advanced Databases', department: 'Computer Science', credits: 3 },
            ]
        },
        enrollments: {
            columns: [
                { name: 'enrollment_id', type: 'INT', primaryKey: true },
                { name: 'student_id', type: 'INT' },
                { name: 'course_id', type: 'INT' },
                { name: 'grade', type: 'VARCHAR(2)' }
            ],
            data: [
                { enrollment_id: 1, student_id: 1, course_id: 1, grade: 'A' },
                { enrollment_id: 2, student_id: 1, course_id: 2, grade: 'A' },
                { enrollment_id: 3, student_id: 2, course_id: 4, grade: 'A' },
                { enrollment_id: 4, student_id: 3, course_id: 3, grade: 'B' },
                { enrollment_id: 5, student_id: 4, course_id: 2, grade: 'A' },
                { enrollment_id: 6, student_id: 5, course_id: 3, grade: 'C' },
            ]
        }
    }
};
