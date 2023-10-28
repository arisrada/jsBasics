var num = 12345; 
var count = 0;
while (num > 0){
    num = Math.trunc(num / 10);
    count++;
}
console.log("Number of digits :", count);
