import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button, Modal } from "flowbite-react";

const DishTypes = () => {
  const [dishTypes, setDishTypes] = useState([]);
  const [clickID, setClickID] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      // Set token in the request headers for all requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Make the API request to fetch users
      axios
        .get("http://127.0.0.1:8000/api/dishTypes")
        .then((res) => {
          // Assuming res.data.data contains the array of users
          setDishTypes(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } else {
      console.error("No token found.");
    }
  }, []);

  const deleteDishType = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/dishTypes/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error deleting dish type");
      }

      window.location.reload();
      toast.success("Dish type deleted successfully");
    } catch (error) {
      console.error("Failed to delete the Dish type:", error);
    }
  };

  return (
    <>
      <div className="p-4 sm:ml-64">
        <ToastContainer />
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Link to="/dashboard/dishtypes/create">
            <button
              type="button"
              className="text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Create dishtype
            </button>
          </Link>
          <div className="relative w-full mt-10 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Dish type
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {dishTypes.map((dishtype, index) => (
                  <tr key={dishtype.id}>
                    <td className="px-6 py-4">{dishtype.id}</td>
                    <td className="px-6 py-4">{dishtype.name}</td>
                    <td className="px-6 py-4 flex">
                      <Link
                        to={`/dashboard/dishtypes/${dishtype.id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline me-4"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => { setOpenModal(true); setClickID(dishtype.id) }}
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
                              Are you sure you want to delete this dish type?
                            </h3>
                            <div className="flex justify-center gap-4">
                              <button
                                onClick={() => deleteDishType(clickID)}
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

export default DishTypes;
