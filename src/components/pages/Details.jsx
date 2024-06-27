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
  const [userData, setUserData] = useState([]);
  const [userType, setUserType] = useState(
    localStorage.getItem("type") || "free"
  );
  const [rating, setRating] = useState([]);
  const [currentRating, setCurrentRating] = useState(0);
  const [userRating, setUserRating] = useState(null);
  const [recipeType, setRecipeType] = useState("");
  const { id } = useParams();
  const user_id = localStorage.getItem("id");

  const totalRatings = rating.length;
  const sumOfRatings = rating.reduce((acc, curr) => acc + curr.rating, 0);
  const averageRating = totalRatings > 0 ? sumOfRatings / totalRatings : 0;
  const getData = () => {
    axios
      .get("http://127.0.0.1:8000/api/recipes/" + id + "/detail")
      .then((res) => {
        console.log(res.data.data);
        setReviews(res.data.data.reviews);
        setDetail(res.data.data);
        setUserData(res.data.data.user);

        // Ensure user type is set or default to empty string
        setRecipeType(res.data.data.type);

        // console.log(res.data.data["directions"]);
        setDirections(res.data.data["directions"]);
        setIngredients(res.data.data["ingredients"]);
        setImages(res.data.data["images"]);
        setRating(res.data.data.ratings);
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
        // Refetch comments data from the server
        getData();
        setReview(""); // Clear the review input after successful submission
      })
      .catch((error) => console.error(error));
  }; // Add error handling

  useEffect(() => {
    const fetchUserRating = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://127.0.0.1:8000/api/ratings?recipe_id=${id}&user_id=${user_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const userRatings = response.data.data; // Access the array within response.data

        console.log("User ratings found:", userRatings);

        const userRating = userRatings.find((rating) => {
          return (
            rating.recipe_id === parseInt(id) &&
            rating.user_id === parseInt(user_id)
          );
        });

        if (userRating) {
          setUserRating(userRating.rating);
        }
      } catch (error) {
        console.error("Error fetching user rating:", error);
      }
    };

    fetchUserRating();
  }, [id, user_id]);

  const handleStarClick = async (value) => {
    try {
      const token = localStorage.getItem("token");
      console.log(`Star clicked with value: ${value}`);

      const response = await axios.post(
        `http://127.0.0.1:8000/api/ratings`, // Adjusted to your ratings endpoint
        {
          recipe_id: id,
          user_id: user_id, // Make sure the backend is expecting user_id
          rating: value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from server:", response);
      if (response.status === 200) {
        console.log("Rating submitted successfully", response.data);
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to submit rating", error);
      // Handle error
    }
  };
  const [review, setReview] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <div className="container mx-auto mt-32 font-nunito">
        <h2 className="text-2xl  mb-5 md:mb-8 md:text-section font-merri text-center text-navy-blue">
          {detail.title}
        </h2>
        <p className="italic font-extralight text-center text-sm">
          By: {userData.name}
          {detail.creeated_at}
        </p>
        <div className="text-medium font-extralight flex flex-col md:flex-row gap-2 justify-center mt-5">
          <div>
            {[...Array(Math.round(averageRating))].map((_, index) => (
              <i
                key={index}
                className="text-yellow-300 fa-solid fa-star me-1"
              ></i>
            ))}
          </div>
          <div>
            <p>{totalRatings} Ratings</p>
          </div>
          <div>
            <p>& {reviews.length} Reviews</p>
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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-8">
              <Carousel>
                {images.slice(1).map((img, index) => (
                  <div key={index}>
                    <img
                      className="object-cover max-h-[644px]"
                      src={"http://127.0.0.1:8000/recipe_img/" + img.name}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="col-span-4">
              <h5>Ads : </h5>
              {images.length > 0 && ( // Check if images array is not empty
                <img
                  className="object-cover "
                  src={"http://127.0.0.1:8000/recipe_img/" + images[0].name} // Display only the first image
                  alt="First Image"
                />
              )}
            </div>
          </div>
        </div>

        <div className="max-w-[1088px] mx-auto mt-10">
          {userRating !== null ? null : (
            <div className="border-t-2 border-b-2 border-slate-400 py-6 text-center flex flex-col md:flex-row justify-center items-center">
              <span className="text-sub-title lg:me-4 md:me-0 md:mb-0">
                Rate this recipe:
              </span>

              <div className="flex flex-row-reverse gap-1">
                {[5, 4, 3, 2, 1].map((value) => (
                  <i
                    key={value}
                    className={`star fa-solid fa-star text-3xl ${
                      value <= currentRating
                        ? "text-yellow-500"
                        : "text-gray-200"
                    } cursor-pointer`}
                    onClick={() => handleStarClick(value)}
                    data-value={value}
                  ></i>
                ))}
              </div>
            </div>
          )}
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
          <p className="text-body text-navy-blue ">{detail.author_note}</p>
        </div>
        {detail.kitchen_note && (
          <div className="mt-16">
            <h3 className="mb-6 text-regular font-semibold">KITCHEN NOTE</h3>
            <p className="text-body text-navy-blue">{detail.kitchen_note}</p>
          </div>
        )}
        <div className="mt-16">
          <h3 className="text-regular font-semibold mb-5">Ingredients</h3>
          <hr className="my-5" />
          {ingredient.map((ing, index) => (
            <div key={index} className="font-nunito flex gap-2 mb-5">
              <h5 className="text-navy-blue">{ing.qty}</h5>
              <h5 className="text-navy-blue">{ing.measurement}</h5>
              <h5 className="text-navy-blue">{ing.name}</h5>
            </div>
          ))}
        </div>
        {/* direction */}
        <div className="mt-16">
          <h3 className="text-regular font-semibold">Direction</h3>
          <hr className="my-7 h-[2px] bg-slate-300" />

          {userType === "free" && recipeType === "free" && (
            <div className=" text-body">
              {direction.map((dir, index) => (
                <div
                  key={index}
                  className="flex opacity-55 hover:bg-secondary p-3 gap-5 mb-8"
                >
                  <div className="border-2 rounded-full min-w-10 max-h-10 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="mt-2">{dir.step}</p>
                </div>
              ))}
            </div>
          )}

          {userType === "premium" && (
            <div className="opacity-80 text-body">
              {direction.map((dir, index) => (
                <div
                  key={index}
                  className="flex text-navy-blue hover:bg-secondary p-3 gap-5 mb-8"
                >
                  <div className=" bg-navy-blue text-white rounded-full min-w-10 max-h-10 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="mt-2">{dir.step}</p>
                </div>
              ))}
            </div>
          )}

          {userType !== "premium" && recipeType === "premium" && (
            <Link className="text-body">
              <div className="max-w-md mx-auto">
                <button className="p-2 text-regular font-nunito bg-yellow-300 rounded-md  ">
                  <i class="text-white fa-solid fa-lock mx-3"></i> You need to
                  buy the premium version to access the directions. You can
                  contact the Admin with contact form
                  <Link to={"/account"}> go here</Link>
                </button>
              </div>
            </Link>
          )}
        </div>

        <div className="flex flex-col md:flex-col gap-y-5 justify-center items-center mt-16 bg-navy-blue text-white py-14">
          <GoCommentDiscussion className="text-5xl" />
          <h3 className="text-sub-title font-merri font-bold opacity-70">
            See Reviews
          </h3>
          <p className="text-regular font-regular">
            See what other foodies are saying
          </p>
          <div className="flex flex-wrap gap-8"></div>
        </div>
        <div className="mt-16">
          <h2 className="text-sub-title font-bold opacity-70 text-center">
            REVIEWS
          </h2>
          <hr className="my-7 h-[2px] bg-slate-300" />
          <div className="font-light text-regular mt-12">
            <div className="">
              <i className="fa-regular fa-message me-2 text-slate-500"></i>
              <span className="me-2">{reviews.length}</span>
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
          <div></div>
          <hr className="mb-10 mt-5 h-[2px] bg-slate-300" />
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-10 mb-5">
              {review.user.image ? (
                <div>
                  <img
                    src={
                      "http://127.0.0.1:8000/storage/user/" + review.user.image
                    }
                    className="rounded-full w-[50px] h-[50px] object-cover"
                    alt=""
                  />
                </div>
              ) : (
                <div>
                  <img
                    src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
                    className="rounded-full w-[50px] h-[50px] object-cover"
                    alt=""
                  />
                </div>
              )}

              <div>
                <div>
                  <span className="me-5 font-semibold text-regular">
                    {review.user?.name || "Unknown User"}
                  </span>
                  <span className="text-medium opacity-80">
                    {new Date(review.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <p className="mt-4 font-light font-nunito text-body">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
