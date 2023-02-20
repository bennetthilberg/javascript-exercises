function repeatString(str, repetitions){
    let outputStr = "";
    let i = 0;
    if(repetitions < 0){
        return "ERROR";
    }
    while(i<repetitions){
        outputStr = outputStr.concat(str);
        i++;
    }
    return outputStr;
}

// Do not edit below this line
module.exports = repeatString;
