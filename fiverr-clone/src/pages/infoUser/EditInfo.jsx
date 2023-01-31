import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import moment from "moment";
import { editInfoUser, useNguoiDung } from "../../storeToolKit/NguoiDung";
import { useEffect } from "react";
import _ from "lodash";
import { useState } from "react";
const EditInfo = (props) => {
  const { infoUser, isFetchingEditUser } = useNguoiDung();
  const [modle, setmodle] = useState("none");
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const { email, phone, skill, name, birthday, gender, certification, role } =
    infoUser;
  const { params } = props;
  useEffect(() => {
    reset({
      email,
      role,
      phone,
      skill,
      name,
      birthday,
      gender,
      certification,
    });
  }, []);
  useEffect(() => {
    window.onclick = function () {
      setmodle("none");
    };
  }, [isFetchingEditUser]);
  return (
    <Div>
      <form
        onSubmit={handleSubmit((data) => {
          if (isFetchingEditUser) {
            setmodle("block");
            window.location.reload();
          }
          if (data.gender === "true") {
            data.gender = true;
          } else if (data.gender === "false") {
            data.gender = false;
          }
          if (data.birthday) {
            data.birthday = moment(data.birthday).format("DD-MM-YYYY");
          }
          const d = [data.skill];
          if (d.join() !== skill.join()) {
            data.skill = [data.skill];
          }
          const c = [data.certification];
          if (c.join() !== certification.join()) {
            data.certification = [data.certification];
          }
          let data1 = { ...data, id: params };
          dispatch(editInfoUser(data1));
        })}
        className="flex flex-col  p-6 "
      >
        <h1 className="text-2xl text-black mb-3 font-bold mx-auto">
          Modify personal information
        </h1>
        <div className="grid grid-cols-2 gap-8 mt-2">
          <div className="itemRight">
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
                  placeholder="Enter Your Email"
                />
                <p className="text-red-400">{errors?.email?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="w-full">
                <input
                  disabled
                  className="p-2 w-full cursor-not-allowed"
                  {...register("role", {
                    required: "role is required",
                  })}
                  type="text"
                  placeholder="Enter role"
                />
                <p className="text-red-400">{errors?.password?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("phone", {
                    required: "Phone is required",
                    minLength: {
                      value: 9,
                      message: "Phone must be between 9-11 number",
                    },
                    maxLength: {
                      value: 11,
                      message: "Phone must be between 9-11 number",
                    },
                  })}
                  type="number"
                  placeholder="Enter Your Password"
                />
                <p className="text-red-400">{errors?.phone?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("skill", {
                    required: "Skill is required",
                  })}
                  type="text"
                  placeholder="Enter Your Skill"
                />
                <p className="text-red-400">{errors?.skill?.message}</p>
              </div>
            </div>
          </div>
          <div className="itemLeft">
            <div className=" flex w-full">
              <div className="items-center flex item ">
                <i className="fa-sharp fa-solid fa-file-signature"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2  w-full"
                  {...register("name", {
                    required: "FullName is required",
                  })}
                  type="text"
                  placeholder="Enter Your FullName"
                />
                <p className="text-red-400">{errors?.name?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i className="fa-solid fa-cake-candles"></i>
              </div>
              <div className="w-full">
                <input
                  value={moment(birthday).format("DD-MM-YYYY")}
                  className="p-2 w-full"
                  {...register("birthday", {
                    required: "Date of birth is required",
                  })}
                  placeholder="Enter Your Date of birth"
                />
                <p className="text-red-400">{errors?.birthday?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i className="fa-solid fa-venus-mars"></i>
              </div>
              <div className="w-full">
                <select
                  className="w-full p-2 bg-[#bfc7fe] selectType"
                  name="gender"
                  {...register("gender")}
                >
                  <option value="true">Male</option>
                  <option value="false">Female</option>
                </select>
                <p className="text-red-400"></p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("certification", {
                    required: "Certification is required",
                  })}
                  type="text"
                  placeholder="Enter Your Certification"
                />
                <p className="text-red-400">{errors?.certification?.message}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-5">
          <button
            type="submit"
            className="bg-pink-500 py-2 text-white w-full rounded-lg text-2xl hover:bg-pink-600"
          >
            Edit
          </button>
        </div>
      </form>

      <div
        className="w-full absolute"
        style={{
          top: "-30%",
          zIndex: "100",
          right: "-0%",
          display: `${modle}`,
        }}
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className=" flex flex-shrink-0 items-center justify-between px-2 pt-1 border-b border-gray-200 rounded-t-md">
              <h5 className="text-xl font-medium leading-normal text-pink-700">
                Edit Infomation
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div
              className="text-center relative px-2 py-1 text-green-500 "
              style={{ fontSize: "18px" }}
            >
              Success
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end px-4 py-1 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => {
                  setmodle("none");
                }}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};
export const Div = styled.div`
  background-color: #bfc7fe;
  position: relative;
  .selectType {
    position: relative;
    outline: none;
    border-bottom: 1px solid #ec4899;
  }
  .selectType::after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid pink;
    border-color: pink transparent transparent transparent;
  }

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

export default EditInfo;
