import { useSelector } from "react-redux";

export const useJobType = () =>
  useSelector((state) => state.loaiCongViecReducer);
