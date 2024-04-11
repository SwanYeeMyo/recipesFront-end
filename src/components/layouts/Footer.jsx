import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-green-leave mt-20  p-5">
        <div className="flex flex-wrap justify-center">
          <div className="max-w-2xl">
            <h5 className="uppercase mb-5 text-sub-title  font-nunito font-black text-white">
              FLAVOR FUSION
            </h5>
            <div className="flex mx-auto mb-16">
              <div className="w-56">
                <h5 className="text-regular text-start text-white font-black">
                  Company
                </h5>
                <div className="flex  text-white font-nutito text-regular flex-col text-start ">
                  <Link className="text-start" to={"/Aboutus"}>
                    <p className="text-base">About Us</p>
                  </Link>
                  <Link className="text-start" to={"/contact"}>
                    <p className="text-base">DEI Vision</p>
                  </Link>
                  <Link className="text-start" to={"/contact"}>
                    <p className="text-base">Events</p>
                  </Link>
                  <Link className="text-start" to={"/contact"}>
                    <p className="text-base">Press</p>
                  </Link>
                  {/* <Link to={"/signup"}>Registry</Link>
                  <Link>Advertising Inquiries</Link>
                  <Link>Do Not Sell</Link> */}
                </div>
              </div>

              <div className="w-56">
                <h5 className="text-regular text-start text-white font-black">
                  Get Help
                </h5>
                <div className="flex  text-white font-nutito text-regular flex-col text-start ">
                  {/* <h5 className="">Contact </h5> */}

                  <Link className="text-start" to={"/contact"}>
                    <p className="text-base">Contact & FAQ</p>
                  </Link>
                  <Link to={"/signup"}>
                    <p className="text-base">Registry</p>
                  </Link>
                  <Link>
                    <p className="text-base">Advertising Inquiries</p>
                  </Link>
                  <Link>
                    <p className="text-base">Do Not Sell</p>
                  </Link>
                </div>
              </div>

              <div className="w-48">
                <h5 className="text-regular text-start text-white font-black">
                  Explore
                </h5>
                <div className="flex text-white font-nutito text-regular flex-col text-start ">
                  {/* <h5 className="">Contact </h5> */}

                  <Link className="text-start" to={"/contact"}>
                    <p className="text-base">The Shop</p>
                  </Link>
                  <Link to={"/recipes"}>
                    <p className="text-base">Recipes</p>
                  </Link>
                  <Link>
                    <p className="text-base">Food</p>
                  </Link>
                  <Link>
                    <p className="text-base">Hotline</p>
                  </Link>
                  <Link>
                    <p className="text-base">Rewards</p>
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-white m-auto">
              <b>&copy; 2024 Flavour Fusion </b> Terms|Privacy|Accessibility
              Policy
            </p>
          </div>
          <div className="bg-white w-px h-56 mt-14 mr-24"></div>
          <div>
            <div className="uppercase text-regular mt-16 mb-3 font-nunito font-black text-white">
              Signup For Our Newsletters
            </div>
            <p className="font-nunito font-normal mb-3 w-80 font-black text-white">
              Our best tip for eating thoughtfully and living joyfully right in
              your inbox.
            </p>
            <input type="email" name="email" />
            <button
              type="submit"
              value="submit"
              className="bg-navy-blue text-white p-2 mb-5"
            >
              Sign Up
            </button>
            <div>
              <i className="fa-brands fa-facebook-f text-white text-4xl mr-7"></i>
              <i className="fa-brands fa-instagram text-white text-4xl mr-7"></i>
              <i className="fa-brands fa-x-twitter text-white text-4xl mr-7"></i>
              <i className="fa-brands fa-youtube text-white text-4xl mr-7"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
