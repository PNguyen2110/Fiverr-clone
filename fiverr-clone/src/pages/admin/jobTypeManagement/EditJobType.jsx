import { Modal } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { putJobType } from "../../../storeToolKit/LoaiCongViec";

const EditJobType = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  return (
    <form
      id="form"
      onSubmit={handleSubmit((data) => {
        const idJob = JSON.parse(localStorage.getItem("idJob"));
        console.log(idJob);
        console.log({ id: idJob, tenLoaiCongViec: data.job });
        dispatch(putJobType({ id: idJob, tenLoaiCongViec: data.job }));
      })}
    >
      <div id="wrapInput" className="w-full ">
        <div>
          <input
            name="job"
            {...register("job", {
              required: "Job Type is required",
            })}
            className="w-full inputAdd p-5 outline-none border-blue-400 border-2 rounded-lg"
            type="text"
            placeholder="Add Job Type..."
          />
          <span className="text-red-400">{errors?.job?.message}</span>
        </div>
        <div className="mt-8 w-full">
          <button className="bg-pink-400 text-white w-full p-2">Save</button>
        </div>
      </div>
    </form>
  );
};

export default EditJobType;
