import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { editImg, searchWork, useCongViec } from "../../../storeToolKit/CongViec";
import { useState } from "react";
import { useEffect } from "react";
const EditImg = (props) => {
    const imgEdit = JSON.parse(localStorage.getItem("imgEdit"))
    const dispatch = useDispatch();
    const {
        handleSubmit,
    } = useForm({
        mode: "onBlur",
    });
    const { id } = imgEdit
    const { isFetchingEditImg } = useCongViec()
    const [modle, setmodle] = useState("none");
    useEffect(() => {
        window.onclick = function () {
            setmodle("none");
            if (localStorage.getItem('jobNameSearch')) {
                dispatch(searchWork(JSON.parse(localStorage.getItem('jobNameSearch'))))
            }
        }
    }, [isFetchingEditImg])
    const [image, setImage] = useState(null)
    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            setImage1((event.target.files[0].name));
            setImage2((event.target.files[0]));
        }
    }
    return (
        <Div>
            <form
                onSubmit={handleSubmit(() => {
                    if (isFetchingEditImg) {
                        setmodle("block");
                    }
                    let formData = new FormData()
                    formData.append('formFile', image2, image1)
                    // dispatch(editImg(formData));
                    dispatch(editImg({ formData, id: id }));
                })}
                className="flex flex-col  p-6 "
            >
                <h1 className="text-2xl text-black mb-3 font-bold mx-auto">Edit Image</h1>
                <div className="grid grid-cols-2 gap-8 mt-2">
                    <div className="itemRight">
                        <div className=" flex w-full">
                            <div className="w-full">
                                <input
                                    required
                                    accept="image/jpeg,image/png,image/gif"
                                    onChange={onImageChange}
                                    className="p-2  w-full"
                                    type="file"
                                    placeholder="Enter Your file"
                                />
                            </div>
                        </div>
                        <br />
                        <img style={{ width: 80 }} src={image} alt="..." />
                    </div>
                </div>
                <div className="w-full mt-5">
                    <button
                        className="bg-pink-500 py-2 text-white w-full rounded-lg text-2xl hover:bg-pink-600"
                    >
                        Edit
                    </button>
                </div>


            </form>
            <div
                className="w-full absolute"
                style={{
                    top: "-20%",
                    zIndex: "100",
                    right: "-0%",
                    display: `${modle}`,
                }}
            >
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className=" flex flex-shrink-0 items-center justify-between px-2 pt-1 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-pink-700">
                                Edit Img
                            </h5>
                            <button
                                type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div
                            className="text-center relative px-2 py-1 text-green-500 "
                            style={{ fontSize: "18px" }}
                        >
                            Success
                        </div>
                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end px-4 py-1 border-t border-gray-200 rounded-b-md">
                            <button
                                type="button"
                                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                onClick={() => {
                                    setmodle("none");
                                    props.cancelEditImg()
                                    if (localStorage.getItem('jobNameSearch')) {
                                        dispatch(searchWork(JSON.parse(localStorage.getItem('jobNameSearch'))))
                                    }
                                }}
                            >
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    );
};
export const Div = styled.div`
  background-color: #bfc7fe;
  .selectType {
    position: relative;
    outline: none;
    border-bottom: 1px solid #ec4899;
  }
  .selectType::after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid pink;
    border-color: pink transparent transparent transparent;
  }

  .item {
    margin-bottom: 5px;
    font-size: 20px;
    width: 30px;
    margin-right: 5px;
    color: #ffffff61;
  }
  input {
    position: relative;
    border-bottom: 1px solid #ec4899;
    transition: all 0.5s;
    background-color: transparent;

    &:focus {
      border-bottom: 1px solid #60a5fa;
      box-shadow: none;
      outline: none;
    }
  }
`;
export default EditImg;
