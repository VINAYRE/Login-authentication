const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
const GET_USER_INFO_FAILURE = "GET_USER_INFO_FAILURE";

//Login Actions
let getLoginAction = (user, history) => {
  console.log(user, "Helllo");
  history.push("/blog");
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

let getUserInfo = () => {
  return (dispatch) => {
    try {
      if (localStorage.token) {
        //setting HTTP headers
        localStorage.getItem("token");
      }
      dispatch({ type: GET_USER_INFO_REQUEST });

      dispatch({ type: GET_USER_INFO_SUCCESS, payload: " response.data" });
    } catch (err) {
      dispatch({ type: GET_USER_INFO_FAILURE, payload: err });
    }
  };
};

export {
  getLoginAction,
  getUserInfo,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
};