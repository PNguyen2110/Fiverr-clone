import { useSelector } from "react-redux";

export const useCongViec = () => useSelector((state) => state.congViecReducer);
