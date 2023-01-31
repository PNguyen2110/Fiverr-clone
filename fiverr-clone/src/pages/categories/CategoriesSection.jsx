import React from 'react'
import Slider from "react-slick";
import styleSlick from "../home/Homeslick.module.css";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick["slick-next"]}`}
            style={{ ...style, display: "block", right: '20px',top:'-35px' }}
            onClick={onClick}
        ></div>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick["slick-prev"]}`}
            style={{ ...style, display: "block", left: '1280px',top:'-35px'}}
            onClick={onClick}
        ></div>
    );
}
const CategoriesSection = () => {
    const settings = {
        className: "slider variable-width",
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                centerMode: true,
                slidesToShow: 3,
                slidesPerRow: 2,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                centerMode: true,
                slidesToShow: 2,
                slidesPerRow: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesPerRow: 1,
              },
            },
          ],
    };
    return (
        <div className='pt-14 categorie-section bg-green-50'>
            <div className='container'>

                <h2 className='text-3xl font-bold pb-9'>Most Popular in Digital Marketing</h2>
                <Slider {...settings}>
                    <div className='item itemCheck'  style={{ width: '165px' }}>
                        <a href="#" className="flex justify-start items-center px-2 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278710/SEO_2x.png" alt="SEO" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>SEO</span>
                            <span className='svgcheck' aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  px-6'  style={{ width: '378px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278701/Social%20Media%20Marketing_2x.png" alt="Social Media Marketing" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>Social Media Marketing </span>
                            <span  className='svgcheck'  aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg  width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  pr-6'  style={{ width: '298px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278703/Video%20Marketing_2x.png" alt="Video Marketing" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>Video Marketing</span>
                            <span  className='svgcheck'  aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  pr-6'  style={{ width: '301px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278721/Music%20Promotion_2x.png" alt="Music Promotion" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>Music Promotion</span>
                            <span  className='svgcheck'  aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  pr-6'  style={{ width: '364px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278720/Social%20Media%20Advertising_2x.png" alt="Social Media Advertising" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>Social Media Advertising</span>
                            <span  className='svgcheck' aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  pr-6'  style={{ width: '310px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278721/Music%20Promotion_2x.png" alt="Music Promotion" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>Music Promotion</span>
                            <span  className='svgcheck' aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  pr-6'  style={{ width: '355px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278707/E-Commerce%20Marketing_2x.png" alt="E-Commerce Marketing" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>E-Commerce Marketing</span>
                            <span  className='svgcheck' aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  pr-6'  style={{ width: '295px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278711/Email%20Marketing_2x.png" alt="Email Marketing" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>Email Marketing</span>
                            <span  className='svgcheck' aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  itemCheck1 pr-6'  style={{ width: '295px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278716/SEM_2x.png" alt="SEM" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>SEM</span>
                            <span  className='svgcheck' aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item itemCheck'  style={{ width: '165px' }}>
                        <a href="#" className="flex justify-start items-center px-2 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278710/SEO_2x.png" alt="SEO" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>SEO</span>
                            <span className='svgcheck' aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  px-6'  style={{ width: '378px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278701/Social%20Media%20Marketing_2x.png" alt="Social Media Marketing" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>Social Media Marketing </span>
                            <span  className='svgcheck'  aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg  width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  pr-6'  style={{ width: '298px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278703/Video%20Marketing_2x.png" alt="Video Marketing" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>Video Marketing</span>
                            <span  className='svgcheck'  aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  pr-6'  style={{ width: '301px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278721/Music%20Promotion_2x.png" alt="Music Promotion" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>Music Promotion</span>
                            <span  className='svgcheck'  aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  pr-6'  style={{ width: '364px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278720/Social%20Media%20Advertising_2x.png" alt="Social Media Advertising" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>Social Media Advertising</span>
                            <span  className='svgcheck' aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  pr-6'  style={{ width: '310px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278721/Music%20Promotion_2x.png" alt="Music Promotion" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>Music Promotion</span>
                            <span  className='svgcheck' aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  pr-6'  style={{ width: '355px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278707/E-Commerce%20Marketing_2x.png" alt="E-Commerce Marketing" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>E-Commerce Marketing</span>
                            <span  className='svgcheck' aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item  pr-6'  style={{ width: '295px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278711/Email%20Marketing_2x.png" alt="Email Marketing" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>Email Marketing</span>
                            <span  className='svgcheck' aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                    <div className='item itemCheck1 pr-6'  style={{ width: '295px' }}>
                        <a href="#" className="flex justify-start items-center px-4 py-2 shadow-lg shadow-gray-00 ">
                            <img className="" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278716/SEM_2x.png" alt="SEM" style={{width:'65px'}} />
                            <span className="pl-4 pr-2 text-black font-medium " style={{fontSize:'18px'}}>SEM</span>
                            <span  className='svgcheck' aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                                </svg>
                            </span>
                        </a>

                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default CategoriesSection