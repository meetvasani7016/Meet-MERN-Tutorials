/* Folder Responsibility Breakdown:
- src/assets/     : Stores images, global CSS, and font files.
- src/components/ : Reusable buttons, forms, input components.
- src/pages/      : Screen views representing routing links.
- src/hooks/      : Custom hooks (e.g. useAuth, useFetch).
- src/context/    : Context API providers (e.g. ThemeContext).
- src/services/   : API request functions fetching database records.
- src/utils/      : Reusable helper scripts (e.g. formatCurrency).
*/
import React from 'react';
// Clean import references:
import Button from './components/Button';
import { useWindowWidth } from './hooks/useWindowWidth';

function HomePage() {
  const width = useWindowWidth();
  return (
    <div className="home-page">
      <h1>Welcome Page</h1>
      <p>Size: {width}px</p>
      <Button label="Click Me" />
    </div>
  );
}

export default HomePage;