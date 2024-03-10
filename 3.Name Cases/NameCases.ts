// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName2:string = "bilal ahmed"
console.log("lowercase:", personName2.toLowerCase())
console.log("uppercase:", personName2.toUpperCase())
console.log("titlecase:", personName2.replace(/\b\w/g,c=> c.toUpperCase()))
