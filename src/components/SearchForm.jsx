import React from "react";

function SearchForm({
  query,
  setQuery,
  dietLabels,
  setDietLabels,
  mealType,
  setMealType,
  onSubmit,
  cuisineType,
  setCuisineType,
}) {
  return (
    <div className="app">
      <h1 className="app-heading">Find Meals For Your Ingredients</h1>

      <p className="app-paragraph">
        <em>Real food doesn't have ingredients, real food is ingredients.</em>
        <br />- Jamie Oliver
      </p>
      <form className="app-searchForm" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="ingredients">Enter Ingredients</label>
          <input
            type="text"
            id="ingredients"
            className="app-input"
            placeholder="Enter ingredients here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cuisine">Cuisine Preference</label>
          <select
            id="cuisine"
            className="app-dropdown"
            value={cuisineType}
            onChange={(e) => setCuisineType(e.target.value)}
            aria-label="Cuisine Preference"
          >
            <option value="" disabled hidden>
              Select a Cuisine
            </option>
            <option value="american">American</option>
            <option value="asian">Asian</option>
            <option value="british">British</option>
            <option value="caribbean">Caribbean</option>
            <option value="chinese">Chinese</option>
            <option value="eastern europe">Eastern Europe</option>
            <option value="french">French</option>
            <option value="greek">Greek</option>
            <option value="indian">Indian</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="korean">Korean</option>
            <option value="kosher">Kosher</option>
            <option value="mexican">Mexican</option>
            <option value="middle eastern">Middle Eastern</option>
            <option value="south american">South American</option>
            <option value="south east asian">South East Asian</option>
            <option value="world">World</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="diet">Diet Label</label>
          <select
            id="diet"
            className="app-dropdown"
            value={dietLabels}
            onChange={(e) => setDietLabels(e.target.value)}
          >
            <option value="" disabled>
              Select Your Diet
            </option>
            <option value="balanced">Balanced</option>
            <option value="high-fiber">High-Fiber</option>
            <option value="high-protein">High-Protein</option>
            <option value="low-carb">Low-Carb</option>
            <option value="low-fat">Low-Fat</option>
            <option value="low-sodium">Low-Sodium</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="meal">Meal Type</label>
          <select
            id="meal"
            className="app-dropdown"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
          >
            <option value="" disabled>
              Choose Meal Types
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </select>
        </div>

        <input className="app-submit" type="submit" value="Generate Recipe" />
      </form>
    </div>
  );
}

export default SearchForm;
