// import React from "react";
// import { useContext, useState } from "react";
// import { AppContext } from "../context/App_Context";

// import { useNavigate } from "react-router-dom";

// //Toastify is used to show msg in top right corner
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AddRecipe = () => {
//   const navigate = useNavigate();
//   const { addRecipe } = useContext(AppContext);
//   const [formData, setformData] = useState({
//     title: "",
//     inst: "",
//     ing1: "",
//     ing2: "",
//     ing3: "",
//     ing4: "",
//     qty1: "",
//     qty2: "",
//     qty3: "",
//     qty4: "",
//     imgUrl: "",
//   });

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setformData({ ...formData, [name]: value });
//   };
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     const {
//       title,
//       inst,
//       ing1,
//       ing2,
//       ing3,
//       ing4,
//       qty1,
//       qty2,
//       qty3,
//       qty4,
//       imgUrl,
//     } = formData;

//     const result = await addRecipe(
//       title,
//       inst,
//       ing1,
//       ing2,
//       ing3,
//       ing4,
//       qty1,
//       qty2,
//       qty3,
//       qty4,
//       imgUrl
//     );
//     //console.log("add recipe", result);
//     toast.success(result.data.message, {
//       position: "top-right",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       transition: Bounce,
//     });

//     console.log(result.data);
//     setTimeout(() => {
//       navigate("/");
//     }, 1500);
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div
//         className="container my-5 p-5"
//         style={{
//           width: "500px",
//           border: "2px solid yellow",
//           borderRadius: "10px",
//         }}
//       >
//         <h2 className="text-center">Add Recipe</h2>
//         <form
//           onSubmit={onSubmitHandler}
//           style={{
//             width: "400px",
//             margin: "auto",
//           }}
//           className="my-3 p-3"
//         >
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Title
//             </label>
//             <input
//               name="title"
//               value={formData.title}
//               onChange={onChangeHandler}
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Instruction
//             </label>
//             <input
//               name="inst"
//               value={formData.inst}
//               onChange={onChangeHandler}
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Ingredient 1
//             </label>
//             <input
//               name="ing1"
//               value={formData.ing1}
//               onChange={onChangeHandler}
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Ingredient 2
//             </label>
//             <input
//               name="ing2"
//               value={formData.ing2}
//               onChange={onChangeHandler}
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Ingredient 3
//             </label>
//             <input
//               name="ing3"
//               value={formData.ing3}
//               onChange={onChangeHandler}
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Ingredient 4
//             </label>
//             <input
//               name="ing4"
//               value={formData.ing4}
//               onChange={onChangeHandler}
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Qantity 1
//             </label>
//             <input
//               name="qty1"
//               value={formData.qty1}
//               onChange={onChangeHandler}
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Qantity 2
//             </label>
//             <input
//               name="qty2"
//               value={formData.qty2}
//               onChange={onChangeHandler}
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Qantity 3
//             </label>
//             <input
//               name="qty3"
//               value={formData.qty3}
//               onChange={onChangeHandler}
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Qantity 4
//             </label>
//             <input
//               name="qty4"
//               value={formData.qty4}
//               onChange={onChangeHandler}
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Image URL
//             </label>
//             <input
//               name="imgUrl"
//               value={formData.imgUrl}
//               onChange={onChangeHandler}
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>

//           <div className="container d-grid col-6 ">
//             <button type="submit" className="btn btn-primary my-3">
//               Add Recipe
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddRecipe;

import React, { useState, useContext } from "react";
import { AppContext } from "../context/App_Context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddRecipe = () => {
  const navigate = useNavigate();
  const { addRecipe } = useContext(AppContext);

  const [formData, setFormData] = useState({
    label: "",
    image: "",
    ingredients: [""], // Initialize with one empty string
    cuisineType: [""],
    mealType: [""],
    dietLabels: [""],
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const [field, index] = name.split("-");

    if (
      ["ingredients", "cuisineType", "mealType", "dietLabels"].includes(field)
    ) {
      setFormData((prevData) => {
        const updatedArray = [...prevData[field]];
        updatedArray[index] = value;
        return { ...prevData, [field]: updatedArray };
      });
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const addField = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], ""],
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { label, image, ingredients, cuisineType, mealType, dietLabels } =
      formData;

    const result = await addRecipe(
      label,
      image,
      ingredients,
      cuisineType,
      mealType,
      dietLabels
    );
    toast.success(result.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <ToastContainer />
      <div
        className="container my-5 p-5"
        style={{
          width: "500px",
          padding: "30px", // Adds space inside the form
          borderRadius: "20px", // Smooth rounded corners
          backgroundColor: "#ffffff", // White background
          boxShadow:
            "0 10px 40px rgba(0, 0, 0, 0.1), 0 10px 60px rgba(0, 0, 0, 0.2)", // Strong shadow for depth
          border: "1px solid #e0e0e0", // Light grey border for a subtle outline
          transition: "all 0.3s ease-in-out", // Smooth transition for hover effects
          transform: "scale(1)", // Initial scale
          hover: {
            transform: "scale(1.05)", // Slight scaling effect on hover for added interactivity
          },
        }}
      >
        <h2 className="text-center text-black">Add Recipe</h2>
        <form
          onSubmit={onSubmitHandler}
          style={{ width: "400px", margin: "auto" }}
          className="my-3 p-3"
        >
          <div className="mb-3">
            <label htmlFor="label" className="form-label">
              Title
            </label>
            <input
              name="label"
              value={formData.label}
              onChange={onChangeHandler}
              type="text"
              className="form-control"
              id="label"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image URL
            </label>
            <input
              name="image"
              value={formData.image}
              onChange={onChangeHandler}
              type="text"
              className="form-control"
              id="image"
              required
            />
          </div>

          {/* Ingredients */}
          {formData.ingredients.map((ingredient, index) => (
            <div key={`ingredient-${index}`} className="mb-3">
              <label htmlFor={`ingredient-${index}`} className="form-label">
                Ingredient {index + 1}
              </label>
              <input
                name={`ingredients-${index}`}
                value={ingredient}
                onChange={onChangeHandler}
                type="text"
                className="form-control"
                id={`ingredient-${index}`}
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("ingredients")}
            className="btn btn-secondary mb-3"
          >
            Add Ingredient
          </button>

          {/* Cuisine Type */}
          {formData.cuisineType.map((cuisine, index) => (
            <div key={`cuisineType-${index}`} className="mb-3">
              <label htmlFor={`cuisineType-${index}`} className="form-label">
                Cuisine Type {index + 1}
              </label>
              <input
                name={`cuisineType-${index}`}
                value={cuisine}
                onChange={onChangeHandler}
                type="text"
                className="form-control"
                id={`cuisineType-${index}`}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("cuisineType")}
            className="btn btn-secondary mb-3"
          >
            Add Cuisine Type
          </button>

          {/* Meal Type */}
          {formData.mealType.map((meal, index) => (
            <div key={`mealType-${index}`} className="mb-3">
              <label htmlFor={`mealType-${index}`} className="form-label">
                Meal Type {index + 1}
              </label>
              <input
                name={`mealType-${index}`}
                value={meal}
                onChange={onChangeHandler}
                type="text"
                className="form-control"
                id={`mealType-${index}`}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("mealType")}
            className="btn btn-secondary mb-3"
          >
            Add Meal Type
          </button>

          {/* Diet Labels */}
          {formData.dietLabels.map((diet, index) => (
            <div key={`dietLabels-${index}`} className="mb-3">
              <label htmlFor={`dietLabels-${index}`} className="form-label">
                Diet Label {index + 1}
              </label>
              <input
                name={`dietLabels-${index}`}
                value={diet}
                onChange={onChangeHandler}
                type="text"
                className="form-control"
                id={`dietLabels-${index}`}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("dietLabels")}
            className="btn btn-secondary mb-3"
          >
            Add Diet Label
          </button>

          <div className="container d-grid col-6">
            <button type="submit" className="btn btn-primary my-3">
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;
