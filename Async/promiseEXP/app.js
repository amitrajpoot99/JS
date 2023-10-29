let employees=[
    {eid:101,ename:"Rahul Gandhi", esal:45000},
    {eid:102,ename:"Sonia Gandhi", esal:55000},
]

let createEmp=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            employees.push(emp)
            let flag=true
            flag?resolve("emp data inserted"):reject("failed")
        }, 3000);
    })
}

let getEmployees=()=>{
    setTimeout(() => {
        let rows=""

        for (emp of employees){
            rows+=`<tr>
                    <td>${emp.eid}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.esal}</td>
                    </tr>`
        }
        document.getElementById('tbody_Data').innerHTML=rows
    }, 2000);
}

createEmp({eid:103,ename:"sri",esal:80000})
.then((msg)=>{
    console.log(msg)
    getEmployees()
})
.catch((err)=>{
    console.log(err)
})