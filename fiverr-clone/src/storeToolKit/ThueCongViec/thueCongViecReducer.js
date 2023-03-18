import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ShowMessageError from "../../pages/Messeage/ShowMessageError";
import ShowMessageSuccess from "../../pages/Messeage/ShowMessSucces";
import { thueCongViecServices } from "../../services/ThueCongViecServices";

const initialState = {
  rentList: [],
  isFetchingRentList: false,
  isFetchingServices: false,
  services: [],
};
export const { reducer: thueCongViecReducer, actions: thueCongViecActions } =
  createSlice({
    name: "thueCongViec",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // getinFoUser
        .addCase(getRentList.pending, (state) => {
          state.isFetchingRentList = true;
        })
        .addCase(getRentList.fulfilled, (state, action) => {
          state.isFetchingRentList = false;
          state.rentList = action.payload;
        })
        .addCase(getRentList.rejected, (state, action) => {
          state.isFetchingRentList = false;
          state.rentList = action.payload;
        })
        //
        .addCase(getServices.pending, (state) => {
          state.isFetchingServices = false;
        })
        .addCase(getServices.fulfilled, (state, action) => {
          state.isFetchingServices = false;
          state.services = action.payload;
        })
        .addCase(getServices.rejected, (state, action) => {
          state.isFetchingServices = false;
          state.services = action.payload;
        });
    },
  });

export const thueCongViecPost = createAsyncThunk(
  "thueCongViec/thueCongViecPost",
  async (data) => {
    try {
      const result = await thueCongViecServices.thueCongViecPost(data);
      ShowMessageSuccess("Success !!!");
    } catch (err) {
      ShowMessageError(err.response.data.content);
    }
  }
);
export const getRentList = createAsyncThunk(
  "thueCongViec/getRentList",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const result = await thueCongViecServices.getRentList();
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const deleteRentList = createAsyncThunk(
  "thueCongViec/deleteRentList",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const result = await thueCongViecServices.deleteRentList(data);
      ShowMessageSuccess("Success !!!");
      await dispatch(getRentList());
      return result.data.content;
    } catch (err) {
      ShowMessageError(err.response.data.content);
      return rejectWithValue(err.response.data);
    }
  }
);

export const getServices = createAsyncThunk(
  "thueCongViec/getServices",
  async (id = "") => {
    try {
      const result = await thueCongViecServices.getServices(id);

      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
