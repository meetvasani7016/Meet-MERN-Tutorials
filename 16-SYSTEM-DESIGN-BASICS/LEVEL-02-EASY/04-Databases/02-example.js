// Database Schema differences simulation
const sqlUserRow = { id: 101, username: "alice", email: "alice@test.com" }; // Tabular
const nosqlUserDoc = { 
  _id: "603d2", 
  username: "alice", 
  contacts: ["alice@test.com", "alice.dev@test.com"], // Nested Array
  profile: { age: 25, bio: "Web Dev" } // Nested Object
};
console.log("SQL Schema:", sqlUserRow);
console.log("NoSQL Schema:", nosqlUserDoc);