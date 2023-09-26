// function flat_array(arr) {
   
//         if (typeof arr === 'number') {
//             return arr;
//         }
//         else {
//             return flat_array(arr[0])
//         }
    
// }
// console.log(flat_array([[[1]]]))


let input= [[[[1]]]];
console.log(input.flat(Infinity))

function flat_array(arr){
    if(typeof arr ==='number'){
     return arr;
    }
    else{
     let temp= flatStep(arr);
     return flat_array(temp)
    }
 }
 
 function flatStep(a){
     return a[0];
 
 }
 console.log(flat_array([[[[1]]]]))
