function changeName(){
    document.getElementById("1").innerHTML="success"
}

function changeColor(){
    document.getElementById('2').style.backgroundColor="red"
}

function changeInputColor(){
    document.getElementById('focus').style.backgroundColor="yellow"
}

function changeCase(){
    let data=document.getElementById('changeCase').value;
    document.getElementById('changeCase').value=data.toUpperCase();
}

setInterval(function()  {
    var a=new Date().toLocaleTimeString()
    document.getElementById('clock').innerHTML=a
    
}, 1000);

setTimeout