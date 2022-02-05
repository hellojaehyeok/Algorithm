
function solution(numbers) {
  let result = []
  // 소수 찾기
  const isPrimeNum = num => {
      if(num===0||num===1){return false}
      for(let i = 2 ; i<=Math.sqrt(num); i++){
          if(num%i==0){return false;}
      }
      return true;
  }

  // 조합 찾기
  const getPermutation = (arr, fixedNum) => {
      // 빈 배열이 아닐 경우에만 실행
      if(arr.length){
          // map을 돌려서 배열의 모든 요소를 가져온다.
          arr.map((item, index) => {
              // 고정값 + 현재값으로 현재 단계에서 조합한 수를 도출한다.
              const currentNum = Number(fixedNum+item); 
              // 얕은복사로 참조되는것을 막는다.
              let restArr = [...arr]; 
              // splice 함수를 사용하여 arr에서 현재 값을 제외한 배열을 만든다.
              restArr.splice(index,1);
              // isPrimeNum으로 소수를 찾고 소수면 push 한다.
              if(isPrimeNum(currentNum)){
                  result.push(currentNum)
              }; 
              getPermutation(restArr, currentNum);
          })
      }
  };

  // 문자열을 split으로 배열을 만든다.
  getPermutation(numbers.split(""), "");
  // set으로 중복을 제거하고 길이를 가져온다.
  return new Set(result).size;
}