// 1. For Loop: Count-controlled loop
console.log("--- For Loop ---");
for (let count = 1; count <= 3; count++) {
  console.log("Count is:", count);
}

// 2. While Loop: Condition-controlled loop
console.log("--- While Loop ---");
let batteryLevel = 30;
while (batteryLevel > 0) {
  console.log("Battery: " + batteryLevel + "%");
  batteryLevel -= 10; // Drain battery
}

// 3. Do...While Loop (Runs at least once)
console.log("--- Do...While Loop ---");
let attempts = 0;
do {
  console.log("Trying login...");
  attempts++;
} while (attempts < 0); // Condition is false, but runs once anyway!

// 4. Break & Continue
console.log("--- Break & Continue ---");
for (let i = 1; i <= 5; i++) {
  if (i === 2) {
    continue; // Skip number 2
  }
  if (i === 4) {
    break; // Abort loop when hitting 4
  }
  console.log("Number:", i);
}
