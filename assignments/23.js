//23. Write a program to check if a number is positive or not?

func=(num)=>{
    if(num==0){
        console.log(`${num} is neither positive nor negative`)
    }
    else if(num>0){
        console.log(`${num} is positive`)
    }
    else{
        console.log(`${num} is negative`)
    }
}
func(0)
func(25)
func(-2)