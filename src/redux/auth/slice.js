import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  userRegister,
  userLogin,
  userLogout,
  checkUserAuth,
} from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(checkUserAuth.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(checkUserAuth.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(checkUserAuth.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })

      .addMatcher(
        isAnyOf(userRegister.pending, userLogin.pending, userLogout.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          userRegister.fulfilled,
          userLogin.fulfilled,
          userLogout.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(userRegister.rejected, userLogin.rejected, userLogout.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const authReducer = slice.reducer;
