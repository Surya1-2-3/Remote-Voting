import React, { useState, useEffect } from 'react';

const TimeSetter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Function to update the time state with the current time
  const updateTime = () => {
    setCurrentTime(new Date());
  };

  // Use useEffect to start the interval when the component mounts
  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000); // Update the time every second (1000 milliseconds)

    // Clean up the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
      <p>Ending Time : 01:00:00 pm</p>
    </div>
  );
};

export default TimeSetter;
