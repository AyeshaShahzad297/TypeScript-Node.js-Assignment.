// Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface datatype {
    name : string,
    age : number,
    gender : string,
    registered : boolean 
}

let person1:datatype = {
    name : "Ali",
    age : 20,
    gender : "Male",
    registered : true
}

let person2:datatype = {
    name : "Ahmed",
    age : 20,
    gender : "Male",
    registered : false
}

let person3:datatype = {
    name : "Alia",
    age : 20,
    gender : "Female",
    registered : true
}
console.log(person1)
console.log(person2)
console.log(person3)
