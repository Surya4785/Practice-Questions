// to find length of last word
function answer(s) {
    s = s.trim();
       
       let length = 0;
       for (let i = s.length - 1; i >= 0; i--) {
           if (s[i] !== ' ') {
               length++;
           }
           else if (length > 0) {
               break;
           }
       }
       
       return length;
   }