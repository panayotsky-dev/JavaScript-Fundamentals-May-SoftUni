// You are a world traveler, and your next goal is to make a world tour. To do that, you have to plan out everything first. To start with, you would like to plan out all of your stops where you will have a break.
// On the first line, you will be given a string containing all of your stops. Until you receive the command "Travel", you will be given some commands to manipulate that initial string. The commands can be:
// •	"Add Stop:{index}:{string}":
// o	Insert the given string at that index only if the index is valid
// •	"Remove Stop:{start_index}:{end_index}":
// o	Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
// •	"Switch:{old_string}:{new_string}":
// o	If the old string is in the initial string, replace it with the new one (all occurrences)
function worldTour(data){
    let initialString = data.shift();
    
    let line =data.shift();
    while(line !== `Travel`){
        let [action,firstParam,lastParam] = line.split(":");
        let startIndex;
        let endIndex;
        switch(action){
            case `Add Stop`:
                startIndex = Number(firstParam);
                if(startIndex < 0 || startIndex >= initialString.length){
                    console.log(initialString);
                    break;
                }
                let value = lastParam;
                let firstPart = initialString.slice(0,startIndex);
                let secondPart = initialString.slice(startIndex);
                initialString = firstPart + value + secondPart;
                console.log(initialString);
        
            break;
            case `Remove Stop`:
                startIndex = Number(firstParam);
                endIndex = Number(lastParam);
                if (!initialString[startIndex] || !initialString[endIndex]) {
                    console.log(initialString);
                    break;
                }
                let subStr = initialString.substring(startIndex, endIndex + 1);
                initialString = initialString.replace(subStr, '');
                console.log(initialString);
        // •	"Remove Stop:{start_index}:{end_index}":
        // o	Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
            break;

            case `Switch`:
                let newValue = lastParam;
                let oldValue = firstParam;
                let pattern = new RegExp(oldValue, 'g');
                initialString = initialString.replace(pattern, newValue);
                console.log(initialString);        
            break;
        }



        line = data.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${initialString}`)
}
worldTour((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
)