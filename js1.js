let num = 6;
for (let i = 1; i <= num; i++) {
    let arr = [];
    for (let j = i; j <= num; j++) {
        if (i === 1 || j === i) {
            arr.push(String.fromCharCode(96 + j));
        }
        else{
            arr.push(" ");
        }  
    }  
    for (let k = 1; k <= i; k++) {
        if (k === i || i === num) {
            arr.push(String.fromCharCode(96 + k));
        }
        else{
            arr.push(" ");
        }  
    }  
    console.log(arr.join(""))
}