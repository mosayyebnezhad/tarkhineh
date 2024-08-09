import { Link } from "react-router-dom";
import { ImageGithub } from "../Images/Image";
import "./styleinmobile.scss"
import { Map, NavArrowDown, Star, UserBadgeCheck } from "iconoir-react";
import { useEffect, useState } from "react";
import axios from "axios";
const url: string = process.env.REACT_APP_DOMAIN || '';


interface IItem {

    first?: Boolean,
    second?: Boolean

}

interface IData {
    name: String,
    id: String
}

const Headerinmobile = () => {


    const [Data, SetData] = useState<IData[]>();
    const [menu, setmenu] = useState<IItem>({
        first: false,
        second: false
    })

    useEffect(() => {
        if (menu.first) {
            const fetchData = async () => {
                try {
                    const res = await axios.get(`${url}/branch`);
                    SetData(res.data);
                } catch (error) {
                    console.error("Error fetching data", error);
                }
            };

            fetchData();
        }
    }, [menu.first]);


    // console.log(Data)




    return (
        <div className="containerinphone">


            <ImageGithub path="image2.jpg" />


            <Link to={""}>

                <div className="itemsinphone">
                    <Star />
                    صفحه اصلی</div></Link>




            <div className="itemsinphone" onClick={() => setmenu({ first: !menu.first })}>
                شعبه
                <NavArrowDown style={{ rotate: menu.first ? `180deg` : "0deg", transition: ".15s" }} />
            </div>

            <div className="listmenu"

                style={{ height: menu.first ? `${(Data ? Data.length : 1) * (32 + 15)}px` : "0", marginTop: menu.first ? "0" : "15px" }}
            >
                {Data ?
                    Data.map((item, index) => {
                        return (
                            <Link to={`/branch/${item.id}`} key={index}>
                                <div className="itemsinphone">
                                    <Map />
                                    {item.name}</div>
                            </Link>
                        )
                    })
                    :

                    <div className="itemsinphone loding">

                    </div>

                }


            </div>
            <div className="itemsinphone" onClick={() => setmenu({ second: !menu.second })}>
                منو
                <NavArrowDown style={{ rotate: menu.second ? `180deg` : "0deg", transition: ".15s" }} />
            </div>

            <div className="listmenu"

                style={{ height: menu.second ? `${4 * (32 + 15) + 15}px` : "0", marginTop: menu.second ? "0" : "15px" }}
            >
                <Link to={""}>
                    <div className="itemsinphone">
                        <UserBadgeCheck />
                        غدای اصلی</div>
                </Link>
                <Link to={""}>
                    <div className="itemsinphone">
                        <UserBadgeCheck />
                        دسر</div>
                </Link>
                <Link to={""}>
                    <div className="itemsinphone">
                        <UserBadgeCheck />
                        نوشیدنی</div>
                </Link>
                <Link to={""}>
                    <div className="itemsinphone">
                        <UserBadgeCheck />
                        پیر غذا</div>
                </Link>

            </div>
            <Link to={""}>
                <div className="itemsinphone">
                    اعطای نمایندگی</div></Link>
            <Link to={""}>
                <div className="itemsinphone">
                    درباره ما</div></Link>
            <Link to={""}>
                <div className="itemsinphone">
                    تماس با ما</div></Link>



        </div>
    )
}

export default Headerinmobile;





