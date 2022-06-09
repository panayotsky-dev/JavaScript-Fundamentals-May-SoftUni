// Write a function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.
// Output
// Print the resulting array elements separated by a single space.
function rotations(array,number){
    while(number > 0){
        let current = array.shift();
        array.push(current)
        number--;
    }
    console.log(array.join(` `))
}
rotations([51, 47, 32, 61, 21], 2)
rotations([32, 21, 61, 1], 4)
rotations([2, 4, 15, 31], 5)