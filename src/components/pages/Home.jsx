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
        <div>
          <div
            id="default-carousel"
            class="relative w-full"
            data-carousel="slide"
          >
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="/docs/images/carousel/carousel-1.svg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="/docs/images/carousel/carousel-2.svg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="/docs/images/carousel/carousel-3.svg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="/docs/images/carousel/carousel-4.svg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="/docs/images/carousel/carousel-5.svg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>
            <button
              type="button"
              class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
