
// This function creates the array that will be used for the drop down. 
// The function will then remove the duplicates from the list. 
function filledList(prevTable, typeName) {
    array = ["Make a selection","all"];
    for (i = 0; i < prevTable.length; i++) {
        
        array = array.concat(prevTable[i][typeName]);
    }
    array = [...new Set(array)];
    return array;
}


