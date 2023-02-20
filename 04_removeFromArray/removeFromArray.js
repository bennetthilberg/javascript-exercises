function removeFromArray(array, removeMe) {
    let removeThis = [];
    for(const argument of arguments){
        if(argument != arguments[0]){
            removeThis.push(argument);
        }
    }


    for(const removeElement of removeThis){
        for(const inputElement of array){
            if(inputElement === removeElement){
                array.splice(array.indexOf(inputElement), 1);
            }
        }
    }

    /*for(const inputElement of array){
        if(inputElement == removeThis){
            array.splice(array.indexOf(inputElement), 1);
        }
    }*/
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
