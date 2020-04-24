const numbers = [4,3,5,6,7,8];
// const newNumbers =[];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     elements =  element * element;
//     newNumbers.push(elements);
    
// }

// console.log(newNumbers);

// function square(element){
//     return element * element ;
// }

// const result = numbers.map(function square(element){
//     return element * element ;
// }
// )
// console.log(result);

// numbers.map(function(element,index,array){
//     console.log(element,index,array);
// })

// const result = numbers.map(function(element){
//     return element * element;
    
// })
// console.log(result);

const result = numbers.map(element => element * element);
console.log(result);

const bigger = result.filter( x =>x < 25);
const findOut = numbers.find(x => x >5)
console.log(bigger);
console.log(findOut);
