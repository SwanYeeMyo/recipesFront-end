import React, { useState } from "react";
const Recipes = () => {
  const [title, setTitle] = useState("");
  const [kitchen_note, setKitchenNote] = useState("");
  const [author_note, setAuthorNote] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [serveTime, setServeTime] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const user_id = localStorage.getItem("id");

  const [ingredients, setIngredients] = useState([
    {
      qty: "",
      measurement: "",
      name: "",
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
    setIngredients([...ingredients, { qty: "", measurement: "", name: "" }]);
  };
  const handleRemoveFields = (index) => {
    const values = [...ingredients];
    values.splice(index, 1);
    setIngredients(values);
  };
  const handleAddDirection = () => {
    setDirections([...directions, { step: "" }]);
  };
  const handleRemoveDirections = (index) => {
    const values = [...directions];
    values.splice(index, 1);
    setDirections(values);
  };

  const [directions, setDirections] = useState([
    {
      step: "",
    },
  ]);
  const handleInputDirection = (event, index) => {
    const value = [...directions];
    if (event.target.name === "step") {
      value[index].step = event.target.value;
    }
    setDirections(value);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    alert("create success");
  };

  return (
    <>
      <div className="p-4 sm:ml-64 font-nunito">
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
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Chicken Noodle Soup"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Author_note
                </label>
                <textarea
                  name="author_nonte"
                  id=""
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
                  name="kitchen_note"
                  id=""
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
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="flex-grow mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Prep Time
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="flex-grow mb-3">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Serving
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  name="image[]"
                  className="rounded-lg border w-full "
                />
              </div>
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
                    data-hs-select='{
  "placeholder": "Select multiple options...",
  "toggleTag": "<button type=\"button\"></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400",
  "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-gray-700 dark:[&::-webkit-scrollbar-thumb]:bg-gray-500 dark:bg-slate-900 dark:border-gray-700",
  "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
  "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"flex-shrink-0 size-3.5 text-gray-500 dark:text-gray-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
}'
                    class="hidden"
                  >
                    <option value="">Choose</option>
                    <option>Name</option>
                    <option>Email address</option>
                    <option>Description</option>
                    <option>User ID</option>
                  </select>
                  {/* <div className="relative flex w-full">
                    <select
                      id="select-role"
                      name="dish_type[]"
                      multiple
                      placeholder="Select roles..."
                      autoComplete="off"
                      className="block w-full rounded-sm cursor-pointer focus:outline-none"
                    >
                      <option value="1">super admin</option>
                      <option value="2">admin</option>
                      <option value="3">writer</option>
                      <option value="4">user</option>
                    </select>
                  </div> */}
                </div>
              </div>
              <div className="  font-nunito">
                <h4 className="my-3">Direction</h4>
                {directions.map((inputField, index) => (
                  <div key={index} className="flex gap-2  mb-3">
                    <div className="w-5 p-1 flex items-center justify-center rounded-full ">
                      <h5 className="bg-navy-blue text-white rounded-full p-2">
                        {index + 1}
                      </h5>
                    </div>
                    <textarea
                      onChange={(event) => handleInputDirection(event, index)}
                      value={inputField.step}
                      name="step"
                      id=""
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      cols="30"
                      rows="10"
                    ></textarea>
                    {index === directions.length - 1 && (
                      <div className="flex md:mt-5 justify-center   items-center">
                        <button
                          onClick={handleAddDirection}
                          className="text-white bg-navy-blue rounded w-[100px]"
                        >
                          Add
                        </button>
                      </div>
                    )}
                    {directions.length > 1 && (
                      <div className="flex md:mt-5 justify-center   items-center">
                        <button
                          onClick={handleRemoveDirections}
                          className=" rounded w-[100px]"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className="bg-green-400 w-[150px] rounded-md  text-white border p-1"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
