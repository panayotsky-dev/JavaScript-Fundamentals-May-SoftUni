function computerStore(input){
    let index = 0;
    let priceWithoutTaxes = input[index];
    
    let sum = 0;
    
    const specialDiscount = 0.9;
    const taxes = 1.2;
    const dds = 0.2;
    
    

    while (priceWithoutTaxes !==`special` && priceWithoutTaxes !==`regular`){
         if(priceWithoutTaxes <= 0)
         {priceWithoutTaxes=0; console.log(`Invalid price!`)};
         sum += Number(priceWithoutTaxes);
         index++;
         priceWithoutTaxes = input[index];
        
        
    }
    if (priceWithoutTaxes == `special`){
        if(sum > 0){
        console.log("Congratulations you've just bought a new computer!")
        console.log(`Price without taxes: ${sum.toFixed(2)}$`)
        let asd = sum * dds;
        console.log(`Taxes: ${asd.toFixed(2)}$`)
        console.log(`-----------`)
        sum = ((sum * taxes) * specialDiscount.toFixed(2));

        console.log(`Total price: ${sum.toFixed(2)}$`)
        }else { console.log(`Invalid order!`)}

    }else if(priceWithoutTaxes == `regular`){
        if(sum > 0){
            sum = sum.toFixed(2);
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sum}$`);
        let asd = sum * dds;
        console.log(`Taxes: ${asd.toFixed(2)}$`);
        console.log(`-----------`);
        sum = ((sum * taxes).toFixed(2));

    

        console.log(`Total price: ${sum}$`)
        }else { console.log(`Invalid order!`)}
    }
   
}