import React, { useState } from "react";
import { Input, Modal, Table } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  deleteJobDetail,
  getJobDetail,
  postImage,
} from "../../../storeToolKit/ChiTietLoaiCongViec/chiTietLoaiCongViecReducer";
import { useJobDetail } from "../../../storeToolKit/ChiTietLoaiCongViec/chiTietLoaiSelector";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { isArray } from "lodash";
import { EditJobDetail } from "./EditJobDetail";
import { AddJobDetail } from "./AddJobDetail";
import { useFormik } from "formik";

//
export const JobDetailManagement = () => {
  const { Search } = Input;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getJobDetail());
  }, []);
  //
  const { jobDetail } = useJobDetail();

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
  // modal edit
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
  const [isModalOpenEdit1, setIsModalOpenEdit1] = useState(false);
  const showModalEditImg = () => {
    setIsModalOpenEdit1(true);
  };
  const handleOkEditImg = () => {
    setIsModalOpenEdit1(false);
  };
  const handleCancelEditImg = () => {
    setIsModalOpenEdit1(false);
  };
  //
  const formik = useFormik({
    initialValues: {
      id: 0,
      hinhAnh: {},
    },
    onSubmit: async (values) => {
      let formData = new FormData();

      formData.append("formFile", values.hinhAnh, values.hinhAnh.name);

      dispatch(
        postImage({
          formData,
          id: JSON.parse(localStorage.getItem("idJobEdit")),
        })
      );
    },
  });
  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    formik.setFieldValue("hinhAnh", file);
  };
  /// check dataType
  let arr = [];
  if (isArray(jobDetail)) {
    arr = jobDetail;
  } else {
    arr.push(jobDetail);
  }

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "5%",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
    },
    {
      title: "Job code",
      dataIndex: "maLoaiCongviec",
      width: "10%",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
    },
    {
      title: "Job Name",
      dataIndex: "tenNhom",
      width: "20%",
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      width: "20%",
      render: (text, data) => {
        if (data.hinhAnh) {
          return (
            <>
              <div className="flex justify-between">
                <img
                  className="w-[50%] h-[100px] rounded-md"
                  src={data.hinhAnh}
                  alt={data.hinhAnh}
                />
                <div>
                  <button
                    className="bg-blue-400 text-white h-10 w-[60px] rounded-lg"
                    onClick={() => {
                      localStorage.setItem(
                        "idJobEdit",
                        JSON.stringify(data.id)
                      );
                      showModalEditImg();
                    }}
                  >
                    <i className="fa-solid fa-pen-to-square"></i> Edit
                  </button>
                </div>
              </div>
            </>
          );
        }
        return (
          <div>
            <form
              className="flex justify-between"
              onSubmit={formik.handleSubmit}
            >
              <input
                name="hinhAnh"
                type="file"
                onChange={(e) => {
                  localStorage.setItem("idJobEdit", JSON.stringify(data.id));
                  handleChangeFile(e);
                }}
              />
              <button
                type="submit"
                className="bg-blue-400 text-white  rounded-lg  h-10 w-[60px]"
              >
                Save
              </button>
            </form>
          </div>
        );
      },
    },
    {
      title: "Job Type Details",
      dataIndex: "role",
      width: "20%",
      render: (text, data) => {
        return data?.dsChiTietLoai.map((ds, index) => (
          <li key={index}>
            <span className="font-semibold">{index + 1}. </span>
            <span>{ds.tenChiTiet}</span>
          </li>
        ));
      },
    },

    {
      title: "Actions",
      dataIndex: "thaotac",
      render: (text, data) => {
        return (
          <React.Fragment key={Date.now()}>
            <button
              onClick={() => {
                localStorage.setItem("idJobDetail", JSON.stringify(data.id));
                showModalEdit();
              }}
              title="chỉnh sửa"
              className="text-2xl text-blue-500"
            >
              <EditOutlined />
            </button>
            <button
              title="Xoá"
              className="ml-3 text-2xl text-red-400"
              onClick={() => dispatch(deleteJobDetail(data.id))}
            >
              <DeleteOutlined />
            </button>
          </React.Fragment>
        );
      },
      width: "10%",
    },
  ];
  const data = arr;

  const onSearch = (value) => {
    dispatch(getJobDetail(value));
  };
  return (
    <>
      {/* modal add */}
      <Modal
        title="Add Job"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <AddJobDetail />
      </Modal>
      {/*  modal edit */}
      <Modal
        title="Edit Job"
        open={isModalOpenEdit}
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
        footer={null}
      >
        <EditJobDetail />
      </Modal>
      {/*  modal editImg */}
      <Modal
        title="Edit Image"
        open={isModalOpenEdit1}
        onOk={handleOkEditImg}
        onCancel={handleCancelEditImg}
        footer={null}
      >
        <form className="flex justify-between" onSubmit={formik.handleSubmit}>
          <input
            name="hinhAnh"
            type="file"
            onChange={(e) => {
              handleChangeFile(e);
            }}
          />
          <button
            type="submit"
            className="bg-blue-400 text-white  rounded-lg  h-10 w-[60px]"
          >
            Edit
          </button>
        </form>
      </Modal>
      <button
        onClick={showModal}
        className="text-1xl mb-5 bg-blue-400 text-white p-3 rounded-md flex gap-1"
      >
        <span>
          <i className="fa-solid fa-plus"></i>
        </span>
        <span>Add Job</span>
      </button>
      <br />
      <Search
        placeholder="input search id"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
        allowClear
      />
      <Table
        rowKey={(data) => data.id}
        columns={columns}
        dataSource={data}
        bordered
      />
    </>
  );
};
