
import { NavArrowLeft } from "iconoir-react";
import Buttons from "../../../../Components/Buttons/buttons";
import { ImageGithub } from "../../../../Components/Images/Image";
import "./aboutrestrunt.scss"
import { Diagram, HomeWifi, MenuBoard, User } from "iconsax-react";

const Aboutrestrunt = () => {

    const Data = {
        title: "رستوران‌های زنجیره‌ای ترخینه",
        description: "مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.",
        text1: "کیفیت بالای غذاها",
        text2: "کیفیت بالای غذاها",
        text3: "کیفیت بالای غذاها",
        text4: "کیفیت بالای غذاها"
    }

    let size: 32 | 40 = 40;
    if (window.innerWidth < 1000) {
        size = 32
    }


    return (
        <div className="abouteInhome">
            <div className="shaderAbout">

                <div className="splitter deleteinphone">

                    <div className="containersplt">
                        <div className="gridItem">
                            <div className="logo">
                                <Diagram />
                            </div>
                            <div className="text">{Data.text1}</div>
                        </div>
                        <div className="gridItem">
                            <div className="logo">
                            <User />
                            </div>
                            <div className="text">{Data.text1}</div>
                        </div>
                        <div className="gridItem">
                            <div className="logo">
                            <MenuBoard />
                            </div>
                            <div className="text">{Data.text1}</div>
                        </div>
                        <div className="gridItem">
                            <div className="logo">
                            <HomeWifi />
                            </div>
                            <div className="text">{Data.text1}</div>
                        </div>




                    </div>

                </div>


                <div className="splitter">
                    <h2 className="title">{Data.title}</h2>
                    <p className="description">{Data.description}</p>
                    <Buttons
                        color="white"
                        Style="stroke"
                        size={size}
                        leftIcon={<NavArrowLeft />}
                    >تماس با ما</Buttons>
                </div>

                <div className="splitter deleteindesktop">

                    <div className="containersplt">
                        <div className="gridItem">
                            <div className="logo">
                                <Diagram />
                            </div>
                            <div className="text">{Data.text1}</div>
                        </div>
                        <div className="gridItem">
                            <div className="logo">
                            <User />
                            </div>
                            <div className="text">{Data.text1}</div>
                        </div>
                        <div className="gridItem">
                            <div className="logo">
                            <MenuBoard />
                            </div>
                            <div className="text">{Data.text1}</div>
                        </div>
                        <div className="gridItem">
                            <div className="logo">
                            <HomeWifi />
                            </div>
                            <div className="text">{Data.text1}</div>
                        </div>




                    </div>

                </div>

            </div>
            <ImageGithub className="image" path="image2.jpg" />

        </div>
    )
}
export default Aboutrestrunt;
