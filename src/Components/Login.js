import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLoginAction } from "./redux/user/user.action";

let Login = () => {
  let [user, setUser] = useState({
    username: "",
    password: "",
    loggedIn: true,
  });
  let dispatch = useDispatch();
  let history = useHistory();

  let inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  let submitForm = (e) => {
    dispatch(getLoginAction(user, history));

    e.preventDefault();
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={submitForm}>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="username"
                  value={user.username}
                  onChange={inputHandler}
                  aria-describedby="emailHelp"
                  placeholder="username"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={inputHandler}
                />
              </div>

              <input type="submit" value="submit" className="btn btn-success" />
            </form>
          </div>
        </div>
        {/* ----*Login*---- */}
        <div className="column">
          {/*   <pre>{JSON.stringify(user)}</pre> */}
        </div>
        {/* <div className="cover-img">
          <img src={"bg.png"} alt="newimage" />
        </div> */}
      </div>

      {/* //*-------------Footer---------*\\ */}
    </>
  );
};

export default Login;