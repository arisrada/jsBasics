function printNumberPattern(n) {
    let currentNumber = 1;
    const pattern = [];
  
    // Create the pattern
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j <= i; j++) {
        row.push(currentNumber++);
      }
      pattern.push(row);
    }
  
    // Find the maximum width for formatting
    const maxWidth = pattern[n - 1][pattern[n - 1].length - 1].toString().length;
  
    // Print the pattern
    for (let i = 0; i < n; i++) {
      let rowString = '';
      for (let j = 0; j < pattern[i].length; j++) {
        rowString += pattern[i][j].toString().padStart(maxWidth, ' ') + ' ';
      }
      console.log(rowString);
    }
  }
  
  // Change the parameter to the desired number of rows
  printNumberPattern(5);
  