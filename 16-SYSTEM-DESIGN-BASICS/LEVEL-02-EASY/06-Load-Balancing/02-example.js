// Round Robin Load Balancer Simulator
const servers = ["http://localhost:5001", "http://localhost:5002", "http://localhost:5003"];
let currentIndex = 0;

function routeRequest() {
  const targetServer = servers[currentIndex];
  currentIndex = (currentIndex + 1) % servers.length; // Rotate index
  return targetServer;
}

console.log("Req 1 Routed to:", routeRequest());
console.log("Req 2 Routed to:", routeRequest());
console.log("Req 3 Routed to:", routeRequest());
console.log("Req 4 Routed to:", routeRequest());