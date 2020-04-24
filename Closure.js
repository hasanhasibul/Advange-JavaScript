function stopWatch(){
    let count =0 ;
    return function(){
        count ++
        return count;
    }
}
const clock1=stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());


const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());

console.log(clock1());
console.log(clock2());

// when function return another function ,then function create a environment that's called closure.
// When you create an internal scope but can’t access from outside
// Call a function inside a function or return a function from another