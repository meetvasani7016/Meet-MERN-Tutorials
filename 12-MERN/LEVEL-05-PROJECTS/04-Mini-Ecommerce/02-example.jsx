// client/src/EcomApp.jsx
import React, { useState, useEffect } from 'react';

function EcomApp() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    // Simulating fetching products from MERN server
    setProducts([
      { _id: "1", name: "Notebook", price: 5, category: "Stationery" },
      { _id: "2", name: "Backpack", price: 35, category: "Accessories" },
      { _id: "3", name: "Gel Pen", price: 2, category: "Stationery" }
    ]);
  }, []);

  const addToCart = (product) => {
    const existing = cart.find(item => item._id === product._id);
    if (existing) {
      setCart(cart.map(item => item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQty = (id, amount) => {
    setCart(cart.map(item => {
      if (item._id === id) {
        const newQty = item.quantity + amount;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === "all" || p.category === category;
    return matchesSearch && matchesCat;
  });

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', display: 'flex', gap: '20px' }}>
      {/* Product Display */}
      <div style={{ flex: 2 }}>
        <h2>Product Catalog</h2>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="Stationery">Stationery</option>
          <option value="Accessories">Accessories</option>
        </select>
        <div style={{ marginTop: '20px' }}>
          {filteredProducts.map(p => (
            <div key={p._id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
              <h4>{p.name} - ${p.price}</h4>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      <div style={{ flex: 1, borderLeft: '1px solid #eee', paddingLeft: '20px' }}>
        <h3>Shopping Cart</h3>
        {cart.map(item => (
          <div key={item._id} style={{ marginBottom: '10px' }}>
            <h5>{item.name}</h5>
            <p>${item.price} x {item.quantity}</p>
            <button onClick={() => updateQty(item._id, 1)}>+</button>
            <button onClick={() => updateQty(item._id, -1)}>-</button>
          </div>
        ))}
        <h4>Total Sum: ${cartTotal}</h4>
      </div>
    </div>
  );
}

export default EcomApp;