import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useEffect } from "react";

const CategoriesBanner = () => {
  const [videocate, setVideoCate] = useState(1);
  const [close, setVideoClose] = useState(1);
  const x = document.getElementById("myVideo");
  function pauseVid() {
    x.pause();
  }
  useEffect(() => {
    const inputcheck = document.body.querySelector(".inputcheck");
    const backgroundcheck = document.body.querySelector(".backgroundcheck");
    const subcheck = document.body.querySelector(".subcheck");
    inputcheck.style.display = "block";
    subcheck.style.display = "block";
    backgroundcheck.style.backgroundColor = "white";
    backgroundcheck.style.position = "fixed";
  });

  return (
    <div className="categories-banner mt-40">
      <div
        className="categories-banner-wrapper container rounded-lg bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3f1b7ea10295936b6846bcff0afd38cf-1626595415207/digital-marketing-desktop.png')`,
          height: "300px",
        }}
      >
        <div className="categories-banner ">
          <div className="banner-content text-center text-white">
            <h1 className="title">Digital Marketing</h1>
            <p className="subtitle ">Build your brand. Grow your business.</p>
            <div className="px-20">
              <button
                className="hover:bg-white hover:text-pink-400 font-medium"
                onClick={() => {
                  setVideoCate(videocate + 1);
                  setVideoClose(close + 1);
                }}
              >
                <p aria-hidden="true" style={{ width: 19, height: 16 }}>
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM5.742 11.778 11.655 8.3a.348.348 0 0 0 0-.6L5.742 4.222a.348.348 0 0 0-.525.3v6.956a.348.348 0 0 0 .525.3Z"
                    />
                  </svg>
                </p>
                <p className="pl-2 buttonCheck" style={{ fontSize: "17px" }}>
                  {" "}
                  How Fiverr Works
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="video-close">
        <video
          id="myVideo"
          className="orca-video"
          style={{ display: `${videocate % 2 === 0 ? "block" : "none"}` }}
          controls
          preload="metadata"
          crossOrigin="anonymous"
        >
          <source
            src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd_nl/v1/video-attachments/generic_asset/asset/ab0907217c9f9a2c1d2eee677beb7619-1626082923646/how_fiverr_works"
            type="video/mp4"
          />
        </video>
        <span
          className="bg-pink-400 rounded-sm close text-white"
          onClick={() => {
            pauseVid();
            setVideoCate(videocate + 1);
            setVideoClose(close + 1);
          }}
          style={{ display: `${close % 2 !== 0 ? "none" : "block"}` }}
        >
          {" "}
          <CloseOutlined />
        </span>
      </div>
    </div>
  );
};

export default CategoriesBanner;
