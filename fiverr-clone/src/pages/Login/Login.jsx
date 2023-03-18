import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signIn } from "../../storeToolKit/Auth/authReducer";
import { useSelectorAuth } from "../../storeToolKit/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const { userInfo } = useSelectorAuth();
  // check Role
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userLogin"));

    if (user && user.role === "USER") {
      navigate("/home");
    } else if (user && user.role === "ADMIN") {
      navigate("/admin");
    }
  }, [userInfo]);
  return (
    <Div>
      <form
        onSubmit={handleSubmit((data) => {
          dispatch(signIn(data));
        })}
        className="flex flex-col items-center justify-center p-6 "
      >
        <h1 className="text-2xl text-black mb-3 font-bold ">LOGIN</h1>
        <div className=" flex w-full">
          <div className="items-center flex item ">
            <i className="fa-solid fa-envelope-circle-check"></i>
          </div>
          <div className="w-full">
            <input
              className="p-2  w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              type="text"
              placeholder="Enter Your required"
            />
            <p className="text-red-400">{errors?.email?.message}</p>
          </div>
        </div>
        <div className="flex w-full">
          <div className="items-center flex item ">
            <i className="fa-solid fa-unlock-keyhole"></i>
          </div>
          <div className="w-full">
            <input
              className="p-2 w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 3,
                  message: "Password must be between 3-12 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Password must be between 3-12 characters",
                },
              })}
              type="password"
              placeholder="Enter Your Password"
            />
            <p className="text-red-400">{errors?.password?.message}</p>
          </div>
        </div>
        <div className="w-full mt-5">
          <button
            type="submit"
            className="bg-pink-500 py-2 text-white w-full rounded-lg text-2xl hover:bg-pink-600"
          >
            Sign In
          </button>
        </div>
        <div className="flex gap-4 w-full mt-5 ">
          <button className="bg-blue-600 text-white w-full rounded-lg py-2 text-2xl hover:bg-blue-700">
            <i className="fa-brands fa-facebook-f"></i>
          </button>
          <button className="bg-blue-400 text-white w-full rounded-lg py-2 text-2xl hover:bg-blue-700">
            <i className="fa-brands fa-twitter"></i>
          </button>
        </div>
      </form>
    </Div>
  );
};
export const Div = styled.div`
  background-color: #bfc7fe;

  .item {
    margin-bottom: 5px;
    font-size: 20px;
    width: 30px;
    margin-right: 5px;
    color: #ffffff61;
  }
  input {
    position: relative;
    border-bottom: 1px solid #ec4899;
    transition: all 0.5s;
    background-color: transparent;

    &:focus {
      border-bottom: 1px solid #60a5fa;
      box-shadow: none;
      outline: none;
    }
  }
`;
export default Login;
