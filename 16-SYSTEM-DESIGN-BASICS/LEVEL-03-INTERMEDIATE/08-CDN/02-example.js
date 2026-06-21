// CDN cache simulation logic
const edgeServers = {
  "us_east": { "logo.png": "East Coast Cached Logo" },
  "eu_west": { "logo.png": "Europe Cached Logo" }
};

function fetchAsset(userLocation, assetName) {
  const server = edgeServers[userLocation] || edgeServers["us_east"];
  return server[assetName] || "Fetch from Origin Server";
}

console.log("US User:", fetchAsset("us_east", "logo.png"));
console.log("EU User:", fetchAsset("eu_west", "logo.png"));