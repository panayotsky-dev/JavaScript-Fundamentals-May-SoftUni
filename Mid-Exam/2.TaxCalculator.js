function taxcalculator(data){
    let tax = 0;
    let year = 0;
    let km = 0;
    let sum = 0;
    let allTax = 0;
let array = data[0].split(`>>`)
for(i=0; i<array.length; i++){
    let command = array[i].split(` `).shift();
    // console.log(command);
    if(command ==`family`){
        let newArr = array[i].split(` `);
        tax = 50;
        year = Number(newArr[1]) * 5;        
        km = Math.floor(Number(newArr[2])/3000) * 12;
        sum = tax - year + km;
        allTax+=sum;
        console.log(`A family car will pay ${sum.toFixed(2)} euros in taxes.`);

    }else if(command ==`heavyDuty`){
        let newArr = array[i].split(` `);
        tax = 80;
        year = Number(newArr[1]) * 8;        
        km = Math.floor(Number(newArr[2])/9000) * 14;
        sum = tax - year + km;
        allTax+=sum;
        console.log(`A heavyDuty car will pay ${sum.toFixed(2)} euros in taxes.`);

    }else if(command ==`sports`){
        let newArr = array[i].split(` `);
        tax = 100;
        year = Number(newArr[1]) * 9;        
        km = Math.floor(Number(newArr[2])/2000) * 18;
        sum = tax - year + km;
        allTax+=sum;
        console.log(`A sports car will pay ${sum.toFixed(2)} euros in taxes.`);

    }else{
        console.log(`Invalid car type.`)
    }
}
console.log(`The National Revenue Agency will collect ${allTax.toFixed(2)} euros in taxes.`)


}
taxcalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])
// taxcalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ])
