import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "axios";

const Recipe = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6); // Number of items per page, adjust as needed
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/Recipes").then((res) => {
      console.log(res.data);
      setData(res.data.status);
      setTotalPages(Math.ceil(res.data.status.length / perPage));
    });
  }, [perPage]);

  // Calculate the range of data to display for the current page
  const indexOfLastRecipe = currentPage * perPage;
  const indexOfFirstRecipe = indexOfLastRecipe - perPage;
  const currentRecipes = data.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container  mx-auto mt-24">
        <div className="grid grid-cols-12 gap-2">
          <div className=" col-span-12 md:col-span-3   ">
            <div className="w-full bg-secondary rounded shadow-sm h-[600px]"></div>
          </div>
          <div className="col-span-12 md:col-span-9 ">
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              {currentRecipes.map((recipe, index) => (
                <div key={index} className="col-span-1">
                  <Card recipe={recipe} />
                </div>
              ))}
            </div>
            <nav className="flex justify-end items-center gap-x-1">
              <button
                type="button"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              >
                <span>Previous</span>
              </button>
              <div className="flex  items-center gap-x-1">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => paginate(i + 1)}
                    className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
                      currentPage === i + 1
                        ? "bg-gray-200 text-gray-800"
                        : "text-gray-800 hover:bg-gray-100"
                    } py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:text-white dark:focus:bg-gray-500`}
                    aria-current={currentPage === i + 1 ? "page" : null}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              >
                <span>Next</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
