// Write a function that finds the longest sequence
//  of equal elements
//  in an array of numbers. 
// If several longest sequences exist,
//  print the leftmost one.

function equalElements(array){
    let maxSequence = [];
    for(let i = 0; i < array.length; i++){
        let currentSequence = [];
        for(let j = i; j < array.length; j++){
            if(array[i]== array[j]){
                currentSequence.push(array[i]);
            }else{
                break;
            }
            if(currentSequence.length>maxSequence.length){
                maxSequence = currentSequence;
            }
        }
        
    }console.log(maxSequence.join(' '));
    }
    equalElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
    equalElements([1, 1, 1, 2, 3, 1, 3, 3])
    equalElements([4, 4, 4, 4])
    equalElements([0, 1, 1, 5, 2, 2, 6, 3, 3])