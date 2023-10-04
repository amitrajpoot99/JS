function f1(){
    console.log("F1")
}

function f2(){
    console.log("F2")
}

function f3(){
    console.log("F3")
}

function main(){
    console.log("MAIN")

    setTimeout(f1,0);
    setTimeout(f3,60);

    new Promise((resolve, reject)=>
        resolve('I am a Promise, right after f1 & f3! Really?')
        ).then(resolve=>console.log(resolve));

    
    new Promise((resolve, reject)=>
        resolve('I am a Promise after Promise!')
        ).then(resolve=>console.log(resolve));
    
    f2();
        
}

main();