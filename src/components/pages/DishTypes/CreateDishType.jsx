import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateDishType = () => {
	const [name, setName] = useState("");
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const token = localStorage.getItem("token");
			if (token) {
				const response = await axios.post(
					"http://127.0.0.1:8000/api/dishTypes",
					{ name }
				);
				alert("Success");
				navigate("/dishtypes");
			} else {
				console.error("No token found.");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<>
			<div className="p-4 sm:ml-64">
				<div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
					<form onSubmit={handleSubmit}>
						<div className="mb-2">
							<label
								htmlFor="text"
								className="block mb-2 text-left text-sm font-medium text-gray-900 "
							>
								Dish type name
							</label>
							<input
								type="text"
								onChange={(e) => setName(e.target.value)}
								name="name"
								id="text"
								className="shadow-sm bg-gray-50 border border-gray-300 mb-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
								placeholder="Dish Type Name"
							/>
						</div>

						<button
							type="submit"
							className="text-white bg-green-600 opacity-80 hover:opacity-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
						>
							Create
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreateDishType;
