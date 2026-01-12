import React from 'react'
import { useState } from "react";
import Login from "./components/Login ";
import Signup from "./components/Signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse flex items-center justify-center">

    <div className="min-h-screen animated-bg flex items-center justify-center overflow-hidden">
      
      <div className="relative w-80 h-[420px]">    // Container for both forms
        
        {/* Login */}            //this div will hold the Login component
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out
          ${isLogin ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"}`}
        >
          <Login switchToSignup={() => setIsLogin(false)} />
        </div>

        {/* Signup */}                //this div will hold the Signup component
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out
          ${!isLogin ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}
        >
          <Signup switchToLogin={() => setIsLogin(true)} />           //passing the function to switch to login
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;
