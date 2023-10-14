let N = 5;
for(let i=1; i<=N; i++) {
    let diff = N-1; // Initialize difference to total rows - 1
    let value = i;  // Initialize value to the current row number
    for(let j=1; j<=i; j++) {
        process.stdout.write(value.toString().padEnd(3));
        value += diff; // Computes the next value to be printed
        diff--;        // Decrements the difference
    }
    console.log();
}