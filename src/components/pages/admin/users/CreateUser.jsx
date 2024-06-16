import axios from 'axios';
import { Button } from 'flowbite-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [type, setType] = useState("free");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!gender) {
      errors.gender = "gender is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    }
    if (!password_confirmation.trim()) {
      errors.password_confirmation = "Password confirmation is required";
    } else if (password !== password_confirmation) {
      errors.password_confirmation = "Passwords do not match";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/register",
          {
            name,
            email,
            password,
            password_confirmation,
            type,
            gender,
          }
        );
        navigate("/dashboard/users");
      } catch (error) {
        console.error("Error:", error);
        // Handle error
      }
    }
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="text-start mt-28 md:mt-20 w-[650px] mx-auto p-5 md:p-12 bg-white rounded-lg shadow">
        <form onSubmit={handleSubmit}>
          <h3 className="mb-3 uppercase font-merri font-bold text-3xl md:text-section text-green-leave">
            Create a User
          </h3>
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
            {errors.name && <p className="text-red-500">{errors.name}</p>}
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
            />{" "}
            {errors.email && <p className="text-red-500">{errors.email}</p>}
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
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="default-input"
              placeholder="Confirm-password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="bg-white border border-gray-300 text-classic text-sm rounded-lg focus:ring-classic focus:border-classic block w-full p-4"
            />
            {errors.password_confirmation && (
              <p className="text-red-500">{errors.password_confirmation}</p>
            )}
          </div>
          <div className="mb-6">
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="bg-white border border-gray-300 text-classic text-sm rounded-lg focus:ring-classic focus:border-classic block w-full p-4"
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
          </div>
          <div className="my-5">
            <button
              type='submit'
              className="w-full p-4 rounded-md bg-navy-blue text-white uppercase"
            >
              Join Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
