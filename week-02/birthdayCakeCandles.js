/**
 * Reference : https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 */
function birthdayCakeCandles(candles) {
    // Tallest uptil now
    let trackedTallest = candles[0];
    
    // Count of tallest candle
    let count = 1;
    
    for (let index in candles){
        
        // Start condition is set, no need to do anything for it.
        if (index == 0 )
           continue;

        // If the upcoming candle is taller than previous
        // reset the count and update the tracked tallest
        if (candles[index] > trackedTallest){
            // initialize with 1 as it is the tallest
            count=1;
            trackedTallest = candles[index];
        }else if (candles[index] === trackedTallest){
            // update the count of tracked tallest
            count++;
        }
    }
    
    return count;
}
