function cookingmasterclass(data){
  let budget = data[0];
  let students = data[1];
  let flour = data[2];
  let oneEgg = data[3];
  let singleApron = data[4];
  
  let apronPrice = (singleApron * Math.ceil(students * 1.2));
  let allEggs = students * oneEgg * 10;
  let freePacks = Math.floor(students/5);
  let allFlour = (students - freePacks) * flour;
  let sum = apronPrice + allFlour + allEggs; 

 
 if (budget > sum){
    console.log(`Items purchased for ${sum.toFixed(2)}$.`)
 }else {
    let negative = sum- budget;
    console.log(`${negative.toFixed(2)}$ more needed.`)
 }  

}
cookingmasterclass([50,2,1.0,0.10,10.0])
cookingmasterclass([100,25,4.0,1.0,6.0])
cookingmasterclass([946,20,12.05,0.42,27.89])