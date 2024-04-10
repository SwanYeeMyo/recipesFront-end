import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please fill in both email and password fields");
    } else {
      setError(""); // Reset error state
      axios
        .post("http://127.0.0.1:8000/api/login", { email, password })
        .then((response) => {
          setPassword("");
          setEmail("");
          if (!response.data.data.token) {
            setError("Incorrect email or password");
          } else {
            localStorage.setItem("name", response.data.data.name);
            localStorage.setItem("id", response.data.data.id);
            localStorage.setItem("token", response.data.data.token);
            localStorage.setItem("type", response.data.data.type);
            navigate("/recipes");
          }
        })
        .catch((error) => {
          console.log(error);
          setError("Invalid password or email !");
        });
    }
  };

  return (
    <>
      <section
        className="bg-cover bg-center justify-center flex items-center h-screen"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/1f/2e/d7/1f2ed796410477e1a734a08a516a7c9e.jpg')",
        }}
      >
        <div className="text-start  w-[650px] mx-auto p-5 md:p-12 bg-white rounded-lg shadow">
          <form onSubmit={handleSubmit}>
            <h3 className="my-5 uppercase font-merri font-bold md:text-section text-2xl text-green-leave">
              Log in
            </h3>
            {error && <div className="mb-2 text-red-500">{error}</div>}
            <div className="mb-6">
              <input
                type="text"
                id="default-input"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border border-gray-300 text-classic text-sm rounded-lg focus:ring-classic focus:border-classic block w-full p-4"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="default-input"
                placeholder="Password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white border border-gray-300 text-classic text-sm rounded-lg focus:ring-classic focus:border-classic block w-full p-4"
              />
            </div>
            <span className="block text-end font-nunito opacity-55">
              Forget Password ?
            </span>
            <div className="my-5">
              <button className="w-full p-4 rounded-md bg-navy-blue text-white uppercase">
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
