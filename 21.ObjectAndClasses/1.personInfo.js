// Write a function that receives 3 parameters, sets them to an object, and returns that object.
// The input comes as 3 separate strings in the following order: firstName, lastName, age

function personInfo(firstName,lastName,age){
let res = {};
res.firstName = firstName;
res.lastName = lastName;
res.age = age;
return res;

}

console.log(personInfo(`Peter`,`Pan`,`20`));