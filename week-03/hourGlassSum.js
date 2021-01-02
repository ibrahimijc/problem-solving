// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let highest = -10000;
    for (let i=1; i<arr.length-1;i++){
        for (let j=1;j<arr[i].length -1 ;j++){
            let currentSum = 
            arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1]
            + arr[i][j]
            + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1]
            
            if (currentSum > highest){
                highest = currentSum;
            }
        }
    }    
    
    return highest;
}