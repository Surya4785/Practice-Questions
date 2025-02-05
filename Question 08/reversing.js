//write a program to reverse a string
function answer(str) {
  let rev = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
      rev += str.charAt(i);
    }
    
    console.log('"' + rev + '"');
}
