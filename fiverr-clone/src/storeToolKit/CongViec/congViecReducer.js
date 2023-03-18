import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ShowMessageError from "../../pages/Messeage/ShowMessageError";
import ShowMessageSuccess from "../../pages/Messeage/ShowMessSucces";
import { congViecServices } from "../../services/CongViecServices";

const initialState = {
  jobsList: [],
  itemRender: [],
  jobDetail: [],
  jobType: [],
  jobTypeDetail: [],
  dataSignUp1: [],
  workList: [],
  searchJob: [],
  isFetchingJobList: false,
  isFetchingItem: false,
  isFetchingJobDetail: false,
  isFetchingjobType: false,
  isFetchingjobTypeDetail: false,
  isFetchingWorkList: false,
  isFetchingAddJob: false,
  isFetchingEditJob: false,
  isFetchingSearchJob: false,
  isFetchingEditImg: false,
};
export const { reducer: congViecReducer, actions: congViecActions } =
  createSlice({
    name: "congViec",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // get job list
        .addCase(menuCongViec.pending, (state) => {
          state.isFetchingJobList = true;
        })
        .addCase(menuCongViec.fulfilled, (state, action) => {
          state.isFetchingJobList = false;
          state.jobsList = action.payload;
        })
        .addCase(menuCongViec.rejected, (state, action) => {
          state.isFetchingJobList = false;
          state.jobsList = action.payload;
        })
        //
        .addCase(congViecPhanTrangTimKiem.pending, (state) => {
          state.isFetchingItem = true;
        })
        .addCase(congViecPhanTrangTimKiem.fulfilled, (state, action) => {
          state.isFetchingItem = false;
          state.itemRender = action.payload;
        })
        .addCase(congViecPhanTrangTimKiem.rejected, (state, action) => {
          state.isFetchingItem = false;
          state.itemRender = action.payload;
        })
        // get job details
        .addCase(layCongViecChiTiet.pending, (state) => {
          state.isFetchingJobDetail = true;
        })
        .addCase(layCongViecChiTiet.fulfilled, (state, action) => {
          state.isFetchingJobDetail = false;
          state.jobDetail = action.payload;
        })
        .addCase(layCongViecChiTiet.rejected, (state, action) => {
          state.isFetchingJobDetail = false;
          state.jobDetail = action.payload;
        })
        // getTypeWork
        .addCase(getTypeWork.pending, (state) => {
          state.isFetchingjobType = true;
        })
        .addCase(getTypeWork.fulfilled, (state, action) => {
          state.isFetchingjobType = false;
          state.jobType = action.payload;
        })
        .addCase(getTypeWork.rejected, (state, action) => {
          state.isFetchingjobType = false;
          state.jobType = action.payload;
        })
        // getTypeWorkDetail
        .addCase(getTypeWorkDetail.pending, (state) => {
          state.isFetchingjobTypeDetail = true;
        })
        .addCase(getTypeWorkDetail.fulfilled, (state, action) => {
          state.isFetchingjobTypeDetail = false;
          state.jobTypeDetail = action.payload;
        })
        .addCase(getTypeWorkDetail.rejected, (state, action) => {
          state.isFetchingjobTypeDetail = false;
          state.jobTypeDetail = action.payload;
        })
        // getTypeWorkDetail1
        .addCase(getTypeWorkDetail1.pending, (state) => {
          state.isFetchingItem = true;
        })
        .addCase(getTypeWorkDetail1.fulfilled, (state, action) => {
          state.isFetchingItem = false;
          state.itemRender = action.payload;
        })
        .addCase(getTypeWorkDetail1.rejected, (state, action) => {
          state.isFetchingItem = false;
          state.itemRender = action.payload;
        })
        // getWorkList(admin)
        .addCase(getWork.pending, (state) => {
          state.isFetchingWorkList = true;
        })
        .addCase(getWork.fulfilled, (state, action) => {
          state.isFetchingWorkList = false;
          state.workList = action.payload;
        })
        .addCase(getWork.rejected, (state, action) => {
          state.isFetchingWorkList = false;
          state.workList = action.payload;
        })
        //
        .addCase(postWork.pending, (state) => {
          state.isFetchingAddJob = false;
        })

        .addCase(postWork.fulfilled, (state, action) => {
          state.isFetchingAddJob = true;
        })
        .addCase(postWork.rejected, (state, action) => {
          state.isFetchingAddJob = false;
        })
        .addCase(editWork.pending, (state) => {
          state.isFetchingEditJob = false;
        })

        .addCase(editWork.fulfilled, (state, action) => {
          state.isFetchingEditJob = true;
        })
        .addCase(editWork.rejected, (state, action) => {
          state.isFetchingEditJob = false;
        })
        // get search job
        .addCase(searchWork.pending, (state) => {
          state.isFetchingSearchJob = true;
        })
        .addCase(searchWork.fulfilled, (state, action) => {
          state.isFetchingSearchJob = false;
          state.searchJob = action.payload;
        })
        .addCase(searchWork.rejected, (state, action) => {
          state.isFetchingSearchJob = false;
          state.searchJob = action.payload;
        })
        .addCase(editImg.pending, (state) => {
          state.isFetchingEditImg = false;
        })
        .addCase(editImg.fulfilled, (state, action) => {
          state.isFetchingEditImg = true;
        })
        .addCase(editImg.rejected, (state, action) => {
          state.isFetchingEditImg = false;
        });
    },
  });
