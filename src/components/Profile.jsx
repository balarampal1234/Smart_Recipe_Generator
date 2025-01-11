import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
const Profile = () => {
  const { user, userRecipe } = useContext(AppContext);
  return (
    <>
      <div className="container text-center my-3">
        <h1>Welcome {user.name}</h1>
        <h4>{user.gmail}</h4>
      </div>

      <div className="container">
        <div className=" text-center mx-auto" style={{ width: "1200px" }}>
          <div className="row d-flex justify-content-center align-items-center">
            {userRecipe?.map((data) => (
              <div key={data._id} className="col-md-3 my-3">
                <div className="d-flex justify-content-center align-items-center p-3">
                  <img
                    src={data.image}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "10px",
                      border: "2px solid yellow",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{data.label}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
