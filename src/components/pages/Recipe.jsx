import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "axios";

const Recipe = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [dishtypes, setDishtypes] = useState([]);
  const [selectedDishTypes, setSelectedDishTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(9); // Number of items per page, adjust as needed
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  let subType = "";
  useEffect(() => {
    // Check if the type is already stored in local storage
    if (localStorage.getItem("type")) {
      subType = localStorage.getItem("type");
      console.log(localStorage.getItem("type"));
    } else if (localStorage.getItem("type")) {
      // If not, set it to "free" by default
      localStorage.setItem("type", "free");
    }

    // Retrieve the stored type
    subType = localStorage.getItem("type");

    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/recipes");
        const dishtypesResponse = await axios.get(
          "http://127.0.0.1:8000/api/dishTypes"
        );
        const sortedRecipes = response.data.data.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        setData(sortedRecipes);
        setFilterData(response.data.data); // Initialize filterData with all recipes
        setDishtypes(dishtypesResponse.data.data);
        console.log(response.data.data);
        // console.log(dishtypesResponse.data.data);
        setTotalPages(Math.ceil(response.data.data.length / perPage));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [perPage]);

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDishTypes([...selectedDishTypes, value]);
    } else {
      setSelectedDishTypes(selectedDishTypes.filter((type) => type !== value));
    }
  };

  // Filter recipes based on selected dish types
  useEffect(() => {
    if (selectedDishTypes.length === 0) {
      setFilterData(data); // If no dish types are selected, display all recipes
    } else {
      const filteredRecipes = data.filter((recipe) => {
        // Check if any of the selected dish types matches the recipe's dish types
        return recipe.dish_types.some((dishType) =>
          selectedDishTypes.includes(dishType.name)
        );
      });
      setFilterData(filteredRecipes);
    }
  }, [data, selectedDishTypes]);

  // Calculate the range of data to display for the current page
  const indexOfLastRecipe = currentPage * perPage;
  const indexOfFirstRecipe = indexOfLastRecipe - perPage;
  const currentRecipes = filterData.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="max-w-6xl  mx-auto mt-24">
          <div className="grid grid-cols-12 gap-2">
            <div className=" col-span-12 md:col-span-3   ">
              <div className="w-full rounded shadow-sm h-[600px]">
                <h5 className="mb-2">Filter Item </h5>
                {dishtypes.map((type, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <input
                      id={`checkbox-${index}`}
                      type="checkbox"
                      value={type.name}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-navy-blue bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-${index}`}
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {type.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-9 ">
              <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {currentRecipes.map((recipe, index) => (
                  <div key={index} className="col-span-1">
                    <Card
                      image={recipe.images.length > 0 ? recipe.images[1] : null}
                      recipe={recipe}
                    />
                  </div>
                ))}
              </div>
              {filterData.length > 0 ? (
                <nav className="flex justify-end items-center gap-x-1">
                  <button
                    type="button"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                  >
                    <span>Previous</span>
                  </button>
                  <div className="flex items-center gap-x-1">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => paginate(i + 1)}
                        className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
                          currentPage === i + 1
                            ? "bg-navy-blue text-white"
                            : "text-gray-800 hover:bg-gray-100"
                        } py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-navy-blue disabled:opacity-50 disabled:pointer-events-none `}
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
              ) : (
                <h5>No data available</h5>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
