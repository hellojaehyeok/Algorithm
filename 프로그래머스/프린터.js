

/**
 * 1차시기 (오답)
 */
function solution(priorities, location) {
    
    const maxIndex = priorities.indexOf(Math.max(...priorities));
    
    priorities[location] = "";
    const sliceText = priorities.slice(0, maxIndex);
    priorities.splice(0, maxIndex);
    
    const resultArr = priorities.concat(sliceText);

    const found = resultArr.find(el => !el);
}


function solution(priorities, location) {
    // 인쇄 카운트
    let cnt = 0;
    
    while(true) {
        // 가장 큰 수를 뽑는다.
      	let max = Math.max(...priorities);
        // 처음 수를 가져온다.
        let n = priorities.shift();
        
        // 처음수가 가장 크다면 조건문 실행
        if (n === max) { 
            // 위 조건에 맞으면 프린터를 하는것이기 때문에 1증가 
            cnt++; 
            // 요청 문서면 리턴한다.
            if (location === 0) {
                return cnt; 
            }
        } else { 
            // 가장 큰 수가 아니기 때문에 맨 뒤로 넣는다.
            priorities.push(n); 
        }
        // 앞에 숫자가 없어졌기 때문에 location을 1뺀다.
        location--; 
        
        // 원하는 요청 문서가 맨 뒤로가면 location을 맨 뒤로 보낸다.
        if (location == -1) { 
            location = priorities.length - 1;
        }
    }
}
