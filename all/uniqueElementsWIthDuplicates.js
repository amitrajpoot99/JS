const input = [44, 22, 9, 10, 2, 44, 88, 3, 9, 4, 22, 10];

//Fetch out the unique elements which only have duplicates. 

function uniqueElementsWithDuplicates(arr){
    const output=[];
    for(const value of arr){
        if(arr.indexOf(value) !== arr.lastIndexOf(value) && !output.includes(value) ){
           
            output.push(value);
        }
    }
    return output
}

console.log(uniqueElementsWithDuplicates(input))


//

console.log(input.filter((v,i,a)=>{
    return i !=a.indexOf(v) && i==a.lastIndexOf(v)
}))