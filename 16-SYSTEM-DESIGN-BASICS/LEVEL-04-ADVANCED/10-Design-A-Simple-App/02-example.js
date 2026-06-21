// System Design specification object
const simpleAppSpec = {
  name: "Task Manager System",
  readWriteRatio: "10:1 (Read intensive)",
  scalingStrategy: "Horizontal scaling of Express servers with Redis caching on GET requests",
  database: "Mongoose database collections whitelisted on MongoDB Atlas cloud"
};
console.log(JSON.stringify(simpleAppSpec, null, 2));