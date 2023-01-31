import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Rate, Modal } from "antd";
import "./infouser.css";
import {
  useNguoiDung,
  getInfoUser,
  editInfoUser,
} from "../../storeToolKit/NguoiDung";
import {
  deleteRentList,
  getRentList,
  useThueCongViec,
} from "../../storeToolKit/ThueCongViec";
import { useState } from "react";
import EditInfo from "./EditInfo";
const InfoUser = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { infoUser } = useNguoiDung();
  const { rentList } = useThueCongViec();
  const [isModalOpenInfo, setisModalOpenInfo] = useState(false);
  const [desc, setDesc] = useState("");
  const [editDesc, setEditDesc] = useState(1);
  const [editLang, setEditLang] = useState(1);
  const [addEduca, setAddEduca] = useState(1);
  const [addSkill, setAddSkill] = useState(1);
  const [addCerti, setAddCerti] = useState(1);
  const [adver, setAdver] = useState("block");
  const [languages, setLanguages] = useState("");
  const [education, setEducation] = useState("");
  const [skillCheck, setSkill] = useState("");
  const [certiCheck, setCerti] = useState("");
  const arrLang = JSON.parse(localStorage.getItem("arrLang")) || [];
  const arrEdu = JSON.parse(localStorage.getItem("arrEdu")) || [];
  const showModalInfo = () => {
    setisModalOpenInfo(true);
  };
  const handleOkInfo = () => {
    setisModalOpenInfo(false);
  };
  const handleCancelInfo = () => {
    setisModalOpenInfo(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleStateDesc = (event) => {
    setDesc(event.target.value);
  };
  const handleStateLanguages = (event) => {
    setLanguages(event.target.value);
  };
  const handleStateEducation = (event) => {
    setEducation(event.target.value);
  };
  const handleStateSkill = (event) => {
    setSkill(event.target.value);
  };
  const handleStateCerti = (event) => {
    setCerti(event.target.value);
  };
  useEffect(() => {
    const inputcheck = document.body.querySelector(".inputcheck");
    const backgroundcheck = document.body.querySelector(".backgroundcheck");
    const subcheck = document.body.querySelector(".subcheck");
    inputcheck.style.display = "block";
    subcheck.style.display = "block";
    backgroundcheck.style.backgroundColor = "white";
    backgroundcheck.style.position = "fixed";
  });
  useEffect(() => {
    dispatch(getInfoUser(params.idUser));
    dispatch(getRentList());
  }, [params.idUser]);
  const { email, phone, skill, name, birthday, gender, certification, role } =
    infoUser;
  let b = [];
  const c = skill?.map((i) => {
    return b.push(i);
  });
  let d = [];
  const e = certification?.map((ce) => {
    return d.push(ce);
  });
  return (
    <div className="pt-40 info-user bg-pink-50">
      <div className="lg:grid lg:grid-cols-3  container lg:gap-x-9 pb-10">
        <div className="col-span-1 ml-8 item1">
          <div className="top ">
            <div className=" max-w-lg p-6 space-y-4 overflow-hidden rounded-lg shadow-md bg-white ">
              <div className="text-center">
                <span className="text-green-500 online ">Online</span>
              </div>
              <div className="pt-6 flex flex-col content-center items-center">
                <img
                  src={
                    !infoUser.avatar
                      ? "https://wiki-travel.com.vn/uploads/post/thanhhuong-164523114546-hoa-dao.jpg"
                      : infoUser.avatar
                  }
                  alt="..."
                  className="object-cover   rounded-full "
                  style={{ height: "200px", width: "200px" }}
                />
                <p className="pt-6 text-black font-medium text-2xl mb-1">
                  {infoUser.name}
                </p>
                <button
                  onClick={() => {
                    showModalInfo();
                  }}
                  className="cursor-pointer hover:text-green-400"
                >
                  {" "}
                  <i className="fa-solid fa-pencil"></i>
                </button>
                <div>
                  <Modal
                    open={isModalOpenInfo}
                    onOk={handleOkInfo}
                    onCancel={handleCancelInfo}
                    footer={null}
                    width="600px"
                  >
                    <EditInfo params={params.idUser} />
                  </Modal>
                </div>
              </div>
              <hr />
              <div className="flex flex-wrap justify-between content-center items-center ">
                <div className="space-x-2 text-xl text-gray-400">
                  <i className="fa-solid fa-location-dot"></i>
                  <span style={{ fontSize: "17px" }} className="font-medium">
                    From
                  </span>
                </div>
                <div className=" text-sm ">
                  <span className="font-bold" style={{ fontSize: "17px" }}>
                    Viet Nam
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap justify-between content-center items-center">
                <div className="space-x-2 text-xl text-gray-400">
                  <i className="fa-solid fa-cake-candles"></i>
                  <span style={{ fontSize: "17px" }} className="font-medium">
                    Birthday
                  </span>
                </div>
                <div className=" text-sm ">
                  <span className="font-bold" style={{ fontSize: "17px" }}>
                    {infoUser.birthday}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom pt-9">
            <div className=" max-w-lg p-6 space-y-8 overflow-hidden rounded-lg shadow-md bg-white ">
              <div>
                <div className="flex flex-wrap justify-between content-center items-center ">
                  <div className="space-x-2 text-xl text-gray-400">
                    <span
                      style={{ fontSize: "19px" }}
                      className=" text-black font-bold"
                    >
                      Description
                    </span>
                  </div>
                  <div className=" text-sm ">
                    <span
                      className="font-medium cursor-pointer"
                      style={{ fontSize: "16px", color: "#00698c" }}
                      onClick={() => {
                        setEditDesc(editDesc + 1);
                        setDesc("");
                      }}
                    >
                      Edit Description
                    </span>
                  </div>
                </div>
                <section
                  className=" bg-pink-100 text-black p-4"
                  style={{
                    display: `${editDesc % 2 === 0 ? "block" : "none"}`,
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <div className=" rounded-md shadow-sm ">
                      <label htmlFor="" className="text-sm">
                        Description
                      </label>
                      <textarea
                        value={desc}
                        onChange={handleStateDesc}
                        placeholder="Enter your description"
                        className=" w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700  mt-2 px-1"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="py-2 px-4 bg-green-400 text-white mt-4 rounded-md font-medium"
                      onClick={() => {
                        setEditDesc(editDesc + 1);
                        localStorage.setItem("desc", JSON.stringify(desc));
                      }}
                    >
                      Update
                    </button>
                  </form>
                </section>

                <p
                  className="py-2"
                  style={{
                    display: `${editDesc % 2 === 0 ? "none" : "block"}`,
                  }}
                >
                  <i>{JSON.parse(localStorage.getItem("desc"))}</i>
                </p>
              </div>
              <hr />
              <div>
                <div className="flex flex-wrap justify-between content-center items-center ">
                  <div className="space-x-2 text-xl text-gray-400">
                    <span
                      style={{ fontSize: "19px" }}
                      className=" text-black font-bold"
                    >
                      Languages
                    </span>
                  </div>
                  <div className=" text-sm ">
                    <span
                      className="font-medium cursor-pointer"
                      style={{ fontSize: "16px", color: "#00698c" }}
                      onClick={() => {
                        setEditLang(editLang + 1);
                        setLanguages("");
                      }}
                    >
                      Add New
                    </span>
                  </div>
                </div>
                <section
                  className=" bg-pink-100 text-black p-4"
                  style={{
                    display: `${editLang % 2 === 0 ? "block" : "none"}`,
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <div className=" rounded-md shadow-sm ">
                      <label htmlFor="" className="text-sm">
                        Languages
                      </label>
                      <input
                        value={languages}
                        onChange={handleStateLanguages}
                        placeholder="Enter your languages"
                        className=" w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700  mt-2 px-1"
                      ></input>
                    </div>
                    <button
                      type="submit"
                      className="py-2 px-4 bg-green-400 text-white mt-4 rounded-md font-medium"
                      onClick={() => {
                        setEditLang(editLang + 1);
                        let indexAddLang = arrLang.findIndex(
                          (lang) => lang === languages
                        );
                        if (indexAddLang === -1) {
                          arrLang.push(languages);
                        } else {
                          alert("Language already exists ");
                        }

                        localStorage.setItem(
                          "arrLang",
                          JSON.stringify(arrLang)
                        );
                      }}
                    >
                      Add
                    </button>
                  </form>
                </section>
                <p
                  className="py-2"
                  style={{
                    display: `${editLang % 2 === 0 ? "none" : "block"}`,
                  }}
                >
                  <i>
                    <p className="flex flex-wrap justify-between content-center items-center lang hover:bg-pink-100 px-1">
                      <span className="lang-color">
                        English - <i style={{ color: "#b2b2b2" }}>Basic</i>
                      </span>
                      <span className=" iLang rounded-md bg-red-400  px-2">
                        {" "}
                        <i className="fa-solid fa-xmark cursor-pointer hover:text-white " />
                      </span>
                    </p>
                    {arrLang.map((lang) => {
                      return (
                        <p
                          key={lang.index}
                          className="flex flex-wrap justify-between content-center items-center lang hover:bg-pink-100 px-1"
                        >
                          <span className="lang-color">{lang} </span>
                          <span className=" iLang rounded-md bg-red-400  px-2">
                            <i
                              className="fa-solid fa-xmark cursor-pointer hover:text-white "
                              onClick={() => {
                                let indexDeleteLang = arrLang.findIndex(
                                  (lang1) => lang1 === lang
                                );
                                arrLang.splice(indexDeleteLang, 1);
                                localStorage.setItem(
                                  "arrLang",
                                  JSON.stringify(arrLang)
                                );
                                window.location.reload();
                              }}
                            />
                          </span>
                        </p>
                      );
                    })}
                  </i>
                </p>
              </div>
              <hr />
              <div className="flex flex-col items-start">
                <h2
                  style={{ fontSize: "19px" }}
                  className=" text-black font-bold"
                >
                  Linked Accounts
                </h2>
                <p style={{ color: "#00698c" }}>
                  <span className="font-bold text-2xl pr-2">+</span>
                  <span style={{ fontSize: "17px" }}>Facebook</span>
                </p>
                <p style={{ color: "#00698c" }}>
                  <span className="font-bold text-2xl pr-2">+</span>
                  <span style={{ fontSize: "17px" }}>Google</span>
                </p>
                <p style={{ color: "#00698c" }}>
                  <span className="font-bold text-2xl pr-2">+</span>
                  <span style={{ fontSize: "17px" }}>Dribbble</span>
                </p>
                <p style={{ color: "#00698c" }}>
                  <span className="font-bold text-2xl pr-2">+</span>
                  <span style={{ fontSize: "17px" }}>Stack Overflow</span>
                </p>
                <p style={{ color: "#00698c" }}>
                  <span className="font-bold text-2xl pr-2">+</span>
                  <span style={{ fontSize: "17px" }}>GitHub</span>
                </p>
                <p style={{ color: "#00698c" }}>
                  <span className="font-bold text-2xl pr-2">+</span>
                  <span style={{ fontSize: "17px" }}>Vimeo</span>
                </p>
                <p style={{ color: "#00698c" }}>
                  <span className="font-bold text-2xl pr-2">+</span>
                  <span style={{ fontSize: "17px" }}>Twitter</span>
                </p>
              </div>
              <hr />
              <div>
                <div className="flex flex-wrap justify-between content-center items-center ">
                  <div className="space-x-2 text-xl text-gray-400">
                    <span
                      style={{ fontSize: "19px" }}
                      className=" text-black font-bold"
                    >
                      Skills
                    </span>
                  </div>
                  <div className=" text-sm ">
                    <span
                      className="font-medium cursor-pointer"
                      style={{ fontSize: "16px", color: "#00698c" }}
                      onClick={() => {
                        setAddSkill(addSkill + 1);
                        setSkill("");
                      }}
                    >
                      Add New
                    </span>
                  </div>
                </div>
                <section
                  className=" bg-pink-100 text-black p-4"
                  style={{
                    display: `${addSkill % 2 === 0 ? "block" : "none"}`,
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <div className=" rounded-md shadow-sm ">
                      <label htmlFor="" className="text-sm">
                        Skill
                      </label>
                      <input
                        value={skillCheck}
                        onChange={handleStateSkill}
                        placeholder="Enter your skill"
                        className=" w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700  mt-2 px-1"
                      ></input>
                    </div>
                    <button
                      type="submit"
                      className="py-2 px-4 bg-green-400 text-white mt-4 rounded-md font-medium"
                      onClick={() => {
                        setAddSkill(addSkill + 1);
                        b.push(skillCheck);
                        let data2 = {
                          id: +params.idUser,
                          name: name,
                          email: email,
                          phone: phone,
                          birthday: birthday,
                          gender: gender,
                          role: role,
                          skill: b,
                          certification: certification,
                        };
                        dispatch(editInfoUser(data2));
                        window.location.reload();
                      }}
                    >
                      Add
                    </button>
                  </form>
                </section>

                {skill ? (
                  <p
                    style={{
                      display: `${addSkill % 2 === 0 ? "none" : "block"}`,
                    }}
                  >
                    {skill.map((skill) => {
                      return (
                        <p
                          style={{ color: "#b2b2b2", fontSize: "14px" }}
                          className="mb-0 py-1 font-medium"
                        >
                          {skill}{" "}
                        </p>
                      );
                    })}
                  </p>
                ) : (
                  <p>
                    <span style={{ color: "#b2b2b2" }}>Add your Skills.</span>
                  </p>
                )}
              </div>
              <hr />
              <div>
                <div className="flex flex-wrap justify-between content-center items-center ">
                  <div className="space-x-2 text-xl text-gray-400">
                    <span
                      style={{ fontSize: "19px" }}
                      className=" text-black font-bold"
                    >
                      Education
                    </span>
                  </div>
                  <div className=" text-sm ">
                    <span
                      className="font-medium cursor-pointer"
                      style={{ fontSize: "16px", color: "#00698c" }}
                      onClick={() => {
                        setAddEduca(addEduca + 1);
                        setEducation("");
                      }}
                    >
                      Add New
                    </span>
                  </div>
                </div>
                <section
                  className=" bg-pink-100 text-black p-4"
                  style={{
                    display: `${addEduca % 2 === 0 ? "block" : "none"}`,
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <div className=" rounded-md shadow-sm ">
                      <label htmlFor="" className="text-sm">
                        Education
                      </label>
                      <input
                        value={education}
                        onChange={handleStateEducation}
                        placeholder="Enter your education"
                        className=" w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700  mt-2 px-1"
                      ></input>
                    </div>
                    <button
                      type="submit"
                      className="py-2 px-4 bg-green-400 text-white mt-4 rounded-md font-medium"
                      onClick={() => {
                        setAddEduca(addEduca + 1);
                        let indexAddEdu = arrEdu.findIndex(
                          (edu) => edu === education
                        );
                        if (indexAddEdu === -1) {
                          arrEdu.push(education);
                        } else {
                          alert("Education already exists ");
                        }
                        localStorage.setItem("arrEdu", JSON.stringify(arrEdu));
                      }}
                    >
                      Add
                    </button>
                  </form>
                </section>
                <p
                  style={{
                    display: `${addEduca % 2 === 0 ? "none" : "block"}`,
                  }}
                >
                  {arrEdu.map((edu) => {
                    return (
                      <p
                        key={edu.index}
                        className="flex flex-wrap justify-between content-center items-center lang hover:bg-pink-100 px-1"
                      >
                        <span className="lang-color">{edu} </span>
                        <span className=" iLang rounded-md bg-red-400  px-2">
                          <i
                            className="fa-solid fa-xmark cursor-pointer hover:text-white "
                            onClick={() => {
                              let indexDeleteEdu = arrEdu.findIndex(
                                (lang1) => lang1 === edu
                              );
                              arrEdu.splice(indexDeleteEdu, 1);
                              localStorage.setItem(
                                "arrEdu",
                                JSON.stringify(arrEdu)
                              );
                              window.location.reload();
                            }}
                          />
                        </span>
                      </p>
                    );
                  })}
                </p>
              </div>
              <hr />
              <div>
                <div className="flex flex-wrap justify-between content-center items-center ">
                  <div className="space-x-2 text-xl text-gray-400">
                    <span
                      style={{ fontSize: "19px" }}
                      className=" text-black font-bold"
                    >
                      Certification
                    </span>
                  </div>
                  <div className=" text-sm ">
                    <span
                      className="font-medium cursor-pointer"
                      style={{ fontSize: "16px", color: "#00698c" }}
                      onClick={() => {
                        setAddCerti(addCerti + 1);
                        setCerti("");
                      }}
                    >
                      Add New
                    </span>
                  </div>
                </div>
                <section
                  className=" bg-pink-100 text-black p-4"
                  style={{
                    display: `${addCerti % 2 === 0 ? "block" : "none"}`,
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <div className=" rounded-md shadow-sm ">
                      <label htmlFor="" className="text-sm">
                        Certification
                      </label>
                      <input
                        value={certiCheck}
                        onChange={handleStateCerti}
                        placeholder="Enter your certification"
                        className=" w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700  mt-2 px-1"
                      ></input>
                    </div>
                    <button
                      className="py-2 px-4 bg-green-400 text-white mt-4 rounded-md font-medium"
                      onClick={() => {
                        setAddCerti(addCerti + 1);
                        d.push(certiCheck);
                        let data3 = {
                          id: +params.idUser,
                          name: name,
                          email: email,
                          phone: phone,
                          birthday: birthday,
                          gender: gender,
                          role: role,
                          skill: skill,
                          certification: d,
                        };
                        dispatch(editInfoUser(data3));
                        window.location.reload();
                      }}
                    >
                      Add
                    </button>
                  </form>
                </section>
                {certification ? (
                  <p
                    style={{
                      display: `${addCerti % 2 === 0 ? "none" : "block"}`,
                    }}
                  >
                    {certification.map((cer) => {
                      return (
                        <p
                          style={{ color: "#b2b2b2", fontSize: "14px" }}
                          className="mb-0 py-1 font-medium"
                        >
                          {cer}{" "}
                        </p>
                      );
                    })}
                  </p>
                ) : (
                  <p>
                    <span style={{ color: "#b2b2b2" }}>
                      Add your Certification.
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 ml-10 mr-8 item2">
          <div
            className="relative  rounded-md shadow-md sm:py-6  sm:px-8 bg-white ano1"
            style={{ display: `${adver}` }}
          >
            <button
              className="absolute top-2 right-2"
              onClick={() => {
                setAdver("none");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313" />
              </svg>
            </button>
            <div className="flex items-center ">
              <div className="text-4xl pr-2 ">
                <i className="fa-solid fa-building pb-4"></i>
              </div>
              <div>
                <p className="mb-0">
                  {" "}
                  <b>Buying services for work?</b> Help us tallor your
                  experience to fit your needs.
                </p>
                <p className="text-green-500 pt-2">
                  Tell us more about your business{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-md shadow-md sm:py-6 sm:px-8 bg-white my-4 ano2">
            <h2 className=" font-semibold leading-tight tracking-wide text-gray-500">
              It seems that you don't have any active Gigs. Get selling!
            </h2>
            <button className="px-6 py-2 rounded-sm shadow-sm dark:bg-green-400 dark:text-gray-900">
              Create a New Gig
            </button>
          </div>
          <div className="work  bg-white  px-4  pb-2">
            {rentList.map((job, index) => {
              return (
                <div className="border-t-2 border-black pb-2" key={index}>
                  <div className="grid grid-cols-4 gap-x-3 items-center pt-2">
                    <div className="col-span-1">
                      <img
                        src={job.congViec.hinhAnh}
                        alt=".."
                        className="rounded-lg w-full"
                        style={{ height: "160px" }}
                      />
                    </div>
                    <div className="col-span-3">
                      <div>
                        <h1 className="text-xl mb-0 pb-1">
                          {job.congViec.tenCongViec}{" "}
                        </h1>
                        <p className="mb-0 pb-1">
                          <span className="font-medium ">Rent date :</span>{" "}
                          {job.ngayThue}
                        </p>
                        <p className="mb-0 pb-1">{job.congViec.moTaNgan} </p>
                        <p className="mb-0">
                          <Rate
                            disabled
                            defaultValue={job.congViec.saoCongViec}
                            style={{ fontSize: "15px" }}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-end pb-2">
                    <button
                      className="border-2  py-1 px-4 rounded-md border-pink-400 hover:text-white hover:bg-pink-300 transition-all duration-300 mr-4"
                      onClick={() => navigate(`/jobDetail/${job.congViec.id}`)}
                    >
                      View detail
                    </button>

                    <button
                      className="border-2 py-1 px-4 text-red-500 font-medium rounded-md border-pink-400 hover:bg-pink-300 transition-all duration-300"
                      onClick={() => {
                        dispatch(deleteRentList(job.id));
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoUser;
