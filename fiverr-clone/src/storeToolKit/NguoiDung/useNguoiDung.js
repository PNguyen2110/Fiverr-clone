import { useSelector } from "react-redux";

export const useNguoiDung = () =>
  useSelector((state) => state.nguoiDungReducer);
