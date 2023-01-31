import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ShowMessageError from "../../pages/Messeage/ShowMessageError";
import ShowMessageSuccess from "../../pages/Messeage/ShowMessSucces";
import { binhLuanService } from "../../services/BinhLuanServies";
import { congViecServices } from "../../services/CongViecServices";

const initialState = {
  commentByJob: [],
  isFetchingCmtByJob: false,
  isFetchingGetComments: false,
  comments: [],
};
export const { reducer: binhLuanReducer, actions: binhLuanActions } =
  createSlice({
    name: "binhLuan",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // get comments by job code
        .addCase(binhLuanTheoCongViec.pending, (state) => {
          state.isFetchingCmtByJob = true;
        })
        .addCase(binhLuanTheoCongViec.fulfilled, (state, action) => {
          state.isFetchingCmtByJob = false;
          state.commentByJob = action.payload;
        })
        .addCase(binhLuanTheoCongViec.rejected, (state, action) => {
          state.isFetchingCmtByJob = false;
          state.commentByJob = action.payload;
        })
        // get Comments
        .addCase(getComments.pending, (state) => {
          state.isFetchingGetComments = true;
        })
        .addCase(getComments.fulfilled, (state, action) => {
          state.isFetchingGetComments = false;
          state.comments = action.payload;
        })
        .addCase(getComments.rejected, (state, action) => {
          state.isFetchingGetComments = false;
          state.comments = action.payload;
        });
    },
  });

export const binhLuanTheoCongViec = createAsyncThunk(
  "binhLuan/binhLuanTheoCongViec",
  async (id) => {
    try {
      const result = await binhLuanService.binhLuanTheoCongViec(id);
      console.log("RESULT", result.data.content);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

export const postBinhLuan = createAsyncThunk(
  "binhLuan/postBinhLuan",
  async (data, { dispatch }) => {
    try {
      const result = await binhLuanService.postBinhLuan(data);
      console.log("data", data);
      console.log("result", result.data.content);
      await dispatch(binhLuanTheoCongViec(data.id));
      // console.log(data.idNum);
      ShowMessageSuccess("Success !!!");
      return result.data.content;
    } catch (err) {
      ShowMessageError(err.response.data.content);
      console.log(err.response.data);
    }
  }
);

export const getComments = createAsyncThunk(
  "binhLuan/getComments",
  async () => {
    try {
      const result = await binhLuanService.getComment();
      console.log(result.data.content);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "binhLuan/deleteComment",
  async (id, { dispatch }) => {
    try {
      const result = await binhLuanService.deleteComment(id);
      ShowMessageSuccess("Success !!!");
      dispatch(getComments());
    } catch (err) {
      ShowMessageError(err.response.data.content);
    }
  }
);
