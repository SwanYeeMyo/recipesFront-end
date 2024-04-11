import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "../card/Card";

const RecipeSearch = () => {
  const [data, setData] = useState([]);
  const { recipe } = useParams(); // Extract recipe parameter from URL

  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/recipes/search", { name: recipe })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
  }, [recipe]);

  return (
    <div className="mt-32 ">
      <div className="max-w-6xl mx-auto">
        <Link
          to={"/"}
          className="bg-navy-blue p-1 mb-3 block max-w-[100px] text-center text-white"
        >
          Back
        </Link>
        {data.length > 0 ? (
          <div className="grid grid-cols-12 md:grid-cols-4 gap-6">
            {data.map((recipe, index) => (
              <div key={index} className="col-span-1">
                <Card
                  image={recipe.images.length > 0 ? recipe.images[1] : null}
                  recipe={recipe}
                />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h5 className="text-center">
              No Data for{" "}
              <mark className="bg-classic text-white font-nunito text-regular">
                {recipe}
              </mark>{" "}
            </h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeSearch;
