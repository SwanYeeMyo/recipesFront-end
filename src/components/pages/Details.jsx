import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { GoCommentDiscussion } from "react-icons/go";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

const Details = () => {
  const [detail, setDetail] = useState([]);
  const [direction, setDirections] = useState([]);
  const [ingredient, setIngredients] = useState([]);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/recipes/" + id).then((res) => {
      setDetail(res.data.status);
      console.log(res.data);
    });
  }, []);

  const [review, setReview] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <div className="container mx-auto mt-32 font-nunito">
        <h2 className="text-2xl mb-5 md:mb-8 md:text-section font-merri text-center text-navy-blue">
          {detail.title}
        </h2>
        <p className="italic font-extralight text-center text-sm">
          by: METTCH | {detail.creeated_at}
        </p>
        <div className="text-medium font-extralight flex flex-col md:flex-row gap-2 justify-center mt-5">
          <div>
            <span className="me-1">4</span>
            <i className="text-yellow-300 fa-solid fa-star me-1"></i>
            <i className="text-yellow-300 fa-solid fa-star me-1"></i>
            <i className="text-yellow-300 fa-solid fa-star me-1"></i>
            <i className="text-yellow-300 fa-solid fa-star me-1"></i>
            <i className="text-yellow-300 fa-solid fa-star me-1"></i>
          </div>
          <div>
            <p>6 Ratings</p>
          </div>
          <div>
            <p>View 15 Reviews</p>
          </div>
        </div>
        <div className="flex gap-3 mb-5 justify-center mt-5">
          <div className="font-bold text-gray-700 rounded-full border-2 w-10 h-10 border-slate-300 bg-white flex items-center justify-center font-mono">
            <FaFacebookF className="text-2xl text-blue-700" />
          </div>
          <div className="font-bold text-gray-700 rounded-full border-2 w-10 h-10 border-slate-300 bg-white flex items-center justify-center font-mono">
            <FaInstagram className="text-2xl text-rose-500" />
          </div>
          <div className="font-bold text-gray-700 rounded-full border-2 w-10 h-10 border-slate-300 bg-white flex items-center justify-center font-mono">
            <FaPinterestP className="text-2xl text-red-600" />
          </div>
          <div className="font-bold text-gray-700 rounded-full border-2 w-10 h-10 border-slate-300 bg-white flex items-center justify-center font-mono">
            <IoIosMail className="text-2xl text-slate-600" />
          </div>
        </div>

        <Carousel>
          <div>
            <img
              className="object-center object-cover max-h-[500px]"
              src="https://images.unsplash.com/photo-1569058242276-0bc3e078cf86?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <img
              className="object-center object-cover max-h-[500px]"
              src="https://images.unsplash.com/photo-1612966948332-81d747414a8f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <img
              className="object-center object-cover max-h-[500px]"
              src="assets/3.jpeg"
            />
          </div>
        </Carousel>

        <div className="max-w-[1088px] mx-auto mt-10">
          <div className="border-t-2 border-b-2 border-slate-400 py-6 text-center flex flex-col md:flex-row justify-center items-center">
            <span className="text-sub-title lg:me-4 md:me-0 md:mb-0">
              Rate this recipe:
            </span>
            <div className="flex flex-row-reverse gap-1">
              <i
                className="star fa-solid fa-star text-3xl text-gray-200"
                data-value="5"
              ></i>
              <i
                className="star fa-solid fa-star text-3xl text-gray-200"
                data-value="4"
              ></i>
              <i
                className="star fa-solid fa-star text-3xl text-gray-200"
                data-value="3"
              ></i>
              <i
                className="star fa-solid fa-star text-3xl text-gray-200"
                data-value="2"
              ></i>
              <i
                className="star fa-solid fa-star text-3xl text-gray-200"
                data-value="1"
              ></i>
            </div>
          </div>

          <div className="mt-10 flex gap-10 justify-center">
            <div className="w-[170px] h-[85px] border-none bg-slate-300 flex flex-col items-center justify-center">
              <p className="font-light">PREP TIME</p>
              <p className="font-thin">{detail.cook_time} mins</p>
            </div>
            <div className="w-[170px] h-[85px] border-none bg-slate-300 flex flex-col items-center justify-center">
              <p className="font-light">COOK TIME</p>
              <p className="font-thin">{detail.prep_time} mins</p>
            </div>
            <div className="w-[170px] h-[85px] border-none bg-slate-300 flex flex-col items-center justify-center">
              <p className="font-light">SERVES</p>
              <p className="font-thin">{detail.serving} people</p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-regular font-semibold">AUTHOR NOTE</h3>
            <p className="text-body">{detail.author_note}</p>
          </div>

          {Details.kitchen_note && (
            <div className="mt-16">
              <h3 className="mb-6 text-regular font-semibold">KITCHEN NOTE</h3>
              <p className="text-body">{detail.kitch_note}</p>
            </div>
          )}

          <div className="mt-16">
            <h3 className="text-regular font-semibold">Ingredients</h3>
            <hr className="my-7 h-[2px] bg-slate-300" />
            <ul className="font-semibold opacity-80 text-body">
              <li className="mb-2">
                2 pounds beef or veal; cheeks, chunk or foreshank
              </li>
              <li className="mb-2">2 yellow onions</li>
              <li className="mb-2">2 yellow onions</li>
              <li className="mb-2">2 yellow onions</li>
            </ul>
          </div>

          <div className="mt-16">
            <h3 className="text-regular font-semibold">Direction</h3>
            <hr className="my-7 h-[2px] bg-slate-300" />
            <div className="opacity-80 text-body">
              <div className="flex gap-5 mb-8">
                <div className="border-2 rounded-full min-w-10 max-h-10 flex items-center justify-center">
                  1
                </div>
                <p className="font-semibold mt-2">
                  Remove all tendons and fat from the meat. If the pieces are
                  very large, cut them into smaller ones. Pat the meat dry, and
                  then season. generously with salt and pepper and let it rest
                  in the fridge for at least one hour, preferable overnight.
                </p>
              </div>
              <div className="flex gap-5">
                <div className="border-2 rounded-full min-w-10 max-h-10 flex items-center justify-center">
                  1
                </div>
                <p className="font-semibold mt-2">
                  Remove all tendons and fat from the meat. If the pieces are
                  very large, cut them into smaller ones. Pat the meat dry, and
                  then season. generously with salt and pepper and let it rest
                  in the fridge for at least one hour, preferable overnight.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-col gap-y-5 justify-center items-center mt-16 bg-slate-300 py-14">
            <GoCommentDiscussion className="text-5xl" />
            <h3 className="text-sub-title font-merri font-bold opacity-70">
              See Reviews
            </h3>
            <p className="text-regular font-regular">
              See what other foodies are saying
            </p>
            <div className="flex flex-wrap gap-8">
              <img
                className="rounded-full w-20 h-20 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9SdRTT5veissNXjFWRG6e1nxaqNHgf12dw&s"
                alt="profile1"
              />
              <img
                className="rounded-full w-20 h-20 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9SdRTT5veissNXjFWRG6e1nxaqNHgf12dw&s"
                alt="profile1"
              />
              <img
                className="rounded-full w-20 h-20 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9SdRTT5veissNXjFWRG6e1nxaqNHgf12dw&s"
                alt="profile1"
              />
              <img
                className="rounded-full w-20 h-20 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9SdRTT5veissNXjFWRG6e1nxaqNHgf12dw&s"
                alt="profile1"
              />
            </div>
            <div className="border-2 border-slate-500 min-w-32 h-9 rounded-3xl flex justify-center items-center bg-white hover:bg-slate-200">
              <i className="fa-regular fa-message me-2 text-slate-500"></i>
              <span className="font-light text-medium">REVIEW</span>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-sub-title font-bold opacity-70 text-center">
              REVIEWS
            </h2>
            <hr className="my-7 h-[2px] bg-slate-300" />
            <div className="font-light text-regular mt-12">
              <div className="">
                <i className="fa-regular fa-message me-2 text-slate-500"></i>
                <span className="me-2">14</span>
                <span className="me-2">REVIEWS</span>
              </div>
            </div>
            <div className="my-8 relative">
              <textarea
                id="review-input"
                placeholder="Leave a Review"
                value={review}
                name="review"
                onChange={(e) => setReview(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                rows={isFocused ? 5 : 1}
                className="bg-slate-200 border border-gray-400 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full resize-none transition-all duration-1000 delay-75 ease-in-out overflow-hidden p-5 "
              />
              {isFocused && (
                <div className="text-right mt-2">
                  <button
                    onClick={() => console.log("Submit Review")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
            <div>
              <div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Order By{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Ascending
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Descending
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="mb-10 mt-5 h-[2px] bg-slate-300" />
            <div>
              <div className="flex flex-col md:flex-row gap-10">
                <div>
                  <img
                    src="https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fperson%2F7876166%2F632d4d70c17dc.jpg&w=640&q=75"
                    className="rounded-full min-w-24 h-24 object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <span className="me-5 font-semibold text-regular">
                      Jenine
                    </span>
                    <span className="text-medium opacity-80">June 20,2024</span>
                  </div>
                  <p className="mt-4 font-light text-body">
                    Hello! Does the recipe call for 4 inches of licorice root,
                    or 4 ounces? It say inces, which could likely be either.
                    Please clarify as I would love to give this a go. I am
                    fortunate enough to have a lot of licorice growing on my
                    property. Thanks!
                  </p>
                </div>
              </div>
              <hr className="my-10 h-[1px] bg-slate-300" />
              <div className="flex flex-col md:flex-row gap-10">
                <div>
                  <img
                    src="https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fperson%2F7876166%2F632d4d70c17dc.jpg&w=640&q=75"
                    className="rounded-full min-w-24 h-24 object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <span className="me-5 font-semibold text-regular">
                      Jenine
                    </span>
                    <span className="text-medium opacity-80">June 20,2024</span>
                  </div>
                  <p className="mt-4 font-light text-body">
                    Hello! Does the recipe call for 4 inches of licorice root,
                    or 4 ounces? It say inces, which could likely be either.
                    Please clarify as I would love to give this a go. I am
                    fortunate enough to have a lot of licorice growing on my
                    property. Thanks!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
