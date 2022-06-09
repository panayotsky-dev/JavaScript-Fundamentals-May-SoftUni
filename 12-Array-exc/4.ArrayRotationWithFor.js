// Write a function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.
// Output
// Print the resulting array elements separated by a single space.

function rotations(array,number){
    let newArray = [];
    let second = [];
    let third = [];
    let arrL = Number(array.length);
    let asd = Number(number);
    for (i=0;i<array.length;i++){
        newArray.push(array[i]);
        second.push(array[i])
    }
    if (number <= array.length){
        for ( j=0;j<number;j++){
        
            second = newArray.slice(j+1)
            for ( z = 0; z<number; z++){
                second.push(array[z])
            }         
                        
        }console.log(second.join(` `));
    }else {
            for ( q=0;q<asd-arrL;q++){        
                second = newArray.slice(q+1)
                for ( w = 0; w<number; w++){
                    second.push(array[w])
                    }                   
                } 
        for(e=0;e< array.length; e++){
            third.push(second[e])
        }console.log(third.join(` `));

    }
    
}
rotations([51, 47, 32, 61, 21], 2)
rotations([32, 21, 61, 1], 4)
rotations([2, 4, 15, 31], 5)