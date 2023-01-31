import { Input, Modal, Table } from "antd";
import React, { useEffect } from "react";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useCongViec } from "../../../storeToolKit/CongViec";
import {
  deleteWork,
  getWork,
  searchWork,
} from "../../../storeToolKit/CongViec/congViecReducer";
import { useState } from "react";
import PostWork from "./PostWork";
import EditJob from "./EditJob";
import EditImg from "./EditImg";

const { Search } = Input;
const JobManagement = () => {
  const dispatch = useDispatch();
  const { workList, searchJob } = useCongViec();
  const [isModalOpenAddJob, setisModalOpenAddJob] = useState(false);
  const [isModalOpenEditJob, setisModalOpenEditJob] = useState(false);
  const [isModalOpenEditImg, setisModalOpenEditImg] = useState(false);

    const showModalAddJob = () => {
        setisModalOpenAddJob(true);
    };
    const handleOkAddJob = () => {
        setisModalOpenAddJob(false);
    };
    const handleCancelAddJob = () => {
        setisModalOpenAddJob(false);
    };
    const showModalEditJob = () => {
        setisModalOpenEditJob(true);
    };
    const handleOkEditJob = () => {
        setisModalOpenEditJob(false);
    };
    const handleCancelEditJob = () => {
        setisModalOpenEditJob(false);
    };
    const showModalEditImg = () => {
        setisModalOpenEditImg(true);
    };
    const handleOkEditImg = () => {
        setisModalOpenEditImg(false);
    };
    const handleCancelEditImg = () => {
        setisModalOpenEditImg(false);
    };
    useEffect(() => {
        dispatch(getWork());
        localStorage.removeItem('jobNameSearch')
    }, []);
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            width: "5%",
            defaultSortOrder: 'ascend',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: "Job Name",
            dataIndex: "tenCongViec",
            width: "20%",
        },
        {
            title: "Desc",
            dataIndex: "moTaNgan",
            width: "29%",
        },
        {
            title: "Code",
            dataIndex: "maChiTietLoaiCongViec",
            width: "4%",
            sorter: (a, b) => a.maChiTietLoaiCongViec - b.maChiTietLoaiCongViec,
        },
        {
            title: "Image",
            dataIndex: "hinhAnh",
            width: "11%",
            render: (data) => {
                return <p key={Math.floor(Math.random() * 100000) + 1000}>
                    <p className="mb-1 text-right cursor-pointer hover:text-pink-500 hover:text-xl" ><EditOutlined onClick={() => {
                        const imgEdit = workList.find((item) => item.hinhAnh === data);
                        localStorage.setItem("imgEdit", JSON.stringify(imgEdit));
                        showModalEditImg();
                    }} /></p>
                    <img src={data} alt="..." style={{ width: '100px', height: '80px' }} className="rounded-md" />
                </p>
            }
        },
        {
            title: "Rate (*****)",
            dataIndex: "saoCongViec",
            width: "5%",
            sorter: (a, b) => a.saoCongViec - b.saoCongViec,
            filters: [
                {
                  text: "1",
                  value: 1,
                },
                {
                  text: "2",
                  value: 2,
                },
                {
                  text: "3",
                  value: 3,
                },
                {
                    text: "4",
                    value: 4,
                  },
                  {
                    text: "5",
                    value: 5,
                  },
              ],
              filterMode: 'tree',
              filterSearch: true,
              onFilter: (value, record) => {
                return record.saoCongViec ===value
              }
        },
        {
            title: "Price ($)",
            dataIndex: "giaTien",
            width: "5%",
            sorter: (a, b) => a.giaTien - b.giaTien,
        },
        {
            title: "Number of reviews ",
            dataIndex: "danhGia",
            width: "10%",
            sorter: (a, b) => a.danhGia - b.danhGia,
        },
        {
            title: "Actions",
            dataIndex: "thaotac",
            render: (text, data) => {
                return (
                    <React.Fragment key={Date.now()}>
                        <button
                            onClick={() => {
                                const jobEdit = workList.find((item) => item.id === data.id);
                                localStorage.setItem("jobEdit", JSON.stringify(jobEdit));
                                showModalEditJob();
                            }}
                            title="chỉnh sửa"
                            className="text-2xl text-blue-500"
                        >
                            <EditOutlined />
                        </button>
                        <button
                            onClick={() => {
                                dispatch(deleteWork(data.id))
                            }}
                            title="Xoá"
                            className="ml-3 text-2xl text-red-400"
                        >
                            <DeleteOutlined />
                        </button>
                    </React.Fragment>
                );
            },
            width: "10%",
        },
    ];

  const data = workList;

  const onSearch = (value) => {
    let nameSearch = value.toLocaleLowerCase();
    if (value === "") {
      window.location.reload();
      localStorage.removeItem("jobNameSearch");
    }
    localStorage.setItem("jobNameSearch", JSON.stringify(nameSearch));
    dispatch(searchWork(nameSearch));
  };
  return (
    <>
      <button
        onClick={() => {
          showModalAddJob();
        }}
        className="text-1xl mb-4 bg-blue-400 text-white p-3 rounded-md"
      >
        Add Job
      </button>
      <Search
        placeholder="Search by name"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
        allowClear
      />
      {searchJob?.length === 0 ? (
        <Table
          rowKey={(data) => data.id}
          columns={columns}
          dataSource={data}
          bordered
          onChange={onChange}
        />
      ) : (
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 "
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 "
                      >
                        Job Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 "
                      >
                        Desc
                      </th>

                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 "
                      >
                        JobType Code
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 "
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 "
                      >
                        Rate (*****)
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 "
                      >
                        Price ($)
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 "
                      >
                        Number of reviews
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-8 py-4 "
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchJob?.map((item) => {
                      return (
                        <tr className="border-b" key={item.id}>
                          <td className="text-sm  text-center py-4">
                            {item.id}
                          </td>
                          <td className="text-sm  text-left pl-6 py-4 ">
                            {item.congViec.tenCongViec}
                          </td>
                          <td className="text-sm  text-left pl-6 py-4 ">
                            {item.congViec.moTaNgan}
                          </td>
                          <td className="text-sm  text-center py-4 ">
                            {item.congViec.maChiTietLoaiCongViec}
                          </td>
                          <td className="text-sm  text-center py-4 ">
                            <p
                              className="mb-1 text-right cursor-pointer hover:text-pink-500 hover:text-xl"
                              onClick={() => {
                                localStorage.setItem(
                                  "imgEdit",
                                  JSON.stringify(item)
                                );
                                showModalEditImg();
                              }}
                            >
                              <EditOutlined />
                            </p>
                            <img
                              src={item.congViec.hinhAnh}
                              alt="..."
                              style={{ width: "100px", height: "80px" }}
                              className="rounded-md"
                            />
                          </td>
                          <td className="text-sm  text-center py-4 ">
                            {item.congViec.saoCongViec}
                          </td>
                          <td className="text-sm  text-center py-4 ">
                            {item.congViec.giaTien}
                          </td>

                          <td className="text-sm  text-center py-4 ">
                            {item.congViec.danhGia}
                          </td>
                          <td className="text-sm  text-center py-4 ">
                            <React.Fragment key={Date.now()}>
                              <button
                                onClick={() => {
                                  localStorage.setItem(
                                    "jobEdit",
                                    JSON.stringify(item.congViec)
                                  );
                                  showModalEditJob();
                                }}
                                title="chỉnh sửa"
                                className="text-2xl text-blue-500"
                              >
                                <EditOutlined />
                              </button>
                              <button
                                onClick={() => {
                                  dispatch(deleteWork(item.id));
                                }}
                                title="Xoá"
                                className="ml-3 text-2xl text-red-400"
                              >
                                <DeleteOutlined />
                              </button>
                            </React.Fragment>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <Modal
          open={isModalOpenAddJob}
          onOk={handleOkAddJob}
          onCancel={handleCancelAddJob}
          footer={null}
          width="600px"
        >
          <PostWork cancelAddJob={handleCancelAddJob} />
        </Modal>
      </div>
      <div>
        <Modal
          open={isModalOpenEditJob}
          onOk={handleOkEditJob}
          onCancel={handleCancelEditJob}
          footer={null}
          width="600px"
        >
          <EditJob onCancelEditJob={handleCancelEditJob} />
        </Modal>
      </div>
      <div>
        <Modal
          open={isModalOpenEditImg}
          onOk={handleOkEditImg}
          onCancel={handleCancelEditImg}
          footer={null}
          width="600px"
        >
          <EditImg cancelEditImg={handleCancelEditImg} />
        </Modal>
      </div>
    </>
  );
};
export default JobManagement;
