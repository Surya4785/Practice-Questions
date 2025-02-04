// write a program to count the occurrence of a character in a string.
 
function answer(str) {
    let target = 'a';
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === target) {
            count++;
        }
    }
    
    console.log(count);
    }