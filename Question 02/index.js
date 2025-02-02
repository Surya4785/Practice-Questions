// Find the index of the first occurrence in a string.
function answer(input) {
    let haystack = input['haystack'];
    let needle = input['needle'];
    
   
    if (haystack.length < needle.length) {
        return -1;
    }
    
   
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i; 
        }
    }
    
    return -1;  
}