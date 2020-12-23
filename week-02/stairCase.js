/**
 * Reference : https://www.hackerrank.com/challenges/staircase/problem
 */
function staircase(n) {
    // Space Character
    const space = " ";
    // initial pattern string
    let hash = "#";
    // Initialize the space
    let spaceString = space.repeat(n-1);
    
    
    while(n--){
        // print space and character
        console.log(`${spaceString}${hash}`);
        // increase the pattern size
        hash+="#";
        // decrease the space string by 1
        spaceString = spaceString.substr(0,spaceString.length - 1);
    }
}