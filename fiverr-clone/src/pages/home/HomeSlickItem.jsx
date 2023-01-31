import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import styleSlick from "./Homeslick.module.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block", right: "-20px" }}
      onClick={onClick}
    ></div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-35px" }}
      onClick={onClick}
    ></div>
  );
}
const HomeSlickItem = () => {
  const [video1, setVideo1] = useState(1);
  const [video2, setVideo2] = useState(1);
  const [video3, setVideo3] = useState(1);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="home-slick-item bg-green-50">
      <div className="container px-12 dot">
        <Slider {...settings}>
          <div className="video">
            <div className="lg:grid grid-cols-3 pt-44 pb-6 items1">
              <div className="right col-span-1 pl-6">
                <div className="video-modal">
                  <div
                    className="picture-wrapper"
                    onClick={() => {
                      setVideo1(video1 + 1);
                    }}
                  >
                    <div>
                      <picture>
                        <source
                          media="(min-width: 1160px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg 2x"
                        />
                        <source
                          media="(min-width: 900px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg 2x"
                        />
                        <source
                          media="(min-width: 600px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg 2x"
                        />
                        <source
                          media="(min-width: 361px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg 2x"
                        />
                        <source
                          media="(max-width: 360px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg 2x"
                        />
                        <img
                          alt="Video teaser image"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg"
                          loading="lazy"
                          className="rounded-md"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left col-span-2 2xl:pl-14 xl:pl-14 lg:pl-12 md:pl-10 sm:pl-8 pl-6">
                <div className="text-content pt-12 ">
                  <h5 className="name flex">
                    <span className="name-user">
                      Tim and Dan Joo, Co-Founders
                    </span>
                    <span className="testimonial-logo1 ">
                      <img
                        alt="Company logo"
                        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png"
                        loading="lazy"
                      />
                    </span>
                  </h5>
                  <blockquote className="font-medium">
                    <i>
                      "When you want to create a business bigger than yourself,
                      you need a lot of help. That's what Fiverr does."
                    </i>
                  </blockquote>
                </div>
              </div>
            </div>
            <video
              style={{ display: `${video1 % 2 === 0 ? "block" : "none"}` }}
              className="orca-video"
              controls
              poster="true"
              preload="metadata"
              crossOrigin="anonymous"
            >
              <source
                src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun"
                type="video/mp4"
              />
              <track
                label="EN"
                srcLang="en-US"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Tim and Dan - Haerfest_en-US.a905094.vtt"
                default
                kind="subtitles"
              />
              <track
                label="DE"
                srcLang="de-DE"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Tim and Dan - Haerfest_de-DE.2ccb8bd.vtt"
                kind="subtitles"
              />
              <track
                label="ES"
                srcLang="es"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Tim and Dan - Haerfest_es.ff7aad3.vtt"
                kind="subtitles"
              />
              <track
                label="FR"
                srcLang="fr-FR"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Tim and Dan - Haerfest_fr-FR.b8c4f42.vtt"
                kind="subtitles"
              />
              <track
                label="IT"
                srcLang="it-IT"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Tim and Dan - Haerfest_it-IT.550e5ef.vtt"
                kind="subtitles"
              />
              <track
                label="NL"
                srcLang="nl-NL"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Tim and Dan - Haerfest_nl-NL.8a94092.vtt"
                kind="subtitles"
              />
              <track
                label="PT"
                srcLang="pt-BR"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Tim and Dan - Haerfest_pt-BR.4880d5f.vtt"
                kind="subtitles"
              />
            </video>
          </div>
          <div className="video1">
            <div className="lg:grid grid-cols-3 pt-36 items1">
              <div className="right col-span-1 pl-6">
                <div className="video-modal1">
                  <div
                    className="picture-wrapper1"
                    onClick={() => {
                      setVideo2(video2 + 1);
                    }}
                  >
                    <div>
                      <picture>
                        <source
                          media="(min-width: 1160px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x"
                        />
                        <source
                          media="(min-width: 900px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x"
                        />
                        <source
                          media="(min-width: 600px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x"
                        />
                        <source
                          media="(min-width: 361px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x"
                        />
                        <source
                          media="(max-width: 360px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x"
                        />
                        <img
                          alt="Video teaser image"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg"
                          loading="lazy"
                          className="rounded-md"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left col-span-2 2xl:pl-14 xl:pl-14 lg:pl-12 md:pl-10 sm:pl-8 pl-6">
                <div className="text-content pt-8">
                  <h5 className="name flex">
                    <span className="name-user">Kay Kim, Co-Founder</span>
                    <span className="testimonial-logo font-bold text-2xl pl-2">
                      rooted
                    </span>
                  </h5>
                  <blockquote className="font-medium">
                    <i>
                      "It's extremely exciting that Fiverr has freelancers from
                      all over the world — it broadens the talent pool. One of
                      the best things about Fiverr is that while we're sleeping,
                      someone's working."
                    </i>
                  </blockquote>
                </div>
              </div>
            </div>
            <video
              className="orca-video"
              style={{ display: `${video2 % 2 === 0 ? "block" : "none"}` }}
              controls
              poster="true"
              preload="metadata"
              crossOrigin="anonymous"
            >
              <source
                src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
                type="video/mp4"
              />
              <track
                label="EN"
                srcLang="en-US"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Kim and Olivia - rooted_en-US.c5b4b90.vtt"
                default
                kind="subtitles"
              />
              <track
                label="DE"
                srcLang="de-DE"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Kim and Olivia - rooted_de-DE.1dc40ba.vtt"
                kind="subtitles"
              />
              <track
                label="ES"
                srcLang="es"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Kim and Olivia - rooted_es.f169ad9.vtt"
                kind="subtitles"
              />
              <track
                label="FR"
                srcLang="fr-FR"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Kim and Olivia - rooted_fr-FR.45af1b3.vtt"
                kind="subtitles"
              />
              <track
                label="IT"
                srcLang="it-IT"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Kim and Olivia - rooted_it-IT.36e1c17.vtt"
                kind="subtitles"
              />
              <track
                label="NL"
                srcLang="nl-NL"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Kim and Olivia - rooted_nl-NL.696566f.vtt"
                kind="subtitles"
              />
              <track
                label="PT"
                srcLang="pt-BR"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Kim and Olivia - rooted_pt-BR.c3cb175.vtt"
                kind="subtitles"
              />
            </video>
          </div>
          <div className="video2">
            <div className="lg:grid grid-cols-3 pt-36 pb-32 items1">
              <div className="right col-span-1 pl-6">
                <div className="video-modal2">
                  <div
                    className="picture-wrapper2"
                    onClick={() => {
                      setVideo3(video3 + 1);
                    }}
                  >
                    <div>
                      <picture>
                        <source
                          media="(min-width: 1160px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x"
                        />
                        <source
                          media="(min-width: 900px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x"
                        />
                        <source
                          media="(min-width: 600px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x"
                        />
                        <source
                          media="(min-width: 361px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x"
                        />
                        <source
                          media="(max-width: 360px)"
                          srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x"
                        />
                        <img
                          alt="Video teaser image"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg"
                          loading="lazy"
                          className="rounded-md"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left col-span-2 2xl:pl-14 xl:pl-14 lg:pl-12 md:pl-10 sm:pl-8 pl-6">
                <div className="text-content pt-12">
                  <h5 className="name flex">
                    <span className="name-user">
                      Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                    </span>
                    <span className="testimonial-logo2 ">
                      <img
                        alt="Company logo"
                        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
                        loading="lazy"
                      />
                    </span>
                  </h5>
                  <blockquote className="font-medium">
                    <i>
                      "We used Fiverr for SEO, our logo, website, copy, animated
                      videos — literally everything. It was like working with a
                      human right next to you versus being across the world."
                    </i>
                  </blockquote>
                </div>
              </div>
            </div>
            <video
              className="orca-video"
              style={{ display: `${video3 % 2 === 0 ? "block" : "none"}` }}
              controls
              poster="true"
              preload="metadata"
              crossOrigin="anonymous"
            >
              <source
                src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi"
                type="video/mp4"
              />
              <track
                label="EN"
                srcLang="en-US"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Brighid and Pritma - Lavender_en-US.89febb9.vtt"
                default
                kind="subtitles"
              />
              <track
                label="DE"
                srcLang="de-DE"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Brighid and Pritma - Lavender_de-DE.5d7d59c.vtt"
                kind="subtitles"
              />
              <track
                label="ES"
                srcLang="es"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Brighid and Pritma - Lavender_es.f7d09ef.vtt"
                kind="subtitles"
              />
              <track
                label="FR"
                srcLang="fr-FR"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Brighid and Pritma - Lavender_fr-FR.667920d.vtt"
                kind="subtitles"
              />
              <track
                label="IT"
                srcLang="it-IT"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Brighid and Pritma - Lavender_it-IT.3d42066.vtt"
                kind="subtitles"
              />
              <track
                label="NL"
                srcLang="nl-NL"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Brighid and Pritma - Lavender_nl-NL.4299c1f.vtt"
                kind="subtitles"
              />
              <track
                label="PT"
                srcLang="pt-BR"
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Brighid and Pritma - Lavender_pt-BR.4490446.vtt"
                kind="subtitles"
              />
            </video>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlickItem;
