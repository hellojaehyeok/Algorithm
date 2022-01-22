// 1차 시도
function solution(citations) {
    citations = citations.sort((a, b)=>a-b);
    for(let i = Math.ceil(citations.length/2) ; i > 0 ; i--){
        if(citations.filter(item=>item>citations[i]).length+1 >= citations[i]){
            return citations[i]
        }
    }
}

// 2차 시도 
function solution(citations) {
    citations = citations.sort((a,b)=>b-a);
    for(let i = 0 ; i < citations.length ; i++){
        if(i+1 == citations[i]){
            return citations[i];
        }
    }
}

console.clear();
function solution(citations) {
    citations = citations.sort((a,b)=>b-a);
    let count = 0;
    for(let i = 0 ; i < citations.length ; i++){
        if(i+1 <= citations[i]){
            count++;
        }
    }
    return count;
}
console.log(solution([47, 42, 32, 28, 24, 22, 17, 15, 10, 10, 8]));
console.log(solution([3, 0, 6, 1, 5]));


// i+1 --> i번째 수보다 큰 수들의 양
// citations[i] --> 현재 수 
// 이해 중