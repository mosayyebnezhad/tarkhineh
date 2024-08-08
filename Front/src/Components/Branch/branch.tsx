import { Link } from "react-router-dom"
import "./branch.scss"
import Buttons from "../Buttons/buttons"
import Image from "../Images/Image"
import { NavArrowLeft } from "iconoir-react"
import { PictureFrame } from "iconsax-react"

interface IBranch {
    Branch: string
    address: string
    link: string
    image: string
}

const Branch = (prop: IBranch) => {
    return (
        <div className="branch-container">

            <div className="SHariw">
                <PictureFrame color="white" />
            </div>
            <img src={prop.image} alt="" />

            <div className="Detail">
                <h3 className="title">شعبه {prop.Branch}</h3>
                <p className="address">

                    {prop.address}

                </p>


            </div>

            <div className="hiddenbutton">
                <Link to={prop.link}>
                    <Buttons size={40} color="primery" Style="stroke"
                        leftIcon={<NavArrowLeft />}
                    >
                        صفحه شعبه
                    </Buttons>

                </Link>
            </div>
        </div>
    )
}

export default Branch;