function solution(progresses, speeds) {
    var answer = [];
    
    let restArr = [];
    progresses.map((item, index) => {
        restArr.push(Math.ceil((100-item)/ speeds[index]))
    });
    
    let bundleArr = [];
    restArr.map((item, index)=>{
        if(index===0){bundleArr.push([item]); return}
        let currentIndex = bundleArr.length-1;
        if(bundleArr[currentIndex][0]<item){
            bundleArr.push([item])    
        }else{
            bundleArr[currentIndex].push(item);
        }
    })
    
    bundleArr.map(item=>{
        answer.push(item.length)
    })
    return answer;
}