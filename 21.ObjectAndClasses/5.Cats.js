// Write a function that receives array of strings in the following format '{cat name} {age}'.
// Create a Cat class that receives in the constructor the name and the age parsed from the input. 
// It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the console.
// For each of the strings provided, you must create a cat object and invoke the .meow () method.
function solve(catsData){
class Cat{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`)
    }
}
let cats = [];
for (let catData of catsData){
    let splited = catData.split(` `);
    let catName = splited[0]
    let catAge = splited[1];
    let myCat = new Cat(catName, catAge);
    cats.push(myCat);
}
for(let myCat of cats){
myCat.meow();
}
}
solve(['Mellow 2', 'Tom 5'])