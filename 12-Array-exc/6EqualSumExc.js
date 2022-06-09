// Write a function that determines if there exists an element in the array of numbers
//  such that the sum of the elements on its left is equal to the sum of the elements on its right. 
// If there are NO elements to the left/right, their sum is 0. 
// Print the index that satisfies the required condition or "no" if there is no such index.

function equalSum(array){
    let foundIndex =`no`;
    let arrayL = array.length;
    for(i = 0;i< arrayL;i++){

        let leftSum = 0;
        let rightSum = 0;
        for(j =0;j< i;j++){
            leftSum += array[j];
        }
        for(k = i+1;k< arrayL;k++){
            rightSum += array[k];
        }
        if(leftSum === rightSum){
            foundIndex = i;
        }
    }console.log(foundIndex)
    
}
equalSum([1, 2, 3, 3])
equalSum([1,2])
equalSum([1])
equalSum([1,2,3])
equalSum([10,5,5, 99,3,4,2,5,1,1,4])