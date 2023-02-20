function reverseString(str){
    let charArrayInitial = str.split("");
    let charArrayRev = [];
    for(let i = charArrayInitial.length; i >= 0; i--){
        charArrayRev.push(charArrayInitial[i]);
    }
    return charArrayRev.join("");
    
}

// Do not edit below this line
module.exports = reverseString;
