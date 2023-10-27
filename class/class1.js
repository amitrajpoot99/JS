class Class1{

    constructor(id,name){
        this.id=id;
        this.name=name;
        this.bal=1000;
    }
    add_bal(amount){
        this.bal+=amount
    }
    wdr_bal(amount){
        this.bal-=amount;
    }
  

}

let a1=new Class1(101,"deekshit")
let a2=new Class1(102,"sri")
console.log(a1)
console.log(a2)

a1.add_bal(500)
a2.add_bal(600)

a1.wdr_bal(50)
a2.wdr_bal(100)

console.log(a1)
console.log(a2)