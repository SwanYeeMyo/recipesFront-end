import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../button/Button";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [gender, setGender] = useState("male");
  // const [gender, setGender] = useState("");
  // const [gender, setGender] = useState("");
  const gender = "male";
  const type = "free";
  const image = "";

  const [password_confirmation, setPasswordConfimration] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
        password_confirmation,
        gender,
        type,
        image,
      })
      .then((res) => {
        navigate("/login");
      });
  };
  return (
    <section
      className="bg-cover bg-center justify-center flex items-center h-screen"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/1f/2e/d7/1f2ed796410477e1a734a08a516a7c9e.jpg')",
      }}
    >
      <div className="text-start mt-28 md:mt-20 w-[650px] mx-auto p-5 md:p-12 bg-white rounded-lg shadow">
        <form onSubmit={handleSubmit}>
          <h3 className="mb-3 uppercase font-merri font-bold text-3xl md:text-section text-green-leave">
            Create an account
          </h3>
          <p className="mb-5 opacity-55">
            Already have a flavor fusion account ? log in{" "}
            <Link to={"/login"}>Here !</Link>
          </p>
          <div className="mb-6">
            <input
              type="text"
              id="default-input"
              placeholder="Profile Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white border border-gray-300 text-classic text-sm rounded-lg focus:ring-classic focus:border-classic block w-full p-4"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="default-input"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border border-gray-300 text-classic text-sm rounded-lg focus:ring-classic focus:border-classic block w-full p-4"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="default-input"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white border border-gray-300 text-classic text-sm rounded-lg focus:ring-classic focus:border-classic block w-full p-4"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="default-input"
              placeholder="Confirm-password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={(e) => setPasswordConfimration(e.target.value)}
              className="bg-white border border-gray-300 text-classic text-sm rounded-lg focus:ring-classic focus:border-classic block w-full p-4"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="default-input"
              placeholder="Profile Name"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="bg-white border border-gray-300 text-classic text-sm rounded-lg focus:ring-classic focus:border-classic block w-full p-4"
            />
          </div>
          <Button type="Join Now" />
          <p className="text-black opacity-55">
            By clicking join now, you agree to our Terms of Service and Privacy
            Policy
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
