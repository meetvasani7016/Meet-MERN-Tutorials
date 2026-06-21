// 1. Virtual DOM comparison blueprint simulation
const simulatedVirtualDOM = {
  type: 'div',
  props: { className: 'card' },
  children: [
    { type: 'h1', props: {}, children: 'My Component' }
  ]
};

// 2. Pure React element creation (without JSX template parsers)
import React from 'react';
function WelcomeHeader() {
  return React.createElement(
    'h1',
    { className: 'title-header' },
    'Welcome to React!'
  );
}

export default WelcomeHeader;