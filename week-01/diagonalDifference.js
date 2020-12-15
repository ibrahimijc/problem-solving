function diagonalDifference(arr) {
    // Write your code here
    let leftDiagnolSum=0,rightDiagnolSum=0;
    let leftx=0,lefty=0, rightx=0, righty=arr.length-1;
    for (let i=0;i<arr.length;i++){
        leftDiagnolSum += arr[leftx++][lefty++];
        rightDiagnolSum += arr[rightx++][righty--];
    }
    
    let result = Math.abs(rightDiagnolSum - leftDiagnolSum);
    
    return result;
}