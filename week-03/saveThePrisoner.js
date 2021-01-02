// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
    const prisoners = BigInt(n);
    const sweet = BigInt(m-1);
    const seat = BigInt(s);
    
    const result = ((seat +  sweet) % prisoners);

    if (result == 0n)
        return seat;
     return result;

}