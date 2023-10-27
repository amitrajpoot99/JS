class Parent{
    constructor(){
        console.log(`something`)
    }
    method1(){
        console.log(`parent class method1 method`)
    }
    method2(){
        console.log(`parent class method2 method`)
    }
}

class Child extends Parent{
    constructor(){
        super()
        console.log(`child constructor`)
    }
    method3(){
        console.log(`child class method3 method`)
    }
}

let a1= new Child()
a1.method1()
a1.method3()
a1.method2()