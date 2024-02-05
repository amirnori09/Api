import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Example state to track authentication status
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Perform sign-out actions, such as clearing authentication tokens or user data
    setIsAuthenticated(false); // Update the authentication status

    // Redirect the user to the sign-in page
    navigate("/Login");
  };

  return (
    <div>
      {isAuthenticated ? (
          <div className="flex gap-2 ">
          <p className="text-xs text-slate-950">خروج از اکانت</p>
          <button onClick={handleSignOut}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </button>
        </div>
      ) : (
        <p>You are already signed out</p>
      )}
    </div>
  );
};

export default App;
