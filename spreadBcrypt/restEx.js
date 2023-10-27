
//rest exp
function add(a,...b){
    console.log("a=",a, ", b Value:", b)
}
add(10,20)
add(10,20,30)
add(10,20,30,40)
add(10,20,30,40,50)




//spread exp

 let arr=[10,20,30]
sum(...arr)

let sum=(a,b,c)=>{
    console.log(a,b)
}