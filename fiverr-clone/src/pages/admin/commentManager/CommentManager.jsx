import React from "react";

import { Input, Table } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";

import {
  binhLuanTheoCongViec,
  deleteComment,
  getComments,
} from "../../../storeToolKit/BinhLuan";
import { useComment } from "../../../storeToolKit/BinhLuan";

//
export const CommentManager = () => {
  const { Search } = Input;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, []);
  //
  const { comments, commentByJob } = useComment();

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
      dataIndex: "maCongViec",
      width: "10%",
      sorter: (a, b) => a.maCongViec - b.maCongViec,
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
    },
    {
      title: "Commenter Code",
      dataIndex: "maNguoiBinhLuan",
      width: "15%",
    },
    {
      title: "Comment Date",
      dataIndex: "ngayBinhLuan",
      width: "20%",
    },
    {
      title: "Content",
      dataIndex: "noiDung",
      width: "20%",
    },

    {
      title: "Actions",
      dataIndex: "thaotac",
      render: (text, data) => {
        return (
          <React.Fragment key={Date.now()}>
            {/* <button
              onClick={() => {
                console.log(data.id);
                localStorage.setItem("idJobDetail", JSON.stringify(data.id));
                showModalEdit();
              }}
              title="chỉnh sửa"
              className="text-2xl text-blue-500"
            >
              <EditOutlined />
            </button> */}
            <button
              title="Xoá"
              className="ml-3 text-2xl text-red-400"
              onClick={() => dispatch(deleteComment(data.id))}
            >
              <DeleteOutlined />
            </button>
          </React.Fragment>
        );
      },
      width: "10%",
    },
  ];
  // select data
  const data =
    commentByJob && commentByJob.length > 0 ? commentByJob : comments;

  const onSearch = (value) => {
    dispatch(binhLuanTheoCongViec(value));
  };
  return (
    <>
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
