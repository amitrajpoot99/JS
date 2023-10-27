//24. Write a program to check if a number is 3-digit numbers or not?

func=(num)=>{
    if(typeof(num)!=="number"){
        console.log("not a number")
    }
    else if(num>999 || num<100){
        console.log(`not a three digit number`)
    }
    else{
        console.log(`Given no is three digit no`)
    }
}

func(99)
func(1000)
func(555)
func("a")