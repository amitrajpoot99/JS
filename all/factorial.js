factorial(10)

function factorial(num){
    let fact=num
    if(num<0){
        console.log("Please enter positive number!")
    }
    else if(num===0){
        console.log("factorial of "+ num+" is 1")

    }
    else{
        for(i=num-1;i>1;i--){
        fact=fact*i
        }    
    console.log("factorial of "+ num+" is "+fact)
    }
}

