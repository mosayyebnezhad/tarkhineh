import { Link } from "react-router-dom";
import Buttons from "../Buttons/buttons";
import Icon from "../Icons/icons";
import Input from "../input/input";
import "./footer.scss"
import { Send, User } from "iconoir-react";




const Footer = () => {
    return (
        <footer className="Mainfooter">
            <div className="shader">
                <div className="split">
                    <h1 className="title deleteinPhoen" >پیام به ترخینه</h1>
                    <form action="" className="deleteinPhoen">
                        <div className="subsplit">
                            <textarea placeholder="پیام شما"></textarea>
                            <Buttons RightIcon={< Send />} type="button" >
                                ارسال پیام
                            </Buttons>
                        </div>
                        <div className="subsplit">
                            <Input title="نام و نام خانوادگی" type="text" size={56} />
                            <Input title="شماره تماس" type="text" />
                            <Input title="آدرس ایمیل" type="email" />
                            <Input title="آدرس ایمیل" type="password" />
                            <Input
                                title="ایمیل"
                                sizew={56}
                                darkmode placeholder="رمز عبور"


                            />
                        </div>
                    </form>
                </div>
                <div className="split">
                    <h1 className="title">شعبه های ترخینه</h1>
                    <div className="items">شعبه اکباتان</div>
                    <div className="items">شعبه چالوس</div>
                    <div className="items">شعبه اقدسیه</div>
                    <div className="items">شعبه ونک</div>
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
        </footer>
    )
}


export default Footer;