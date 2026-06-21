// Time Complexity comparison
function constantTime(arr) {
  return arr[0]; // O(1) - Constant
}

function linearTime(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // O(N) - Linear
  }
}

function quadraticTime(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]); // O(N^2) - Quadratic
    }
  }
}