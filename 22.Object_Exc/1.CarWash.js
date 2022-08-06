// Write a JS function that receives some commands. Depending on the command, add or subtract a percentage of how much the car is cleaned or dirty. Start from 0. The first command will always be 'soap':
// •	soap – add 10 to the value
// •	water – increase the value by 20%
// •	vacuum cleaner – increase the value by 25%
// •	mud – decrease the value by 10%
// The input comes as an array of strings. When finished cleaning the car, print the resulting value in the format:
//              `The car is {value}% clean.`
//   Note: The value should be rounded to the second decimal point.


//*version1
function carWash(arr){
let carCleanedStatus = 0;
for (let type of arr){
    if (type == `soap`){
        carCleanedStatus +=10;    
    }
    if (type == `water`){
        carCleanedStatus = carCleanedStatus * 1.2;
    }
    if(type =='vacuum cleaner'){
        carCleanedStatus = carCleanedStatus * 1.25;
    }
    if(type ==`mud`){
        carCleanedStatus = carCleanedStatus * 0.9;
    }
}
console.log(`The car is ${carCleanedStatus.toFixed(2)}% clean.`);
}

//*version2
// function carWash(arr){
//     let carCleanedStatus = 0;
//     for(let i=0; i<arr.length; i++){
//         switch(arr[i]){
//             case `soap`: carCleanedStatus += 10; break;
//             case `water`: carCleanedStatus = carCleanedStatus*1.2; break;
//             case `vacuum cleaner` : carCleanedStatus= carCleanedStatus * 1.25;break;
//             case `mud`: carCleanedStatus = carCleanedStatus * 0.9; break;        
//     }    
// }
// console.log(`The car is ${carCleanedStatus.toFixed(2)}% clean.`);
// }

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])