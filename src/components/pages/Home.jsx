import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import Card from "../card/Card";
import Button from "../button/Button";
import { foods } from "../../food";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { people } from "../../people";

const Home = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [Meal, setMeal] = useState([]);
  const [Vegan, setVegan] = useState([]);
  const [Soup, setSoup] = useState([]);
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const request1 = axios.get("http://127.0.0.1:8000/api/recipes/vegan");
    const request2 = axios.get("http://127.0.0.1:8000/api/recipes/meal");
    const request3 = axios.get("http://127.0.0.1:8000/api/recipes/soup");
    Promise.all([request1, request2, request3])
      .then(([response1, response2, response3]) => {
        // Handle responses here

        setVegan(response1.data.data);
        setMeal(response2.data.data);
        setSoup(response3.data.data);

        // Further processing or state updates with the data
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        // Handle errors gracefully, e.g., display an error message to the user
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchData);
    navigate(`/recipes/search/${searchData}`);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="md:mt-28 mt-20">
          <h1 className=" text-2xl  mb-5 md:mb-8 md:text-section font-merri  text-center text-navy-blue">
            Recipes
          </h1>
          <div className="font-nunito flex items-center justify-center gap-1 ">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                className="md:w-[800px] w-[200px] p-4 hover:border-black focus:ring-black"
                placeholder="Please Recipes and more"
                value={searchData}
                name="searchData"
                onChange={(e) => setSearchData(e.target.value)}
              />
              {searchData && (
                <button
                  type="submit"
                  className="mx-1 bg-navy-blue text-white p-4 "
                >
                  Search
                </button>
              )}
            </form>
          </div>
          <div className="max-w-3xl mt-5 mx-auto">
            <div className="mt-10 md:grid md:grid-cols-4 flex justify-center items-center gap-3">
              {foods.map((food, i) => (
                <div key={i} className="col-span-1 text-center">
                  <Link to={`/recipes/search/${food.name}`}>
                    <img
                      src={food.img}
                      className=" mx-auto  object-cover rounded-full  w-[90px] h-[90px] md:w-[122px] md:h-[122px]"
                      alt=""
                    />
                  </Link>
                  <h5 className=" font-nunito text-base md:text-regular ">
                    {food.name}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto bg-white">
        <div className="sm:mt-24 flex flex-wrap item-center justify-between">
          <div className=" w-full sm:w-2/4 ">
            <div className=" max-w-lg p-12">
              <h5 className="text-start font-light font-nunito text-regular uppercase text-classic">
                feature recipe
              </h5>
              <div className="w-[100px] bg-classic opacity-50 mt-5 h-[1px]"></div>
              <h5 className="my-5 font-merri text-2xl  sm:text-sub-title">
                Gordon Ramsay Makes an All American Burger
              </h5>
              <p className="opacity-55">
                Gordon is cooking up the perfect burger for the 4th of July!
                Even at the home, you can make the perfect burger!
              </p>
              <button className="w-[242px] bg-navy-blue  mt-12 text-white p-4 rounded-lg">
                View Recipe
              </button>
            </div>
          </div>
          <div className="w-full sm:w-2/4">
            <img
              src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww"
              className="w-full h-[500px] object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className=" mt-20">
        <div className="w-[347px] mb-24 mx-auto h-[1px] bg-classic"></div>
        <div className="max-w-7xl mx-auto">
          <div className="">
            <div className="mb-6 ">
              <h5 className="nunito text-sub-title">Recipe for Meals</h5>

              <div className="flex justify-between items-center">
                <span className="font-small font-nunito">
                  From cutlets to stews, we've got oh-so many options.
                </span>
                <Link
                  to={`/recipes/search/${"meal"}`}
                  className="text-classic"
                  href=""
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
              {Meal.map((recipe, index) => (
                <div key={index} className="col-span-1">
                  <Card
                    image={recipe.images.length > 0 ? recipe.images[1] : null}
                    recipe={recipe}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-20">
        <div className="w-[347px] mb-24 mx-auto h-[1px] bg-classic"></div>
        <div className="max-w-7xl mx-auto">
          <div className="">
            <div className="mb-6 ">
              <h5 className="nunito text-sub-title">Recipe for Vegan</h5>

              <div className="flex justify-between items-center">
                <span className="font-small font-nunito">
                  From cutlets to stews, we've got oh-so many options.
                </span>
                <Link
                  to={`/recipes/search/${"vegan"}`}
                  className="text-classic"
                  href=""
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
              {Vegan.map((recipe, index) => (
                <div key={index} className="col-span-1">
                  <Card
                    image={recipe.images.length > 0 ? recipe.images[1] : null}
                    recipe={recipe}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto  bg-white">
        <div className="sm:mt-24 flex flex-wrap item-center justify-between">
          <div className=" order-2 w-full sm:w-2/4 ">
            <div className=" max-w-lg  p-12 text-center">
              <h5 className="text-center font-light font-nunito text-regular uppercase text-classic">
                feature recipe
              </h5>
              <h5 className="my-5 font-merri text-2xl  sm:text-sub-title">
                Gordon Ramsay Makes an All American Burger
              </h5>
              <p className="opacity-55">
                Gordon is cooking up the perfect burger for the 4th of July!
                Even at the home, you can make the perfect burger!
              </p>
              <button className="w-[242px]  mt-12 text-classic p-4 rounded-lg">
                View Recipe
                <span>
                  <i className="mx-2 text-classic fa-solid fa-forward"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="w-full sm:w-2/4">
            <img
              src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww"
              className="order-1 w-full h-[500px] object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className=" mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <div className="mb-6 ">
              <h5 className="nunito text-sub-title">Recipe for Soup</h5>

              <div className="flex justify-between items-center">
                <span className="font-small font-nunito">
                  From cutlets to stews, we've got oh-so many options.
                </span>
                <Link
                  to={`/recipes/search/${"soup"}`}
                  className="text-classic"
                  href=""
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
              {Soup.map((recipe, index) => (
                <div key={index} className="col-span-1">
                  <Card
                    image={recipe.images.length > 0 ? recipe.images[1] : null}
                    recipe={recipe}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
