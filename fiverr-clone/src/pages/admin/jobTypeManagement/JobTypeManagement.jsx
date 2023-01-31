import Search from "antd/lib/transfer/search";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  deleteJobType,
  jobsType,
  postJobType,
} from "../../../storeToolKit/LoaiCongViec";
import { useJobType } from "../../../storeToolKit/LoaiCongViec/loaiCongViecSelector";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Button, Modal } from "antd";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { isArray } from "lodash";

import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";
import EditJobType from "./EditJobType";

//
export const JobTypeManagement = () => {
  const dispatch = useDispatch();
  const { jobType } = useJobType();

  // check response data
  let arrJob = [];
  if (!isArray(jobType)) {
    arrJob.push(jobType);
  } else {
    arrJob = jobType;
  }
  console.log(arrJob);
  //
  useEffect(() => {
    dispatch(jobsType());
  }, []);
  const { Search } = Input;
  const onSearch = (value) => {
    console.log(value);
    dispatch(jobsType(value));
  };
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // modalEdit
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const showModalEdit = () => {
    setIsModalOpenEdit(true);
  };
  const handleOkEdit = () => {
    setIsModalOpenEdit(false);
  };
  const handleCancelEdit = () => {
    setIsModalOpenEdit(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Component className="container wrapper">
      <Modal
        title="Add JobType"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          id="form"
          onSubmit={handleSubmit((data) =>
            dispatch(postJobType({ id: 0, tenLoaiCongViec: data.job }))
          )}
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
              <button className="bg-pink-400 text-white w-full p-2">
                Add Job
              </button>
            </div>
          </div>
        </form>
      </Modal>
      <Modal
        title="Edit JobType"
        open={isModalOpenEdit}
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
        footer={null}
      >
        <EditJobType />
      </Modal>
      <div className="">
        <h2 className="text-2xl flex justify-center">Job Type</h2>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div>
            <button
              className="bg-gradient-to-r from-indigo-500 w-full text-white"
              onClick={showModal}
            >
              <i className="fa-solid fa-plus"></i>
              <span className="ml-1 ">Add Job Type</span>
            </button>
          </div>
          <div>
            <Search
              placeholder="Search by id"
              enterButton={<SearchOutlined />}
              size="small"
              onSearch={onSearch}
              allowClear
            />
          </div>
        </div>
      </div>
      <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
        {arrJob.map((job, index) => (
          <div key={index} className="flex ">
            <div className="flex items-center  text-white p-2 justify-between rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 mb-3 w-[500px]">
              <EditText
                className="mb-0"
                editButtonContent={job.tenLoaiCongViec}
                defaultValue={job.tenLoaiCongViec}
                name="textbox3"
              />

              <p className="flex gap-3 mb-0">
                <button
                  className="text-blue-400"
                  onClick={() => {
                    localStorage.setItem("idJob", JSON.stringify(job.id));
                    showModalEdit();
                  }}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  className="text-red-500"
                  onClick={() => dispatch(deleteJobType(job.id))}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Component>
  );
};

const Component = styled.div`
  .ant-input-group-wrapper {
    /* width: 50%; */
  }
  #form {
    #wrapInput {
      input {
        display: block;
        border: 2px solid #1890ff !important;
        outline: none !important;
        height: 50px;
        padding-left: 10px;
        border-radius: 5px;
      }
    }
  }
`;
