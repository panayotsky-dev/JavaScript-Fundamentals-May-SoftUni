// Write a password reset program that performs a series of commands upon a predefined string. First, you will receive a string, and afterward, until the command "Done" is given, you will be receiving strings with commands split by a single space. The commands will be the following:
// •	"TakeOdd"
// o	 Takes only the characters at odd indices and concatenates them to obtain the new raw password and then prints it.
// •	"Cut {index} {length}"
// o	Gets the substring with the given length starting from the given index from the password and removes its first occurrence, then prints the password on the console.
// o	The given index and the length will always be valid.
// •	"Substitute {substring} {substitute}"
// o	If the raw password contains the given substring, replaces all of its occurrences with the substitute text given and prints the result.
// o	If it doesn't, prints "Nothing to replace!".
// Input
// •	You will be receiving strings until the "Done" command is given.
// Output
// •	After the "Done" command is received, print:
// o	"Your password is: {password}"
// Constraints
// •	The indexes from the "Cut {index} {length}" command will always be valid.
// Examples

function passwordResset(data) {
    let startingPassword = data.shift();

    
    let commandParser = {
        "TakeOdd": (startingPassword) => {
            return [...startingPassword].filter((symbol, index) => { return index % 2 !== 0 })
                .join('')
        },
        'Cut': (startingPassword, index, length) => {
            index = Number(index);
            length = Number(length);
            let substring = startingPassword.substr(index, length);
            return startingPassword.replace(substring, '');
            

        },
        'Substitute': (startingPassword, substring, substitute) => {
            if (startingPassword.includes(substring)) {
                return startingPassword.replace(new RegExp(substring, 'g'), substitute);
            }
            console.log(`Nothing to replace!`);
            return startingPassword;
        }
    };
    data.forEach(line =>{
        if (line != 'Done') {
            let [command, ...tokens] = line.split(' ');
            let oldPassword = startingPassword;
            startingPassword = commandParser[command](startingPassword, ...tokens);
            if (oldPassword !== startingPassword){
                console.log(startingPassword);
            }
        }
    })

console.log(`Your password is: ${startingPassword}`)

}
passwordResset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
