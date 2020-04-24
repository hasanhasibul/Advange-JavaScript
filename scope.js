// scope (let and const are scope variable) : when defined a variable using let and const , it can not be accessable into the block{}
// var is hosting variable .which is host on variable and it can be accessable out site of the block {}
function add (first,second){
    let result =  first + second ;
    if (result>5) {
        var value = "result";
        console.log(value);
        
    }
    return result;
   
}
// console.log(value);
const sum = add (5,7);
console.log(sum);