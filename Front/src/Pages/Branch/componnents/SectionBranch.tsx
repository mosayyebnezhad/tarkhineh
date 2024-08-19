
import Food from "../../../Components/Food/food";

import { Swiper, SwiperSlide } from 'swiper/react';




interface ISection {
    food: any[] | undefined
}

const SectionBranch = (prop: ISection) => {

    const { food } = prop


    return (


        <div className="branchswiper">
            <Swiper
              
                
           
                spaceBetween={0}
                // centeredSlides={true}
                dir={"rtl"}
                breakpoints={{
                    // when window width is >= 600px
                    0: {
                        centeredSlides: true,
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 768px
                    1300: {
                        slidesPerView: 4,
                    },
                }}
            >


                {food ?
                    food.map((item, index) => {
                        return (

                            <SwiperSlide key={index}>

                                <Food key={index} name={item.name} price={item.price.priceView} image={item.Image} off={item.price.Off}
                                    rate={item.Rate.rating} ratecount={item.Rate.count} solidPrice={item.price.solidPriceView} title={item.name}
                                    productId={String(item._id)}
                                />

                            </SwiperSlide>
                        )
                    })
                    :

                    <>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <SwiperSlide key={i}>
                                <Food  loading />
                            </SwiperSlide>
                        ))}
                    </>

                }





            </Swiper>
        </div>

    )
}

export default SectionBranch;