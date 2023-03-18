import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ShowMessageError from "../../pages/Messeage/ShowMessageError";
import ShowMessageSuccess from "../../pages/Messeage/ShowMessSucces";
import { authService } from "../../services/AuthService";

let user = {};
if (localStorage.getItem("userLogin")) {
  user = JSON.parse(localStorage.getItem("userLogin"));
}
const initialState = {
  isFetchingSignIn: false,
  userInfo: user,
};

export const { reducer: authReducer, actions: authActions } = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.isFetchingSignIn = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isFetchingSignIn = false;
        state.userInfo = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isFetchingSignIn = false;
        state.userInfo = action.payload;
      });
  },
});

export const signIn = createAsyncThunk("auth/signIn", async (data) => {
  try {
    const result = await authService.signIn(data);
    localStorage.setItem("userLogin", JSON.stringify(result.data.content.user));
    localStorage.setItem("token", JSON.stringify(result.data.content.token));
    ShowMessageSuccess("Login Successful !");

    return result.data.content.user;
  } catch (err) {
    ShowMessageError(err.response.data.content);
  }
});

export const signUp = createAsyncThunk("auth/signUp", async (data) => {
  try {
    const result = await authService.signUp(data);
    ShowMessageSuccess("Sign Up Successful !");
    return result.data.content;
  } catch (err) {
    ShowMessageError(err.response.data.content);
  }
});
