// *Write a program, which receives an array of numbers,
//  and condenses them by summing adjacent couples of elements
//  * until a single number is obtained. 
// Examples
// For example, if we have 3 elements [2, 10, 3],
//  we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13},
//   then we sum again all adjacent elements and obtain {12+13} = {25}.
//* 3 = (1+2)+(2+3) ; 4 = (1+2)+(2+3)+(3+4) + (4+5) and etc. */
//*array.length = (i+1) + 
//*a = (1+2) ; b = (2+3); c = (3+4) ; d = (4+5)
//* 1 = (1+2) ;2 = (2+3) ;3 = (3+4) ; etc. */
//* 0 = 0+1; 1 = 1+2; 2 = 2+3; 3 = 3+4; 4 = 4+5;

function strangeCalcs(numbers){
let firstArray = [];

for(let i = 0; i < numbers.length; i++){
    firstArray.push(numbers[i]);
}
while (firstArray.length > 1){
    let tempArr = [];
    for(j = 0; j < firstArray.length-1; j++){
        tempArr[j]= firstArray[j] + firstArray[j+1];
    }
    firstArray = tempArr;
}
console.log(firstArray.join());  // *prisvoqvame




}   



strangeCalcs([2,10,3])
strangeCalcs([5,0,4,1,2])
strangeCalcs([1])
