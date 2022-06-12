// Write a function that receives two integer numbers.
//  Calculate the factorial of each number.
//  Divide the first result by the second and
//   print the division formatted to the second decimal point.
// Examples
function factorial(a, b) {
    let factorialOfA = 1;
    let factorialoFB = 1;
    
    for(let i =1;i<=a;i++){
        factorialOfA *=i;
    }
    for(let i =1;i<=b;i++){
        factorialoFB *=i;
    }
    
    
    let result= factorialOfA / factorialoFB;
    console.log(result.toFixed(2))

    }
factorial(5,2)