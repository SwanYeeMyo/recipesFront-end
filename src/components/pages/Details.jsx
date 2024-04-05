import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { GoCommentDiscussion } from "react-icons/go";
import { useParams } from "react-router-dom";

const Details = () => {
	const [review, setReview] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	return (
		<>
			<div class="container mx-auto mt-32 font-nunito">
				<h2 class="text-2xl mb-5 md:mb-8 md:text-section font-merri text-center text-navy-blue">
					Licorice Root and Malt Beer Beef Stew
				</h2>
				<p class="italic font-extralight text-center text-sm">
					by: METTCH | February 3, 2010
				</p>
				<div class="text-medium font-extralight flex flex-col md:flex-row gap-2 justify-center mt-5">
					<div>
						<span class="me-1">4</span>
						<i class="text-yellow-300 fa-solid fa-star me-1"></i>
						<i class="text-yellow-300 fa-solid fa-star me-1"></i>
						<i class="text-yellow-300 fa-solid fa-star me-1"></i>
						<i class="text-yellow-300 fa-solid fa-star me-1"></i>
						<i class="text-yellow-300 fa-solid fa-star me-1"></i>
					</div>
					<div>
						<p>6 Ratings</p>
					</div>
					<div>
						<p>View 15 Reviews</p>
					</div>
				</div>
				<div class="flex gap-3 justify-center mt-5">
					<div class="font-bold text-gray-700 rounded-full border-2 w-10 h-10 border-slate-300 bg-white flex items-center justify-center font-mono">
						<FaFacebookF class="text-2xl text-blue-700" />
					</div>
					<div class="font-bold text-gray-700 rounded-full border-2 w-10 h-10 border-slate-300 bg-white flex items-center justify-center font-mono">
						<FaInstagram class="text-2xl text-rose-500" />
					</div>
					<div class="font-bold text-gray-700 rounded-full border-2 w-10 h-10 border-slate-300 bg-white flex items-center justify-center font-mono">
						<FaPinterestP class="text-2xl text-red-600" />
					</div>
					<div class="font-bold text-gray-700 rounded-full border-2 w-10 h-10 border-slate-300 bg-white flex items-center justify-center font-mono">
						<IoIosMail class="text-2xl text-slate-600" />
					</div>
				</div>

				<div class="mt-16">
					<div
						id="default-carousel"
						class="relative w-full z-0"
						data-carousel="slide"
					>
						<div class="relative overflow-hidden rounded-lg h-[644px]">
							<div
								class="hidden duration-700 ease-in-out w-full max-h-[644px] object-cover"
								data-carousel-item
							>
								<img
									src="https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8fDA%3D"
									class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
									alt="..."
								/>
							</div>
							<div
								class="hidden duration-700 ease-in-out w-full max-h-[644px] object-cover"
								data-carousel-item
							>
								<img
									src="https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8fDA%3D"
									class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
									alt="..."
								/>
							</div>
							<div
								class="hidden duration-700 ease-in-out w-full max-h-[644px] object-cover"
								data-carousel-item
							>
								<img
									src="https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8fDA%3D"
									class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
									alt="..."
								/>
							</div>
							<div
								class="hidden duration-700 ease-in-out w-full max-h-[644px] object-cover"
								data-carousel-item
							>
								<img
									src="https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8fDA%3D"
									class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
									alt="..."
								/>
							</div>
						</div>
						<div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
							<button
								type="button"
								class="w-3 h-3 rounded-full"
								aria-current="true"
								aria-label="Slide 1"
								data-carousel-slide-to="0"
							></button>
							<button
								type="button"
								class="w-3 h-3 rounded-full"
								aria-current="false"
								aria-label="Slide 2"
								data-carousel-slide-to="1"
							></button>
							<button
								type="button"
								class="w-3 h-3 rounded-full"
								aria-current="false"
								aria-label="Slide 3"
								data-carousel-slide-to="2"
							></button>
							<button
								type="button"
								class="w-3 h-3 rounded-full"
								aria-current="false"
								aria-label="Slide 4"
								data-carousel-slide-to="3"
							></button>
							<button
								type="button"
								class="w-3 h-3 rounded-full"
								aria-current="false"
								aria-label="Slide 5"
								data-carousel-slide-to="4"
							></button>
						</div>
						<button
							type="button"
							class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
							data-carousel-prev
						>
							<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
								<svg
									class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 6 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 1 1 5l4 4"
									/>
								</svg>
								<span class="sr-only">Previous</span>
							</span>
						</button>
						<button
							type="button"
							class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
							data-carousel-next
						>
							<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
								<svg
									class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 6 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m1 9 4-4-4-4"
									/>
								</svg>
								<span class="sr-only">Next</span>
							</span>
						</button>
					</div>
				</div>

				<div class="max-w-[1088px] mx-auto mt-10">
					<div class="border-t-2 border-b-2 border-slate-400 py-6 text-center flex flex-col md:flex-row justify-center items-center">
						<span class="text-sub-title lg:me-4 md:me-0 md:mb-0">
							Rate this recipe:
						</span>
						<div class="flex flex-row-reverse gap-1">
							<i
								class="star fa-solid fa-star text-3xl text-gray-200"
								data-value="5"
							></i>
							<i
								class="star fa-solid fa-star text-3xl text-gray-200"
								data-value="4"
							></i>
							<i
								class="star fa-solid fa-star text-3xl text-gray-200"
								data-value="3"
							></i>
							<i
								class="star fa-solid fa-star text-3xl text-gray-200"
								data-value="2"
							></i>
							<i
								class="star fa-solid fa-star text-3xl text-gray-200"
								data-value="1"
							></i>
						</div>
					</div>

					<div class="mt-10 flex gap-10 justify-center">
						<div class="w-[170px] h-[85px] border-none bg-slate-300 flex flex-col items-center justify-center">
							<p class="font-light">PREP TIME</p>
							<p class="font-thin">10 mins</p>
						</div>
						<div class="w-[170px] h-[85px] border-none bg-slate-300 flex flex-col items-center justify-center">
							<p class="font-light">COOK TIME</p>
							<p class="font-thin">10 mins</p>
						</div>
						<div class="w-[170px] h-[85px] border-none bg-slate-300 flex flex-col items-center justify-center">
							<p class="font-light">SERVES</p>
							<p class="font-thin">10 people</p>
						</div>
					</div>

					<div class="mt-16">
						<h3 class="mb-6 text-regular font-semibold">AUTHOR NOTE</h3>
						<p class="text-body">
							I live in a country of licorice lovers, myself being a very avid
							fan. Therefore you can imagine how excited I was, when I was
							served a dish that contained licorice root. It really adds
							something extra to the dish along with the malt beer, and is
							perfect for dinner parties as it is taking care of itself once on
							the stove. Serve with mashed potatoes/ other root vegetables
							and/or crusty bread. - Mettch —Mettch
						</p>
					</div>

					<div class="mt-16">
						<h3 class="mb-6 text-regular font-semibold">KITCHEN NOTE</h3>
						<p class="text-body">
							I live in a country of licorice lovers, myself being a very avid
							fan. Therefore you can imagine how excited I was, when I was
							served a dish that contained licorice root. It really adds
							something extra to the dish along with the malt beer, and is
							perfect for dinner parties as it is taking care of itself once on
							the stove. Serve with mashed potatoes/ other root vegetables
							and/or crusty bread. - Mettch —Mettch
						</p>
					</div>

					<div class="mt-16">
						<h3 class="text-regular font-semibold">Ingredients</h3>
						<hr class="my-7 h-[2px] bg-slate-300" />
						<ul class="font-semibold opacity-80 text-body">
							<li class="mb-2">
								2 pounds beef or veal; cheeks, chunk or foreshank
							</li>
							<li class="mb-2">2 yellow onions</li>
							<li class="mb-2">2 yellow onions</li>
							<li class="mb-2">2 yellow onions</li>
						</ul>
					</div>

					<div class="mt-16">
						<h3 class="text-regular font-semibold">Direction</h3>
						<hr class="my-7 h-[2px] bg-slate-300" />
						<div class="opacity-80 text-body">
							<div class="flex gap-5 mb-8">
								<div class="border-2 rounded-full min-w-10 max-h-10 flex items-center justify-center">
									1
								</div>
								<p class="font-semibold mt-2">
									Remove all tendons and fat from the meat. If the pieces are
									very large, cut them into smaller ones. Pat the meat dry, and
									then season. generously with salt and pepper and let it rest
									in the fridge for at least one hour, preferable overnight.
								</p>
							</div>
							<div class="flex gap-5">
								<div class="border-2 rounded-full min-w-10 max-h-10 flex items-center justify-center">
									1
								</div>
								<p class="font-semibold mt-2">
									Remove all tendons and fat from the meat. If the pieces are
									very large, cut them into smaller ones. Pat the meat dry, and
									then season. generously with salt and pepper and let it rest
									in the fridge for at least one hour, preferable overnight.
								</p>
							</div>
						</div>
					</div>

					<div class="flex flex-col md:flex-col gap-y-5 justify-center items-center mt-16 bg-slate-300 py-14">
						<GoCommentDiscussion class="text-5xl" />
						<h3 class="text-sub-title font-merri font-bold opacity-70">
							See Reviews
						</h3>
						<p class="text-regular font-regular">
							See what other foodies are saying
						</p>
						<div class="flex gap-8">
							<img
								class="rounded-full w-20 h-20 object-cover"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9SdRTT5veissNXjFWRG6e1nxaqNHgf12dw&s"
								alt="profile1"
							/>
							<img
								class="rounded-full w-20 h-20 object-cover"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9SdRTT5veissNXjFWRG6e1nxaqNHgf12dw&s"
								alt="profile1"
							/>
							<img
								class="rounded-full w-20 h-20 object-cover"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9SdRTT5veissNXjFWRG6e1nxaqNHgf12dw&s"
								alt="profile1"
							/>
							<img
								class="rounded-full w-20 h-20 object-cover"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9SdRTT5veissNXjFWRG6e1nxaqNHgf12dw&s"
								alt="profile1"
							/>
						</div>
						<div class="border-2 border-slate-500 min-w-32 h-9 rounded-3xl flex justify-center items-center bg-white hover:bg-slate-200">
							<i class="fa-regular fa-message me-2 text-slate-500"></i>
							<span class="font-light text-medium">REVIEW</span>
						</div>
					</div>
					<div class="mt-16">
						<h2 class="text-sub-title font-bold opacity-70 text-center">
							REVIEWS
						</h2>
						<hr class="my-7 h-[2px] bg-slate-300" />
						<div class="font-light text-regular mt-12">
							<div class="">
								<i class="fa-regular fa-message me-2 text-slate-500"></i>
								<span class="me-2">14</span>
								<span class="me-2">REVIEWS</span>
							</div>
						</div>
						<div class="my-8 relative">
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
									class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									type="button"
								>
									Order By{" "}
									<svg
										class="w-2.5 h-2.5 ms-3"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="m1 1 4 4 4-4"
										/>
									</svg>
								</button>
								<div
									id="dropdown"
									class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
								>
									<ul
										class="py-2 text-sm text-gray-700 dark:text-gray-200"
										aria-labelledby="dropdownDefaultButton"
									>
										<li>
											<a
												href="#"
												class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Ascending
											</a>
										</li>
										<li>
											<a
												href="#"
												class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Descending
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<hr class="mb-10 mt-5 h-[2px] bg-slate-300" />
						<div>
							<div class="flex flex-col md:flex-row gap-10">
								<div>
									<img
										src="https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fperson%2F7876166%2F632d4d70c17dc.jpg&w=640&q=75"
										class="rounded-full min-w-24 h-24 object-cover"
										alt=""
									/>
								</div>
								<div>
									<div>
										<span class="me-5 font-semibold text-regular">Jenine</span>
										<span class="text-medium opacity-80">June 20,2024</span>
									</div>
									<p class="mt-4 font-light text-body">
										Hello! Does the recipe call for 4 inches of licorice root,
										or 4 ounces? It say inces, which could likely be either.
										Please clarify as I would love to give this a go. I am
										fortunate enough to have a lot of licorice growing on my
										property. Thanks!
									</p>
								</div>
							</div>
							<hr class="my-10 h-[1px] bg-slate-300" />
							<div class="flex flex-col md:flex-row gap-10">
								<div>
									<img
										src="https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fperson%2F7876166%2F632d4d70c17dc.jpg&w=640&q=75"
										class="rounded-full min-w-24 h-24 object-cover"
										alt=""
									/>
								</div>
								<div>
									<div>
										<span class="me-5 font-semibold text-regular">Jenine</span>
										<span class="text-medium opacity-80">June 20,2024</span>
									</div>
									<p class="mt-4 font-light text-body">
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
