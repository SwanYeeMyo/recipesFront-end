import React from "react";
import Card from "../card/Card";

const Recipe = () => {
  return (
    <>
      <div className="container  mx-auto mt-24">
        <div className="grid grid-cols-12 gap-2">
          <div className=" col-span-12 md:col-span-3   ">
            <div className="w-full bg-secondary rounded shadow-sm h-[600px]"></div>
          </div>
          <div className="col-span-12 md:col-span-9 ">
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
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
            <nav class="flex justify-end items-center  gap-x-1">
              <button
                type="button"
                class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                disabled
              >
                <svg
                  class="flex-shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span>Previous</span>
              </button>
              <div class="flex  items-center gap-x-1">
                <button
                  type="button"
                  class="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:text-white dark:focus:bg-gray-500"
                  aria-current="page"
                >
                  1
                </button>
                <button
                  type="button"
                  class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                  2
                </button>
                <button
                  type="button"
                  class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                  3
                </button>
              </div>
              <button
                type="button"
                class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              >
                <span>Next</span>
                <svg
                  class="flex-shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
