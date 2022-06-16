// Write a function that rotates an array.
// The array should be rotated to the right side,
// meaning that the last element should become the first,
// upon rotation. 
// The input comes as an array of strings.
// The last element of the array
// is the amount of rotation you need to perform.
// The output is the resulting array after the rotations.
//  The elements should be printed on one line,
//   separated by a single space.
function arrayRotation(array){
    let newArray = [];
    let lastItem = ``;
    let arrayL = array.length;    
    let result = [];  
    let rotations = array[arrayL-1];
    let rotationsDevided = rotations % (arrayL-1); 
     
    for(i=0; i<arrayL-1; i++){
        newArray.push(array[i]);
        result.push(array[i]);
}
    for(z = 0;z<rotationsDevided;z++){
        lastItem = newArray.pop()
        result.pop()
        result.unshift(lastItem);
    }
console.log(result.join(` `));
}
arrayRotation(['1', '2', '3', '4', '2'])
arrayRotation(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
 