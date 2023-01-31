import { useSelector } from "react-redux";

export const useComment = () => useSelector((state) => state.binhLuanReducer);
