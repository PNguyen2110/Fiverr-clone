import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getTypeWork,
  getTypeWorkDetail,
  useCongViec,
} from "../../storeToolKit/CongViec";
import { Rate } from "antd";
import _ from "lodash";
const CategoriesBucket = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { jobType, jobTypeDetail } = useCongViec();
  useEffect(() => {
    dispatch(getTypeWork(params.ids));
  }, [params.ids]);
  return (
    <div>
      <div className="pb-10 pt-16 bg-pink-50">
        <div className="container">
          <h2 className="text-3xl font-bold">
            {jobType.map((job) => (
              <i key={job.index * 1000}>{job.tenLoaiCongViec}</i>
            ))}
          </h2>
          <div className="grid lg:grid-cols-4 pt-6 gap-x-12 gap-y-6">
            {jobType.map((job1) => {
              return job1.dsNhomChiTietLoai.map((item) => {
                return (
                  <div className="col-span-1" key={item.id}>
                    <div>
                      <img
                        src={
                          item.hinhAnh !== ""
                            ? item.hinhAnh
                            : "https://tse1.mm.bing.net/th?id=OIP.H9QYh9DOTV8tTJ_TH-ytrAHaFj&pid=Api&P=0"
                        }
                        alt=""
                        className="object-cover w-full mb-4 sm:h-96 dark:bg-gray-500 rounded-md"
                        style={{ height: "220px" }}
                      />
                      <h2
                        className=" font-semibold pb-2"
                        style={{ fontSize: "23px" }}
                      >
                        {item.tenNhom}
                      </h2>
                      {item.dsChiTietLoai.map((detail) => {
                        return (
                          <a
                            href="#detail"
                            style={{ fontSize: "18px", display: "block" }}
                            className=" dark:text-gray-400 cursor-pointer hover:text-pink-400 pb-2"
                            key={detail.id}
                            onClick={() =>
                              dispatch(getTypeWorkDetail(detail.id))
                            }
                          >
                            {detail.tenChiTiet}
                          </a>
                        );
                      })}
                      <p>{item.tenChiTiet}</p>
                    </div>
                  </div>
                );
              });
            })}
          </div>
        </div>
      </div>
      {jobTypeDetail?.length !== 0 ? (
        <div className="  bg-green-50 pt-6 pb-9" id="detail">
          <div
            className="container text-2xl text-pink-400
                pb-6 pt-4"
          >
            {_.uniqBy(jobTypeDetail, "tenChiTietLoai").map((name) => {
              return name.tenChiTietLoai;
            })}
          </div>
          <div className="row lg:grid grid-cols-4 gap-8 mt-10  mx-auto container">
            {jobTypeDetail?.map((list) => {
              return (
                <div
                  className="mb-6 flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-white"
                  key={list.index}
                  onClick={() => navigate(`/jobDetail/${list.id}`)}
                >
                  <div className="flex space-x-4">
                    <img
                      alt="..."
                      src={list.avatar}
                      className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                    />
                    <div className="flex flex-col space-y-1">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className=" font-semibold text-green-500"
                        style={{ fontSize: "16px" }}
                      >
                        {list.tenNguoiTao}
                      </a>
                      <span className="text-xs dark:text-gray-400">
                        {Math.floor(Math.random() * 24) + 1} hours ago
                      </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src={list.congViec.hinhAnh}
                      alt="..."
                      className="object-cover w-full mb-4 sm:h-96 rounded-md "
                      style={{ height: "220px" }}
                    />
                    <h2 className="pb-2 text-xl font-semibold">
                      {list.congViec.tenCongViec.length > 40
                        ? list.congViec.tenCongViec.substr(0, 40) + "..."
                        : list.congViec.tenCongViec}
                    </h2>
                    <p className="text-sm dark:text-gray-400">
                      {list.congViec.moTaNgan.length > 80
                        ? list.congViec.moTaNgan.substr(0, 80) + "..."
                        : list.congViec.moTaNgan}
                    </p>
                    <p>
                      {" "}
                      <Rate
                        disabled
                        defaultValue={list.congViec.saoCongViec}
                        style={{ fontSize: "15px" }}
                      />{" "}
                      ({list.congViec.danhGia})
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-between">
                    <div className="space-x-2 text-xl">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <div className="flex space-x-2 text-sm dark:text-gray-400">
                      <span className="font-medium">STARTING AT</span> {""}
                      <span className="font-bold text-black">
                        ${list.congViec.giaTien}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CategoriesBucket;
