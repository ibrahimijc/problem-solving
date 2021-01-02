function kangaroo(x1, v1, x2, v2) {
    
    // O(1) solution, both in space and time
    let position1= x1, position2 = x2;
    
    if (
        (position2 > position1 && v2 > v1)  || 
        (position1 > position2 && v1 > v2)  
       )
       return "NO";
       
    /*
    x1 + v1j = x2 + v2j;
    v1j - v2j = x2 - x1
    j = x2 - x1/ v1 - v2;
    */  
    
    let result = (x2 - x1) % (v1-v2);

    if (result === 0)
        return "YES";
    
    return "NO";
    
    
    
    // Other solution
    // O(n) 
    // while (
    //     (position2 <= position1 && v2 > v1)  || 
    //     (position1 <= position2 && v1 > v2)        
    //     ){
        
    //     if ( position1 === position2)
    //         return "YES";
       
    //     position1+=v1;
    //     position2+=v2;
    // }
    
    // return "NO";
}