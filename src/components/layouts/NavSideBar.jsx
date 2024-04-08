import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavSideBar = () => {
	const [userData, setUserData] = useState([]);

	const navigate = useNavigate();
	const logout = () => {
		localStorage.clear();
		navigate("/");
	};
	const goBack = () => {
		navigate("/");
	};
	const id = localStorage.getItem("id");
	// console.log(id);
	useEffect(() => {
		// Retrieve token from localStorage
		const token = localStorage.getItem("token");

		// Check if token exists
		if (token) {
			// Set token in the request headers
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

			// Make the API request
			axios
				.get("http://127.0.0.1:8000/api/users/" + id)
				.then((res) => {
					// console.log(res.data.data);
					setUserData(res.data.data);
				})
				.catch((error) => {
					console.error("Error fetching user data:", error);
				});
		} else {
			console.error("No token found.");
		}
	}, [id]); //

	return (
		<>
			<button
				data-drawer-target="separator-sidebar"
				data-drawer-toggle="separator-sidebar"
				aria-controls="separator-sidebar"
				type="button"
				className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			>
				<span className="sr-only">Open sidebar</span>
				<svg
					className="w-6 h-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						clipRule="evenodd"
						fillRule="evenodd"
						d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
					></path>
				</svg>
			</button>

			<aside
				id="separator-sidebar"
				className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						<li>
							<a
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<svg
									className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 22 21"
								>
									<path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
									<path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
								</svg>
								<span className="ms-3">DashBoard</span>
							</a>
						</li>
						<li>
							<Link
								to={"/account/profile"}
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<svg
									className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 18"
								>
									<path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
								</svg>
								<span className="flex-1 ms-3 whitespace-nowrap">
									{userData.name}
								</span>
							</Link>
						</li>
						<li>
							{userData.type !== "free" && (
								<Link
									to={"/account/recipes"}
									className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
								>
									<svg
										className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 18"
									>
										<path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
									</svg>
									<span className="flex-1 ms-3 whitespace-nowrap">Recipe</span>
								</Link>
							)}
						</li>
						{userData.roles?.[0]?.name === "admin" ? (
							<Link
								to={"/users"}
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<svg
									className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 18"
								>
									<path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
								</svg>
								<span className="flex-1 ms-3 whitespace-nowrap">Users</span>
							</Link>
						) : null}
						<li className="">
							<Link className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
								Type:
								<span className="flex-1 bg-yellow-500 text-white p-2 rounded text-center uppercase  ms-3 whitespace-nowrap">
									{/* {userData["type"]} */}
									{userData && userData["type"]}
								</span>
							</Link>
						</li>
					</ul>
					{userData["type"] === "free" && (
						<div className="p-5 font-nunito mt-5  text-white shadow bg-navy-blue w-full rounded-md">
							<h5 className=""> Upgrade To Premium ?</h5>
							<Link className=" block rounded">Check out for more .</Link>
						</div>
					)}
					<div className="flex mt-5  justify-center item-center">
						<button
							onClick={goBack}
							className="w-full bg-navy-blue  p-2 rounded text-white"
						>
							Back
						</button>
					</div>
					<div className="flex mt-5  justify-center item-center">
						<button
							onClick={logout}
							className="w-full bg-danger  p-2 rounded text-white"
						>
							Logout
						</button>
					</div>
				</div>
			</aside>
		</>
	);
};

export default NavSideBar;
