import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditDishType = () => {
	const [dishType, setDishType] = useState({
		name: "",
	});
	const { id } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		const fetchdishType = async () => {
			const token = localStorage.getItem("token");
			if (token) {
				axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
				try {
					const res = await axios.get(
						"http://127.0.0.1:8000/api/dishTypes/" + id
					);
					setDishType(res.data.data);
				} catch (error) {
					console.error("Error fetching dish type data:", error);
					toast.error("Failed to fetch dish type data");
				}
			} else {
				console.error("No token found.");
				toast.error("Authentication failed");
			}
		};
		fetchdishType();
	}, [id]);
	const updateHandler = (e) => {
		e.preventDefault();
		axios
			.put("http://127.0.0.1:8000/api/dishTypes/" + id, dishType)
			.then((res) => {
				console.log(res);
				setDishType(res.data.data);
				navigate("/dishTypes");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<>
			<div className="p-4 sm:ml-64 mt-32">
				<div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
					<form onSubmit={updateHandler}>
						<div className="mb-2">
							<label
								htmlFor="text"
								className="block mb-2 text-left text-sm font-medium text-gray-900 "
							>
								Dish type name
							</label>
							<input
								type="text"
								value={dishType.name}
								onChange={(e) =>
									setDishType({ ...dishType, name: e.target.value })
								}
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
							Update
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditDishType;
