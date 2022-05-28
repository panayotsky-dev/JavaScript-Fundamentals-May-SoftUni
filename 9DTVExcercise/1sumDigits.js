//* Write a function, which will be given a single number.
//*  Your task is to find the sum of its digits
function sumD(num){
let count=0;
let numToString = num.toString();
    for (let i=0;i< numToString.length;i++){
        let sum = 0;
        sum += Number(numToString[i]);        
        count += sum;         
        }
    
    console.log(count)
    
}sumD(245678)