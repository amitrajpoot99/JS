/* let goToGoa=(success,failure)=>{
    let amount =45000 
    amount > 50000 ? success("Enjoy!...")
                     :failure("Go to PG! Open Laptop")

}

goToGoa(()=>{},()=>{})
 */

let goToGoa=(success,failure)=>{
    let amount =45000 
    amount > 50000 ? success("Enjoy!...")
                     :failure("Go to PG! Open Laptop")

}

goToGoa((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})