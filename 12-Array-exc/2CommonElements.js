// Write a function, which prints common elements in two string arrays.
//  Print all matches on separate lines.
//   Compare the first array with the second array.
function commonE(firstArray,secondArray){

    for (const element of firstArray){
        if(secondArray.includes(element)){
            console.log(element)
    }         
    
}}
commonE(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])
