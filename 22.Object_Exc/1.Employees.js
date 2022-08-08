// You're tasked to create a list of employees and their personal numbers.
// You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
// Try to use an object.
// At the end print all the list employees in the following format:
//  "Name: {employeeName} -- Personal Number: {personalNum}" 
function employees(data){
for(let i = 0; i < data.length; i++){
    console.log(`Name: ${data[i]} -- Personal Number: ${data[i].length}`)
}
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )