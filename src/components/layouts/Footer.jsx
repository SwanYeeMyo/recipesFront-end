import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-green-leave mt-20  p-5">
        <div className="max-w-7xl mx-auto p-5">
          <h5 className="uppercase mb-5 text-sub-title  font-nunito font-black text-white">
            FLAVOR FUSION
          </h5>
          <div className="flex flex-wrap gap-5   justify-between tems-center">
            <div>
              <h5 className="text-regular text-start text-white font-black">
                Get Help
              </h5>
              <div className="flex  text-white font-nutito text-regular flex-col text-start ">
                <h5 className="">Contact </h5>

                <Link className="text-start" to={"/contact"}>
                  Contact & fAQ
                </Link>
                <Link to={"/signup"}>Registry</Link>
                <Link>Advertising Inquiries</Link>
                <Link>Do Not Sell</Link>
              </div>
            </div>

            <div>
              <h5 className="text-regular text-start text-white font-black">
                Get Help
              </h5>
              <div className="flex  text-white font-nutito text-regular flex-col text-start ">
                <h5 className="">Contact </h5>

                <Link className="text-start" to={"/contact"}>
                  Contact & fAQ
                </Link>
                <Link to={"/signup"}>Registry</Link>
                <Link>Advertising Inquiries</Link>
                <Link>Do Not Sell</Link>
              </div>
            </div>
            <div>
              <h5 className="text-regular text-start text-white font-black">
                Get Help
              </h5>
              <div className="flex  text-white font-nutito text-regular flex-col text-start ">
                <h5 className="">Contact </h5>

                <Link className="text-start" to={"/contact"}>
                  Contact & fAQ
                </Link>
                <Link to={"/signup"}>Registry</Link>
                <Link>Advertising Inquiries</Link>
                <Link>Do Not Sell</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
