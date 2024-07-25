import { Link } from "react-router-dom";
import Buttons from "../../../../Components/Buttons/buttons";
import "./resturantmenu.scss"

const ResturantMenu = () => {
    return (
        <div className="resturantMenu">

            <div className="subcountainer">
                <div className="countainerElement">
                    <img src="./drink.png" alt="Menu" />
                    <div className="card">
                        <div className="flowing">
                            <Link to={""} className="linkBoxShadow">
                                <Buttons btnStyle="filled" color="white" size="medium" textColor="black">
                                    نوشیدنی
                                </Buttons>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="countainerElement">
                    <img src="./deser.png" alt="Menu" />
                    <div className="card">
                        <div className="flowing">
                            <Link to={""} className="linkBoxShadow">
                                <Buttons btnStyle="filled" color="white" size="medium" textColor="black">
                                    دسر
                                </Buttons>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="countainerElement">
                    <img src="./befor.png" alt="Menu" />
                    <div className="card">
                        <div className="flowing">
                            <Link to={""} className="linkBoxShadow">
                                <Buttons btnStyle="filled" color="white" size="medium" textColor="black">
                                    پیش غذا
                                </Buttons>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="countainerElement">
                    <img src="./food.png" alt="Menu" />
                    <div className="card">
                        <div className="flowing">
                            <Link to={""} className="linkBoxShadow">
                                <Buttons btnStyle="filled" color="white" size="medium" textColor="black">
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