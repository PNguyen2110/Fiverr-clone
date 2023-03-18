import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ShowMessageError from "../../pages/Messeage/ShowMessageError";
import ShowMessageSuccess from "../../pages/Messeage/ShowMessSucces";
import { chiTietLoaiCongViecServices } from "../../services/ChiTietLoaiCongViecServices";

const initialState = {
  isFetchingJobDetail: false,
  jobDetail: [],
};

export const {
  reducer: chiTietLoaiCongViecReducer,
  actions: chiTietLoaiCongViecActions,
} = createSlice({
  name: "chiTietLoai",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJobDetail.pending, (state) => {
        state.isFetchingJobDetail = true;
      })
      .addCase(getJobDetail.fulfilled, (state, action) => {
        state.isFetchingJobDetail = true;
        state.jobDetail = action.payload;
      })
      .addCase(getJobDetail.rejected, (state, action) => {
        state.isFetchingJobDetail = true;
        state.jobDetail = action.payload;
      });
  },
});

export const getJobDetail = createAsyncThunk(
  "chiTietLoai/getJobDetail",
  async (id = "") => {
    try {
      const result = await chiTietLoaiCongViecServices.jobDetail(id);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data.content);
    }
  }
);
export const deleteJobDetail = createAsyncThunk(
  "chiTietLoai/deleteJobDetail",
  async (id, { dispatch }) => {
    try {
      await chiTietLoaiCongViecServices.deleteJobDetail(id);
      ShowMessageSuccess("Success !!!");
      await dispatch(getJobDetail());
    } catch (err) {
      ShowMessageError(err.response.data.content);
    }
  }
);

export const postJobTypeDetail = createAsyncThunk(
  "chiTietLoai/postJobDetail",
  async (data, { dispatch }) => {
    try {
      await chiTietLoaiCongViecServices.postJobTypeDetail(data);
      ShowMessageSuccess("Success !!!");
    } catch (err) {
      ShowMessageError(err.response.data.content);
    }
  }
);
export const putJobTypeDetail = createAsyncThunk(
  "chiTietLoai/postJobDetail",
  async (data, { dispatch }) => {
    try {
      await chiTietLoaiCongViecServices.putJobTypeDetail(data);
      ShowMessageSuccess("Success !!!");
      dispatch(getJobDetail());
    } catch (err) {
      ShowMessageError(err.response.data.content);
    }
  }
);

export const postImage = createAsyncThunk(
  "chiTietLoai/postImage",
  async (data, { dispatch }) => {
    try {
      await chiTietLoaiCongViecServices.postImage(data);
      ShowMessageSuccess("Success !!!");
      dispatch(getJobDetail());
    } catch (err) {
      ShowMessageError(err.response.data.content);
    }
  }
);
