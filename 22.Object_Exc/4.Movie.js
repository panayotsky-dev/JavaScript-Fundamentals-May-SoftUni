// Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. You can receive several types of input:
// •	"addMovie {movie name}" – add the movie
// •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
// •	"{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.
function data(arrayWithInfo){
let movies = [];
arrayWithInfo.forEach((el)=> {
    if (el.includes(`addMovie `)){
        let movie = el.replace(`addMovie `, ``);
        movies.push({name:movie});
    }else if (el.includes(`directedBy`)){
        let movieInfo = el.split(` directedBy `);
        let name = movieInfo[0];
        let director = movieInfo[1];
        movies.forEach(movie =>{
            if (movie.name === name){
                movie.director = director;
            }
        })

    }else if (el.includes(`onDate`)){
        let [name,date] = el.split(` onDate `);
        movies.forEach(movie =>{
            if (movie.name === name){
                movie.date = date;
            }
        })
    }
});

movies.forEach(movie =>{
    if(movie.name && movie.date && movie.director){
        console.log(JSON.stringify(movie));
    }
});
}
data([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )