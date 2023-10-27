//26. Write a program to print the greatest number in given two numbers?


func=(num1, num2)=>{
    if(typeof(num1)!=="number" || typeof(num2)!=="number"){
        console.log(`not a number`)
    }
    else if(num1>num2){
        console.log(`${num1} is greater than ${num2}`)
    }
    else{
        console.log(`${num2} is greater than ${num1} `)
    }
}
func(10,5)
func(6,25)
func(-10,10)
func("a",2)

//27. Write a program to print the least number given two numbers?
func=(num1, num2)=>{
    if(typeof(num1)!=="number" || typeof(num2)!=="number"){
        console.log(`not a number`)
    }
    else if(num1>num2){
        console.log(`${num2} is smaller than ${num1}`)
    }
    else{
        console.log(`${num1} is smaller than ${num2} `)
    }
}
func(10,5)
func(6,25)
func(-10,10)
func("a",2)