import { Link } from "react-router-dom";
import Buttons from "../Buttons/buttons";
import Icon from "../Icons/icons";
import Input from "../input/input";
import "./footer.scss"
import { Send, User } from "iconoir-react";
import { useState } from "react";




const Footer = () => {

    const [text, setText] = useState(0)


    const handlearea = (e: any) => {

        let numbers = String(e.target.value).length



        setText(numbers)
    }


    return (
        <footer className="Mainfooter">
            <div className="shaderInfooter">
                <div className="safeArae">
                    <div className="split">
                        <h1 className="title deleteinPhoen" >پیام به ترخینه</h1>
                        <form action="" className="deleteinPhoen">
                            <div className="subsplit">
                                <textarea maxLength={200} className="aefhn" onInput={handlearea} placeholder="پیام شما"

                                    // rows="2" cols="20" wrap="hard"
                                    rows={2}
                                    cols={2}
                                // wrap="hard"


                                ></textarea>

                                <p className="counter">{text}/200</p>

                                <Buttons RightIcon={< Send />} type="button" >
                                    ارسال پیام
                                </Buttons>
                            </div>
                            <div className="subsplit">

                                <Input title="نام و نام خانوادگی" sizew={40} />
                                <Input title="شماره تماس" sizew={40} />

                                <Input title="ایمیل" sizew={40} />
                            </div>
                        </form>
                    </div>
                    <div className="split">
                        <h1 className="title">شعبه های ترخینه</h1>
                        <div className="items">شعبه اکباتان</div>
                        <div className="items">شعبه چالوس</div>
                        <div className="items">شعبه اقدسیه</div>
                        <Link to={""}>
                            <div className="items">شعبه ونک</div>
                        </Link>
                    </div>
                    <div className="split" >
                        <h1 className="title">دسترسی آسان</h1>

                        <div className="items">پرسش های متداول</div>
                        <div className="items">قوانین ترخینه</div>
                        <div className="items">حریم خصوصی</div>
                        <div className="items">
                            <Link to={""}><Icon icon="Instagram" /></Link>
                            <Link className="aefuhaief" to={""}><Icon icon="X" /></Link>
                            <Link to={""}> <Icon icon="Telegram" /></Link>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;