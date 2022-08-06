function personalInformation(name,last,ageOf){
let myInfo = {
    firstName : name,
    lastName : last,
    age:ageOf
}

console.log(myInfo.firstName);
return myInfo;
}
personalInformation("Peter","Pan","20")