//21. Write a program to check if a number is divisible by 7 or not?

let func=(num)=>{
    if(typeof(num)!=="number"){
        console.log("not a number")
    }
    else if(num%7==0){
        console.log(`${num} is divisible by 7`)
    }
    else{
        console.log(`${num} is not divisible by 7`)
    }
}

func("a")
func(13)

func(63)