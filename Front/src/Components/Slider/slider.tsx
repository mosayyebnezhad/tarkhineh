

import "./slider.scss"


import React, { useEffect, useRef } from 'react';
import "./slider.scss";
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageGithub } from "../Images/Image";
import { Pagination } from 'swiper/modules';
import Icon from "../Icons/icons";
import Buttons from '../Buttons/buttons';
import { Link } from "react-router-dom";


const Slider = () => {

    let BTNsize: 32 | 40 | 48 | 56 = 40
    let ImageSize = 336


    if (window.innerWidth < 768) {
        BTNsize = 32
        ImageSize = 240;
    };


    return (

     <div className="sliderMain">
           <Swiper
            pagination={
                {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index: any, className: any,) {
                        return '<span class="' + className + '">  </span>';
                    },
                }
            }
            modules={[Pagination]}
            className="mySwiper"
            spaceBetween={0}
            slidesPerView={1}
        >



            <div className="paginationBase">
                <div className="swiper-pagination base">
                    <div className="swiper-pagination-bullet-active"></div>
                    <div className="swiper-pagination-bullet"></div>
                </div>
                <Icon icon="sliderfelan" />
            </div>


       

        
            <SwiperSlide>
                <div className="shader" >
                    <h1>تجربه غذای سالم و گیاهی به سبک ترخینه</h1>
                    <Link to={ ""}>
                        <Buttons size={BTNsize}>
                            سفارش آنلاین غذا
                        </Buttons>
                    </Link>
                </div>
                <ImageGithub className="sliderImage" width={"100%"} height={`${ImageSize}px`} path="image2.jpg" />
            </SwiperSlide>

            <SwiperSlide>
                <div className="shader" >
                    <h1>تجربه غذای سالم و گیاهی به سبک ترخینه</h1>
                    <Link to={ ""}>
                        <Buttons size={BTNsize}>
                            سفارش آنلاین غذا
                        </Buttons>
                    </Link>
                </div>
                <ImageGithub className="sliderImage" width={"100%"} height={`${ImageSize}px`} path="image2.jpg" />
            </SwiperSlide>

            <SwiperSlide>
                <div className="shader" >
                    <h1>تجربه غذای سالم و گیاهی به سبک ترخینه</h1>
                    <Link to={ ""}>
                        <Buttons size={BTNsize}>
                            سفارش آنلاین غذا
                        </Buttons>
                    </Link>
                </div>
                <ImageGithub className="sliderImage" width={"100%"} height={`${ImageSize}px`} path="image2.jpg" />
            </SwiperSlide>

        </Swiper >
     </div>



    )
}




export default Slider;
