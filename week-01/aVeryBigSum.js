/**
 * Reference : https://www.hackerrank.com/challenges/a-very-big-sum/problem
 * 
 * js int max size 2^53. 
 * 
 */

function aVeryBigSum(ar) {
    const result = ar.reduce((prev,curr)=>prev+curr,0)
    return result;
}