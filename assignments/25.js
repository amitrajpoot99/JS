//25. Write a program to print even or odd for a given number?

func=(num)=>{
    if(typeof(num)!=="number"){
        console.log("not a number")
    }
    else if(num%2==0){
        console.log(`${num} is even no`)
    }
    else{
        console.log(`${num} is odd no`)
    }
}

func(2)
func(3)
func(0)
func(-2)
func(-1)
func("a")