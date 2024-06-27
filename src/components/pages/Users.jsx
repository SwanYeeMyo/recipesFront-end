import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [clickId, setClickId] = useState("");
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

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/users/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error deleting user");
      }

      window.location.reload();
      console.log("User deleted successfully");
      toast.success("User deleted successfully");
    } catch (error) {
      console.error("Failed to delete the user:", error);
    }
  };
  return (
    <>
      <div className="p-4 sm:ml-64">
        <ToastContainer />
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
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
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.type}</td>
                    {user.roles?.[0]?.name === "super admin" ? null : (
                      <td className="px-6 py-4 flex">
                        <Link
                          to={`/users/${user.id}`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline me-4"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => (
                            setClickId(user.id), setOpenModal(true)
                          )}
                          className="font-medium text-red-600 dark:text-blue-500 hover:underline inline"
                        >
                          Delete
                        </button>
                        <Modal
                          show={openModal}
                          size="md"
                          onClose={() => setOpenModal(false)}
                          popup
                        >
                          <Modal.Header />
                          <Modal.Body>
                            <div className="text-center">
                              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Are you sure you want to delete this user?
                              </h3>
                              <div className="flex justify-center gap-4">
                                <button
                                  onClick={() => deleteUser(clickId)}
                                  className="font-medium text-red-600 dark:text-blue-500 hover:underline inline"
                                >
                                  Delete
                                </button>
                                <Button
                                  color="gray"
                                  onClick={() => setOpenModal(false)}
                                >
                                  No, cancel
                                </Button>
                              </div>
                            </div>
                          </Modal.Body>
                        </Modal>
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
