prime_no(4)

function prime_no(a){
    let flag=true
    
    for(i=2;i<=a-1;i++){
        if(a%i==0){
            flag=false
            break;
        }
    }
    if(flag)
        console.log(a+" is prime")
    else
    console.log(a+" is not prime")
}
//-ve, 0, 1 are not prime ?