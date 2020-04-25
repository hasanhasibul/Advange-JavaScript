const  nums = [1,2,3,-4,5,6,-7,8,9];
for (let i = 0; i < nums.length; i++) {
     
     if (nums[i]<0) {
         break;// break and stop loop
     }
     console.log(nums[i]);
}

for (let i = 0; i < nums.length; i++) {
     
    if (nums[i]<0) {
       continue ; // egnor and continue loop
    }
    console.log(nums[i]);
}