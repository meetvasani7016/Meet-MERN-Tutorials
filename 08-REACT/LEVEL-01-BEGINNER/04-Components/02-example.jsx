import React from 'react';

// 1. Child Component Blueprint
function NavButton() {
  return (
    <button className="nav-btn">Menu Item</button>
  );
}

// 2. Parent Layout Component nesting Child blueprints
function HeaderBar() {
  return (
    <header className="header-nav">
      <h3>BrandName</h3>
      <nav>
        <NavButton />
        <NavButton />
        <NavButton />
      </nav>
    </header>
  );
}

export default HeaderBar;