import { Button } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Card = ({ recipe, image }) => {
  const location = useLocation();

  const show = location.pathname.includes("/account/recipes");
  const token = localStorage.getItem("token");

  const calculateAverageRating = (ratings) => {
    if (ratings.length === 0) return 0;

    const totalRatings = ratings.length;
    const sumRatings = ratings.reduce((acc, curr) => acc + curr.rating, 0);
    const averageRating = sumRatings / totalRatings;

    // Round averageRating to the nearest integer
    const roundedRating = Math.round(averageRating);

    // Create an array of length roundedRating to represent the stars
    const stars = Array.from({ length: roundedRating }, (_, index) => (
      <i key={index} className="text-yellow-300 fa-solid fa-star"></i>
    ));

    return <span className="text-xs">{stars}</span>;
  };

  const recipeDelete = async (id) => {
    try {
      console.log(id);
      const response = await fetch(
        `http://127.0.0.1:8000/api/recipes/${id}/delete`,
        {
          method: "POST",
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
      toast.success("Recipe deleted successfully");
    } catch (error) {
      console.error("Failed to delete the Recipe:", error);
    }
  }

  return (
    <>
      <div className=" relative  flex flex-col bg-white shadow h-full rounded-md ">
        <div className="overflow-hidden relative ">
          {image && (
            <img
              className="w-full max-h-[177px]  object-cover transition-transform duration-300 transform hover:scale-110"
              src={"http://127.0.0.1:8000/recipe_img/" + image.name}
              alt={image.name}
            />
          )}
        </div>
        <div className="p-4 md:p-5">
          <h3 className="mb-2 text-regular font-nunito font-semibold  text-gray-800 dark:text-white">
            {recipe.title}
          </h3>
          <div className="flex font-nunito mb-6  justify-between items-center">
            <div>
              <h5 className="text-xs italic">by: Author {recipe.user.name} </h5>
            </div>
            <div>
              <h5 className="italic text-xs">
                Rating: {calculateAverageRating(recipe.ratings)}
              </h5>
            </div>
          </div>
          <div className="">
            <div className="flex justify-start items-start space-x-5">
              <Link
                to={`/recipes/${recipe.id}`}
                className="block text-center text-sm w-[152px] p-2 bg-navy-blue text-white rounded-md"
              >
                View
              </Link>
              {
                show && (
                  <button
                    className="block text-center text-sm w-[152px] p-2 bg-red-500 text-white rounded-md"
                    onClick={() => recipeDelete(recipe.id)}
                  >
                    Delete
                  </button>
                )
              }
            </div>
            <button className="uppercase absolute top-1 text-xs p-1 bg-yellow-300 right-2  ">
              {recipe.type}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
