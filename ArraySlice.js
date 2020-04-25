const  nums = [1,2,3,4,5,6,7,8,9];
console.log(nums);
const ArraySlice = nums.slice(2,5);
console.log("ArraySlice",ArraySlice);

const arraySplice = nums.splice(3,5,88,99);
console.log("arraySplice",arraySplice);
console.log(nums);

const arrayJoin = nums.join("  ");
console.log(arrayJoin);

// let array1 = [1,2,3];
// console.log(array1);
// array1=[4,5,6];
// console.log(array1);
// const array1Join = array1.join(",");
// console.log(array1Join);