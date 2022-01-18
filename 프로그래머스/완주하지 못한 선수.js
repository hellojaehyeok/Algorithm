// https://talkwithcode.tistory.com/8?category=1019915

function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i = 0 ; i < participant.length ; i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }

}