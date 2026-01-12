import React from "react";

function Signup({ switchToLogin }) {
  return (
    <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl">     // Signup form container
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

      <input                                                  // Name input
        type="text"
        placeholder="Name"
        className="w-full p-2 mb-4 border rounded"
      />

      <input                          // Name input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-4 border rounded"
      />

      <input                                          // Password input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
      />

      <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">    // Sign Up button
        Sign Up
      </button>

      <p className="text-sm text-center mt-4">                 // Switch to Login link
        Already have an account?{" "}
        <button
          onClick={switchToLogin}
          className="text-blue-500 font-semibold hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default Signup;
