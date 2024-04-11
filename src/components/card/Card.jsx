import React from "react";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
	const calculateAverageRating = (ratings) => {
		if (ratings.length === 0) return 0;

		const totalRatings = ratings.length;
		const sumRatings = ratings.reduce((acc, curr) => acc + curr.rating, 0);
		const averageRating = sumRatings / totalRatings;

		// Round averageRating to the nearest integer
		const roundedRating = Math.round(averageRating);

		// Create an array of length roundedRating to represent the stars
		const stars = Array.from({ length: roundedRating }, (_, index) => (
			<i key={index} className="text-yellow-300 fa-solid fa-star"></i>
		));

		return <span className="text-xs">{stars}</span>;
	};

	return (
		<>
			<div className=" relative  flex flex-col bg-white shadow h-full rounded-md ">
				<div className="overflow-hidden relative ">
					<img
						className="w-full max-h-[177px]  object-cover transition-transform duration-300 transform hover:scale-110"
						src="https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZWYlMjBzdGVha3xlbnwwfHwwfHx8MA%3D%3D"
						alt="Image Description"
					/>
				</div>
				<div className="p-4 md:p-5">
					<h3 className="mb-2 text-regular font-nunito font-semibold  text-gray-800 dark:text-white">
						{recipe.title}
					</h3>
					<div className="flex font-nunito mb-6  justify-between items-center">
						<div>
							<h5 className="text-xs italic">by:Author Dimitri</h5>
						</div>
						<div>
							<h5 className="italic text-xs">
								Rating:
								<h5 className="italic text-xs">
									Average Rating: {calculateAverageRating(recipe.ratings)}
								</h5>
							</h5>
						</div>
					</div>
					<div className="">
						<Link
							to={`/recipes/${recipe.id}`}
							className="block text-center text-sm w-[152px] p-2 bg-navy-blue text-white"
						>
							View
						</Link>

						<button className="absolute top-1 text-xs p-1 bg-yellow-300 right-2  "></button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
