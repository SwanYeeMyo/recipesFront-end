import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Users = () => {
	const [userData, setUserData] = useState([]);
	const token = localStorage.getItem("token");

	// Check if token exists
	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			// Set token in the request headers for all requests
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

			// Make the API request to fetch users
			axios
				.get("http://127.0.0.1:8000/api/users")
				.then((res) => {
					// Assuming res.data.data contains the array of users
					setUserData(res.data.data);
				})
				.catch((error) => {
					console.error("Error fetching user data:", error);
				});
		} else {
			console.error("No token found.");
		}
	}, []);
	return (
		<>
			<div class="p-4 sm:ml-64">
				<ToastContainer />
				<div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
					<div className="relative w-full mt-10 overflow-x-auto shadow-md sm:rounded-lg">
						<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" className="px-6 py-3">
										ID
									</th>
									<th scope="col" className="px-6 py-3">
										User Name
									</th>
									<th scope="col" className="px-6 py-3">
										Email
									</th>
									<th scope="col" className="px-6 py-3">
										Type
									</th>
								</tr>
							</thead>
							<tbody>
								{userData.map((user, index) => (
									<tr key={user.id}>
										<td>{index + 1}</td>
										<td className="px-6 py-4">{user.name}</td>
										<td className="px-6 py-4">{user.email}</td>
										<td className="px-6 py-4">{user.type}</td>
										{user.roles?.[0]?.name === "admin" ? null : (
											<td className="px-6 py-4">
												<Link
													to={`/users/${user.id}`}
													className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
												>
													Edit
												</Link>
											</td>
										)}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default Users;
