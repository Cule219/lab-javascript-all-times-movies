// Get the average of all rates with 2 decimals
function ratesAverage(array) {
    return array.length === 0?0:Math.round(array.map(x => x.rate).reduce((acc, val) => acc + val)/array.length*100)/100;
}
// Get the average of Drama Movies
function dramaMoviesRate(array) {
    return ratesAverage(array.filter(x => x.genre.includes('Drama')));
}
// Order by time duration, ascending
function orderByDuration(array) {
    return array.sort((a,b) => b.duration-a.duration).reverse();
}
// How many movies did Steven Spielberg direct
function howManyMovies(array) {
    return array.filter(a => a.director === 'Steven Spielberg' && a.genre.includes('Drama')).length;
}
// Order by title and print the first 20 titles
function orderAlphabetically(array) {
    return array.map(x => x.title).sort().slice(0, 20);
}
// Best yearly rate average
function bestYearAvg(array){
    if(array.length == 0) return null;
    let newO = [];
    let year = 0;
    let rating = 0;
    array.sort().forEach(element => {
      newO.indexOf[element.year] === undefined?newO[element.year]={name: element.year,count:1, rate:element.rate, rating: element.rate}:
(newO[element.year].count++, newO[element.year].rate= parseFloat(newO[element.year].rate) + parseFloat(element.rate)
, newO[element.year].rating = newO[element.year].rate/newO[element.year].count, year > newO[element.year]);
    });
    Object.keys(newO).forEach(element => {
      if(rating < newO[element].rating){ year=newO[element].name, rating =newO[element].rating}
    })
    return `The best year was ${year} with an average rate of ${rating}`;
  }

// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    return array.map(x => {
        let c = 0;
        if(x.duration.indexOf('min') != undefined) c+= Number(x.duration.substring(x.duration.indexOf(' '), x.duration.indexOf('min')));
        if(x.duration.indexOf('h') != -1) c+= Number(x.duration[0]*60);
        return Object.assign({}, x, {duration: c})
    });      
}
