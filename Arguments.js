let sum = 0 ;
function add (num1,num2){
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];  
         sum = sum + element ;
        
    }    
   
}

 add(3,5,7,8,10,20);
console.log(sum);