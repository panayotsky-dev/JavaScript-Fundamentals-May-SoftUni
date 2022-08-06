// Define a class Song, which holds the following information about songs: typeList, name, and time.
// You will receive the input as an array.
// The first element n will be the number of songs. Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}", and the last element will be typeList / "all".
// Print only the names of the songs, which have the same typeList (obtained as the last parameter). If the value of the last element is "all", print the names of all the songs.
function solveSongs(arr){
        class Song{
            constructor(typeList, name, time){
                this.typeList = typeList;
                this.name = name;
                this.time = time;
            }       
            printSongName(){
                console.log(this.name);
            } 
        }
    let songs = [];
    let numberOfSongs = arr.shift();
    let typeWanted = arr.pop();
        for(let i=0; i<numberOfSongs; i++){
            let [typeList,name,time] = arr.shift().split(`_`);
            let song = new Song(typeList,name,time);
            if (typeList == typeWanted || typeWanted == `all`){
                song.printSongName();
            }
        }
        
}
solveSongs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )