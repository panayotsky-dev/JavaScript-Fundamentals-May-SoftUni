// Write a function that receives a first name, last name, hair color and sets them to an object.
// Convert the object to JSON string and print it.
// Input is provided as 3 single strings in the order stated above.
function toJson(name,lastName,hairColor){
let object = {
    name,lastName,hairColor,
};
let convert = JSON.stringify(object);

console.log(convert);

}
toJson('George', 'Jones', 'Brown')