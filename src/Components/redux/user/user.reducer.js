import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE,
  } from "./user.action";
  
  let initialState = {
    user: null,
    loading: false,
    isAuthenticated: false,
    token: null,
    errorMessage: null,
  };
  let userReducer = (state = initialState, action) => {
    let { payload } = action;
    switch (action.type) {
      case LOGIN_REQUEST:
        return { ...state, loading: true };
      case LOGIN_SUCCESS:
        localStorage.setItem("token", payload.username);
        return {
          ...state,
          loading: false,
          token: payload,
          user: payload.username,
        };
      case LOGIN_FAILURE:
        localStorage.removeItem("token");
        return {
          ...state,
          loading: false,
          errorMessage: payload,
        };
  
      case GET_USER_INFO_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_USER_INFO_SUCCESS:
        localStorage.setItem("user", JSON.stringify(payload));
        return {
          ...state,
          loading: false,
          user: payload,
          isAuthenticated: true,
        };
      case GET_USER_INFO_FAILURE:
        return {
          ...state,
          loading: false,
          errorMessage: payload,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  /*
      1. View - Button Event -> dispatch the action(Redux actions)
      2. Redux action - consume the Back End api. invoke the reducers
          dispatch({type, payload})
      3. reducer is pure function(state=intial state, action) 
         reducer is updating/creating new store based on action types
  */