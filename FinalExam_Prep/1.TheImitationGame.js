
function imitationGame(data){
    let startingMsg = data.shift();
    let currentLine = data.shift();
    while(currentLine!== `Decode`){
        let temp = '';
        let tokens = currentLine.split('|');
        let command = tokens[0];
            if (command == `Move`){
                let lettersNumber = +tokens[1];
                let lettersToMove = startingMsg.substring(0,lettersNumber);
                temp = startingMsg.replace(lettersToMove,"");
                temp += lettersToMove;
                startingMsg = temp;
            }else if (command == `Insert`){
                let index = +tokens[1];
                let value = tokens[2];
                temp = startingMsg.split("");
                temp.splice(index,0,value);
                startingMsg = temp.join(``);

            }else if(command ==`ChangeAll`){
                let substring = tokens[1];
                let replace = tokens[2];
                while(startingMsg.includes(substring))
                {
                temp = startingMsg.replace(substring, replace);
                startingMsg = temp;
                }
                startingMsg = temp;
                
            }
           
            currentLine = data.shift();
    }
    console.log(`The decrypted message is: ${startingMsg}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  )