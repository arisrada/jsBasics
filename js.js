let num = 5;
for (let i = 1; i <= num; i++) {
    let arr = [];
    for (let j = i; j <= num; j++) {
        // if (i === 1 || i === num) {
        //     j = M;
        // }
        // else{
        //     j = F;
        // }
        arr.push(j*2-1);  
        
    }  
    
    // for (let k = 1; k <= num; k++) {
    //     arr.push(j);  
    // }  
    console.log(arr.join(" "))
}