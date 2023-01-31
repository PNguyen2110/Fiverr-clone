import React from "react";
import { useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
const HomeServiceDetail = () => {
  const x = document.getElementById("myVideo1");
  function pauseVid() {
    x.pause();
  }
  const [video, setVideo] = useState(1);
  return (
    <div className="bg-pink-50 home-service-detail">
      <div className="container lg:grid grid-cols-2 py-20 content">
        <div className="left col-span-1 pr-40 title">
          <h2 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl  text-2xl font-bold ">
            A whole world of freelance
            <p> talent at your fingertips</p>
          </h2>
          <ul>
            <li className="pb-6">
              <div className="left-1">
                <div className="flex items-center">
                  <p className="iconcheck">
                    <CheckOutlined />
                  </p>
                  <p style={{ fontSize: "22px" }} className="font-semibold titel1">
                    {" "}
                    The best for every budget
                  </p>
                </div>
                <p className="item-body content1">
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </div>
            </li>
            <li className="pb-6">
              <div className="left-1">
                <div className="flex items-center">
                  <p className="iconcheck">
                    <CheckOutlined />
                  </p>
                  <p style={{ fontSize: "22px" }} className="font-semibold titel1">
                    {" "}
                    Quality work done quickly
                  </p>
                </div>
                <p className="item-body content1">
                  Find the right freelancer to begin working on your project
                  within minutes.
                </p>
              </div>
            </li>
            <li className="pb-6">
              <div className="left-1">
                <div className="flex items-center">
                  <p className="iconcheck">
                    <CheckOutlined />
                  </p>
                  <p style={{ fontSize: "22px" }} className="font-semibold titel1">
                    {" "}
                    Protected payments, every time
                  </p>
                </div>
                <p className="item-body content1">
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
              </div>
            </li>
            <li className="pb-6">
              <div className="left-1">
                <div className="flex items-center">
                  <p className="iconcheck">
                    <CheckOutlined />
                  </p>
                  <p style={{ fontSize: "22px" }} className="font-semibold titel1">
                    {" "}
                    24/7 support
                  </p>
                </div>
                <p className="item-body content1">
                  Questions? Our round-the-clock support team is available to
                  help anytime, anywhere.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="right col-span-1 pt-16">
          <div className="video-modal">
            <div
              className="picture-wrapper"
              onClick={() => {
                setVideo(video + 1);
                pauseVid();
              }}
            >
              <div className="">
                <picture>
                  <source
                    media="(min-width: 1160px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
                  />
                  <source
                    media="(min-width: 900px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
                  />
                  <source
                    media="(min-width: 600px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_900,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_900,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
                  />
                  <source
                    media="(min-width: 361px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
                  />
                  <source
                    media="(max-width: 360px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
                  />
                  <img
                    alt="Video teaser image"
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
                    loading="auto"
                    className="w-full"
                    onClick={() => {
                      setVideo(video + 1);
                    }}
                  />
                </picture>
              </div>
            </div>
          </div>
          <video
            id="myVideo1"
            crossOrigin="anonymous"
            controls
            className="orca-video"
            style={{ display: `${video % 2 === 0 ? "block" : "none"}` }}
            poster="true"
            preload="metadata"
          >
            <source
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceDetail;
