import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { layCongViecChiTiet, useCongViec } from "../../storeToolKit/CongViec";
import { Collapse, Progress, Tabs } from "antd";
import { useState } from "react";
import {
  binhLuanTheoCongViec,
  postBinhLuan,
  useComment,
} from "../../storeToolKit/BinhLuan";
import { useForm } from "react-hook-form";
import { thueCongViecPost } from "../../storeToolKit/ThueCongViec/thueCongViecReducer";
import Slider from "react-slick";
//
export const JobDetail = () => {
  const { Panel } = Collapse;
  const { id } = useParams();
  const dispatch = useDispatch();
  const { jobDetail } = useCongViec();

  const { commentByJob } = useComment();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  useEffect(() => {
    const inputcheck = document.body.querySelector(".inputcheck");
    // const backgroundcheck = document.body.querySelector(".backgroundcheck");
    const subcheck = document.body.querySelector(".subcheck");
    inputcheck.style.display = "block";
    subcheck.style.display = "block";
    // backgroundcheck.style.backgroundColor = "white";
    // backgroundcheck.style.position = 'fixed';
  });
  useEffect(() => {
    dispatch(layCongViecChiTiet(id));
    dispatch(binhLuanTheoCongViec(id));
  }, []);
  const handleStar = (star) => {
    let stars = [];

    for (let i = 0; i < star; i++) {
      stars.push(
        <span key={i} className="text-yellow-500">
          <i className="fa-solid fa-star "></i>
        </span>
      );
    }
    return stars;
  };

  const text = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );
  const onChange = (key) => {
    console.log(key);
  };
  const [expandIconPosition, setExpandIconPosition] = useState("end");
  // get date
  const getTodayDate = () => {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return `${date}-${month}-${year}`;
  };
  // render TabContent
  const handleTabContent = (job) => (
    <div className="px-8 pt-3 pb-5 text-base text-gray-400">
      <div className=" text-[20px] flex justify-between text-[#333]">
        <span>Basic</span>
        <span>$ {job.congViec.giaTien}</span>
      </div>
      <p className="mt-8 h-12">
        Create a simple web application for your business.
      </p>
      <div className="flex gap-5">
        <div>
          <span className="mr-1">
            <i className="fa-regular fa-clock"></i>
          </span>
          <span>30 Days Delivery</span>
        </div>
        <div className="flex">
          <span
            className="nFghBOe revisions-icon self-center mr-1"
            aria-hidden="true"
            style={{ width: "16px", height: "16px" }}
          >
            <svg
              fill="#62646a"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
              <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
            </svg>
          </span>
          <span>1 Revision</span>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex">
          <span className="text-green-500">
            <i className="fa-sharp fa-solid fa-check"></i>
          </span>
          <span className="ml-5">Design customization</span>
        </div>
        <div className="flex">
          <span className="text-gray-400">
            <i className="fa-sharp fa-solid fa-check"></i>
          </span>
          <span className="ml-5">Content Upload</span>
        </div>
        <div className="flex">
          <span className="text-green-500">
            <i className="fa-sharp fa-solid fa-check"></i>
          </span>
          <span className="ml-5">Responsive Design</span>
        </div>
        <div className="flex">
          <span className="text-green-500">
            <i className="fa-sharp fa-solid fa-check"></i>
          </span>
          <span className="ml-5">Include Source Code</span>
        </div>
        <div className="flex">
          <span className="text-gray-400">
            <i className="fa-sharp fa-solid fa-check"></i>
          </span>
          <span className="ml-5">Page</span>
        </div>
      </div>
      <div className="mt-5">
        <button
          type="submit"
          onClick={() => {
            // if (!localStorage.getItem("userLogin")) {

            dispatch(
              thueCongViecPost({
                id: 0,
                maCongViec: +id,
                maNguoiThue: handleGetUser(),
                ngayThue: getTodayDate(),
                hoanThanh: false,
              })
            );
            // }
          }}
          className="hover:bg-green-400 bg-green-500 text-white w-full py-2 rounded-lg font-bold"
        >
          <span className="mr-2">Continue</span>
          <span>(${job.congViec.giaTien})</span>
        </button>
      </div>
      <p className="mt-4 text-green-600 justify-center flex">
        Compare Packages
      </p>
    </div>
  );

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // slider carousel
  const handleSliders = (job) => {
    return (
      <Slider {...settings}>
        <div className="wrap-content  mt-9 md:mb-[200px]">
          <div className="wrap-img">
            <img className="w-full " src={job.congViec.hinhAnh} alt="..." />
          </div>
        </div>
        <div className="wrap-content  mt-9">
          <div className="wrap-img ">
            <img
              className="w-full "
              src="http://picsum.photos/610/409"
              alt="..."
            />
          </div>
        </div>
      </Slider>
    );
  };
  // get user from localStorage
  const handleGetUser = () => {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogin) {
      return userLogin.id;
    }
  };
  return (
    <Wrapper className="container mx-auto mb-[300px] relative pt-[130px]">
      {jobDetail.map((job, index) => (
        <div
          key={index + 1}
          className="  flex lg:flex-row lg:justify-between flex-col"
        >
          <div className="flex-cols  mx-auto w-full   lg:w-[60%] lg:pr-[114px]">
            <div className="left text-base ">
              <h3 className=" mt-5">
                <Link to="">{job.tenLoaiCongViec}</Link>
                <span className="mx-2 color text-gray-400">
                  <i className="fa-solid fa-greater-than"></i>
                </span>
                <Link to="">{job.tenLoaiCongViec}</Link>

                <span className="mx-2 color text-gray-400">
                  <i className="fa-solid fa-greater-than"></i>
                </span>
                <Link to="">{job.tenChiTietLoai}</Link>
              </h3>
              <h1 className="text-3xl w-300px    text-[#333]">
                {job.congViec.tenCongViec}
              </h1>
              <div className="flex gap-1">
                <img
                  className="w-8 rounded-full"
                  src={job.avatar}
                  alt="avatar"
                />
                <span className="ml-3 text-black">{job.tenNguoiTao}</span>
                <span className="ml-2 text-gray-400">Level 2 Seller</span>
                <span className="w-[2px] h-5 bg-gray-300 mx-2"></span>
                <span>
                  {handleStar(job.congViec.saoCongViec)}
                  <span className="ml-1 text-yellow-500">
                    {job.congViec.saoCongViec}
                  </span>
                  <span className="mx-1 ">({job.congViec.danhGia})</span>
                </span>
                <span className="text-gray-400">
                  {job.congViec.nguoiTao} Orders in Queue
                </span>
              </div>
              <div className="wrapper h-[450px] ">
                <div>{handleSliders(job)}</div>
              </div>
            </div>
            <div className="aboutThisGig mt-[600px] sm:mt-[650px] md:mt-[800px]  lg:mt-12 text-gray-400 text-base">
              <h2 className="my-4 text-2xl pt-4">About This Gig</h2>
              <p className="text-gray-800">
                Top Rated Seller with all positive reviews
              </p>

              <p>
                {job.congViec.moTa.slice(0, job.congViec.moTa.indexOf(",") + 1)}{" "}
                <br />
                <span>
                  {job.congViec.moTa.slice(job.congViec.moTa.indexOf(",") + 1)}
                </span>
              </p>
              <p className="text-black">Thing offer:</p>
              <ul>
                {job.congViec.moTaNgan.split("+").map((item, index) => (
                  <li key={index}> - {item}</li>
                ))}
              </ul>
              <p className="text-black">
                I will do the work until you are satisfied with fast anh
                responsive communication.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mt-8">About The Seller</h3>
              <div className="flex gap-8 mt-8">
                <div>
                  <img
                    className="w-[120px] rounded-full"
                    src={job.avatar}
                    alt=""
                  />
                </div>
                <div>
                  <p className=" text-black">{job.tenNguoiTao}</p>
                  <p>Web Developer</p>
                  <p>
                    {handleStar(job.congViec.saoCongViec)}
                    <span className="ml-1 text-yellow-500">
                      {job.congViec.saoCongViec}
                    </span>
                    <span className="mx-1 ">({job.congViec.danhGia})</span>
                  </p>
                  <button className="bg-white-400 border-2 border-black px-5 py-3 text-gray-500 text-xl rounded-lg">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 mb-[100px] text-gray-400 font-semibold">
              <h2 className="text-xl">FAQ</h2>
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                expandIconPosition={expandIconPosition}
              >
                <Panel
                  value={expandIconPosition}
                  header="Do you provide regular updates on order"
                  key="1"
                >
                  {text}
                </Panel>
                <Panel
                  value={expandIconPosition}
                  header="How do you guarantee product quality and reliability?"
                  key="2"
                >
                  {text}
                </Panel>
                <Panel
                  value={expandIconPosition}
                  header="Do you give post-development support"
                  key="3"
                >
                  {text}
                </Panel>
                <Panel
                  value={expandIconPosition}
                  header="Do you convert PSD to HTML"
                  key="4"
                >
                  {text}
                </Panel>
              </Collapse>
            </div>
            <div className="text-base">
              <div className="flex md:flex-row relative flex-col md:justify-between   md:gap-3 text-xl mb-6">
                <div className="flex gap-2">
                  <span className="text-black font-bold">
                    {job.congViec.danhGia}
                  </span>
                  <span className="text-black font-bold">Reviews</span>
                  <span className="text-yellow-500">
                    {handleStar(job.congViec.saoCongViec)}{" "}
                    {job.congViec.saoCongViec}
                  </span>
                </div>
                <div className=" text-base flex gap-2 items-end text-gray-400 absolute md:relative top-[200px]">
                  <span className="self-end ">
                    Sort By <strong>Most relevant</strong>{" "}
                  </span>
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
              </div>
              <div className="flex md:flex-row flex-col  gap-8 ">
                <div className="md:w-[50%] w-full lg:mb-2 mb-7">
                  <span className="flex">
                    <span className="mr-3 w-[70px] text-blue-400">5 Stars</span>
                    <Progress
                      strokeColor="#eab308f2"
                      percent={job.congViec.danhGia - 1}
                      format={(percent) => (
                        <span className="text-blue-400">
                          ({job.congViec.danhGia - 1})
                        </span>
                      )}
                      size="small"
                      className="text-blue-400"
                    />
                  </span>
                  <span className="flex">
                    <span className="mr-3 w-[70px] text-blue-400">4 Stars</span>
                    <Progress
                      strokeColor="#eab308f2"
                      percent={1}
                      format={(percent) => (
                        <span className="text-blue-400">(1)</span>
                      )}
                      size="small"
                      status="active"
                    />
                  </span>
                  <span className="flex text-gray-400">
                    <span className="mr-3 w-[70px]">3 Stars</span>
                    <Progress
                      percent={0}
                      format={(percent) => (
                        <span className="text-gray-400">{percent}</span>
                      )}
                      size="small"
                      status="normal"
                    />
                  </span>
                  <span className="flex text-gray-400">
                    <span className="mr-3 w-[70px]">2 Stars</span>
                    <Progress
                      percent={0}
                      format={(percent) => (
                        <span className="text-gray-400">{percent}</span>
                      )}
                      size="small"
                    />
                  </span>
                  <span className="flex text-gray-400 ">
                    <span className="mr-3 w-[70px]">1 Stars</span>
                    <Progress
                      percent={0}
                      format={(percent) => (
                        <span className="text-gray-400">{percent}</span>
                      )}
                      size="small"
                      // showInfo={false}
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <p className="justify-between flex text-black font-semibold">
                    <span>Rating breakdown</span>
                  </p>
                  <p className="justify-between flex text-gray-400 mb-1">
                    <span>Seller communication level</span>

                    <span className="text-yellow-400">
                      5 <i className="fa-solid fa-star "></i>
                    </span>
                  </p>
                  <p className="justify-between flex text-gray-400 mb-1">
                    <span>Recommend to a friend</span>
                    <span className="text-yellow-400">
                      {" "}
                      5 <i className="fa-solid fa-star "></i>
                    </span>
                  </p>
                  <p className="justify-between flex text-gray-400 mb-1">
                    <span>Service a described</span>
                    <span className="text-yellow-400">
                      {" "}
                      5 <i className="fa-solid fa-star "></i>
                    </span>
                  </p>
                </div>
              </div>
              <p className="my-6 font-bold">Filters</p>
              <p>
                industry <strong>All industries</strong>
                <i className="fa-solid fa-angle-down ml-1"></i>
              </p>
            </div>
            <div className="comment mt-8 border-t border-gray-300">
              <div className="mt-5">
                {commentByJob.map((cmt, index) => {
                  return (
                    <div key={index} className="my-12">
                      <div className="flex ">
                        <img
                          className="rounded-full shrink-0 w-[40px] h-[40px]"
                          src="http://picsum.photos/40/40"
                          alt=".."
                        />
                        <div className="flex flex-col ml-3">
                          <div className="flex gap-2">
                            <p className="">{cmt.tenNguoiBinhLuan}</p>
                            <p>
                              <span className="text-yellow-500">
                                <i className="fa-solid fa-star "></i>
                              </span>
                              <span>{cmt.saoBinhLuan}</span>
                            </p>
                          </div>
                          <div>
                            <div>
                              <p>{cmt.noiDung}</p>
                              <p className="text-gray-400">
                                {cmt.ngayBinhLuan}
                              </p>
                              <p className="flex gap-5">
                                <span>
                                  <i className="fa-solid fa-thumbs-up"></i>
                                  <span className="ml-1">Helpful</span>
                                </span>
                                <span>
                                  <i className="fa-solid fa-thumbs-down"></i>
                                  <span className="ml-1">Not Helpful</span>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="mt-5">
                  <form
                    onSubmit={handleSubmit((data) => {
                      //   noiDung: data.cmt,
                      //   id: id,
                      //   maNguoiBinhLuan: handleGetUser(),
                      //   ngayBinhLuan: getTodayDate(),
                      //   saoBinhLuan: 5,
                      //   maCongViec: id,
                      // });
                      dispatch(
                        postBinhLuan({
                          noiDung: data.cmt,
                          id: +id,
                          maNguoiBinhLuan: handleGetUser(),
                          ngayBinhLuan: getTodayDate(),
                          saoBinhLuan: 5,
                          maCongViec: +id,
                        })
                      );
                    })}
                  >
                    <div>
                      <textarea
                        {...register("cmt", {
                          required: "Please Enter Your Comment !",
                        })}
                        className="w-full border-2 rounded-md p-3"
                        name="cmt"
                        cols="30"
                        rows="5"
                        placeholder="Enter Your Comment ..."
                      />
                      <p className="text-red-400">{errors?.cmt?.message}</p>
                    </div>
                    <button className="bg-blue-400 text-white mt-5 py-3 px-5 rounded-md hover:bg-blue-500">
                      Add Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute lg:-mt-[120px]  w-full mb-[100] mx-auto top-[450px] sm:top-[500px]  md:top-[550px]  lg:relative lg:top-0 ">
            <div
              className={`right flex-1 mt-[200px] border-2 h-[500px]  w-full`}
            >
              <Tabs
                className="flex justify-around"
                defaultActiveKey="1"
                onChange={onChange}
                items={[
                  {
                    label: `Basic`,
                    key: "1",
                    children: handleTabContent(job),
                  },
                  {
                    label: `Standard`,
                    key: "2",
                    children: handleTabContent(job),
                  },
                  {
                    label: `Premium`,
                    key: "3",
                    children: handleTabContent(job),
                  },
                ]}
              />
            </div>
            <div className="w-full mt-5 py-5 border-2 flex flex-col items-center text-base font-semibold">
              <p>Do you have any special requirements?</p>
              <button className="text-gray-400 border-[#333] px-3 py-2 border rounded-md">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .wrap-content {
    .wrap-img {
      overflow: hidden;
      img {
        transition: all 0.5s;
      }
      &:hover img {
        scale: 1.05;
      }
    }
  }
  .slick-arrow {
    align-items: center;
    border-radius: 50%;
    padding: 22px;
    display: flex !important;
    justify-content: center;
    background-color: white;
    box-shadow: 0 0 2px rgba(0 0 0 / 80%) !important;
    font-weight: 800;
    z-index: 1;
    &::before {
      opacity: 1;
      font-family: "Courier New", Courier, monospace;
    }
  }
  .slick-next::before {
    content: ">";
    color: #616060;
  }

  .slick-next,
  .slick-prev {
    top: 38%;
  }
  @media screen and (max-width: 768px) {
    .slick-next,
    .slick-prev {
      top: 40%;
    }
  }
  @media screen and (max-width: 568px) {
    .slick-next,
    .slick-prev {
      top: 50%;
    }
  }

  .slick-prev::before {
    content: "<";
    color: #616060;
  }
  .input {
    display: none;
  }
  .slick {
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 50%;
    box-shadow: 0 0 0 #333;
    display: flex;
    align-self: center;
    justify-self: center;
    box-shadow: -1px 2px 5px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .left {
    left: 0%;
  }
  /* .right {
    right: 0%;
  } */

  .anticon.anticon-right.ant-collapse-arrow {
    transform: rotate(90deg) !important;
  }
  .ant-collapse-header {
    padding-left: 0 !important;
    font-size: 16px;
  }
  .ant-tabs-nav-list {
    justify-content: space-around;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
  }
  .ant-tabs-tab {
    width: 100%;
    border: 1px solid #ccc;
    border-top: 0;
    margin: 0;
    color: #9ca3af;
  }
  .ant-tabs-tab-btn {
    margin: 0 auto;
  }
  .ant-tabs-ink-bar {
    background-color: #51bd51 !important;
  }
  .ant-tabs-tab-active {
    /* border-bottom: 2px solid green; */
    .ant-tabs-tab-btn {
      /* border-bottom: 2px solid green; */
      background-color: #fff;
      color: #51bd51;
    }
  }
`;
