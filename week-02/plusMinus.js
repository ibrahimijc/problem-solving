/**
 * Reference : https://www.hackerrank.com/challenges/plus-minus/submissions
 */
function plusMinus(arr) {
    // To count numbers
    let positive = 0 , negative = 0, zero = 0;
    
    arr.forEach((number)=>{
        // increment on condition
        number>0 && positive++ ||
        number<0 && negative++ ||
        number === 0  && zero++;
    })
    
    // for the ratio, needs to be divided by total
    const total = arr.length;
    
    console.log((positive/total).toFixed(6));
    console.log((negative/total).toFixed(6));
    console.log((zero/total).toFixed(6));
}