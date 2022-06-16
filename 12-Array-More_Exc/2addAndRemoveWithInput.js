function addRemove(input){
    let asd = 0;    
    let value = input[asd];   
    let result = [];
    let error = 0;
        for(i = 0;i<input.length;i++){
        value= String(input[asd]);
        asd++;
        if (value == `add`){
            result.push(i+1);
        }else if (value == `remove`){
            result.pop();
            error++;
    }
    if (error== input.length){
        console.log(`Empty`);
    }
    
    }console.log(result.join(` `));
}
    addRemove(['add', 'add', 'add','add'])
    addRemove(['add', 'add', 'remove', 'add','add'])
    addRemove(['remove', 'remove', 'remove']);