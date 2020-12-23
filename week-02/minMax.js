/**
 * Reference : https://www.hackerrank.com/challenges/mini-max-sum/problem
 */
function miniMaxSum(arr) {
    // initialize min and max
    let min = arr[0], max = arr[0];
    // initialize sum
    let sum = arr[0];
    for (let i in arr){
        // 0th index already intialized
        if (i == 0)
           continue;
        
        // check and update min and maximum values   
        arr[i] < min ? min = arr[i] :{} ;
        arr[i] > max ? max = arr[i] : {};
        // keep increasing sum
        sum += arr[i];
    }
    
    // Minimum sum would be to minus maximum value from the array
    let minSum = sum - max;
    // Maximum sum would be to minus minimum value from the array
    let maxSum = sum - min;
    
    console.log(`${minSum} ${maxSum} `);
}