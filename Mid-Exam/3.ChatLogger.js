function chatLogger(data){
    let newArr =[];
    let commands=[];
    let index=0;
    let pin=[];
    for(i=0;i<data.length;i++){
        commands=data[i].split(' ');
        if(commands[0] ==`Chat`){
            commands.shift();
            newArr.push(...commands);     
                  
        }else if (commands[0] == `Edit`){
            commands.shift();            
            if(newArr.includes(commands[0])){                
                index = newArr.indexOf(commands[0]);
                newArr.splice(index,1,commands[1]);
               
            }
        }else if (commands[0] == `Spam`){
            commands.shift();
            for(z=0;z<commands.length;z++){  
                newArr.push(commands[z]);
            }      
       
    }else if (commands[0] == `Delete`){
        commands.shift();
        if(newArr.includes(commands[0])){
            index = newArr.indexOf(commands[0]);
            
            newArr.splice(index,1);       
        }

    }else if (commands[0] == `Pin`){
        commands.shift();
        if(newArr.includes(commands[0])){
            index = newArr.indexOf(commands[0]);            
            pin = newArr.splice(index,1);
            newArr.push(pin[0]);

            
        }
    }else if (commands[0] == `end`){
        for (x=0;x<newArr.length;x++){
            console.log(newArr[x]);
        }
    }   
}
    

}
chatLogger(["Chat Hello",
"Chat darling",
"Edit darling Darling",
"Spam how are you",
"Delete Darling",
"end"])
// chatLogger(["Chat Hello",
// "Delete John",
// "Pin Hi",
// "end"])
// chatLogger(["Chat John",
// "Spam Let's go to the zoo",
// "Edit zoo cinema",
// "Chat tonight",
// "Pin John",
// "end"])


