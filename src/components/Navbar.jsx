import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/App_Context";

const Navbar = () => {
  const { isAuthenticated, setisAuthenticated, logOut } =
    useContext(AppContext);

  return (
    <>
      <div className="nav bg-dark p-2">
        <Link
          to={"/"}
          className="left"
          style={{
            textDecoration: "none",
            color: "white",
            position: "relative",
          }}
        >
          <i class="bi bi-house-door" style={{ fontSize: "2rem" }}></i>
          <span className="tooltip">Home</span>
        </Link>

        <div className="right">
          {isAuthenticated && (
            <>
              <Link to={"/add"} className="btn btn-success mx-2">
                <i className="bi bi-plus-circle"></i> Add Recipe
              </Link>
              <Link
                to={"/profile"}
                className="mx-2"
                style={{ fontSize: "1.5rem" }}
              >
                <i className="bi bi-person-circle"></i>
              </Link>
              <div className="btn btn-danger mx-2" onClick={logOut}>
                <i
                  className="bi bi-box-arrow-right"
                  style={{ fontSize: "1.2rem", marginRight: "5px" }}
                ></i>
              </div>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Link to={"/login"} className="btn btn-primary mx-2">
                Login
              </Link>
              <Link to={"/register"} className="btn btn-warning mx-2">
                Register
              </Link>
            </>
          )}

          {/* <Link to={"/saved"} className="btn btn-light mx-2">
            Saved
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
