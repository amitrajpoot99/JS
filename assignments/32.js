//32. JavaScript Program to find largest of Three Numbers?

func=(num1,num2,num3)=>{
    if(num1>num2){
        [num1, num2]=[num2,num1]
    }
    if(num2,num3){
        [num2,num3]=[num3,num2]
    }
    console.log(`${num3} is greatest`)
}
func(30,25,95)