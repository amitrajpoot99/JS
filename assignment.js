// 1
function printCalculator(){
    console.log("This is a Calculator1");
}
printCalculator();
console.log(" ")

//2
function printCalculator2(){
   // let str="This is a Calculator2"
   // return(str);
   return("This is a Calculator2")
}   
console.log(printCalculator2());
console.log(" ")

//3
function print3(a,b,c){
    console.log(a,b,c);
}
print3(5,10,20);
console.log(" ")

//4
function print4(a,b,c){
    return(a+b+c);
}
console.log(print4(5,10,20));
console.log(" ")

//5
function sumWithValidation(a,b,c){
    
    if(typeof a === "number" && typeof b === "number" && typeof c === "number"){
        //return(a+b+c);
        console.log(a+b+c)
    }
    else{
        return 0;
    }
}
sumWithValidation(5,10,15);
console.log(" ")

//6
function multiplication(a,b){
    return(a*b);
}
console.log(multiplication(10,20));
console.log(" ")

//7
let fun = function(){ 
    return("This is a function Expression")
};
console.log(fun());
console.log(" ")


//8
let funreturn = function(a){ 
    return(a);
};
let b=funreturn(20);
console.log(b);

function a(str){
    if(typeof(str) === 'string')
    {
        console.log(str.toLocaleLowerCase())
    }
}

a(1);



function checkDataType(a){
    switch(typeof(a)){
        case 'number':
            console.log('Its a number')
            return;
            break;

        case 'string':
            console.log('its a string')
            break;
            
        case 'boolean':
            console.log('its a boolean')
            break;
            


        default:
            console.log("its might be object or undefined")
    }

}

checkDataType(1);

let num=0;
while(num<=10){
    console.log("printing", num)
    num++
}
let a1=[1,2];
console.log(a1[3])