const students = [
    {
      name: 'Panatėja',
      surname: 'Sulindytė',
      faculty: 'Informatikos fakultetas',
      course: 2,
      modules: [
        {
          title: 'Operacinės sistemos',
          credits: 6,
          marks: [10, 7, 7, 6, 9]
        },
        {
          title: 'Algoritmų analizė',
          credits: 9,
          marks: [8, 8, 6, 4, 6]
        },
        {
          title: 'Tikimybės ir Statistika',
          credits: 6,
          marks: [9, 7, 8, 9, 6]
        },
        {
          title: 'Inžinerinis projektas',
          credits: 3,
          marks: [10, 8, 9, 8]
        },
        {
          title: 'Kompiuterių architektūra',
          credits: 6,
          marks: [6, 8, 7, 8, 8]
        }
      ]
    },
    {
      name: 'Serbentautas',
      surname: 'Bordiūras',
      faculty: 'Informatikos fakultetas',
      course: 1,
      modules: [
        {
          title: 'Matematika',
          credits: 6,
          marks: [7, 6, 9, 10, 8]
        },
        {
          title: 'Duomenų struktūros',
          credits: 6,
          marks: [7, 8, 9, 4, 8]
        },
        {
          title: 'Skaitmeninė logika',
          credits: 6,
          marks: [6, 8, 10, 9, 9]
        },
        {
          title: 'Objektinis programavimas',
          credits: 6,
          marks: [10, 8, 9, 8, 8]
        },
        {
          title: 'Fizika',
          credits: 6,
          marks: [6, 7, 8, 8, 8]
        }
      ]
    },
    {
      name: 'Laptokas',
      surname: 'Klavianskas',
      faculty: 'Informatikos fakultetas',
      course: 1,
      modules: [
        {
          title: 'Matematika',
          credits: 6,
          marks: [9, 8, 10, 9, 10]
        },
        {
          title: 'Duomenų struktūros',
          credits: 6,
          marks: [9, 9, 10, 10, 8]
        },
        {
          title: 'Skaitmeninė logika',
          credits: 6,
          marks: [10, 10, 10, 9, 10]
        },
        {
          title: 'Objektinis programavimas',
          credits: 6,
          marks: [9, 8, 9, 10, 10]
        },
        {
          title: 'Fizika',
          credits: 6,
          marks: [8, 9, 8, 10, 8]
        }
      ]
    },
    {
      name: 'Skaistė',
      surname: 'Kolbaitė',
      faculty: 'Chemijos fakultetas',
      course: 2,
      modules: [
        {
          title: 'Organinė chemija',
          credits: 6,
          marks: [9, 9, 10, 9, 8]
        },
        {
          title: 'Inžinerinės medžiagos',
          credits: 3,
          marks: [10, 10, 10, 9, 9]
        },
        {
          title: 'Entalpija ir Entropija',
          credits: 6,
          marks: [9, 9, 9, 9]
        },
        {
          title: 'Polimerų atmainos ir produktai',
          credits: 9,
          marks: [10, 9, 8, 10, 7]
        },
        {
          title: 'Pramoninė chemija',
          credits: 6,
          marks: [9, 10, 10, 10, 9]
        }
      ]
    },
    {
      name: 'Cilindras',
      surname: 'Katalizatorius',
      faculty: 'Chemijos fakultetas',
      course: 2,
      modules: [
        {
          title: 'Organinė chemija',
          credits: 6,
          marks: [6, 8, 9, 4, 8]
        },
        {
          title: 'Inžinerinės medžiagos',
          credits: 3,
          marks: [9, 8, 7, 8, 10]
        },
        {
          title: 'Entalpija ir Entropija',
          credits: 6,
          marks: [7, 8, 9, 10, 6]
        },
        {
          title: 'Polimerų atmainos ir produktai',
          credits: 9,
          marks: [8, 9, 6, 4]
        },
        {
          title: 'Pramoninė chemija',
          credits: 6,
          marks: [8, 7, 9, 5, 9]
        }
      ]
    },
    {
      name: 'Grandinius',
      surname: 'Varžauskas',
      faculty: 'Elektros ir elektronikos fakultetas',
      course: 1,
      modules: [
        {
          title: 'Matematika',
          credits: 6,
          marks: [8, 9, 9, 9, 9]
        },
        {
          title: 'Elektos grandinės',
          credits: 6,
          marks: [8, 7, 9, 9, 10]
        },
        {
          title: 'Elektros tinklai',
          credits: 6,
          marks: [9, 9, 8, 8, 10]
        },
        {
          title: 'Braižyba',
          credits: 6,
          marks: [6, 8, 9, 8, 7]
        },
        {
          title: 'Fizika',
          credits: 6,
          marks: [9, 9, 9, 10, 8]
        }
      ]
    },
  ];
  
  console.groupEnd();
  
  console.groupCollapsed('1. Atspausdinti visus Informatikos fakulteto studentus');
  {
    function printItStudents(student){
      for(const person of student){
        if(person.faculty === "Informatikos fakultetas"){
        console.log(`${person.name}, ${person.surname}`);
      }
      }
    }
    printItStudents(students)
  }
  console.groupEnd();
  
  console.groupCollapsed('2. Atspausdinti visus Chemijos fakulteto studentus');
  {
    function printChemStudents(student){
      const chemStudent = student.filter(person => person.faculty === "Chemijos fakultetas");
      chemStudent.forEach(student => {
        console.log(`${student.name} ${student.surname}`);
      })
    }
    printChemStudents(students)
  }
  console.groupEnd();
  
  console.groupCollapsed('3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
  {
    function printElectroStudents(student){
      const electroStudent = student.filter(person => person.faculty === "Elektros ir elektronikos fakultetas");
      electroStudent.forEach(student => {
        console.log(`${student.name} ${student.surname}`)
      })
    }
   printElectroStudents(students)
  }
  console.groupEnd();
  
  console.groupCollapsed('4. Atspausdinti tik pirmo kurso studentus');
  {
    function firstCourseStudents(student){
      const firstCourse = student.filter(person => person.course === 1);
      firstCourse.forEach(student =>{
        console.log(`${student.name} ${student.surname}`)
      })
    }
    firstCourseStudents(students)
  }
  console.groupEnd();
  
  console.groupCollapsed('5. Atspausdinti tik antro kurso studentus');
  {
    function secondCourseStudents(student){
      const secondCourse = student.filter(person => person.course === 2);
      secondCourse.forEach(student =>{
        console.log(`${student.name} ${student.surname}`)
      })
    }
    secondCourseStudents(students)
  }
  console.groupEnd();
  
  console.groupCollapsed('6. Atspausdinti tik trečio kurso studentus');
  {
    function thirdCourseStudents(student){
      const thirdCourse = student.filter(person => person.course === 3);
      thirdCourse.forEach(student =>{
        console.log(`${student.name} ${student.surname}`)
      })
    }
    thirdCourseStudents(students);
  }
  console.groupEnd();
  
  console.groupCollapsed('7. Atspausdinti tik ketvirto kurso studentus');
  {
    function fourthCourseStudents(student){
      const fourthCourse = student.filter(person => person.course === 4);
      fourthCourse.forEach(student =>{
        console.log(`${student.name} ${student.surname}`)
      })
    }
    fourthCourseStudents(students);
  }
  console.groupEnd();
  
  console.groupCollapsed('8. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
  { function returnMedian(student){
     
  }
returnMedian(students);
  }
  console.groupEnd();

  console.groupCollapsed('9. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
  {
    function returnAverageIt(array){
      array.forEach(student =>{
        if(student.faculty === "Informatikos fakultetas"){
          const totalMarks = student.modules.reduce((acc, module) => {
                  return acc + module.marks.reduce((a, b) => a + b, 0);
                }, 0);
          console.log(`${totalMarks}`);
        }
      })
    }
    returnAverageIt(students)
  }
  console.groupEnd();
  
  console.groupCollapsed('10. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
  {
    function returnAverageChem(array){
      array.forEach(student =>{
        if(student.faculty === "Chemijos fakultetas"){
          const totalMarks = student.modules.reduce((acc, module) => {
                  return acc + module.marks.reduce((a, b) => a + b, 0);
                }, 0);
          console.log(`${totalMarks}`);
        }
      })
    }
    returnAverageChem(students)
  }
  console.groupEnd();
  
  console.groupCollapsed('11. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
  {
    function returnAverageElectric(array){
      array.forEach(student =>{
        if(student.faculty === "Elektros ir elektronikos fakultetas"){
          const totalMarks = student.modules.reduce((acc, module) => {
                  return acc + module.marks.reduce((a, b) => a + b, 0);
                }, 0);
          console.log(`${totalMarks}`);
        }
      })
    }
    returnAverageElectric(students)
  }
  console.groupEnd();