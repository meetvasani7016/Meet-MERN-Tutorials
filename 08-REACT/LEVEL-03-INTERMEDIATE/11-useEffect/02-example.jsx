import React, { useState, useEffect } from 'react';

function TimerTracker() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Timer component mounted.");
    
    // Set up a tick timer increment interval
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Return cleanup function to clear active timers on component destroy
    return () => {
      clearInterval(interval);
      console.log("Timer component unmounted. Cleared interval.");
    };
  }, []); // Empty array limits execution to initial mount

  return (
    <h2>Ticking timer seconds: {seconds}</h2>
  );
}

export default TimerTracker;