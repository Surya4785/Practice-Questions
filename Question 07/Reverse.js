// write a program to reverse each word in a string.
function answer(a) {
    let words = a.split(" ");
     let reverse_String = "";
 
     for (let w of words) {
       let reverse_word = "";
       for (let i = w.length - 1; i >= 0; i--) {
         reverse_word += w.charAt(i);
       }
       reverse_String += reverse_word + " ";
     }
 
     console.log(reverse_String.trim());
 }