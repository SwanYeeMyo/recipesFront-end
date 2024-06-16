import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../../card/Card';

const UserRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Set token in the request headers for all requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Make the API request to fetch users
      axios
        .get("http://127.0.0.1:8000/api/user-recipes")
        .then((res) => {
          // Assuming res.data.data contains the array of users
          setRecipes(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } else {
      console.error("No token found.");
    }
  }, []);

  console.log(recipes);


  return (
    <div className="p-4 sm:ml-64">
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="col-span-1">
            <Card
              image={recipe.images.length > 0 ? recipe.images[1] : null}
              recipe={recipe}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserRecipe
