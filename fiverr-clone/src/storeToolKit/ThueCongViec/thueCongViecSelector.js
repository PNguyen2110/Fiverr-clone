import { useSelector } from "react-redux";

export const useThueCongViec = () =>
  useSelector((state) => state.thueCongViecReducer);
