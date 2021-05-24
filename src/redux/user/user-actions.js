import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  token: "",
  isLoggedOn: false,
  isLoading: true,
  isСheckIn: true,
  error: "",
};

const { actions, reducer } = createSlice({
  name: "user",
  initialState,   
  reducers: {
    fetchRegisterRequest: (state) => {
      state.isLoading = true;
    },
    fetchRegisterSuccess: (state, action) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedOn = false;
      state.isLoading = false;
    },
    fetchRegisterError: (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    fetchLoginRequest: (state) => {
      state.isLoading = true;
    },
    fetchLoginSuccess: (state, action) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedOn = false;
      state.isLoading = false;
    },
    fetchLoginError: (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    fetchLogoutRequest: (state) => {
      state.isLoading = true;
    },
    fetchLogoutSuccess: (state, action) => {
      state.token = "";
      state.name = "";
      state.email = "";
      state.isLoggedOn = false;
      state.isLoading = false;
    },
    fetchLogoutError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchUserRequest: (state) => {
      state.isСheckIn = true;
    },
    fetchUserSuccess: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedOn = true;
      state.isСheckIn = false;
    },
    fetchUserError: (state) => {
      state.isСheckIn = false;
      state.isLoggedOn = false;
      state.token = "";
    },
    fetchUserCancel: (state) => {
      state.isСheckIn = false;
    },
  },
});

export const {
  fetchRegisterRequest,
  fetchRegisterSuccess,
  fetchRegisterError,
  
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginError,
  
  fetchLogoutRequest,
  fetchLogoutSuccess,
  fetchLogoutError,
  
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserError,
  fetchUserCancel,
} = actions;

export default reducer;
