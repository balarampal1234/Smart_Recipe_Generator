// import { useState } from "react";
// import SearchForm from "./SearchForm";
// import RecipeList from "./RecipeList";
// import Axios from "axios";
// import Loading from "./Loading";

// function SearchPage() {
//   const [query, setQuery] = useState("");
//   const [recipes, setRecipes] = useState([]);
//   const [dietLabels, setDietLabels] = useState("");

//   const [mealType, setMealType] = useState("");
//   const [cuisineType, setCuisineType] = useState("");
//   const [noresult, setNoresult] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const YOUR_APP_ID = "cbd0f1e8";
//   const YOUR_APP_KEY = "8f92274cf11e27f5dae4c4f286e6e1b3";

//   const getRecipes = async () => {
//     setLoading(true);
//     const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}${
//       dietLabels ? `&diet=${dietLabels}` : ""
//     }${mealType ? `&mealType=${mealType}` : ""}${
//       cuisineType ? `&cuisineType=${cuisineType}` : ""
//     }&from=0&to=20`;

//     try {
//       const res = await Axios.get(url);
//       console.log(res.data);
//       if (res.data.hits.length === 0) {
//         setNoresult(true);
//       } else {
//         setRecipes(res.data.hits);
//         setNoresult(false);
//       }
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//       setNoresult(true);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     getRecipes();

//     setQuery("");
//     setCuisineType("");
//     setDietLabels("");
//     setMealType("");
//   };

//   return (
//     <div>
//       <SearchForm
//         query={query}
//         setQuery={setQuery}
//         dietLabels={dietLabels}
//         setDietLabels={setDietLabels}
//         onSubmit={onSubmit}
//         mealType={mealType}
//         setMealType={setMealType}
//         cuisineType={cuisineType}
//         setCuisineType={setCuisineType}
//       />
//       {loading ? ( // Show loading spinner while fetching
//         <Loading />
//       ) : (
//         <RecipeList recipes={recipes} noresult={noresult} />
//       )}
//     </div>
//   );
// }

// export default SearchPage;

import { useState } from "react";
import SearchForm from "./SearchForm";
import RecipeList from "./RecipeList";
import Axios from "axios";
import Loading from "./Loading";
const YOUR_APP_ID = "cbd0f1e8";
const YOUR_APP_KEY = "8f92274cf11e27f5dae4c4f286e6e1b3";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [dietLabels, setDietLabels] = useState("");
  const [mealType, setMealType] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [noresult, setNoresult] = useState(false);
  const [loading, setLoading] = useState(false);

  const getRecipes = async () => {
    setLoading(true);
    setNoresult(false); // Reset no result state before fetching
    setRecipes([]); // Clear previous results

    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}${
      dietLabels ? `&diet=${dietLabels}` : ""
    }${mealType ? `&mealType=${mealType}` : ""}${
      cuisineType ? `&cuisineType=${cuisineType}` : ""
    }&from=0&to=20`;

    try {
      const res = await Axios.get(url);

      if (res.data?.hits?.length > 0) {
        setRecipes(res.data.hits);
        setNoresult(false);
      } else {
        setNoresult(true);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error.message || error);
      setNoresult(true);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
    setQuery("");
    setCuisineType("");
    setDietLabels("");
    setMealType("");
  };

  return (
    <div>
      <SearchForm
        query={query}
        setQuery={setQuery}
        dietLabels={dietLabels}
        setDietLabels={setDietLabels}
        onSubmit={onSubmit}
        mealType={mealType}
        setMealType={setMealType}
        cuisineType={cuisineType}
        setCuisineType={setCuisineType}
      />
      {loading ? (
        <Loading />
      ) : (
        <RecipeList recipes={recipes} noresult={noresult} />
      )}
    </div>
  );
}

export default SearchPage;
