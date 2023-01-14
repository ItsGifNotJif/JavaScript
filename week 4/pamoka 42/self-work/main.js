{//Non inherited base example
    class Student {
        name;
        surname;
        grades;

        constructor(name, surname, grades) {
            this.name = name,
                this.surname = surname,
                this.grades = []
        }


        addGrade(grade) {
            this.grades.push(grade)
        }

        get avg() {
            return (this.grades.reduce((pervSum, grade) => pervSum + grade) / this.grades.length).toFixed(1)
        }

        getFullName() {
            return this.name + " " + this.surname;
        }

    }

    class Lecturer {
        name;
        surname;
        grades;

        constructor(name, surname, salary) {
            this.name = name,
                this.surname = surname,
                this.salary = salary;
        }

        getSalary() {
            return this.salary;
        }

        raiseSalary(amount) {
            this.salary += amount;
        }

        getFullName() {
            return this.name + " " + this.surname
        }
    }

    const students = [
        new Student("Dorian", "Ashgray"),
        new Student("Elric", "Melnibone"),
        new Student("Rakhir", "RedArcher"),
    ]

    const lecturers = [
        new Lecturer("Albus", "Dumbledore", 1600),
        new Lecturer("Saruman", "Thewise", 1600),
        new Lecturer("Gandalf", "TheGrey", 1800)
    ]

    const studentsAndLecturers = [
        ...students,
        ...lecturers,
    ]

    console.group("1. Lecturer individualus funcionalumas")
    {
        lecturers.forEach((lecturer) => console.log(lecturer.getFullName(), lecturer.getSalary()))
        lecturers.forEach((lecturer) => lecturer.raiseSalary(50))
        lecturers.forEach((lecturer) => console.log(lecturer.getFullName(), lecturer.getSalary()))
    }
    console.groupEnd();

    console.group("2. Student individualus functionalumas")
    {
        const generateMark = () => Math.ceil(Math.random() * 10);

        students.forEach((student) => {
            for (let i = 0; i < 10; i++) {
                const grade = generateMark();
                student.addGrade(grade)
            }
        })

        students.forEach((student) => console.log(student.getFullName(), student.avg))
    }
    console.groupEnd();


    console.group("3. Student ir lecturer bendras functionalumas")
    {
        studentsAndLecturers.forEach((person) => console.log(person.getFullName()))
    }
    console.groupEnd();
}

{//inherited example

    class Person {
        name;
        surname;

        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }

        getFullName() {
            return this.name + " " + this.surname
        }
    }
    class Student extends Person {
        grades;

        constructor(name, surname, grades) {
            super(name, surname);
            this.grades = []
        }


        addGrade(grade) {
            this.grades.push(grade)
        }

        get avg() {
            return (this.grades.reduce((pervSum, grade) => pervSum + grade) / this.grades.length).toFixed(1)
        }
    }

    class Lecturer extends Person {
        salary;

        constructor(name, surname, salary) {
            super(name, surname)
            this.salary = salary;
        }

        getSalary() {
            return this.salary;
        }

        raiseSalary(amount) {
            this.salary += amount;
        }


    }

    const students = [
        new Student("Dorian", "Ashgray"),
        new Student("Elric", "Melnibone"),
        new Student("Rakhir", "RedArcher"),
    ]

    const lecturers = [
        new Lecturer("Albus", "Dumbledore", 1600),
        new Lecturer("Saruman", "Thewise", 1600),
        new Lecturer("Gandalf", "TheGrey", 1800)
    ]

    const studentsAndLecturers = [
        ...students,
        ...lecturers,
    ]

    console.group("1. Lecturer individualus funcionalumas")
    {
        lecturers.forEach((lecturer) => console.log(lecturer.getFullName(), lecturer.getSalary()))
        lecturers.forEach((lecturer) => lecturer.raiseSalary(50))
        lecturers.forEach((lecturer) => console.log(lecturer.getFullName(), lecturer.getSalary()))
    }
    console.groupEnd();

    console.group("2. Student individualus functionalumas")
    {
        const generateMark = () => Math.ceil(Math.random() * 10);

        students.forEach((student) => {
            for (let i = 0; i < 10; i++) {
                const grade = generateMark();
                student.addGrade(grade)
            }
        })

        students.forEach((student) => console.log(student.getFullName(), student.avg))
    }
    console.groupEnd();


    console.group("3. Student ir lecturer bendras functionalumas")
    {
        studentsAndLecturers.forEach((person) => console.log(person.getFullName()))
    }
    console.groupEnd();
}