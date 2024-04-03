import React from "react";
import Navbar from "../layouts/Navbar";
import { Button } from "../button/Button";

const Contact = () => {
  const handleClick = () => {
    console.log("Hello");
  };
  return (
    <>
      {/* mt-32 md:mt-52 sm:mt-52 */}
      <section
        className="bg-cover bg-center justify-center flex items-center  h-screen"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/1f/2e/d7/1f2ed796410477e1a734a08a516a7c9e.jpg')",
        }}
      >
        <div className="w-[650px]  mt-22 md:mt-24 sm:mt-0  mx-auto">
          <form action="" className="p-5 md:p-12 bg-white shadow rounded-lg">
            <h3 className="mb-3 uppercase font-merri text-section text-green-leave">
              contact us
            </h3>
            <p className="mb-4 text-sm opacity-50 font-bold">
              you have something to tell us ?
            </p>
            <div className="mb-6">
              <input
                type="text"
                id="default-input"
                placeholder="Email"
                className="bg-white border border-gray-300 text-classic text-sm rounded-lg focus:ring-classic focus:border-classic block w-full p-4 "
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="default-input"
                placeholder="Phone Number"
                className="bg-white border border-gray-300 text-classic text-sm rounded-lg focus:ring-classic focus:border-classic block w-full p-4 "
              />
            </div>
            <div>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-classic bg-gray-50 rounded-lg border border-gray-300 focus:ring-classic focus:border-classic"
                placeholder="Comment"
              ></textarea>
            </div>
            <Button handleClick={handleClick} type="submit" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
