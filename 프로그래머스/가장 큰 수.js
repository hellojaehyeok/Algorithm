// https://talkwithcode.tistory.com/42

function solution(numbers) {
    const answer = numbers.map(item=>String(item)).sort((a,b)=>(b+a)-(a+b)).join("");
    
    return answer[0]==="0"?"0":answer
}