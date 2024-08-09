import { Link } from "react-router-dom";
import Buttons from '../../../../Components/Buttons/buttons';
import "./resturantmenu.scss"
import { ImageGithub } from "../../../../Components/Images/Image";

const ResturantMenu = () => {

    let size: any = 240;


    if (window.innerWidth < 768) {
        size = 120;
    }


    size = size + "px"
    // <Image path="drink.png" BeforTxt="Enjoy from your" />
    // <Image path="deser.png" BeforTxt="Enjoy from your" />
    // <Image path="befor.png" BeforTxt="Enjoy from your" />
    // <Image path="food.png" BeforTxt="Enjoy from your" />
    return (
        <div className="menuCase">

            <div className="containerInmenu">
                <div className="Backage"></div>
                <ImageGithub className="images" path="food.png" BeforTxt="Enjoy from your" width={size} height={size} />
                <Buttons Style="fill" color="white">
                    پیش غذا
                </Buttons>

            </div>
            <div className="containerInmenu">
                <div className="Backage"></div>
                <ImageGithub className="images" path="food.png" BeforTxt="Enjoy from your" width={size} height={size} />
                <Buttons Style="fill" color="white">
                    پیش غذا
                </Buttons>

            </div>
            <div className="containerInmenu">
                <div className="Backage"></div>
                <ImageGithub className="images" path="food.png" BeforTxt="Enjoy from your" width={size} height={size} />
                <Buttons Style="fill" color="white">
                    پیش غذا
                </Buttons>

            </div>
            <div className="containerInmenu">
                <div className="Backage"></div>
                <ImageGithub className="images" path="food.png" BeforTxt="Enjoy from your" width={size} height={size} />
                <Buttons Style="fill" color="white">
                    پیش غذا
                </Buttons>

            </div>



        </div>
    )
}


export default ResturantMenu;