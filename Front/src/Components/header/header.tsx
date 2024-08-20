import React, { useContext, useEffect, useState } from "react";

import "./header.scss"
import { Link, useLocation } from "react-router-dom";
import Icon from "../Icons/icons";

import Modal from "../modal/modal";
import { appContext } from "../../App";
import { ILogin } from "../../types/Puplictyps";
import { NavArrowDown, User } from "iconoir-react";
import Headerinmobile from './headerinmobile';
import axios from "axios";

const url: string = process.env.REACT_APP_DOMAIN || '';
interface IData {
    name: String,
    id: String
}





const Header = () => {

    const [menu, setMenu] = useState(true);
    const { Login: loding } = useContext(appContext);


    const Login: ILogin = loding;

    const [Parentshow, setShow] = useState(false)
    const handleClickModal = (e: any) => {

        setShow(!Parentshow)

    }



    const handlemenu = () => {
        setMenu(!menu)
    }
    return (
        <>
            <Modal show={Parentshow} onClose={() => setShow(false)} />


            <div className="rightmenu" style={{ marginLeft: menu ? "100%" : "30%" }}>
                <Headerinmobile />
            </div>
            <div className="closemenu" style={{ marginLeft: menu ? "100%" : "0%" }} onClick={() => setMenu(!menu)}></div>
            <header >

                <div className="container">

                    <div className="icons">
                        {!Login.islogin ? <button style={{ cursor: "pointer" }}

                            type="button" onClick={handleClickModal}  >
                            <i>
                                <Icon icon="user" />
                            </i>
                        </button> :
                            <Link to={"/Profile"}
                                style={{ color: "black" }}>


                                <i className="loggedin">
                                    <NavArrowDown color="white" />
                                    <User color="white" />
                                </i>


                            </Link>

                        }

                        <Link to="/Carts">
                            <i>
                                <Icon icon="pay" />
                            </i>
                        </Link >
                        <Link className="phoneDelete" to="/contact">
                            <i>
                                <Icon icon="search" />
                            </i>
                        </Link>

                    </div>
                    <div className="parameters phoneDelete">
                        <Headeritem />
                    </div>
                    <div className="logo">
                        <Icon icon="logo" />

                    </div>

                    <div className="icons menu phoneadd">

                        <button onClick={handlemenu}>
                            <i className="noi">
                                <Icon icon="menu" />

                            </i>
                        </button>

                    </div>
                </div>
            </header>


        </>


    )

}


export default Header;



const haederItems = ["تماس با ما", "درباره ما", "اعطای نمایندگی", "منو", "شعبه", "صفحه اصلی"]
const haederItemsEnglish = ["contact", "aboute", "Deputize", "menu", "Branch", "home"]


const Headeritem = () => {
    const urlpath = useLocation().pathname.replace("/", "");
    const indexloc = haederItemsEnglish.indexOf(urlpath) | 0
    let titles = "رستوران های زنجیره ای ترخینه"
    document.title = haederItems[indexloc] + " | " + titles; // Quick solution



    const [Data, SetData] = useState<IData[]>();
    const [fetchw, fetchDataw] = useState(false);


    useEffect(() => {
        if (window.innerWidth > 1000) {
            if (fetchw) {
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
        }
    }, [fetchw]);





    const { branchName } = useContext(appContext)

    return (
        <>



            {haederItems.map((item, index) =>



                <div key={index} >

                    <Link to={"../" + haederItemsEnglish[index]}><div className={(haederItems[indexloc] === item ? "active item" : "item") + (index === 4 ? " cha4" : "") + (index === 3 ? " cha3" : "")}

                        onMouseEnter={() => {

                            if (haederItemsEnglish[index] === "Branch") fetchDataw(true)
                            // if (haederItemsEnglish[index] === "Branch") console.log(haederItemsEnglish[index])

                        }

                        }

                    >

                        {index === 4 ? <>

                            <div className="clist" >
                                <div className="list">
                                    {Data ? Data.map((item, index) => {
                                        return (
                                            <Link key={index} to={`../branch/${item.id}`}> <div className="title" >{item.name}</div></Link>

                                        )
                                    })
                                        :
                                        <div className="title loading" ></div>
                                    }

                                </div>
                            </div>

                            <Icon icon="ArrowDown" /></> : null}
                        {index === 3 ? <>

                            <div className="clist">
                                <div className="list">
                                    <div className="title">غذای اصلی</div>
                                    <div className="title">پیش غذا</div>
                                    <div className="title">دسر</div>
                                    <div className="title">نوشیدنی</div>


                                </div>
                            </div>

                            <Icon icon="ArrowDown" /></> : null}
                        {/* {item} */}
                        {index === 4 ? branchName : item}




                    </div>

                    </Link >
                </div >







            )}



        </>
    )
}