export const menuCongViec = createAsyncThunk(
  "congViec/menuCongViec",
  async (data) => {
    try {
      const result = await congViecServices.menuCongViec();

      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

export const congViecPhanTrangTimKiem = createAsyncThunk(
  "congViec/congViecPhanTrangTimKiem",
  async (data) => {
    try {
      const result = await congViecServices.congViecPhanTrangTimKiem(data);

      return result.data.content.data;
    } catch (err) {
      console.log(err.response.data.content);
    }
  }
);

export const layCongViecChiTiet = createAsyncThunk(
  "congViec/layCongViecChiTiet",
  async (id) => {
    try {
      const result = await congViecServices.layCongViecChiTiet(id);

      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
export const getTypeWork = createAsyncThunk(
  "congViec/getTypeWork",
  async (key) => {
    try {
      const result = await congViecServices.getTypeWork(key);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

export const getTypeWorkDetail = createAsyncThunk(
  "congViec/getTypeWorkDetail",
  async (type) => {
    try {
      const result = await congViecServices.getTypeWorkDetail(type);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
export const getTypeWorkDetail1 = createAsyncThunk(
  "congViec/getTypeWorkDetail1",
  async (type) => {
    try {
      const result = await congViecServices.getTypeWorkDetail1(type);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
export const getWork = createAsyncThunk("congViec/getWork", async () => {
  try {
    const result = await congViecServices.getWork();
    return result.data.content;
  } catch (err) {
    console.log(err.response.data);
  }
});
export const deleteWork = createAsyncThunk(
  "congViec/deleteWork",
  async (data, { dispatch }) => {
    try {
      const result = await congViecServices.deleteWork(data);

      await dispatch(getWork());
      ShowMessageSuccess("Success !!!");
      return result.data.content;
    } catch (err) {
      ShowMessageError(err.response.data.content);
    }
  }
);
export const postWork = createAsyncThunk(
  "congViec/postWork",
  async (data, { dispatch }) => {
    try {
      const result = await congViecServices.postWork(data);
      ShowMessageSuccess("Success !!!");
      await dispatch(getWork());
      return result.data.content;
    } catch (err) {
      ShowMessageError(err.response.data.content);
    }
  }
);
export const editWork = createAsyncThunk(
  "congViec/editWork",
  async (data, { dispatch }) => {
    try {
      const result = await congViecServices.editWork(data);
      ShowMessageSuccess("Success !!!");
      await dispatch(getWork());
      return result.data.content;
    } catch (err) {
      ShowMessageError(err.response.data.content);
    }
  }
);
export const searchWork = createAsyncThunk(
  "congViec/searchWork",
  async (data, { dispatch }) => {
    try {
      const result = await congViecServices.searchWork(data);
      await dispatch(getWork());

      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
export const editImg = createAsyncThunk(
  "congViec/editImg",
  async (data, { dispatch }) => {
    try {
      const result = await congViecServices.editImg(data);
      ShowMessageSuccess("Success !!!");
      await dispatch(getWork());
      return result.data.content;
    } catch (err) {
      ShowMessageError(err.response.data.content);
    }
  }
);
