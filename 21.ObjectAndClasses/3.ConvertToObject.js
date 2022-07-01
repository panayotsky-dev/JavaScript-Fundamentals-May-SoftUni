// Write a function that receives a string 
// in JSON format and converts it to an object.
// Loop through all the keys and print them
//  with their values in format: "{key}: {value}"

function convert(string){
let asd = JSON.parse(string);
for (let key of Object.keys(asd)){
    console.log(`${key}: ${asd[key]}`);
}
}
convert('{"name": "George", "age": 40, "town": "Sofia"}')