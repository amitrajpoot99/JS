

const arr=[32,12,33,40];

const arr1=arr.reduce(function(p,v){
   return p*=v;
},1)
console.log(arr1)