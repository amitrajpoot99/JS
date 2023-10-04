//1. destructure 'America'
const obj1 = { name: 'Kratos', City: 'NY', Country: 'America'}
 const{Country}=obj1;
 console.log(Country)

//2. destructure John and Wick . Print "John Wick"
 const obj2 = { name: {fname: 'John', lname: 'Wick'}, city: 'Toronto'}
 const{name:{fname,lname}}=obj2
 console.log(fname+" "+lname)

 //3. destructure 'Valar Morghulis', 'Spartan'.
const obj3 = {person1: { name: 'No One', address: { city: 'Bravos',
 slogan: 'Valar Morghulis'}}, person2: {name:'Spartan',
 address: {city: 'SpartanCity', slogan: 'Ahoooo'}}};
 const{person1:{address:{slogan}}}=obj3
 console.log(slogan)

 //4. destructure 'Sea', 'Rock', 'Water' as Water, Earth, Oxygen
const obj4 = {elements: { water : 'Sea', earth: 'Rock', air: 'Oxygen'}}
const{elements:{water:Water,earth:Earth,air:Oxygen}} = obj4
console.log(Water,Earth,Oxygen)

//5. destructure 1
 const arr = [1,'c', 8]
 const[v]=arr
 console.log(v)

 //6. destructure 5
const arr1 = [1,2,3,4,5];
const[,,,,v1]=arr1
console.log(v1)

//7. destructure d
const arr2 = ['a', 'b', 'c', 'd', 'e'];
const[,,,str]=arr2
console.log(str)

//8. destructur 'Targareyan' and 'Starks'
const arr3 = [['Targareyan'], ['Starks'], ['Greyjoy'], ['Arryn']];
const[[a],[b]]=arr3
console.log(a,b)

//9.destructure 'Celin'
const arr4 = [{name: 'Celin'}, {name: 'George'}];
const[{name}]=arr4
console.log(name)

//10. destructure 'Chandler' as fname and 'Bing' as lname and form an Object and Print it.
const arr5 = [{firstName: 'Chandler'}, {lastName: 'Bing'}];
const[{firstName:fname1},{lastName:lname1}]=arr5
const friends={fname1,lname1}
console.log(friends)

//11.destructure 'Elija', 'Klaus' and 'Rebecca' as elder, middle, younger
const obj = {originals: ['Elija', 'Jade', 'Walter White', 'Daemon', 'Klaus', 'Rebecca']};
const{originals:[elder,,,,middle,younger]}=obj
console.log(elder,middle,younger)

//12.destructure 'Elina' and 'Caroline'
const obja1 = [{wolfies: ['Hayley', 'Elina', 'Rafael', 'Aiden']}, {vampires: ['Salvatore','Caroline']}];
const[{wolfies:[,a4]},{vampires:[,a5]}]=obja1
console.log(a4,a5)