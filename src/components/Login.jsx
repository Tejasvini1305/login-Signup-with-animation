import React from "react";

function Login({ switchToSignup }) {
  return (
    <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl">  // Login form container
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <input                                                 // Email input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-4 border rounded"
      />

      <input                            // Password input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
      />

      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">             // Login button
        Login
      </button>

      <p className="text-sm text-center mt-4">                        // Switch to Signup link
        Don’t have an account?{" "}
        <button                                                      // Button to switch to Signup
          onClick={switchToSignup}
          className="text-blue-500 font-semibold hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}

export default Login;

