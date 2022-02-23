// https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript

function solution(lottos, win_nums) {
    let count = 0;
    let correctCount = 0;
    lottos.map(item => {
        if(!item){count++}
        if(win_nums.some(el=>el===item)){
            correctCount++;
        }
    })
    return [7-((correctCount+count)||1), 7-(correctCount||1)]
}