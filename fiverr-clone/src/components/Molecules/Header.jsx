import { Modal } from "antd";
import Search from "antd/lib/input/Search";
import { NavLink, useNavigate } from "react-router-dom";
import { showModal } from "../../pages/Login/Login";
import SubMenuJobList from "./SubMenuJobList";
import Login from "../../pages/Login/Login";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Register from "../../pages/register/Register";
import { useRef } from "react";

export const Header = () => {
  const [nav, setNav] = useState(1);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const onSearch = (data) => {
    navigate(`/jobList/${data}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModalRegister = () => {
    setIsModalOpenRegister(true);
  };
  const handleOkRegister = () => {
    setIsModalOpenRegister(false);
  };
  const handleCancelRegister = () => {
    setIsModalOpenRegister(false);
  };
  let hiddenTagName = "";
  const userLogin = localStorage.getItem("userLogin");
  if (userLogin) {
    hiddenTagName = "hidden absolute";
  }

  const getUserLogin = () => {
    const userLogin = localStorage.getItem("userLogin");
    if (userLogin) {
      hiddenTagName = "hidden absolute";
      return (
        <Div className="flex gap-3 items-center text-base">
          <div className="flex gap-4">
            <span className="text-xl">
              <i className="fa-regular fa-bell"></i>
            </span>
            <span className="text-xl px-2">
              <i className="fa-regular fa-envelope"></i>
            </span>
            <span className="text-xl">
              <i className="fa-regular fa-heart"></i>
            </span>
            <span className="text-xl px-2 font-semibold">Order</span>
          </div>
          <div className="flex flex-cols m-0">
            <div className="items-end down">
              <p
                className="mb-0 tagName text-white flex items-center justify-center cursor-pointer"
                onClick={() =>
                  navigate(`/infoUser/${JSON.parse(userLogin).id}`)
                }
              >
                {JSON.parse(userLogin).name.slice(0, 1).toUpperCase()}
              </p>
              {/* <i class="fa-sharp fa-solid fa-caret-down"></i> */}
              <div className="w-[180px] h-[335px] ml-[-10px] info top-0  text-base shadow-slate-50 text-gray-400 border  bg-white absolute mt-8">
                <div className="relative ribbon cursor-pointer">
                  <div>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p
                        className="mb-0 px-4"
                        onClick={() =>
                          navigate(`/infoUser/${JSON.parse(userLogin).id}`)
                        }
                      >
                        Profile
                      </p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className="mb-0 px-4">Post a Request</p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className="mb-0 px-4">Refer a friend</p>
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className={`mb-0 px-4 `}>Become a Seller</p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className="mb-0 px-4">Settings</p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className="mb-0 px-4 flex">
                        Billing
                        <span className="bg-pink-400 flex items-center  text-white ml-3 leading-none px-2 rounded-[20px]">
                          New
                        </span>
                      </p>
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p className="flex justify-start tagp gap-5  items-center">
                      <p className="mb-0 px-4 flex gap-2">
                        <span>English</span>
                        <span className="flex items-center">
                          <svg
                            width="18"
                            fill="#7A7D85"
                            height="18"
                            viewBox="0 0 18 18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 1C4.58875 1 1 4.58875 1 9C1 13.4113 4.58875 17 9 17C13.4113 17 17 13.4113 17 9C17 4.58875 13.4113 1 9 1ZM8.53125 4.92676C7.81812 4.89612 7.11218 4.7959 6.43811 4.63293C6.54578 4.37781 6.6626 4.13281 6.78857 3.90063C7.30542 2.94824 7.93994 2.27991 8.53125 2.03784V4.92676ZM8.53125 5.86499V8.53125H5.60339C5.64465 7.4906 5.82202 6.45752 6.11536 5.51782C6.8927 5.71362 7.70874 5.83215 8.53125 5.86499ZM8.53125 9.46875V12.135C7.70874 12.1678 6.8927 12.2864 6.11536 12.4822C5.82202 11.5425 5.64465 10.5094 5.60339 9.46875H8.53125ZM8.53125 13.0732V15.9622C7.93994 15.7201 7.30542 15.0518 6.78857 14.0994C6.6626 13.8672 6.54578 13.6222 6.43811 13.3671C7.11218 13.2041 7.81799 13.1039 8.53125 13.0732ZM9.46875 13.0732C10.1819 13.1039 10.8878 13.2041 11.5619 13.3671C11.4542 13.6222 11.3374 13.8672 11.2114 14.0994C10.6946 15.0518 10.0601 15.7201 9.46875 15.9622V13.0732ZM9.46875 12.135V9.46875H12.3966C12.3553 10.5094 12.178 11.5425 11.8846 12.4822C11.1073 12.2864 10.2913 12.1678 9.46875 12.135ZM9.46875 8.53125V5.86499C10.2913 5.83215 11.1073 5.71362 11.8846 5.51782C12.178 6.45752 12.3553 7.4906 12.3966 8.53125H9.46875ZM9.46875 4.92676V2.03784C10.0601 2.27991 10.6946 2.94824 11.2114 3.90063C11.3374 4.13281 11.4542 4.37781 11.5619 4.63293C10.8878 4.7959 10.1819 4.89612 9.46875 4.92676ZM12.0354 3.45349C11.8007 3.02087 11.5457 2.63953 11.2769 2.31421C12.2141 2.63428 13.0631 3.14636 13.7771 3.8031C13.3699 4.02124 12.931 4.21069 12.4694 4.36902C12.3384 4.0509 12.1936 3.74487 12.0354 3.45349ZM5.9646 3.45349C5.8064 3.74487 5.66162 4.0509 5.53064 4.36902C5.06897 4.21069 4.63013 4.02112 4.2229 3.8031C4.93689 3.14636 5.78589 2.63428 6.72314 2.31421C6.45435 2.63953 6.19946 3.02075 5.9646 3.45349ZM5.2135 5.25012C4.89355 6.27368 4.70544 7.38953 4.66492 8.53125H1.95349C2.05383 7.00769 2.63892 5.61438 3.5564 4.50525C4.06555 4.79724 4.62317 5.047 5.2135 5.25012ZM4.66492 9.46875C4.70544 10.6106 4.89355 11.7263 5.2135 12.7499C4.62317 12.953 4.06555 13.2028 3.5564 13.4948C2.63892 12.3856 2.05383 10.9923 1.95349 9.46875H4.66492ZM5.53064 13.631C5.66162 13.9491 5.8064 14.2551 5.9646 14.5465C6.19946 14.9791 6.45435 15.3605 6.72314 15.6858C5.78589 15.3657 4.93689 14.8536 4.22302 14.1969C4.63 13.9789 5.06897 13.7893 5.53064 13.631ZM12.0354 14.5465C12.1936 14.2551 12.3384 13.9491 12.4694 13.631C12.931 13.7893 13.3699 13.9789 13.7771 14.1969C13.0631 14.8536 12.2141 15.3657 11.2769 15.6858C11.5457 15.3605 11.8005 14.9792 12.0354 14.5465ZM12.7865 12.7499C13.1064 11.7263 13.2946 10.6105 13.3351 9.46875H16.0465C15.9462 10.9923 15.3611 12.3856 14.4436 13.4948C13.9344 13.2028 13.3768 12.953 12.7865 12.7499ZM13.3351 8.53125C13.2946 7.3894 13.1064 6.27368 12.7865 5.25012C13.3768 5.047 13.9344 4.79724 14.4436 4.50525C15.3611 5.61438 15.9462 7.00769 16.0465 8.53125H13.3351Z"
                              strokeWidth="0.2"
                            ></path>
                          </svg>
                        </span>
                      </p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className="mb-0 px-4">$ USD</p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className="mb-0 px-4">Help & Support</p>
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p
                        className="mb-0 px-4"
                        onClick={() => {
                          navigate("");
                          if (localStorage.getItem("userLogin")) {
                            localStorage.removeItem("userLogin");
                            setUser(!user);
                          }
                        }}
                      >
                        Log out
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Div>
      );
    }
  };
  return (
    <header className="bg-transparent text-black  w-full z-10 backgroundcheck header-section">
      <div className="px-10 max-w-7xl  w-full flex justify-between h-20 mx-auto">
        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center pb-1 text-3xl font-bold text-black"
        >
          Fiverr
        </NavLink>
        <div
          ref={searchRef}
          className="w-[770px] ml-4 font-semibold rounded header-section py-6"
        >
          <Search
            placeholder="What services are you looking for today?"
            onSearch={onSearch}
            enterButton
            allowClear
            className="inputcheck"
            style={{ display: "none" }}
          />
        </div>
        <div className="flex">
          <ul className="items-stretch hidden  lg:flex ">
            <li className={`flex ${hiddenTagName}`}>
              <NavLink
                className="flex items-center px-4 -mb-3 text-black font-medium hover:text-black"
                to="/"
              >
                Become a Seller
              </NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <div className="self-center px-5 py-3 rounded text-gray-500 ">
              {localStorage.getItem("userLogin") ? (
                getUserLogin()
              ) : (
                <span
                  style={{ cursor: "pointer" }}
                  className=" mb-0 text-black font-semibold text-base"
                  onClick={showModal}
                >
                  Sign in
                </span>
              )}
            </div>
            <div>
              <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width="400px"
              >
                <Login />
              </Modal>
            </div>
            <div>
              <Modal
                open={isModalOpenRegister}
                onOk={handleOkRegister}
                onCancel={handleCancelRegister}
                footer={null}
                width="600px"
              >
                <Register />
              </Modal>
            </div>
            <button
              className={`hover:text-white ${hiddenTagName}  hover:bg-green-500 transition-all hover:border-transparent duration-500 text-green-500 font-bold border-green-300 rounded-md border-2 px-5 py-1`}
              onClick={() => {
                showModalRegister();
              }}
            >
              Join
            </button>
          </div>
        </div>

        <button
          className="p-4 lg:hidden"
          onClick={() => {
            setNav(nav + 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div style={{ display: `${nav % 2 === 0 ? "block" : "none"}` }}>
        <div className="lg:hidden">
          <div className="flex justify-center">
            <div className="pt-4 text-center">
              <div>
                <ul>
                  <li>
                    <NavLink
                      onClick={() => {
                        setNav(nav + 1);
                      }}
                      className=" text-black font-medium hover:text-white"
                      style={{ fontSize: "16px" }}
                      to="/"
                    >
                      Become a Seller
                    </NavLink>
                  </li>
                </ul>
                <div>
                  <div className=" px-8 py-3 rounded text-black font-medium">
                    {localStorage.getItem("userLogin") ? (
                      <Div className="flex gap-3 items-center text-base">
                        <div className="flex gap-4">
                          <span className="text-xl">
                            <i
                              className="fa-regular fa-bell"
                              onClick={() => {
                                setNav(nav + 1);
                              }}
                            ></i>
                          </span>
                          <span className="text-xl px-2">
                            <i
                              className="fa-regular fa-envelope"
                              onClick={() => {
                                setNav(nav + 1);
                              }}
                            ></i>
                          </span>
                          <span className="text-xl">
                            <i
                              className="fa-regular fa-heart"
                              onClick={() => {
                                setNav(nav + 1);
                              }}
                            ></i>
                          </span>
                          <span
                            className="text-xl px-2"
                            onClick={() => {
                              setNav(nav + 1);
                            }}
                          >
                            Order
                          </span>
                        </div>
                        <div className="flex flex-cols m-0">
                          <div className="items-end down">
                            <p
                              className="mb-0 tagName "
                              onClick={() => {
                                setNav(nav + 1);
                                navigate(
                                  `/infoUser/${JSON.parse(userLogin).id}`
                                );
                              }}
                            >
                              {JSON.parse(userLogin)
                                .name.slice(0, 1)
                                .toUpperCase()}
                            </p>
                            <div className="w-[180px] h-[335px] ml-[-10px] info top-0  text-base shadow-slate-50 text-gray-400 border  bg-white absolute mt-8">
                              <div className="relative ribbon">
                                <div>
                                  <p
                                    className="flex justify-start tagp gap-5 mt-4 items-center "
                                    style={{ position: "relative " }}
                                  >
                                    <p
                                      className="mb-0 px-4 "
                                      onClick={() => {
                                        setNav(nav + 1);
                                        navigate(
                                          `/infoUser/${
                                            JSON.parse(userLogin).id
                                          }`
                                        );
                                      }}
                                    >
                                      Profile
                                    </p>
                                  </p>
                                  <p className="flex justify-start tagp gap-5 mt-2 items-center">
                                    <p
                                      className="mb-0 px-4"
                                      onClick={() => {
                                        setNav(nav + 1);
                                      }}
                                    >
                                      Post a Request
                                    </p>
                                  </p>
                                  <p className="flex justify-start tagp gap-5 mt-2 items-center">
                                    <p
                                      className="mb-0 px-4"
                                      onClick={() => {
                                        setNav(nav + 1);
                                      }}
                                    >
                                      Refer a friend
                                    </p>
                                  </p>
                                </div>
                                <hr />
                                <div>
                                  <p className="flex justify-start tagp gap-5 mt-2 items-center">
                                    <p
                                      className="mb-0 px-4"
                                      onClick={() => {
                                        setNav(nav + 1);
                                      }}
                                    >
                                      Become a Seller
                                    </p>
                                  </p>
                                  <p className="flex justify-start tagp gap-5 mt-2 items-center">
                                    <p
                                      className="mb-0 px-4"
                                      onClick={() => {
                                        setNav(nav + 1);
                                      }}
                                    >
                                      Settings
                                    </p>
                                  </p>
                                  <p className="flex justify-start tagp gap-5 mt-2 items-center">
                                    <p
                                      className="mb-0 px-4"
                                      onClick={() => {
                                        setNav(nav + 1);
                                      }}
                                    >
                                      Billing
                                    </p>
                                  </p>
                                </div>
                                <hr />
                                <div>
                                  <p className="flex justify-start tagp gap-5 mt-2 items-center">
                                    <p
                                      className="mb-0 px-4"
                                      onClick={() => {
                                        setNav(nav + 1);
                                      }}
                                    >
                                      English
                                    </p>
                                  </p>
                                  <p className="flex justify-start tagp gap-5 mt-2 items-center">
                                    <p
                                      className="mb-0 px-4"
                                      onClick={() => {
                                        setNav(nav + 1);
                                      }}
                                    >
                                      $ USD
                                    </p>
                                  </p>
                                  <p className="flex justify-start tagp gap-5 mt-2 items-center">
                                    <p
                                      className="mb-0 px-4"
                                      onClick={() => {
                                        setNav(nav + 1);
                                      }}
                                    >
                                      Help & Support
                                    </p>
                                  </p>
                                </div>
                                <hr />
                                <div>
                                  <p className="flex justify-start tagp gap-5 mt-2 items-center">
                                    <p
                                      className="mb-0 px-4"
                                      onClick={() => {
                                        setNav(nav + 1);
                                        navigate("");
                                        if (localStorage.getItem("userLogin")) {
                                          localStorage.removeItem("userLogin");
                                          setUser(!user);
                                        }
                                      }}
                                    >
                                      Log out
                                    </p>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Div>
                    ) : (
                      <p className=" mb-0" onClick={showModal}>
                        Sign in
                      </p>
                    )}
                  </div>
                  <div>
                    <Modal
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      footer={null}
                      width="400px"
                    >
                      <Login />
                    </Modal>
                  </div>
                  <div>
                    <Modal
                      open={isModalOpenRegister}
                      onOk={handleOkRegister}
                      onCancel={handleCancelRegister}
                      footer={null}
                      width="600px"
                    >
                      <Register />
                    </Modal>
                  </div>
                  <button
                    className={`hover:text-white ${hiddenTagName}  hover:bg-green-500 transition-all hover:border-transparent duration-500 text-green-500 font-bold border-green-300 rounded-md border-2 px-5 py-1`}
                    onClick={() => {
                      showModalRegister();
                    }}
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className=" text-center header-submenu">
        <SubMenuJobList />
      </div>
    </header>
  );
};

const Div = styled.div`
  .down {
    position: relative;
    z-index: 10;
    /* top: 100%; */
  }
  .down:hover .info {
    display: block;
  }
  .info {
    position: absolute;
    display: none;
    right: -25px;
    top: 25px;
    z-index: 10;
  }
  .ribbon::before {
    content: "";
    position: absolute;
    top: -14px;
    right: 12px;

    width: 15px;
    height: 15px;
    transform: rotate(45deg);
    background-color: white;
    z-index: 2;
    border-top: 1px solid #e5e7eb;
    border-left: 1px solid #e5e7eb;
    z-index: 0;
  }
  .ribbon::after {
    content: "";
    position: absolute;
    top: -36px;
    width: 100%;
    height: 30px;
    left: 0;
    right: 0;
    display: block;
    background-color: transparent;
  }
  .tagp:hover {
    background-color: #20549526;
  }
  .tagp {
    margin-top: 6px;
    margin-bottom: 6px;
  }
  .tagp:first-of-type {
    position: relative;
  }
  .tagName {
    /* width: 40px;
    height: 40px; */
    position: relative;
    /* padding: 10px 15px; */
    height: 40px;
    width: 40px;
    padding: 10px;
    background-color: pink;
    border-radius: 50%;
    margin-right: -25px;
    font-size: 20px;
    &::after {
      content: "";
      bottom: 5px;
      right: 2px;
      display: block;
      position: absolute;
      background-color: #1dbf73;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      box-shadow: 0 0 0 2px white;
    }
  }
`;
