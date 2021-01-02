// Complete the minimumBribes function below.
// 1 2 5 3 7 8 6 4
// 1 2 3 4 5 6 7 8

// 1 2 3 5 4 6 7 8 (1)
// 1 2 5 3 4 6 7 8 (2)
// 1 2 5 3 6 4 7 8 (3)
// 1 2 5 3 6 7 4 8 (4)
// 1 2 5 3 7 6 4 8 (5)
// 1 2 5 3 7 6 8 4 (6)
// 1 2 5 3 7 8 6 4 (7)

function minimumBribes(q) {
    let bribed = 0;
    for (let i=1; i <= q.length; i++){
        let index = i-1;
        if (q[index]!=i && q[index]>i){
            let totalBribed = q[index] - i;
            if (totalBribed > 2){
                console.log('Too chaotic');
                return
            }
            bribed += totalBribed;
        } else if (q[index]!=i && q[index]<i){
            if (i-q[index] > 2){
                bribed+= 1
            }
        }
    }
    console.log(bribed);


}