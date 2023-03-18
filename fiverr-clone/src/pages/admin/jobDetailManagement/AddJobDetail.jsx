import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postJobTypeDetail } from "../../../storeToolKit/ChiTietLoaiCongViec/chiTietLoaiCongViecReducer";

export const AddJobDetail = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form
        id="form"
        onSubmit={handleSubmit((data) => {
          const ds = [];
          ds.push(data.danhSachChiTiet);

          dispatch(
            postJobTypeDetail({
              ...data,
              danhSachChiTiet: ds,
            })
          );
        })}
      >
        <div id="wrapInput" className="w-full ">
          <div>
            <input
              name="tenChiTiet"
              {...register("tenChiTiet", {
                required: "Job Name is required",
              })}
              className="w-full inputAdd p-2 mb-2 outline-none border-blue-400 border-2 rounded-lg"
              type="text"
              placeholder="Add Job Name..."
            />
            <span className="text-red-400">{errors?.tenChiTiet?.message}</span>
          </div>
          <div>
            <input
              name="maLoaiCongViec"
              {...register("maLoaiCongViec", {
                required: "Job Type Code is required",
              })}
              className="w-full inputAdd p-2 mb-2 outline-none border-blue-400 border-2 rounded-lg"
              type="number"
              placeholder="Add Job Type Code ..."
            />
            <span className="text-red-400">
              {errors?.maLoaiCongViec?.message}
            </span>
          </div>
          <div>
            <input
              name="danhSachChiTiet"
              {...register("danhSachChiTiet", {
                required: "Job Type List is required",
              })}
              className="w-full inputAdd p-2 mb-2 outline-none border-blue-400 border-2 rounded-lg"
              type="number"
              placeholder="Add Job Type List ..."
            />
            <span className="text-red-400">
              {errors?.danhSachChiTiet?.message}
            </span>
          </div>
          <div className="mt-8 w-full">
            <button className="bg-pink-400 text-white w-full p-2">
              Add Job
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
