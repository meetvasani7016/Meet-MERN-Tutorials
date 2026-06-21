import { useState, useEffect } from 'react';

// Custom Hook to track window size parameters
export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Usage in component:
// const width = useWindowWidth();
// return <p>Window is {width}px wide</p>;