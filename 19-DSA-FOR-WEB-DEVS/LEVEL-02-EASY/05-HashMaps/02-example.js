// JS Map usage comparison
const userRoles = new Map();
userRoles.set({ id: 1 }, 'Admin'); // Object as Key
userRoles.set('guest', 'User');

console.log(userRoles.get('guest')); // 'User'
console.log(userRoles.size); // 2