import { useState } from "react";
import Navbar from "../Components/Global/Navbar";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Credentials:", credentials);
    setCredentials({ username: "", password: "" }); // Clear input fields after login
  };

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen bg-amber-800">
      <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow-lg rounded-2xl max-w-md">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Log In
        </button>
      </form>
    </div>
    </>
  );
};

export default LoginPage;
