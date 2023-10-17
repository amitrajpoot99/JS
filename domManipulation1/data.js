let employees=[{eid:101,ename:"Rahul", esal:45000},
{eid:102,ename:"Sonia", esal:65000},
{eid:103,ename:"Priyanka", esal:75000},
{eid:104,ename:"Modi", esal:85000},
]


let data=()=>{
    //alert("hi")
    let adata="";
    for(let i=0;i<=employees.length-1;i++){
        adata+=`<tr>
                    <td>${employees[i].eid}</td>
                    <td>${employees[i].ename}</td>
                    <td>${employees[i].esal}</td>
                 </tr>`
    }
    document.getElementById('edata').innerHTML=adata

}