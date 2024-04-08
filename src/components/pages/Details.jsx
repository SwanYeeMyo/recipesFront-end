import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { GoCommentDiscussion } from "react-icons/go";
import { Form, Link, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import Comment from "../card/Comment";

const Details = () => {
  const [detail, setDetail] = useState([]);
  const [direction, setDirections] = useState([]);
  const [ingredient, setIngredients] = useState([]);
  const [images, setImages] = useState([]);
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();
  const user_id = localStorage.getItem("id");

  const getData = () => {
    axios
      .get("http://127.0.0.1:8000/api/recipes/" + id + "/detail")
      .then((res) => {
        console.log(res.data.data);
        setReviews(res.data.data.reviews);
        setDetail(res.data.data);
        // console.log(res.data.data["directions"]);
        setDirections(res.data.data["directions"]);
        setIngredients(res.data.data["ingredients"]);
        setImages(res.data.data["images"]);
        // console.log(res.data.data["ingredients"]);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const submitHandle = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment", review);
    formData.append("recipe_id", id);
    formData.append("user_id", user_id);

    axios
      .post("http://127.0.0.1:8000/api/reviews", formData)
      .then((res) => {
        setReviews([...reviews, res.data]);
      })
      .catch((error) => console.error(error)); // Add error handling

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };
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
          {images.map((img, index) => (
            <div key={index}>
              <img
                className="object-cover max-h-[644px] "
                src={"http://127.0.0.1:8000/recipe_img/" + img.name}
              />
            </div>
          ))}
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

          <div className="mt-10 flex gap-10 justify-center bg-navy-blue">
            <div className="w-[170px] h-[85px]  flex flex-col items-center justify-center">
              <p className="font-light text-white">PREP TIME</p>
              <p className="font-thin text-white">{detail.cook_time} mins</p>
            </div>
            <div className="w-[170px] h-[85px] border-none flex flex-col items-center justify-center">
              <p className="font-light text-white">COOK TIME</p>
              <p className="font-thin text-white">{detail.prep_time} mins</p>
            </div>
            <div className="w-[170px] h-[85px] border-none flex flex-col items-center justify-center">
              <p className="font-light text-white">SERVES</p>
              <p className="font-thin text-white">{detail.serving} people</p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-regular font-semibold">AUTHOR NOTE</h3>
            <p className="text-body">{detail.author_note}</p>
          </div>

          {detail.kitchen_note && (
            <div className="mt-16">
              <h3 className="mb-6 text-regular font-semibold">KITCHEN NOTE</h3>
              <p className="text-body">{detail.kitchen_note}</p>
            </div>
          )}

          <div className="mt-16">
            <h3 className="text-regular font-semibold mb-5">Ingredients</h3>
            <hr className="my-5" />
            {ingredient.map((ing, index) => (
              <div key={index} className="font-nunito flex gap-2 mb-5">
                <h5>{ing.qty}</h5>
                <h5>{ing.measurement}</h5>
                <h5>{ing.name}</h5>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-regular font-semibold">Direction</h3>
            <hr className="my-7 h-[2px] bg-slate-300  " />
            <div className="opacity-80 text-body">
              {direction.map((dir, index) => (
                <div
                  key={index}
                  className="flex opacity-55 hover:bg-secondary p-3 gap-5 mb-8"
                >
                  <div className="border-2 rounded-full min-w-10 max-h-10 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className=" mt-2">{dir.step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-col gap-y-5 justify-center items-center mt-16 bg-navy-blue text-white py-14">
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
              <i className="fa-regular fa-message me-2 text-white"></i>
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
                rows="5"
                className="bg-slate-200 border border-gray-400 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full resize-none transition-all duration-1000 delay-75 ease-in-out overflow-hidden p-5 "
              />
              <div className="text-right mt-2">
                {user_id ? (
                  review && (
                    <button
                      onClick={submitHandle}
                      className="bg-navy-blue text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  )
                ) : (
                  <Link to={"/login"}>Please login to create reviews</Link>
                )}
              </div>
            </div>
            <div>
              <div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-white bg-navy-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            {reviews.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
