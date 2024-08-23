
import HorizonLine from "../../Components/horizontleLine/horzonLine";
import { Image, Image2 } from "../../Components/Images/Image";
import "./dep.scss"
import Moshaver from "./PageComponents/daryaftmoshavereh/moshavereh";
import { AlaemComp } from "./PageComponents/main";
import Maziat from "./PageComponents/maziat/maziat";
const Deputize = () => {

    const ImageResource = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const { One, Four, Thre, Two } = AlaemComp()
    return (
        <div>

            <div className="banner">

                <div className="data">
                    <h3>
                        همین الان به خانواده بزرگ ترخینه بپیوندید!
                    </h3>
                </div>
                <Image className="iamge" src={ImageResource} height={'300px'} />

            </div>

            <div className="alaems">
                <One />
                <Two />
                <Thre />
                <Four />
            </div>

            <HorizonLine />
            <div className="titlaas">
                مزیت دریافت نمایندگی
            </div>
            <Maziat />
            <HorizonLine />
            <div className="titlaas">
                دریافت مشاوره
            </div>
            <Moshaver />
            <HorizonLine />
        </div>
    )
}


export default Deputize;

