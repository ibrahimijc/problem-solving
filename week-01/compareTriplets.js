/**
 * Reference : https://www.hackerrank.com/challenges/compare-the-triplets/problem 
 */

function compareTriplets(a, b) {
    let alicePoint = 0 , bobPoint = 0;
    for (let i=0;i<a.length;i++){
        if (a[i]>b[i])
          alicePoint++;
        else if (a[i] < b[i])
          bobPoint++;
    }
    return [alicePoint,bobPoint];
}
