//to find the largest odd number of the string.
function answer(num) {
    for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 === 1) {
    return num.slice(0, i + 1);
    }
    }console.log(num);
    }