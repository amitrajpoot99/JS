const input= [10, 20, 7, 10, 22, 9, 22, 10, 1,4, 9];

const output= input.some((v)=>v>25)

console.log(output)

if(output)
console.log("Yes")
else
console.log("No")


console.log(output ? "Yes" : "No");
  
//Print ‘Yes’ if any of the number in this array is greater than 25 else Print ’No
//some() if one condition is true o/p will be true