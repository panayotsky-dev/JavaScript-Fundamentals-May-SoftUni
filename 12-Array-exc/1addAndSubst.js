// Write a function, which changes the value of odd and even numbers in an array of numbers. 
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position
// Output
// On the first line print the newly modified array,
//  on the second line print the sum of numbers from the original array,
//   on the third line print the sum of numbers from the modified array.

function addOrSubstract(array){
    let newArr = [];
    let secondArr = [];
    let sumBefore = 0;
    let sumAfter = 0;
    for ( i=0; i<array.length; i++){
        newArr.push(array[i])
    }
    for(j=0; j<newArr.length; j++){
        if(newArr[j] % 2 == 0){
            secondArr.push(newArr[j]+j)
        }else{
            secondArr.push(newArr[j]-j)
        }        
    }console.log(secondArr)
    
    for(x=0; x<array.length; x++){
        sumBefore += array[x];
    }
    console.log(sumBefore);
    for (z=0; z<secondArr.length; z++){
        sumAfter += secondArr[z];
    }
    console.log(sumAfter);
}
addOrSubstract([5, 15, 23, 56, 35])
addOrSubstract([-5, 11, 3, 0, 2])
