// 1차
// leave에는 닉네임이 없다.
function solution(record) {
    let result = [];
    let userData = {};
    const enterText = "님이 들어왔습니다.";
    const leaveText = "님이 나갔습니다.";
    
    record.map(item => {
        item = item.split(" ");
        
        if(item[0] === "Enter"){
             result.push(item[1] + enterText);   
        }else if(item[0] === "Leave"){
             result.push(item[1] + leaveText);
        }   
        userData[item[1]] = item[2];
    })
    
    result = result.join();
    for(let key in userData){
        result = result.replace(new RegExp(key, 'g'), userData[key]);
    }
    result = result.split(",");
    return result;
}

// 2차
// 
function solution(record) {
    let result = [];
    let userData = {};
    const enterText = "님이 들어왔습니다.";
    const leaveText = "님이 나갔습니다.";
    
    record.map(item => {
        item = item.split(" ");
        if(item[0] === "Enter"){
            result.push(item[1] + enterText);   
            userData[item[1]] = item[2];
        }else if(item[0] === "Leave"){
            result.push(item[1] + leaveText);       
        }else if(item[0] === "Change"){
            userData[item[1]] = item[2];
        } 

    })
    
    result = result.join();
    for(let key in userData){
        result = result.replace(new RegExp(key, 'g'), userData[key]);
    }
    result = result.split(",");
    console.log(result)
    return result;
}

// 정답
function solution(record) {
    const userData = {};
    const cmds = [];
    const cmdObj = {
      Enter: "님이 들어왔습니다.",
      Leave: "님이 나갔습니다.",
    };
  
    for (let rec of record) {
      const [cmd, uid, nickname] = rec.split(" ");
      if (nickname) userData[uid] = nickname;
      if (cmd !== "Change") cmds.push([cmd, uid]);
    }
  
    return cmds.map(([cmd, uid]) => `${userData[uid]}${cmdObj[cmd]}`);
  }