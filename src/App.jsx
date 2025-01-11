import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import AddRecipe from "./components/AddRecipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Saved from "./components/Saved";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Details from "./components/Details";
import SearchPage from "./components/SearchPage";
import RecipeDetail from "./components/RecipeDetail";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<SearchPage />} />

          {/* Recipe detail route, using dynamic parameter id */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/profile" element={<Profile />} />

          {/* <Route path="/saved" element={<Saved />} /> */}

          <Route path="/add" element={<AddRecipe />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
