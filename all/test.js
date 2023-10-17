
function outer() {
    console.log("inside outer")
    var a = 100;
    console.log(a);
    function inner() {
        console.log("inside inner")
        console.log(a)
    }
    a = 10
    return inner
}
outer();

for(var i=1; i<4; i++){
    setTimeout(()=>{
        console.log(i)
    },i*1000);
}

for(let i=1; i<4; i++){
    setTimeout(()=>{
        console.log(i)
    },i*1000);
}

// var x = outer();
// x();

// function myFunction(p1, p2) {
//     return p1 * p2;
//   }
  
//   let result = myFunction(4, 3);
//  console.log(result);

//  let car1={brand:"KIA", model:"Seltos",fuel:"Diesel", Price:20};
 
//  console.log(car1.brand);

//  let car2=["KIA","Sonet",15];
//  car2.push("Diesel");
//  console.log(car2);
//  car2[3]="Petrol";
//  console.log(car2);

//  let a1=30;
//  let a2=20;
//  console.log(a1,a2);

