// Write a function that extracts only those numbers that form a non-decreasing subset.
// In other words, you start from the first element
// and continue to the end of the given array of numbers.
// Any number which is LESS THAN the current biggest one is ignored,
// alternatively if it’s equal or higher than the current
// biggest one you set it as the current biggest one
// and you continue to the next number. 
// Input
// The input comes as an array of numbers.
// Output
// The output is the processed array after the filtration,
// which should be a non-decreasing subset.
// The elements should be printed on one line, separated by a single space.
function nonDecreasing(array){
    let newArray = [];
    newArray.push(array[0]);
    for(i=0; i<array.length; i++){    
       if(array[i+1]>array[i]){
        newArray.push(array[i+1]);    
    }  
    
    }console.log(newArray.join(` `));
    }
nonDecreasing([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasing([ 1, 2, 3, 4])
nonDecreasing([ 20, 3, 2, 15, 6, 1])
