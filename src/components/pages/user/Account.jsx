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
    role_id: "",
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (userData.image) {
      setUserData((prevState) => ({
        ...prevState,
        image: file,
      }));
    }
  };

  const id = localStorage.getItem("id");

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
  console.log("http://127.0.0.1:8000/storage/user/" + userData.image);
  // console.log(userData.image);
  const updateHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("gender", userData.gender);

    formData.append("image", userData.image);

    formData.append("type", "free");
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
        navigate("/account");
        toast.success("User data updated successfully");
        setTimeout(() => {
          window.location.reload(); // Reload the page
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
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
                      } // Make sure userData.image contains the correct file name
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
                <div className="mb-2">
                  <label
                    htmlFor="text"
                    className="block mb-2 text-left text-sm font-medium text-gray-900 "
                  >
                    Update Image
                  </label>
                  <input
                    className="border w-full shadow-sm bg-gray-50 rounded-lg border-gray-300"
                    type="file"
                    onChange={handleImage}
                    name="image"
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
