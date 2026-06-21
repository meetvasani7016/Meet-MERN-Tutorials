import React from 'react';

function ShoppingList() {
  const products = [
    { id: 101, name: "Tablet", price: 299 },
    { id: 102, name: "Mouse", price: 29 },
    { id: 103, name: "Keyboard", price: 79 }
  ];

  return (
    <div className="cart">
      <h4>Shopping Cart</h4>
      <ul>
        {/* Mapping array to JSX list elements */}
        {products.map((prod) => (
          <li key={prod.id}>
            {prod.name} - ${prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;