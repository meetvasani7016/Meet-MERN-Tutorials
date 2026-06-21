// client/server communication simulation
const serverMock = {
  handleRequest: (route) => {
    return route === '/api/data' 
      ? { status: 200, data: "Hello Client!" }
      : { status: 404, error: "Not Found" };
  }
};

const clientMock = async () => {
  const res = serverMock.handleRequest('/api/data');
  console.log("Response:", res.data); // "Hello Client!"
};
clientMock();