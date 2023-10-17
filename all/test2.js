
let a=[]
let b=[10,10,20.5,'rahul','y',true,undefined,[],{}]

console.log(a)
console.log(b)

let ids=[101,102,103,104]
//index  0   1   2     3
console.log(ids)
//how to read array elements - using index
//syntax  - array[index]

console.log(ids[0])
console.log(ids[1])
console.log(ids[2])
console.log(ids[3])
console.log(ids[4])

let enames=['rahul','sonai','priyanka','Modi','vijay','nayana']

//print all employeess
console.log(enames)
//print employee names
console.log(enames[0])
console.log(enames[1])
console.log(enames[2])
console.log(enames[3])
console.log(enames[4])
console.log(enames[5])


let enames1=['rahul','sonai','priyanka','Modi']
//index     0        1          2           3

for(var i=0;i<=3;i++){
console.log(enames1[i])
}
 
// let i=0
// while(i<=3){
//     console.log(enames1[i])
//     i++
// }


let ids1=[101,102,103,104,{name:'rahul'}]
console.log(ids1)
//print array elements using for....of 
//print array elements using for(){}


for (id of ids1){
    console.log(id)
}


