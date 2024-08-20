import { ShoppingCart, TickSquare, Wallet2 } from "iconsax-react"
import "./level.scss"

interface Iprop {
    mainLevel?: 1 | 2 | 3,
    subLevel?: 1 | 2 | 3
}

const Level = (prop: Iprop) => {
    const { mainLevel = 1, subLevel = 1 } = prop;



    let lineFill = {
        first: {
            first: false,
            second: false,
        },
        second: {
            first: false,
            second: false,
        }
    }


    if (mainLevel === 1) {
        if (subLevel === 1) {

        }
        else if (subLevel === 2) {
            lineFill.first.first = true;
        }
        else if (subLevel === 3) {
            lineFill.first.first = true;
            lineFill.first.second = true;
        }
    } else if (mainLevel === 2) {
        if (subLevel === 1) {
            lineFill.first.first = true;
            lineFill.first.second = true;
        }
        else if (subLevel === 2) {
            lineFill.first.first = true;
            lineFill.first.second = true;

            lineFill.second.first = true;

        }
        else if (subLevel === 3) {
            lineFill.second.first = true;
            lineFill.second.second = true;
        }
    }
    else if (mainLevel === 3) {
        lineFill.first.first = true;
        lineFill.first.second = true;
        lineFill.second.first = true;
        lineFill.second.second = true;

    }



    return (
        <div className="MainContainer">
            <div className="line"></div>
            <div className="case">
                <div className={`PlaceC ${mainLevel >= 1 && "ActivePlace"}`}>
                    <ShoppingCart />

                    سبد خرید
                </div>
                <div className="casing">
                    <div className={`linBord ${lineFill.first.first && "activeBorder"}`}></div>
                    <div className={`linBord ${lineFill.first.second && "activeBorder"}`}></div>
                </div>
                <div className={`PlaceC ${mainLevel >= 2 && "ActivePlace"}`}>
                    <TickSquare />

                    تکمیل اطلاعات
                </div>
                <div className="casing">
                    <div className={`linBord ${lineFill.second.first && "activeBorder"}`}></div>
                    <div className={`linBord ${lineFill.second.second && "activeBorder"}`}></div>
                </div>

                <div className={`PlaceC ${mainLevel === 3 && "ActivePlace"}`}>
                    <Wallet2 />

                    پرداخت
                </div>
            </div>
        </div>
    )
}

export default Level;
