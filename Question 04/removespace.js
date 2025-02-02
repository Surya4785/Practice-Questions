// write a program to remove all the white spaces in a string.
function answer(str) {  
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
          result += str[i];
      }
    }
    console.log(result);
  }