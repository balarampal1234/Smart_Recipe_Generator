import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useContext(AppContext);
  const [name, setname] = useState("");
  const [gmail, setgmail] = useState("");
  const [password, setpassword] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await register(name, gmail, password);
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

      if (result.data.message !== "User Already exist") {
        setTimeout(() => {
          navigate("/login"); // Redirect to login
        }, 1500);
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.", {
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
    }
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
        <h2 className="text-center">Register</h2>
        <form
          onSubmit={registerHandler}
          style={{
            width: "420px",
            margin: "auto",
          }}
          className="my-3 p-3"
        >
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
              type="text"
              className="form-control"
              id="nameInput"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              value={gmail}
              onChange={(e) => setgmail(e.target.value)}
              required
              type="email"
              className="form-control"
              id="emailInput"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              type="password"
              className="form-control"
              id="passwordInput"
            />
          </div>

          <div className="container d-grid col-6 ">
            <button type="submit" className="btn btn-primary my-3">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
