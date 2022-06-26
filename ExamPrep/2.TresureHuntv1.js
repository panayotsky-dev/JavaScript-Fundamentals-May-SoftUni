//*version 1
function tresureHunt(arr) {
    let treasureArray = arr.shift().split("|");
    let commandsArray = arr;
    let stealArray = [];
  
    for (i = 0; i < commandsArray.length - 1; i++) {
      let commandArray = commandsArray[i].split(" ");
      let command = commandArray.shift();
  
      if (command == "Loot") {
        for (j = 0; j < commandArray.length; j++) {
          let index = treasureArray.indexOf(commandArray[j]);
          if (index === -1) {
            treasureArray.unshift(commandArray[j]);
          }
        }
      } else if (command == "Drop") {
        if(+commandArray >= 0 && +commandArray < treasureArray.length){
          el = treasureArray.splice(+commandArray, 1);
          treasureArray.push(...el);
        }
  
      } else if (command == "Steal") {
        stealArray = treasureArray.slice(-commandArray);
        for (l = 0; l < +commandArray; l++) {
          treasureArray.pop();
        }
        console.log(stealArray.join(", "));
      } else {
        break;
      }
    }
  
  
    if (treasureArray.length > 0) {
      let sumHunt = 0;
      for (k = 0; k < treasureArray.length; k++) {
        sumHunt += treasureArray[k].length;
      }
  
      let finalSumHunt = sumHunt / treasureArray.length;
      console.log( `Average treasure gain: ${finalSumHunt.toFixed(2)} pirate credits.` );
    } else {
      console.log("Failed treasure hunt.");
    }
  }
  tresureHunt(["Gold|Silver|Bronze|Medallion|Cup","Loot Wood Gold Coins","Loot Silver Pistol","Drop 3","Steal 3","Yohoho!"])
tresureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])