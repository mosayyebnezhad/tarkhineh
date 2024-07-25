import "./slider.scss"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Buttons from "../Buttons/buttons";


const Slider = () => {


    return (
        <div className="swipBase">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper: any) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

            >

                <SwiperSlide>
                    <div className="simage">
                        <div className="shader">
                            <div className="shadercase">
                                <h2>یک ماجراجویی آشپزی برای تمام حواس</h2>
                                <Buttons color="green" size="medium" btnStyle="filled" >
                                    سفارش دهید
                                </Buttons>
                            </div>
                        </div>
                        <img src="/image.png" alt="Slide 1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="simage">
                        <div className="shader"></div>
                        <img src="/image.png" alt="Slide 1" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}




export default Slider;



