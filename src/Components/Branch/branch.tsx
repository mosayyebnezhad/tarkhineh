import { Link } from "react-router-dom"
import "./branch.scss"
import Buttons from "../Buttons/buttons"

interface Branch {
    Device: "Desktop" | "Mobile"
    Size: "small" | "large"
}

const Branch = (prop: Branch) => {
    return (
        <div className="branch-container">
            <div className="image">
                <div className="shader">




                </div>
                <img src="/image2.jpg" alt="hi" />
            </div>
            <div className="Detail">
                <h3 className="title">شعبه اکباتان</h3>
                <p className="address">

                    شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم


                </p>


            </div>

            <div className="hiddenbutton">
                <Link to={"./"}>
                    <Buttons btnStyle="border" color="green" size="small" IconFirst="ArrowLeft"  textColor="black" iconHeight={24} IconWidth={16}>
                        شعبه
                    </Buttons>

                </Link>
            </div>
        </div>
    )
}

export default Branch;