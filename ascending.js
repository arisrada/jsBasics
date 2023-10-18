var arr = new Array(7, 2, 8, 1, 3, 4);
var i, j, temp;

console.log("Before sort...");
for (let i = 0; i < 6; i++) {
    console.log(arr[i]);
}

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        if (arr[j] > arr[j+1]){

            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }  
    }
}
console.log("after sort.....")
for (let i = 0; i < 6; i++) {
    console.log(arr[i]);
}
