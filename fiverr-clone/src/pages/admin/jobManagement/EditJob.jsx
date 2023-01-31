import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  editWork,
  searchWork,
  useCongViec,
} from "../../../storeToolKit/CongViec";
import { useState } from "react";
import { useEffect } from "react";
const EditJob = (props) => {
  const jobEdit = JSON.parse(localStorage.getItem("jobEdit"));
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const {
    tenCongViec,
    danhGia,
    giaTien,
    hinhAnh,
    moTa,
    maChiTietLoaiCongViec,
    moTaNgan,
    saoCongViec,
    id,
  } = jobEdit;
  useEffect(() => {
    reset({
      tenCongViec,
      danhGia,
      giaTien,
      hinhAnh,
      moTa,
      maChiTietLoaiCongViec,
      moTaNgan,
      saoCongViec,
    });
  }, [jobEdit.id]);
  const { isFetchingEditJob } = useCongViec();
  const [modle, setmodle] = useState("none");
  useEffect(() => {
    window.onclick = function () {
      setmodle("none");
      if (localStorage.getItem("jobNameSearch")) {
        dispatch(searchWork(JSON.parse(localStorage.getItem("jobNameSearch"))));
      }
    };
  }, [isFetchingEditJob]);
  return (
    <Div>
      <form
        onSubmit={handleSubmit((data) => {
          if (isFetchingEditJob) {
            setmodle("block");
          }
          const data6 = {
            id: id,
            tenCongViec: data.tenCongViec,
            danhGia: +data.danhGia,
            giaTien: +data.giaTien,
            nguoiTao: +1,
            hinhAnh: data.hinhAnh,
            moTa: data.moTa,
            maChiTietLoaiCongViec: +data.maChiTietLoaiCongViec,
            moTaNgan: data.moTaNgan,
            saoCongViec: +data.saoCongViec,
          };
          dispatch(editWork(data6));
        })}
        className="flex flex-col  p-6 "
      >
        <h1 className="text-2xl text-black mb-3 font-bold mx-auto">
          Edit Work
        </h1>
        <div className="grid grid-cols-2 gap-8 mt-2">
          <div className="itemRight">
            <div className=" flex w-full">
              <div className="w-full">
                <input
                  className="p-2  w-full"
                  {...register("tenCongViec", {
                    required: "Work name is required",
                  })}
                  type="text"
                  placeholder="Enter Your Work Name"
                />
                <p className="text-red-400 pl-2">
                  {errors?.tenCongViec?.message}
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("danhGia", {
                    required: "Rate is required",
                  })}
                  type="number"
                  placeholder="Enter Your Rate"
                />
                <p className="text-red-400 pl-2">{errors?.danhGia?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("giaTien", {
                    required: "Price is required",
                  })}
                  type="number"
                  placeholder="Enter Your Price"
                />
                <p className="text-red-400 pl-2">{errors?.giaTien?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("moTa", {
                    required: "Desc is required",
                  })}
                  type="text"
                  placeholder="Enter Your Desc"
                />
                <p className="text-red-400 pl-2">{errors?.moTa?.message}</p>
              </div>
            </div>
          </div>
          <div className="itemLeft">
            <div className=" flex w-full">
              <div className="w-full">
                <input
                  className="p-2  w-full"
                  {...register("moTaNgan", {
                    required: "Desc is required",
                  })}
                  type="text"
                  placeholder="Enter Your desc"
                />
                <p className="text-red-400 pl-2">{errors?.moTaNgan?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("maChiTietLoaiCongViec", {
                    required: "Code of work is required",
                  })}
                  type="number"
                  placeholder="Enter Your work code"
                />
                <p className="text-red-400 pl-2">
                  {errors?.maChiTietLoaiCongViec?.message}
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("saoCongViec", {
                    required: "Star of work is required",
                    min: {
                      value: 1,
                      message: "Star must be more than 0 ",
                    },
                    max: {
                      value: 5,
                      message: "Star must be less than 6",
                    },
                  })}
                  type="number"
                  placeholder="Enter Your work star"
                />
                <p className="text-red-400 pl-2">
                  {errors?.saoCongViec?.message}
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("hinhAnh", {
                    required: "Img of work is required",
                  })}
                  type="text"
                  placeholder="Enter Your work img link"
                />
                <p className="text-red-400 pl-2">{errors?.hinhAnh?.message}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-5">
          <button
            // type="submit"
            className="bg-pink-500 py-2 text-white w-full rounded-lg text-2xl hover:bg-pink-600"
          >
            Edit
          </button>
        </div>
      </form>
      <div
        className="w-full absolute"
        style={{
          top: "-20%",
          zIndex: "100",
          right: "-0%",
          display: `${modle}`,
        }}
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className=" flex flex-shrink-0 items-center justify-between px-2 pt-1 border-b border-gray-200 rounded-t-md">
              <h5 className="text-xl font-medium leading-normal text-pink-700">
                Edit Job
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
                  if (localStorage.getItem("jobNameSearch")) {
                    dispatch(
                      searchWork(
                        JSON.parse(localStorage.getItem("jobNameSearch"))
                      )
                    );
                  }
                  props.onCancelEditJob();
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
export default EditJob;
