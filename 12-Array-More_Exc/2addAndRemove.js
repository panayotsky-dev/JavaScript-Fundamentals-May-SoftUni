// Write a function that adds and removes numbers to/from an array.
//  You will receive a command, which can either be "add" or "remove".
// The initial number is 1. Each input command should increase that number,
// regardless of what it is.
// ·Upon receiving an "add" command,
//  you should add the current number to your array.
// ·Upon receiving the "remove" command,
// you should remove the last entered number,
// currently existent in the array.
// Input
// The input comes as an array of strings.
// Each element holds a command.
// Output
// Print elements in a row, separated by a single space.
// In case of an empty array, just print "Empty".
function addRemove(array){
let asd = array
let result = [];
let error = 0;
for ( i=0; i<asd.length; i++){
    if (asd[i] == `add`){
        result.push(i+1)
    }else if (asd[i] == `remove`){
        result.pop()
        error++;
    }
}
if (error== array.length){
    console.log(`Empty`);
}
console.log(result.join(` `))    

}
addRemove(['add', 'add', 'add', 'add'])
addRemove(['add', 'add', 'remove', 'add', 'add'])
addRemove(['remove', 'remove', 'remove']);