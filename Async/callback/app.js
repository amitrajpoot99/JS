let employees=[
    {eid:101,ename:"Rahul Gandhi", esal:45000},
    {eid:102,ename:"Sonia Gandhi", esal:55000},
]

let edata=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },4000)
    
    
}

let getEmp=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
        rows+= `<tr>
                    <td>${emp.eid}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.esal}</td>
                 </tr>`
    }
    document.getElementById('tdata').innerHTML=rows
        
    },2000)
    
    
}


edata({eid:103,ename:"deekshit",esal:80000},getEmp)
