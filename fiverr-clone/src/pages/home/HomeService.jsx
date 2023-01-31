import React from 'react'
import Slider from "react-slick";
import styleSlick from "./Homeslick.module.css";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick["slick-next"]}`}
        style={{ ...style, display: "block",right:'-20px' }}
        onClick={onClick}
      ></div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick["slick-prev"]}`}
        style={{ ...style, display: "block",left:'-35px' }}
        onClick={onClick}
      ></div>
    );
  }
  
const HomeService = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                centerMode: true,
                slidesToShow: 4,
                slidesPerRow: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                centerMode: true,
                slidesToShow: 3,
                slidesPerRow: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                slidesToShow: 2,
                slidesPerRow: 1,
              },
            },
          ],
    };
    return (
        <div className='home-service 2xl:pt-16 xl:pt-16 lg:pt-12 md:pt-9 sm:pt-6 pt-4 container pb-24'>
            <h2 className='pb-4 font-bold title' style={{fontSize:'30px'}}>Popular professional services</h2>
            <div className='px-8'>
                <div>
                    <Slider {...settings}>
                        <div>
                            <h3 className='content'>
                                <p style={{ fontSize: '18px', marginBottom: '5px' }} >Build your brand</p>
                                <b className='text-2xl'>Logo Design</b>
                            </h3>
                            <img alt="Logo Design" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"></img>
                        </div>
                        <div>
                            <h3 className='content'>
                                <p style={{ fontSize: '18px', marginBottom: '5px' }} >Customize your site</p>
                                <b className='text-2xl'>WordPress</b>
                            </h3>

                            <img alt="WordPress" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png" />

                        </div>
                        <div>
                            <h3 className='content'>
                            <p style={{ fontSize: '18px', marginBottom: '5px' }} >Share your message</p>
                                <b className='text-2xl'>Voice Over</b>
                            </h3>
                            <img alt="Voice Over" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"></img>
                        </div>
                        <div>
                            <h3 className='content'>
                            <p style={{ fontSize: '18px', marginBottom: '5px' }} >Engage your audience</p>
                                <b className='text-2xl'>Video Explainer</b>
                            </h3>
                            <img alt="Video Explainer" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"></img>
                        </div>
                        <div>
                            <h3 className='content'>
                            <p style={{ fontSize: '18px', marginBottom: '5px' }} >Reach more customers</p>
                                <b className='text-2xl'>Social Media</b>
                            </h3>
                            <img alt="Social Media" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"></img>
                        </div>
                        <div>
                            <h3 className='content'>
                                <p style={{ fontSize: '18px', marginBottom: '5px' }} >Build your brand</p>
                                <b className='text-2xl'>Logo Design</b>
                            </h3>
                            <img alt="Logo Design" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"></img>
                        </div>
                        <div>
                            <h3 className='content'>
                                <p style={{ fontSize: '18px', marginBottom: '5px' }} >Customize your site</p>
                                <b className='text-2xl'>WordPress</b>
                            </h3>

                            <img alt="WordPress" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png" />

                        </div>
                        <div>
                            <h3 className='content'>
                            <p style={{ fontSize: '18px', marginBottom: '5px' }} >Share your message</p>
                                <b className='text-2xl'>Voice Over</b>
                            </h3>
                            <img alt="Voice Over" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"></img>
                        </div>
                        <div>
                            <h3 className='content'>
                            <p style={{ fontSize: '18px', marginBottom: '5px' }} >Engage your audience</p>
                                <b className='text-2xl'>Video Explainer</b>
                            </h3>
                            <img alt="Video Explainer" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"></img>
                        </div>
                        <div>
                            <h3 className='content'>
                            <p style={{ fontSize: '18px', marginBottom: '5px' }} >Reach more customers</p>
                                <b className='text-2xl'>Social Media</b>
                            </h3>
                            <img alt="Social Media" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"></img>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default HomeService