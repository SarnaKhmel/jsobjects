// // let value = arr.reduce(function (previousValue, item , index, array){

// // }, [initial]);
// // використовується рідко а також вважається повільним

// // const arr = [1, 2, 3];
// // const result = arr.reduce((sum, current, index, array) => {
   
// //     return sum += current;

// //     //return sum + array[index] + current;
// // }, 0)

// // console.log(result);

// // const arr = [1, 2, 3];
// // let sum = 0;
// // const result = arr.forEach((current) => {
// //     let n = 0 ;
// //     n += current;
// //     console.log(n);
// // })

// // const users = [
// //     {id: 1, name: 'John1'},
// //     {id: 2, name: 'John2'},
// //     {id: 3, name: 'John3'},
// //     {id: 4, name: 'John4'}
// // ];

// // const filteredUsers = users.filter((user) =>{
// //     return user.id !== 3;
// // });
// // console.log(filteredUsers);

// // const usersWithSurname = filteredUsers.map((user) => {
// //     user.surname = `Doe ${user.id}`;
// //     return user;
// // })

// // console.log(usersWithSurname);
// // const resultat  = users.filter((user) => {
// //     return user.id !== 3;
// // }).map((user) => {
// //     user.surname = `Doe ${user.id}`
// //     return user;
// // });



// // console.log(resultat)

// // let str = ['a', 'b', 'c', 'd', 'e', 'f'].join('').toUpperCase().split('').reverse().join('').toLowerCase().split('').reverse();
// // console.log(str);


const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  
  
// // const getSubjects = (human) => {
// //     let arr = [];
// //     for( let student in students){
// //         if (students[student].name == human) {
// //              for (let subject in students[student].subjects){
// //                  arr.push(subject);
// //              }
// //               console.log("result ", arr);
// //         }
// //     }

// //     // for(let i= 0 ; i < arr.length; i++){
// //     //     let a = arr[i];
// //     //     a.slice().charAt(0).toUpperCase().join('');
        
// //     //     console.log("result ", arr[i]);
// //     // }
    
    
// // }

// // getSubjects("Anton");

const getAverageMark = (id) => {
 // console.log('getAverageMark')
 let result = 0;
    for (let student in students){
      if (student == id){
        //console.log(" Concret student ", students[student].name)
      // console.log(students[student].subjects);
        let marksArray = [];
        for(let subject in students[student].subjects){
        // console.log(` subject =  `, students[student].subjects[subject])
          marksArray = marksArray.concat(students[student].subjects[subject])
        }
        //console.log(marksArray)
        const  average = (nums) => {
          return  Math.floor(((nums.reduce((a, b) => (a + b)) / nums.length)) * 100) / 100;
        }
        average(marksArray);
      }
  }
  return 
}



// // const getAverageMark2 = (student) => {
// //   let marks = Object.values(student.subjects);
// //   console.log("marks " , marks);
// // }

// // getAverageMark2(students[1]);


const getStudentInfo = (id) => {
  for (let student in students){
    if (student == id){
      //console.log("Name ", students[student].name)
      //console.log("Course ", students[student].course)
      //getAverageMark(id);
      const studentInfo = {
        course: students[student].course,
        name: students[student].name,
        average: getAverageMark(student)
      } 
      console.log(studentInfo);
    }
  }

  

}

 getStudentInfo(2)

// // const getStudentsNames = (students) => {
// //   let names = [];
// //   for (let student in students){
// //     names = names.concat(students[student].name)
// //   }
// //   console.log("Student", names);
// // }

// // getStudentsNames(students);

// // const getBestStudent = (students) => {
// //   for (let student in students){

// //   }
// // }
// // getBestStudent(students)

// //calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 }

const calculateWordLetters = (word) => {
  const lettersArr = word.split('');
  const letterResult  = lettersArr.reduce((lettersCount, letter) =>{
    if (lettersCount[letter]) {
      lettersCount[letter] += 1;
    }
    else {
      lettersCount[letter] = 1;
    }
    return lettersCount;
  }, {})
  
  return letterResult;
} 

// console.log(`Count of letters in word`, calculateWordLetters("Oleksa"));


const users = [
  {
    name: 'Oleksa',
    surname: 'Sarna',
    age: 18,
    adress: {
      country: 'United States',
      city: 'Lviv',
      street: 'Highway',
      build: '12a'
    }

  },
  {
    name: 'Ivan',
    surname: 'Hans',
    age: 28,
    adress: {
      country: 'Livia',
      city: 'Jordan',
      street: 'Lowway',
      build: '654'
    }

  },
  {
    name: 'Max',
    surname: 'Shiter',
    age: 23,
    adress: {
      country: 'Galich',
      city: 'Lemberg',
      street: 'Dirtway',
      build: '123'
    }

  },

];


