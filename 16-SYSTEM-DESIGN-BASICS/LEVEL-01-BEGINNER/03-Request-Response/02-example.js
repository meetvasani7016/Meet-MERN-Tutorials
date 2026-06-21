// Mocking HTTP Request-Response lifecycle
const request = {
  method: "POST",
  path: "/api/login",
  body: { user: "Alice", pwd: "123" }
};

const router = (req) => {
  if (req.method === "POST" && req.path === "/api/login") {
    return { statusCode: 200, body: { authenticated: true } };
  }
  return { statusCode: 404, body: { error: "Route not found" } };
};

const response = router(request);
console.log(`HTTP Status: ${response.statusCode}`, response.body);