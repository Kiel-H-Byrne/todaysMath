import React, { useState, useEffect } from "react";

const NotificationApp = () => {
  const [showNotification, setShowNotification] = useState(false);

  // Function to check if it's a new day
  const isNewDay = () => {
    const lastVisitedDate = localStorage.getItem("lastVisitedDate");
    const currentDate = new Date().toLocaleDateString();
    return lastVisitedDate !== currentDate;
  };

  useEffect(() => {
    // Check if it's a new day on component mount
    if (isNewDay()) {
      setShowNotification(true);
      // Update the last visited date in local storage
      localStorage.setItem("lastVisitedDate", new Date().toLocaleDateString());
    }
  }, []);

  // Function to handle dismiss button click
  const handleDismiss = () => {
    setShowNotification(false);
  };

  return (
    <div>
      {showNotification && (
        <div>
          <h2>Don't forget to check today's Supreme Mathematics!</h2>
          <button onClick={handleDismiss}>Dismiss</button>
        </div>
      )}
      {/* Render the rest of your application here */}
    </div>
  );
};

export default NotificationApp;
