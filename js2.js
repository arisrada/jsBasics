let num = 5;
for (let i = 1; i <= num; i++) {
    let arr = [];
    let diff = num-1;
    let value = i;
    for (let j = 1; j <= i; j++) {
        arr.push(value);
        value += diff;
        diff--;                
    }   
    console.log(arr.join(" ")); 
}