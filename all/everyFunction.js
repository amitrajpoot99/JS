const input= [10, 20, 7, 10, 22, 9, 22, 10, 1,8, 9];

const output= input.every((v)=>v>5)

console.log(output)

console.log(output ? "Yes" : "No" );

//Print. ‘Yes’ if all of the number in this array is greater than 5
// every() if one condition id false o/p will be false
