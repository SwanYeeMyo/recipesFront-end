import React from "react";
import Navbar from "../layouts/Navbar";
import Card from "../card/Card";
import Button from "../button/Button";
import { foods } from "../../food";

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="md:mt-28 mt-20">
          <h1 className=" text-2xl  mb-5 md:mb-8 md:text-section font-merri  text-center text-navy-blue">
            Recipes
          </h1>
          <div className="font-nunito flex items-center justify-center gap-1 ">
            <input
              type="text"
              className="w-[800px] p-4 hover:border-black focus:ring-black"
              placeholder="Please Recipes and more"
            />
            <button type="button" className="bg-navy-blue text-white p-4 ">
              Search
            </button>
          </div>
          <div className="max-w-3xl mt-5 mx-auto">
            <div className="mt-10 md:grid md:grid-cols-4 flex justify-center items-center gap-3">
              {foods.map((food, i) => (
                <div className="col-span-1 text-center">
                  <a href="">
                    <img
                      src={food.img}
                      className=" mx-auto  object-cover rounded-full  w-[90px] h-[90px] md:w-[122px] md:h-[122px]"
                      alt=""
                    />
                  </a>
                  <h5 className=" font-nunito text-base md:text-regular ">
                    {food.name}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white">
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
                <a className="text-classic" href="">
                  View All
                </a>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
              <div className="col-span-1">
                <Card />
              </div>
              <div className="col-span-1">
                <Card />
              </div>
              <div className="col-span-1">
                <Card />
              </div>
              <div className="col-span-1">
                <Card />
              </div>
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
                <a className="text-classic" href="">
                  View All
                </a>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
              <div className="col-span-1">
                <Card />
              </div>
              <div className="col-span-1">
                <Card />
              </div>
              <div className="col-span-1">
                <Card />
              </div>
              <div className="col-span-1">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
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
                  <i class="mx-2 text-classic fa-solid fa-forward"></i>
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
              <h5 className="nunito text-sub-title">Recipe for Vegan</h5>

              <div className="flex justify-between items-center">
                <span className="font-small font-nunito">
                  From cutlets to stews, we've got oh-so many options.
                </span>
                <a className="text-classic" href="">
                  View All
                </a>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
              <div className="col-span-1">
                <Card />
              </div>
              <div className="col-span-1">
                <Card />
              </div>
              <div className="col-span-1">
                <Card />
              </div>
              <div className="col-span-1">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
