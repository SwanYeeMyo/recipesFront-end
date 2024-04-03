import React, { useEffect, useState } from "react";
import NavSideBar from "../../layouts/NavSideBar";
import axios from "axios";

const Account = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    gender: "",
    type: "",
    image: null,
    role_id: "",
  });
  // console.log(userData.roles[0].id);
  const id = localStorage.getItem("id");

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
          const roleId = res.data.data.roles[0].id;
          console.log(roleId);
          // setUserData[role]
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } else {
      console.error("No token found.");
    }
  }, [id]); //
  // console.log(userData.roles[0].id);
  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/users/" + id + "/update/", userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* <NavSideBar /> */}
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="">
              <div className="shadow p-5">
                {userData.image ? (
                  <h5>Image</h5>
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
            <div class="">
              <form
                onSubmit={updateHandler}
                className="p-3 shadow bg-white rounded-md mx-auto"
              >
                {/* <input
                  type="hidden"
                  value={userData.roles[0].id}
                  onChange={(e) =>
                    setUserData({ ...userData, role_id: e.target.value })
                  }
                /> */}
                <h5 className="text-left text-2xl mb-3 font-semibold">
                  Update New Users
                </h5>
                <div className="mb-2">
                  <label
                    htmlFor="text"
                    className="block mb-2 text-left text-sm font-medium text-gray-900 "
                  >
                    Your name
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
                    required
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-left text-sm font-medium text-gray-900 "
                  >
                    Your email
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
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="text"
                    className="block mb-2 text-left text-sm font-medium text-gray-900 "
                  >
                    Type
                  </label>
                  <input
                    type="text"
                    value={userData.type}
                    disabled
                    // onChange={(e) =>
                    //   setUserData({ ...userData, name: e.target.value })
                    // }
                    name="type"
                    id="text"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="text"
                    className="block mb-2 text-left text-sm font-medium text-gray-900 "
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    value={userData.gender}
                    onChange={(e) =>
                      setUserData({ ...userData, gender: e.target.value })
                    }
                    name="gender"
                    id="text"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name@flowbite.com"
                    required
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
        </div>
      </div>
    </>
  );
};

export default Account;
