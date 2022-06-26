//*version 2 // didn't get 100/100 score
function tresureHunt(array){
let withoutSplit = array.shift();
let firstTressure = withoutSplit.split(`|`);
let newArray = [];
let arrayTosTring = ``;
let finalArray = [];
let result = [];
let finalSum = 0;
    for(i=0; i<array.length;i++){  // making newArray from input array
        newArray.push(array[i]);
        
        arrayTosTring = newArray.toString();
    }
    // console.log(newArray)
let command = arrayTosTring.split(`,`);
        for(j=0; j<command.length; j++){
            if(command[j].includes(`Loot`))
                {            
                let tempToString = command[j].split(` `);
                for(l = 1; l < tempToString.length; l++)
                    {
                    if(!firstTressure.includes(tempToString[l]))
                        {
                        firstTressure.unshift(tempToString[l]);
                        }           
                    }
                }
            if(command[j].includes(`Drop`)){
                
                let drop = command[j].split(` `)
                let dropNumber = drop.pop();
                if(dropNumber >=0){                
                let droppingItem = firstTressure[dropNumber];                
                let dropItem = firstTressure.splice(Number(dropNumber),1);
                firstTressure.push(droppingItem);
                // console.log(firstTressure);
                finalSum += firstTressure.length;
            }
            }
            if(command[j].includes(`Steal`)){
                let steal = command[j].split(` `);
                let stealNumber = steal.pop();
                // console.log(stealNumber);
                if(stealNumber >= firstTressure.length){
                    console.log(firstTressure.join(`, `));
                    console.log(`Failed treasure hunt.`);
                    break;
                }else{``
                    let count = firstTressure.length - stealNumber;
                    result = firstTressure.splice(count,firstTressure.length);
                    // console.log(result);
                    
                }
            }if (command[j] == `Yohoho!`){
                
                let countIndex = firstTressure.join(``);            
                let sumIndexOfTressure = countIndex.length;
                let finalsum = sumIndexOfTressure / firstTressure.length;
                console.log(result.join(`, `))
                console.log(`Average treasure gain: ${finalsum.toFixed(2)} pirate credits.`);
                
            }
        }          
}
tresureHunt(["Gold|Silver|Bronze|Medallion|Cup","Loot Wood Gold Coins","Loot Silver Pistol","Drop 3","Steal 3","Yohoho!"])
tresureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
