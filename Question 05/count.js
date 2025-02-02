// Write a program to count words in a string.
function answer(str) {
    let count = 1;
  
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === ' ' && str.charAt(i + 1) !== ' ') {
          count++;
      }
    }
  
    console.log(count);
  }