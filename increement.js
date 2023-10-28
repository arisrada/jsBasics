var i;
for (let i = 1; i <= 10; i++) {
    console.log("i =", i)
}

for (let j = 1; j <= 100; j++) {
    if(j % 2 == 0){
        console.log( "j =", j)
    }
}

var k;
let sum = 0;
for (let k = 1; k <= 100; k++) {
    if(k % 2 == 0){
       sum = sum + k;
    }
    console.log("Total :", sum)
}

var l;
for (let l = 1; l <= 10; l++) {
    if (l == 5) {
        break; 
    }    
    console.log("l =", l);
}

var m;
for (let m = 1; m <= 10; m++) {
    if (m == 5) {
        continue; 
    }    
    console.log("m =", m);
}
