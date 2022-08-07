// On the first line of the input, you will be given a text string. You must extract the information about the food and calculate the total calories. 
// First, you must extract the food info. It will always follow the same pattern rules:
// •	It will be surrounded by "|" or "#" (only one of the two) in the following pattern: 
// #{item name}#{expiration date}#{calories}#   or 
// |{item name}|{expiration date}|{calories}|
// •	The item name will contain only lowercase and uppercase letters and whitespace
// •	The expiration date will always follow the pattern: "{day}/{month}/{year}", where the day, month, and year will be exactly two digits long
// •	The calories will be an integer between 0-10000
// Calculate the total calories of all food items and then determine how many days you can last with the food you have. Keep in mind that you need 2000kcal a day.
// Input / Constraints
// •	You will receive a single string
// Output
// •	First, print the number of days you will be able to last with the food you have:
// "You have food to last you for: {days} days!"
// •	The output for each food item should look like this:
// "Item: {item name}, Best before: {expiration date}, Nutrition: {calories}"
function adAstra(data){
    const needDailyCalories = 2000;
let pattern = /([#]|[\|])(?<itemName>[A-Za-z\s]+)\1(?<expirationDate>[0-9]{2}[\/][0-9]{2}[\/][0-9]{2})\1(?<caloriesNum>[0-9]{1,5})\1/g;
let str = data[0];
let match = null;
let totalCalories = 0;
let provisions = [];
while((match = pattern.exec(str))){    
    let item = match.groups[`itemName`];
    let expDate = match.groups[`expirationDate`];
    let calories = match.groups[`caloriesNum`];
    totalCalories += +calories;
    provisions.push(`Item: ${item}, Best before: ${expDate}, Nutrition: ${calories}`)

}
    let daysToSurvive = Math.floor(totalCalories / needDailyCalories) ;
    console.log(`You have food to last you for: ${daysToSurvive} days!`)
    console.log(provisions.join(`\n`))



}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )