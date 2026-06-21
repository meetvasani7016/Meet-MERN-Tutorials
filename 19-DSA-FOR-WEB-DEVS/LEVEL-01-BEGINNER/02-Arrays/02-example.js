// Array insertion cost simulation
const fruits = ['Banana', 'Orange'];

// O(1) Push - constant time
fruits.push('Apple'); 

// O(N) Unshift - linear time (shifts Banana and Orange down)
fruits.unshift('Mango');
console.log(fruits);