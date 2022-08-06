// Write a function that receives a string in JSON format and converts it to an object.
// Loop through all the keys and print them with their values in format: "{key}: {value}"
function convert(jsonString){
let person = JSON.parse(jsonString);
let entries = Object.entries(person);
for(let [key, value] of entries){
console.log(`${key}: ${value}`);
}
}
convert('{"name": "George", "age": 40, "town": "Sofia"}')