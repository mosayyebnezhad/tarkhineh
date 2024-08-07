import { Link } from "react-router-dom";
import Buttons from "../../../../Components/Buttons/buttons";
import "./resturantmenu.scss"
import Image from "../../../../Components/Images/Image";

const ResturantMenu = () => {
    return (
        <div className="resturantMenu">

            <div className="subcountainer">
                <div className="countainerElement">
                    <Image path="drink.png" BeforTxt="Enjoy from your" />
                    <div className="card">
                        <div className="flowing">
                            <Link to={""} className="linkBoxShadow">
                                <Buttons >
                                    نوشیدنی
                                </Buttons>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="countainerElement">

                    <Image path="deser.png" BeforTxt="Enjoy from your" />
                    <div className="card">
                        <div className="flowing">
                            <Link to={""} className="linkBoxShadow">
                                <Buttons >
                                    دسر
                                </Buttons>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="countainerElement">

                    <Image path="befor.png" BeforTxt="Enjoy from your" />
                    <div className="card">
                        <div className="flowing">
                            <Link to={""} className="linkBoxShadow">
                                <Buttons>
                                    پیش غذا
                                </Buttons>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="countainerElement">
                    <Image path="food.png" BeforTxt="Enjoy from your" />
                    <div className="card">
                        <div className="flowing">
                            <Link to={""} className="linkBoxShadow">
                                <Buttons >
                                    غذای اصلی
                                </Buttons>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ResturantMenu;