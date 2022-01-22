function solution(answers) {
    let answerArr = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    let scoreArr = [0, 0, 0];
    
    answers.map((item, index) => {
        answerArr.map((item2, index2)=>{
            const currentIndex = index%item2.length;
            if(item2[currentIndex]==answers[index]){
                scoreArr[index2]++;
            }
        })
    })
    const max = Math.max(scoreArr[0], scoreArr[1], scoreArr[2]);
    let answer = [];
    scoreArr.map((item, index)=>item==max&&answer.push(index+1));
    
    return answer;
}