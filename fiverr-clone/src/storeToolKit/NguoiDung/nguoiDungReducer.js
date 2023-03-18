import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ShowMessageError from "../../pages/Messeage/ShowMessageError";
import ShowMessageSuccess from "../../pages/Messeage/ShowMessSucces";
import { NguoiDungServices } from "../../services/NguoiDungServices";

const initialState = {
  infoUser: {},
  isFetchinginfoUser: false,
  usersList: [],
  isFetchingUsersList: false,
  isFetchingSearch: false,
  user: [],
  isFetchingEditUser: false,
};
export const { reducer: nguoiDungReducer, actions: nguoiDungActions } =
  createSlice({
    name: "NguoiDung",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // getiFnoUser
        .addCase(getInfoUser.pending, (state) => {
          state.isFetchinginfoUser = true;
        })
        .addCase(getInfoUser.fulfilled, (state, action) => {
          state.isFetchinginfoUser = false;
          state.infoUser = action.payload;
        })
        .addCase(getInfoUser.rejected, (state, action) => {
          state.isFetchinginfoUser = false;

          state.infoUser = action.payload;
        })
        // get userList
        .addCase(getUSerList.pending, (state) => {
          state.isFetchingUsersList = true;
        })
        .addCase(getUSerList.fulfilled, (state, action) => {
          state.isFetchingUsersList = false;

          state.usersList = action.payload;
        })
        .addCase(getUSerList.rejected, (state, action) => {
          state.isFetchingUsersList = false;

          state.usersList = action.payload;
        })
        // search user
        .addCase(searchUser.pending, (state) => {
          state.isFetchingSearch = true;
        })
        .addCase(searchUser.fulfilled, (state, action) => {
          state.isFetchingSearch = false;
          state.user = action.payload;
        })
        .addCase(searchUser.rejected, (state, action) => {
          state.isFetchingSearch = false;
          state.user = action.payload;
        })
        //
        .addCase(editInfoUser.pending, (state) => {
          state.isFetchingEditUser = false;
        })

        .addCase(editInfoUser.fulfilled, (state, action) => {
          state.isFetchingEditUser = true;
        })
        .addCase(editInfoUser.rejected, (state, action) => {
          state.isFetchingEditUser = false;
        });
    },
  });
export const getInfoUser = createAsyncThunk(
  "NguoiDung/getInfoUser",
  async (id) => {
    try {
      const result = await NguoiDungServices.getInfoUser(id);
      localStorage.setItem("infoUser", JSON.stringify(result.data.content));
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
export const editInfoUser = createAsyncThunk(
  "NguoiDung/editInfoUser",
  async (data) => {
    try {
      const result = await NguoiDungServices.editInfoUser(data);
      ShowMessageSuccess("Success !!!");
      return result.data.content;
    } catch (err) {
      ShowMessageError(err.response.data.content);
    }
  }
);

export const getUSerList = createAsyncThunk(
  "NguoiDung/getUserList",
  async (id = "") => {
    try {
      const result = await NguoiDungServices.getUserList(id);

      return result.data.content;
    } catch (err) {
      console.log(err.response.data.content);
    }
  }
);

export const putUser = createAsyncThunk("NguoiDung/putUser", async (id) => {
  try {
    const result = await NguoiDungServices.putUser(id);
    ShowMessageSuccess("Success !!!");
  } catch (err) {
    ShowMessageError(err.response.data.content);
  }
});

export const searchUser = createAsyncThunk(
  "NguoiDung/searchUser",
  async (id) => {
    try {
      const result = await NguoiDungServices.searchUser(id);

      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
export const deleteUser = createAsyncThunk(
  "NguoiDung/deleteUser",
  async (id, { dispatch }) => {
    try {
      const result = await NguoiDungServices.deleteUser(id);
      ShowMessageSuccess("Success !!!");
      dispatch(getUSerList());
    } catch (err) {
      ShowMessageError(err.response.data.content);
    }
  }
);

export const postUser = createAsyncThunk("NguoiDung/postUser", async (data) => {
  try {
    const result = await NguoiDungServices.postUser(data);
    ShowMessageSuccess("Success !!!");
  } catch (err) {
    ShowMessageError(err.response.data.content);
  }
});
