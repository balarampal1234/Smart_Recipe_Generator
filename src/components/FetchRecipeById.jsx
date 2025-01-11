import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/App_Context";
import { Link, useLocation } from "react-router-dom";

const FetchRecipeById = ({ id }) => {
  const location = useLocation();
  const { getRecipeById } = useContext(AppContext);
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async (id) => {
      try {
        const result = await getRecipeById(id);
        setRecipe(result.data.recipe);
      } catch (err) {
        setError("Failed to fetch recipe. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchRecipe(id);
  }, [id, getRecipeById]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="text-center">
      <div
        className="text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="d-flex justify-content-center align-items-center p-3">
          <img
            src={recipe.image || "default-image-path.jpg"}
            className="card-img-top"
            alt={recipe.label || "Recipe Image"}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "10px",
              border: "2px solid yellow",
            }}
          />
        </div>
        <h3>{recipe.label || "Recipe Label"}</h3>
      </div>
      {location.pathname !== "/saved" && (
        <>
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <div className="left">
              {Array(4)
                .fill()
                .map((_, index) => {
                  const ingredient = recipe[`ing${index + 1}`];
                  const quantity = recipe[`qty${index + 1}`];
                  return (
                    ingredient && (
                      <h4 key={index}>
                        {ingredient} - {quantity || "N/A"}
                      </h4>
                    )
                  );
                })}
            </div>
            <div className="right" style={{ maxWidth: "500px" }}>
              {recipe.inst || "No instructions available."}
            </div>
          </div>
          <Link to="/" className="btn btn-warning my-5">
            Back to Home
          </Link>
        </>
      )}
    </div>
  );
};

export default FetchRecipeById;
