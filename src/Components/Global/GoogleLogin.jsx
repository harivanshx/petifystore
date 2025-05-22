import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleLogin = () => {
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    console.log("Received auth code from frontend:", authResult);

    try {
      if (!authResult || !authResult.code) {
        console.error("Invalid auth result:", authResult);
        return;
      }

      const res = await axios.post(
        `http://localhost:4000/auth/google?code=${authResult.code}`
      );

      console.log("Response from backend:", res);
      const { email, name, image } = res.data.user;
      const token = res.data.token;
      const userInfo = { email, name, token, image };

      localStorage.setItem("user-info", JSON.stringify(userInfo));
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: (error) => console.error("Google login failed:", error),
    flow: "auth-code",
  });

  return (
    <div className="App">
      <button onClick={googleLogin}>Sign in with Google</button>
    </div>
  );
};

export default GoogleLogin;
