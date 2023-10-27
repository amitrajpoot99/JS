import bcrypt from 'bcrypt'

let user={
    name:"Rahul",
    email:"rahul@pm.com",
    cc:"444455556666677778888",
    password:"LuckFellow"
}

console.log(user)

let salt=bcrypt.genSaltSync(10)
let newCC=bcrypt.hashSync(user.cc,salt)
let newPassword=bcrypt.hashSync(user.password,salt)

//update cc and password with newCC and newPassword
let newUser={...user,cc:newCC,password:newPassword}


console.log(newUser)