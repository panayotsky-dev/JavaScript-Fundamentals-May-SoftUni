// Write a program, which receives a number n and an array of elements.
//  Your task is to create a new array with n numbers from the original array
// , reverse it and print its elements on a single line, space-separated.
function reverse(n,inputArray) {
    let arr = [];
    for (let i=n;i>0;i--){
        arr.push(inputArray[i-1]);
        
    
    
    
    }
    console.log(arr.join(` `))
    
    }
    reverse(3, [10, 20, 30, 40, 50])