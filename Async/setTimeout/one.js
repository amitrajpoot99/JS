//It is a asynchronous function that does not block the normal execution of the code

setTimeout(function(){ 
    console.log("Request - 1")
},10000)

setTimeout(()=>{
    console.log("Request - 2")
},3000)

setTimeout(()=>{
    console.log("Request - 3")
},2000)

setTimeout(()=>{
    console.log("Request - 4")
},4000)

console.log("hi")