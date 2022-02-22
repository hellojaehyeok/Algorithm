
// https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript
function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[ \{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/g, "");
    new_id = new_id.replace(/\.+/g, ".");
    new_id = removeStartEndDot(new_id); 
    new_id = !new_id?"a":new_id;
    new_id = new_id.length >= 16 ?new_id.substring(0, 15):new_id;
    new_id = removeStartEndDot(new_id);
    new_id = loopText(new_id);
    
    function removeStartEndDot(text){
        text = text[0]==="."?text.substring(1):text;
        text = text[text.length-1]==="."?text.substring(0, text.length-1):text;
        return text;
    }
    
    function loopText(text){
      if(text.length < 3){
          text +=text[text.length-1];
          return loopText(text);
      }else{
          return text;
      }
    };
    
    return new_id;
  }