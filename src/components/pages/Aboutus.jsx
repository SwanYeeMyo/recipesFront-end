import React from "react";
import { people } from "../../people";
export const Aboutus = () => {
  return (
    <>
      <div className="">
        <img
          className="object-fit object-cover w-full max-h-[749px]"
          src="https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="my-12 max-w-6xl mx-auto p-3 sm:p-0">
        <h3 className="text-center font-merri text-2xl md:text-section">
          Welcome to our kitchen!
        </h3>
        <div className="sm:text-center text-start font-nunito leading-relaxed  text-body mt-12">
          <p className="mb-5">
            Founded by Gemma, who lives with corn and nut allergies, Caribbean
            Green Living is more than recipes. It’s a supportive community for
            everyone to enjoy delicious, accessible Caribbean cuisine. Learn
            tips, find inspiration, and explore the vibrant culture beyond the
            plate. Join us and discover how food allergies can become an
            ingredient for a joyful life!
          </p>
          <p className="mb-5">
            Gemma, a home cook at heart, honed her skills under the watchful
            eyes of her family of chefs and cooks for over 25 years. Today, her
            passion lies in creating unforgettable meals for loved ones and
            exploring the world through new cuisines.
          </p>
          <p>
            When she’s not whipping up culinary delights, you might find her
            curled up with a good book on nutrition or food allergies, always
            seeking new ways to learn and grow.
          </p>
        </div>
      </div>
      <section className="bg-navy-blue">
        <div className="  ">
          <div className="my-24 pt-20">
            <h3 className=" font-merri text-white text-3xl md:text-section font-bold text-center uppercase">
              our managent team
            </h3>
          </div>
          <div className="max-w-6xl p-5 mx-auto">
            <div className="grid    grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-12  sm:gap-12 ">
              {people.map((p, i) => (
                <div
                  key={i}
                  className="col-span-1 mb-10 sm:mb-16  p-8 max-w-sm mx-auto bg-white shadow rounded-lg"
                >
                  <div>
                    <img
                      src={p.img}
                      className="w-[145px] h-[145px] object-fit object-cover  mx-auto mt-[-100px] rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="text-center mb-2 md:mb-2">
                    <h3 className=" mt-5 text-navy-blue  text-sub-title">
                      {p.name}
                    </h3>
                    <span className="opacity-50 font-bold font-merri text-sm italic">
                      {p.positon}
                    </span>
                  </div>
                  <div className="text-start font-nunito font-regular opacity-50">
                    <p className="mb-2 md:mb-5">{p.reviewOne}</p>
                    <p>{p.reviewTwo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
