import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/FirebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate()


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="m-auto max-w-[350px] w-full">
      <h1 className="text-3xl text-[#21243D] font-bold text-center">
        Welcome Back
      </h1>
      <form
        className="flex flex-col gap-3 mt-10 w-[350px]"
        onSubmit={handleLogin}
      >
        <label>Email</label>
        <input
          required
          type="email"
          placeholder="email"
          className="outline-none border p-2 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          required
          type="password"
          placeholder="******"
          className="outline-none border p-2 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-[208px] h-12 bg-[#FF6464] text-white text-xl rounded-lg"
        >
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <div className="flex justify-center gap-2 mt-10">
        <p>Don't have an account?</p>
        <Link to="/auth/register" className="text-[#21243D] font-bold">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
