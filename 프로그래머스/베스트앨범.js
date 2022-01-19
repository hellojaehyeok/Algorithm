// https://talkwithcode.tistory.com/37?category=1019915

function solution(genres, plays) {
    let genresLengthArr = {};
    let sortData = {};
    let answer = [];

    genres.map((item, index) => {
        genresLengthArr[item] = genresLengthArr[item]?genresLengthArr[item]+plays[index]:plays[index]   
        sortData[item]=sortData[item]?sortData[item]:[];
        sortData[item].push([plays[index], index])
    });
    
    genresLengthArr = Object.fromEntries(Object.entries(genresLengthArr).sort(([, a], [, b]) => b - a));
    
    for(let key in sortData){
        sortData[key].sort(([a,], [b,]) => b-a);
    }
    for(let key in sortData){
        sortData[key] = sortData[key].splice(0, 2);
    }

    for(let key in genresLengthArr){
        sortData[key].map(item => answer.push(item[1]))
    }
    return answer;
}

const _genres = ["classic", "pop", "classic", "classic", "pop"]
const _plays = [500, 600, 150, 800, 2500];



console.log(solution(_genres, _plays)); // [4, 1, 3, 0]
