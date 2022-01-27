// https://talkwithcode.tistory.com/44

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
