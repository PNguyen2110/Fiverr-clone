import { useSelector } from "react-redux";

export const useJobDetail = () =>
  useSelector((state) => state.chiTietLoaiCongViecReducer);
