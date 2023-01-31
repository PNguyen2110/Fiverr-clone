import React from "react";
import { useSelector } from "react-redux";

export const useSelectorAuth = () => useSelector((state) => state.authReducer);
