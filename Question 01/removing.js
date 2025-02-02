// To removejunk or special character in a string.
function answer(s) {
    let result = '';
    
 
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        
        if ((charCode >= 48 && charCode <= 57) || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            result += s[i];  
        }
    }
    
    return result;
}