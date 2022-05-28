//* Write a function that prints whether a given character
// * is upper-case or lower-case.

function lowerOrUpper(char){
    let a = char;
    let c = a.charCodeAt(0);
    if (c >= 65 && c <= 90){
        console.log(`upper-case`)
    }else if (c >=97 && c <= 122){
        console.log(`lower-case`)
    }
    
    } 
lowerOrUpper(`A`)