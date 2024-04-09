import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
	const navigate = useNavigate();
	const [error, setError] = useState({
		name: "",
		image: "",
		email: "",
	});
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		gender: "",
		type: "",
		role_id: "",
	});
	const { id } = useParams();
	useEffect(() => {
		const fetchUserData = async () => {
			const token = localStorage.getItem("token");

      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        try {
          const res = await axios.get("http://127.0.0.1:8000/api/users/" + id);
          setUserData(res.data.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
          toast.error("Failed to fetch user data");
        }
      } else {
        console.error("No token found.");
        toast.error("Authentication failed");
      }
    };

		fetchUserData();
	}, [id]);
	const updateHandler = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("name", userData.name);
		formData.append("email", userData.email);
		formData.append("gender", userData.gender);
		formData.append("role_id", userData.roles?.[0]?.id);
		if (userData.type == "premium") {
			formData.append("type", "premium");
		} else {
			formData.append("type", "free");
		}
		for (var pair of formData.entries()) {
			console.log(pair[0] + ", " + pair[1]);
		}
		axios
			.post(`http://127.0.0.1:8000/api/users/${id}/update/`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then(async (res) => {
				console.log(res);
				localStorage.setItem("user", res.data.data.name);
				// After successful update, fetch the updated user data
				const updatedUserData = await axios.get(
					"http://127.0.0.1:8000/api/users/" + id
				);
				setUserData(updatedUserData.data.data);
				toast.success("User data updated successfully");
			})
			.catch((err) => {
				if (err.response) {
					// The request was made and the server responded with a status code
					console.log(err.response.data);
					const responseData = err.response.data;

          // Update the error state based on the error messages received
          setError({
            name: responseData.errors.name || "",
            image: responseData.errors.image || "",
            email: responseData.errors.email || "",
          });
        }
        toast.error("Failed to update user data");
      });
  };

	return (
		<>
			{/* <NavSideBar /> */}
			<div className="p-4 sm:ml-64">
				<ToastContainer />
				<div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
					<div className="grid grid-cols-2 gap-4 mb-4">
						<div className="">
							<div className="shadow p-5">
								{userData.image ? (
									<div className="max-w-lg mx-auto">
										<img
											src={
												"http://127.0.0.1:8000/storage/user/" + userData.image
											}
											className="mx-auto rounded-lg w-full"
											alt=""
										/>
									</div>
								) : (
									<div className="max-w-lg mx-auto">
										<img
											src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
											className=""
											alt=""
										/>
									</div>
								)}
							</div>
						</div>
						<div className="">
							<form
								onSubmit={updateHandler}
								className="p-3 shadow bg-white rounded-md mx-auto"
							>
								<h5 className="text-left text-2xl mb-3 font-semibold">
									Update Users
								</h5>
								<div className="mb-2">
									<label
										htmlFor="text"
										className="block mb-2 text-left text-sm font-medium text-gray-900 "
									>
										Name
									</label>
									<input
										type="text"
										value={userData.name}
										onChange={(e) =>
											setUserData({ ...userData, name: e.target.value })
										}
										name="name"
										id="text"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
										placeholder="name@flowbite.com"
									/>
									{error.name && (
										<p className="mt-1 text-sm text-red-500">{error.name}</p>
									)}
								</div>
								<div className="mb-2">
									<label
										htmlFor="email"
										className="block mb-2 text-left text-sm font-medium text-gray-900 "
									>
										Email
									</label>
									<input
										type="email"
										value={userData.email}
										onChange={(e) =>
											setUserData({ ...userData, email: e.target.value })
										}
										name="email"
										id="email"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
										placeholder="name@flowbite.com"
										required
									/>
									{error.email && (
										<p className="mt-1 text-sm text-red-500">{error.email}</p>
									)}
								</div>
								<div className="mb-2">
									<label
										htmlFor="text"
										className="block mb-2 text-left text-sm font-medium text-gray-900 "
									>
										Type
									</label>
									<select
										id="type"
										name="type"
										value={userData.type}
										onChange={(e) =>
											setUserData({ ...userData, type: e.target.value })
										}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									>
										<option disabled>Choose type</option>
										<option value="free">Free</option>
										<option value="premium">Premium</option>
									</select>
								</div>
								<div className="mb-2">
									<label
										htmlFor="text"
										className="block mb-2 text-left text-sm font-medium text-gray-900 "
									>
										Role
									</label>
									<select
										id="role_id"
										name="role_id"
										value={userData.roles?.[0]?.id}
										onChange={
											(e) => {
												const updatedRoles = userData.roles.map((role, index) =>
													index === 0 ? { ...role, id: e.target.value } : role
												);

												// Update the userData state with this new roles array
												setUserData({
													...userData,
													roles: updatedRoles,
												});

												console.log(userData);
											}
											// console.log(userData.roles?.[0]?.id)
										}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									>
										<option disabled>Choose role</option>
										<option value="2">Admin</option>
										<option value="3">User</option>
									</select>
								</div>
								<div className="mb-2">
									<label
										htmlFor="text"
										className="block mb-2 text-left text-sm font-medium text-gray-900 "
									>
										Gender
									</label>
									<select
										id="gender"
										name="gender"
										value={userData.gender}
										onChange={(e) =>
											setUserData({ ...userData, gender: e.target.value })
										}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									>
										<option disabled>Choose gender</option>
										<option value="male">Male</option>
										<option value="female">Female</option>
									</select>
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
        </div>
      </div>
    </>
  );
};

export default EditUser;
