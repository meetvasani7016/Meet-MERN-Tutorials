// JS numeric sort helper O(N log N)
const prices = [23.99, 5.50, 150.00, 42.00];

// Ascending Sort callback
prices.sort((a, b) => a - b);
console.log("Ascending Prices:", prices);

// Descending Sort callback
prices.sort((a, b) => b - a);
console.log("Descending Prices:", prices);