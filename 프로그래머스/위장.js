// https://talkwithcode.tistory.com/9?category=1019915

function solution(clothes) {
    let result = 1;
    let newObj = {};
    clothes.map(el=>{
        newObj[el[1]]=newObj[el[1]]?newObj[el[1]]+1:1;
    })
    for(let key in newObj){
        result *= newObj[key]+1;
    }
    
    return result-1;
}