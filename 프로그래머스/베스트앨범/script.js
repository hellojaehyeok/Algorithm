function solution(genres, plays) {
    let genresLengthArr = {};
    let sortData = {};
    let answer = [];

    genres.map((item, index) => {
        genresLengthArr[item] = genresLengthArr[item]?genresLengthArr[item]+plays[index]:plays[index]   
        sortData[item]=sortData[item]?sortData[item]:[];
        sortData[item].push([genres[index], plays[index], index])
    });
    
    const sortable = Object.fromEntries(Object.entries(genresLengthArr).sort(([, a], [, b]) => b - a));
    
    for(let key in sortData){
        sortData[key].sort(([,a,], [,b,]) => b-a);
    }
    for(let key in sortData){
        sortData[key] = sortData[key].splice(0, 2);
    }
    
    for(let key in sortable){
        sortData[key].map(item => answer.push(item[2]))
    }
    return answer;
}

const _genres = ["classic", "pop", "classic", "classic", "pop", "classic"]
const _plays = [500, 600, 150, 800, 2500, 500];

console.log(solution(_genres, _plays)); // [4, 1, 3, 0]
