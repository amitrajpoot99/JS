
const input=[{val: 2}, {val:5}, {val: 10}, {val:12}, {val: 22}]; 

const outputSum= input.reduce((sum, v)=> sum+=v.val, 0)
const outputAvg= outputSum/input.length;

console.log("Sum:", outputSum)
console.log("Average:", outputAvg)

console.log(`Sum: ${outputSum}`);