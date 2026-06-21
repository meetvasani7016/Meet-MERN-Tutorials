// Microservices service communication mock
const authService = { verify: (token) => token === "user_ok" };
const orderService = {
  createOrder: (item, token) => {
    const isAuth = authService.verify(token);
    return isAuth 
      ? { success: true, order: `Bought ${item}` }
      : { success: false, error: "Unauthorized" };
  }
};
console.log(orderService.createOrder("Book", "user_ok"));