const students = [
    {id:1,name:"Omor Sunny "},
    {id:2,name:"Maaannaaa "},
    {id:3,name:"Moyori "},
    {id:4,name:"DeepJol "},
]

// const studentsName = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     studentsName.push(element.name);
    
// }
const studentsName = students.map(sN => sN.name);
console.log(studentsName);

const studentsId = students.map(sI => sI.id);
console.log(studentsId);

const filterName = students.filter(s => s.id>3);
console.log(filterName);

const findStudents = students.find(fS => fS.id >1);
console.log(findStudents);