import React, { useEffect, useState } from "react";

import "./header.scss"
import { Link, useLocation } from "react-router-dom";
import Icon from "../Icons/icons";
import { URL } from "url";
import Modal from "../modal/modal";





const Header = () => {

    const [Parentshow, setShow] = useState(false)
    const handleClickModal = () => {

        setShow(!Parentshow)

    }
    return (
        <>
            <Modal show={Parentshow} onClose={() => setShow(false)} />
            <header >


                <div className="icons">
                    <button type="button" onClick={handleClickModal}  >
                        <i>
                            <Icon icon="user" />
                        </i>
                    </button>

                    <Link to="/about">
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

                <div className="icons phoneadd">

                    <Link to="/contact">
                        <i className="noi">
                            <Icon icon="menu" />

                        </i>
                    </Link>

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


    return (
        <>
            {haederItems.map((item, index) =>



                <div key={index} >

                    <Link to={haederItemsEnglish[index]}><div className={haederItems[indexloc] === item ? "active item" : "item"}>

                        {index === 4 ? <Icon icon="ArrowDown" /> : null}
                        {index === 5 ? <Icon icon="ArrowDown" /> : null}
                        {item}


                    </div>

                    </Link>
                </div>







            )}



        </>
    )
}



