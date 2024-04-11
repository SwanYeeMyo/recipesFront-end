import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Recipes = () => {
  const [title, setTitle] = useState("");
  const [kitchen_note, setKitchenNote] = useState("");
  const [author_note, setAuthorNote] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [serving, setServing] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [images, setImages] = useState([]);
  const [dishTypes, setDishType] = useState([]);
  const [type, setType] = useState();
  const [selectedDishTypes, setSelectedDishTypes] = useState([]);

  const user_id = localStorage.getItem("id");

  const [ingredients, setIngredients] = useState([
    {
      qty: "",
      measurement: "",
      name: "",
    },
  ]);
  const [steps, setSteps] = useState([
    {
      step: "",
    },
  ]);

  const handleInputChange = (index, event) => {
    const value = [...ingredients];
    if (event.target.name === "qty") {
      value[index].qty = event.target.value;
    } else if (event.target.name === "measurement") {
      value[index].measurement = event.target.value;
    } else if (event.target.name === "name") {
      value[index].name = event.target.value;
    }
    setIngredients(value);
  };

  const handleAddFields = () => {
    setIngredients((prevIngredients) => [
      ...prevIngredients,
      { qty: "", measurement: "", name: "" },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...ingredients];
    values.splice(index, 1);
    setIngredients(values);
  };
  const handleInputDirection = (event, index) => {
    const value = [...steps];
    if (event.target.name === "steps") {
      value[index].step = event.target.value;
    }
    setSteps(value);
  };

  const handleAddDirection = () => {
    setSteps([...steps, { step: "" }]);
  };

  const handleRemovesteps = (index) => {
    const values = [...steps];
    values.splice(index, 1);
    setSteps(values);
  };

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedDishTypes(selectedOptions);
  };
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    // Update the images state by concatenating the new images with the existing ones
    setImages([...images, ...selectedImages]);
  };
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/dishTypes").then((res) => {
      setDishType(res.data.data);
      console.log(res.data.data[0].name);
    });
  }, []);

  const clearData = () => {
    setTitle("");
    setKitchenNote("");
    setAuthorNote("");
    setCookTime("");
    setServing("");
    setPrepTime("");
    setImages([]);
    setType();
    setSelectedDishTypes([]);
    setIngredients([{ qty: "", measurement: "", name: "" }]);
    setSteps([{ step: "" }]);
  };

  const postData = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("author_note", author_note || "");
      formData.append("kitchen_note", kitchen_note || "");
      formData.append("cook_time", parseInt(cookTime));
      formData.append("prep_time", parseInt(prepTime));
      formData.append("serving", parseInt(serving));
      formData.append("type", type);

      formData.append("user_id", parseInt(user_id));

      selectedDishTypes.forEach((dishTypeId) => {
        formData.append("dish_type[]", parseInt(dishTypeId));
      });

      ingredients.forEach((ingredient, index) => {
        formData.append(`ingredients[${index}][qty]`, ingredient.qty);
        formData.append(
          `ingredients[${index}][measurement]`,
          ingredient.measurement
        );
        formData.append(`ingredients[${index}][name]`, ingredient.name);
      });

      steps.forEach((step, index) => {
        // Change 'steps' to 'steps'
        formData.append(`steps[${index}]`, step.step); // Change 'steps' to 'steps'
      });

      images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      // Output formData entries to console for debugging
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      // Send the data to the Laravel API endpoint
      const response = await axios.post(
        "http://127.0.0.1:8000/api/recipes",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      toast.success("Recipe created successfully");

      // Reset all state variables to initial values after successful submission
    } catch (error) {
      console.error("Error creating recipe:", error);
      toast.error("Failed to create recipe");
    }
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    if (
      !title ||
      !cookTime ||
      !serving ||
      !prepTime ||
      ingredients.some(
        (ingredient) =>
          !ingredient.qty || !ingredient.measurement || !ingredient.name
      ) ||
      steps.some((direction) => !direction.step) ||
      images.length === 0
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    await postData(); // Wait for postData() to finish before resetting state
    clearData();
  };

  return (
    <>
      <div className="p-4 sm:ml-64 font-nunito">
        <ToastContainer />
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          <div>
            <h1 className="text-center">Recipes Create </h1>
          </div>
          <div className="w-full mx-auto shadow p-3">
            <form onSubmit={submitHandle}>
              {/* hiddle */}
              <input type="hidden" name="user_id" value={user_id} />
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Chicken Noodle Soup"
                />
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Author_note
                </label>
                <textarea
                  value={author_note}
                  onChange={(e) => setAuthorNote(e.target.value)}
                  name="author_note" // Ensure the name attribute is set correctly
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Kitchen_note
                </label>
                <textarea
                  value={kitchen_note}
                  name="kitchen_note"
                  onChange={(e) => setKitchenNote(e.target.value)}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className=" gap-5 flex w-full">
                <div className=" flex-grow   mb-3">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Cook Time
                  </label>
                  <input
                    value={cookTime}
                    type="text"
                    name="cook_time"
                    onChange={(e) => setCookTime(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                  />
                </div>
                <div className="flex-grow mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Prep Time
                  </label>
                  <input
                    value={prepTime}
                    type="text"
                    name="prep_time"
                    onChange={(e) => setPrepTime(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                  />
                </div>
                <div className="flex-grow mb-3">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Serving
                  </label>
                  <input
                    value={serving}
                    name="serving"
                    type="text"
                    onChange={(e) => setServing(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                  />
                </div>
              </div>
              {images.length === 0 && (
                <div className="mb-3">
                  <label className="block mb-2">Select Image </label>
                  <input
                    type="file"
                    name="image[]"
                    className="rounded-lg border w-full"
                    onChange={handleImageChange}
                    multiple
                  />
                </div>
              )}

              <div>
                <div className="mb-3">
                  <h5 className="mb-3">Ingredeients</h5>
                </div>
                {ingredients.map((inputField, index) => (
                  <div
                    key={index}
                    className="flex mb-5 flex-wrap justify-evenly gap-5"
                  >
                    <div className="flex flex-grow flex-col">
                      <label>Qty</label>
                      <input
                        type="text"
                        name="qty"
                        value={inputField.qty}
                        onChange={(event) => handleInputChange(index, event)}
                        className="border bg-gray-50 rounded-lg border-gray-300"
                      />
                    </div>
                    <div className="flex flex-grow flex-col">
                      <label>Measurement</label>
                      <input
                        type="text"
                        name="measurement"
                        value={inputField.measurement}
                        onChange={(event) => handleInputChange(index, event)}
                        className="border bg-gray-50 rounded-lg border-gray-300"
                      />
                    </div>
                    <div className="flex  flex-col">
                      <label>Item</label>
                      <input
                        type="text"
                        name="name"
                        value={inputField.name}
                        onChange={(event) => handleInputChange(index, event)}
                        className="border bg-gray-50 rounded-lg border-gray-300"
                      />
                    </div>

                    {index === ingredients.length - 1 && (
                      <div className="flex md:mt-5 justify-center   items-center">
                        <button
                          type="button"
                          onClick={handleAddFields}
                          className="text-white bg-navy-blue rounded w-[100px]"
                        >
                          Add
                        </button>
                      </div>
                    )}
                    {ingredients.length > 1 && (
                      <div className="flex md:mt-5 justify-center   items-center">
                        <button
                          type="button"
                          onClick={handleRemoveFields}
                          className=" rounded w-[100px]"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mb-3">
                <div className="w-full">
                  <select
                    multiple
                    name="dishTypes"
                    value={selectedDishTypes}
                    onChange={handleSelectChange}
                    className="w-full bg-gray-50 border"
                  >
                    {dishTypes.map((dish) => (
                      <option key={dish.id} value={dish.id}>
                        {dish.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="  font-nunito">
                <h4 className="my-3">Direction</h4>
                {steps.map((inputField, index) => (
                  <div key={index} className="flex gap-2  mb-3">
                    <div className="w-5 p-1 flex items-center justify-center rounded-full ">
                      <h5 className="bg-navy-blue text-white rounded-full p-2">
                        {index + 1}
                      </h5>
                    </div>
                    <textarea
                      onChange={(event) => handleInputDirection(event, index)}
                      value={inputField.step}
                      name="steps"
                      id=""
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      cols="30"
                      rows="10"
                    ></textarea>
                    {index === steps.length - 1 && (
                      <div className="flex md:mt-5 justify-center   items-center">
                        <button
                          type="button"
                          onClick={handleAddDirection}
                          className="text-white bg-navy-blue rounded w-[100px]"
                        >
                          Add
                        </button>
                      </div>
                    )}
                    {steps.length > 1 && (
                      <div className="flex md:mt-5 justify-center   items-center">
                        <button
                          type="button"
                          onClick={handleRemovesteps}
                          className=" rounded w-[100px]"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mb-3">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select a type
                </label>
                <select
                  name="type"
                  id="countries"
                  defaultValue={type}
                  onChange={(e) => setType(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>select an option</option>
                  <option value="free">Free</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
              <div className="flex justify-end ">
                <button
                  type="submit"
                  className="my-3 bg-green-400 w-[150px] rounded-md  text-white border p-1"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
