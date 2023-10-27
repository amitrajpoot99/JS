//22. Write a program to check if a number is multiple of 3 or not?


let func=(num)=>{
    if(typeof(num)!=="number"){
        console.log("not a number")
    }
    else if(num%3==0){
        console.log(`${num} is multiple by 3`)
    }
    else{
        console.log(`${num} is not multiple by 3`)
    }
}

func(21)
func("c")
func(22)