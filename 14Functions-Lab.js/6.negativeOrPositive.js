// Write a function, that checks whether the result of the multiplication
//*  numOne * numTwo * numThree 
//* is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.
// Input
// The input comes as parameters named numOne, numTwo, numThree.
// Output
//* •	If the result is positive, print on the console -> "Positive"
//* •	Otherwise, print -> "Negative"
function negativeSum(numOne,numTwo,numTree){
    let negative = 0;
    let array = [numOne,numTwo,numTree];
    for(let i = 0; i < array.length; i++){
        let tempArray =[];
        tempArray.push(Number(array[i]));
        if(tempArray<0){
            negative++;           
        }
    } 
    if(negative%2==0){
        console.log(`Positive`)
    }else{console.log(`Negative`)}     
} 
negativeSum(5,12,-15)
negativeSum(-6,-12,14)
negativeSum(-1,-2,-3)
negativeSum(-5,1,1)