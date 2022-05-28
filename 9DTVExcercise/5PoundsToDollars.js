//* Write a function that converts British pounds to dollars formatted to the 3rd decimal point. 
//* •	1 British Pound = 1.31 Dollars
function poundToDollars(pound){
    let dollars = pound  * 1.31;
    console.log(dollars.toFixed(3))
}