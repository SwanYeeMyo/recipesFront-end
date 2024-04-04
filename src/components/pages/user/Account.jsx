import React, { useEffect, useState } from "react";
import NavSideBar from "../../layouts/NavSideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Account = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    gender: "",
    type: "",
    image: null,
    role_id: "",
  });

  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        try {
          const res = await axios.get("http://127.0.0.1:8000/api/users/" + id);
          setUserData(res.data.data);
          toast.success("User data fetched successfully");
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
    axios
      .post("http://127.0.0.1:8000/api/users/" + id + "/update/", userData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", res.data.data.name);
        navigate("/");
        toast.success("User data updated successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to update user data");
      });
  };
  return (
    <>
      {/* <NavSideBar /> */}
      <div class="p-4 sm:ml-64">
        <ToastContainer />
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
                  />
                </div>
                {/* <div className="mb-2">
                  <label
                    htmlFor="text"
                    className="block mb-2 text-left text-sm font-medium text-gray-900 "
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    value={userData.role_id}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    name="name"
                    id="text"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name@flowbite.com"
                    required
                  />
                </div> */}

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
