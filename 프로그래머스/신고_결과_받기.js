// https://programmers.co.kr/learn/courses/30/lessons/92334?language=javascript
function solution(id_list, report, k) {
    report = [...new Set(report)]
    let reportCount = {};
    let badPerson = [];
    let reportPerson = {};
    id_list.map(item => {
        reportCount[item] = 0;
        reportPerson[item] = 0;
    })
    
    report.map(item => {
        const reportEl = item.split(" ");
        reportCount[reportEl[1]]++;
    })
    
    for(let key in reportCount){
        if(reportCount[key] >= k){
            badPerson.push(key)
        }
    }
    
    report.map(item => {
        const reportEl = item.split(" ");
        if(badPerson.some(el => el===reportEl[1])){
            reportPerson[reportEl[0]]++;
        }  
    })
    
    return Object.values(reportPerson);
}