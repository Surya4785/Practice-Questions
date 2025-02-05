//write a program to find wether a string is palindrome or not.
function answer(str) {
    let org = str;
    let rev = "";

    for (let i = str.length - 1; i &gt;= 0; i--) {
        rev += str.charAt(i);
    }

    if (org === rev) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }}
