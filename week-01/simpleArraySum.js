function simpleArraySum(arr) {
    let result = arr.reduce((prev,curr)=>prev+curr,0);
    return result;
}