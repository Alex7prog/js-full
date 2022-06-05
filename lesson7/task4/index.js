// best students
//['Ann', 'Tom', 'Bob', 'Kate'] => ['Tom', 'Bob'], ['God job, Ann','God job, Kate']

// 1. Find passed students
// 2. Add 'Good job'

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//   // const passedStudents = allStudentsList.filter(
//   //   (name) => studentsForRetake.indexOf(name) === -1
//   // );

//   const passedStudents = allStudentsList.filter(
//     (name) => !studentsForRetake.includes(name)
//   );

//   const messages = passedStudents.map((name) => 'God job, ' + name);

//   return messages;
// };

// refactoring code
const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .filter((name) => !studentsForRetake.includes(name))
    .map((name) => `Good job, ${name}`);

// examples
const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest1 = ['John', 'Mike'];

getMessagesForBestStudents(allStudTest1, retakeStudTest1); // ===> ['Good job, Den', 'Good job, Ann']
console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1));
console.log('allStudTest1: ', allStudTest1);
console.log('retakeStudTest1: ', retakeStudTest1);

const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
getMessagesForBestStudents(allStudTest2, retakeStudTest2); // ===> []
console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2));
