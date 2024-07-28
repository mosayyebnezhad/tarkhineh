import { Link } from "react-router-dom"
import "./branch.scss"
import Buttons from "../Buttons/buttons"
import Image from "../Images/Image"

interface Branch {
    Branch: string
    address: string
    link: string
}

const Branch = (prop: Branch) => {
    return (
        <div className="branch-container">
            <div className="image">
                <div className="shader">




                </div>
                {/* <img src="/image2.jpg" alt="hi" /> */}
                <Image path="image2.jpg" BeforTxt="Resturant Branch Image" />
            </div>
            <div className="Detail">
                <h3 className="title">شعبه {prop.Branch}</h3>
                <p className="address">

                    {prop.address}

                </p>


            </div>

            <div className="hiddenbutton">
                <Link to={prop.link}>
                    {/* <Buttons btnStyle="border" color="green" size="small" IconFirst="ArrowLeft" textColor="black" iconHeight={24} IconWidth={16}>
                        شعبه
                    </Buttons> */}

                </Link>
            </div>
        </div>
    )
}

export default Branch;