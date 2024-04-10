import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");

  const [userData, setUserData] = useState([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (id) {
      const token = localStorage.getItem("token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios
          .get("http://127.0.0.1:8000/api/users/" + id)
          .then((res) => {
            setUserData(res.data.data);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      } else {
        console.error("No token found.");
      }
    }
  }, [id]);

  return (
    <>
      <nav className="bg-white p-1 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-6xl  flex flex-wrap items-center  align-middle justify-between mx-auto  p-2 md:p-5">
          <div className="sm:order-1 lg:order-2 order-1 ">
            <Link
              to={"/"}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <h5 className="text-green-leave uppercase lg:mr-20  font-nunito   font-black text-2xl  sm:text-3xl md:text-section ">
                Flavor fusion
              </h5>
            </Link>
          </div>
          <div className="flex text-regular  md:mt-3 lg:mt-0 md:text-regular md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="md:flex hidden gap-5 font-nunito ">
              {!localStorage.getItem("token") ? (
                <>
                  <Link
                    className="block font-medium text-gray-600 hover:text-classic dark:text-classic dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    to={"/login"}
                  >
                    Login
                  </Link>
                  <Link
                    className="block font-medium text-gray-600 hover:text-classic dark:text-classic dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    to={"signup"}
                  >
                    SignUp
                  </Link>
                </>
              ) : null}

              {localStorage.getItem("name") ? (
                <>
                  <div className="">
                    <Link
                      to={"/account"}
                      className=" m-atuo uppercase block font-medium text-gray-600 hover:text-classic dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <div className="flex items-center justify-center gap-2">
                        {userData.image && (
                          <img
                            src={
                              "http://127.0.0.1:8000/storage/user/" +
                              userData.image
                            }
                            className="bg-black w-[40px] h-[40px] rounded-full"
                            alt=""
                          />
                        )}

                        {userData.name}
                      </div>
                    </Link>
                  </div>
                </>
              ) : null}
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center   text-lg md:text-regular font-nunito justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col  p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-classic md:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/recipes"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-classic md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  to={"/aboutus"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-classic md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  AboutUs
                </Link>
              </li>

              <li>
                <Link
                  to={"/contact"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-classic md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
              <li className="md:hidden">
                {!localStorage.getItem("token") ? (
                  <>
                    <Link
                      className="block font-medium text-gray-600 hover:text-classic dark:text-classic dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      to={"/login"}
                    >
                      Login
                    </Link>
                    <Link
                      className="block font-medium text-gray-600 hover:text-classic dark:text-classic dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      to={"signup"}
                    >
                      SignUp
                    </Link>
                  </>
                ) : null}

                {localStorage.getItem("name") ? (
                  <>
                    <div className="md:hidden">
                      <Link
                        to={"/account"}
                        className=" m-atuo uppercase block font-medium text-gray-600 hover:text-classic dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <div className="flex items-center justify-center gap-2">
                          {userData.image && (
                            <img
                              src={
                                "http://127.0.0.1:8000/storage/user/" +
                                userData.image
                              }
                              className="bg-black w-[40px] h-[40px] rounded-full"
                              alt=""
                            />
                          )}

                          {userData.name}
                        </div>
                      </Link>
                    </div>
                  </>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
