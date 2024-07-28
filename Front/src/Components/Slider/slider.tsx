import "./slider.scss"
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Buttons from "../Buttons/buttons";
import Image from "../Images/Image";
import { Link } from "react-router-dom";


const Slider = () => {


    return (
        <div className="swipBase">


            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}

                onSwiper={(swiper: any) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

            >
                <div className="pagi">
                    {/* <div className="swiper-pagination-bullet">s</div> */}
                    <svg width="154" height="33" viewBox="0 0 154 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1492 12.9957C15.3255 5.56588 21.9046 0 29.6466 0H125.118C132.571 0 138.998 5.16164 141.261 12.2634C144.25 21.6506 148.867 33 153.711 33C161.97 33 -9.49755 33 0.41389 33C6.07606 33 10.4444 22.2302 13.1492 12.9957Z" fill="white" />
                    </svg>
                </div>
                <SwiperSlide>
                    <div className="simage">
                        <Shader Buttontitle="سفارش دهید" link="/" title="یک ماجراجویی آشپزی برای تمام حواس" />
                        <Image path="image1.jpg" alt="Slide 1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="simage">
                        <Shader Buttontitle="سفارش دهید" link="/" title="یک ماجراجویی آشپزی برای تمام حواس" />

                        <Image path="image2.jpg" alt="Slide 1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="simage">
                        <Shader Buttontitle="سفارش دهید" link="/" title="یک ماجراجویی آشپزی برای تمام حواس" />
                        <Image path="image3.jpg" alt="Slide 1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="simage">
                        <Shader Buttontitle="سفارش دهید" link="/" title="یک ماجراجویی آشپزی برای تمام حواس" />
                        <Image path="image4.jpg" alt="Slide 1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="simage">
                        <Shader Buttontitle="سفارش دهید" link="/" title="یک ماجراجویی آشپزی برای تمام حواس" />
                        <Image path="image2.jpg" alt="Slide 1" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}




export default Slider;

interface IShaderProps {
    title: string
    Buttontitle: string
    link: string

}
const Shader = (prop: IShaderProps) => {
    return (
        <div className="shader">
            <div className="shadercase">
                <h2>{prop.title}</h2>
                <Link to={prop.link}>
                    {/* <Buttons color="green" size="medium" btnStyle="filled" >
                        {prop.Buttontitle}
                    </Buttons> */}
                </Link>
            </div>
        </div>
    )
}
