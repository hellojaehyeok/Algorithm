// 1차 ----- 69.2 / 100.0
function solution(brown, yellow) {
    function getDivisor(num){
        for(let i = Math.ceil(Math.sqrt(num)) ; i>0 ; i--){
            if(num%i==0){
                return [i+2,num/i+2].sort((a,b)=>b-a)
            }
        }    
    }
    return getDivisor(yellow);
}

// google
function solution(brown, yellow) {
    const sum = brown + yellow; 
    for(let i=3; i<=brown; i++){
        if(sum % i === 0){
            const width = sum / i;
            if( (i-2) * (width-2) === yellow){
                return [width, i];
            }
        }
    }
}