import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <div class="flex flex-col bg-white border shadow-sm rounded ">
        <div className="overflow-hidden relative ">
          <img
            class="w-full max-h-[177px]  object-cover transition-transform duration-300 transform hover:scale-110"
            src="https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZWYlMjBzdGVha3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Image Description"
          />
        </div>
        <div class="p-4 md:p-5">
          <h3 class="mb-2 text-regular font-nunito font-semibold  text-gray-800 dark:text-white">
            Creamy Skillet Rice With Chicken & Mushrooms
          </h3>
          <div className="flex font-nunito mb-6  justify-between items-center">
            <div>
              <h5 className="text-xs italic">by:Author Dimitri</h5>
            </div>
            <div>
              <h5 className="italic text-xs">
                Rating:
                <span className="text-xs">
                  <i class="text-yellow-300 fa-solid fa-star"></i>
                  <i class="text-yellow-300 fa-solid fa-star"></i>
                  <i class="text-yellow-300 fa-solid fa-star"></i>
                  <i class="text-yellow-300 fa-solid fa-star"></i>
                </span>
              </h5>
            </div>
          </div>
          <button className="text-sm w-[152px] p-2 bg-navy-blue text-white">
            View
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
