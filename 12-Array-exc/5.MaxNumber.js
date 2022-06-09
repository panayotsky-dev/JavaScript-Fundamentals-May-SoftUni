// Write a function to find all the top integers in an array.
//  A top integer is an integer,
//   which is bigger than all the elements to its right. 
// Output
// Print all top integers on the console,
//  separated by a single space.
function maxNumber(array){
let currentArray = [];
let arrayLength = array.length;
let numbers = [];


for(let i=0; i<array.length; i++)
{
    currentArray.push(Number(array[i]));
}
let max = Math.max(...currentArray)
let test = currentArray.indexOf(max)
for (i=test;i<arrayLength;i++){
    if(currentArray[i] > currentArray[i+1] || i == arrayLength-1){
    numbers.push(Number(currentArray[i]));
    }
}

console.log(numbers.join(' '));
// console.log(max)
// console.log(test)
}
maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])
