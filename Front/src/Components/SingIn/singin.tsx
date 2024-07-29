import { SineWave, Xmark } from "iconoir-react"
import Buttons from "../Buttons/buttons"
import Input from "../input/input"
import "./sining.scss"
import Icon from "../Icons/icons"

const Singin = () => {
    return (
        <div className="Singin">
            <div className="headUp">
                <div className="x">
                    <div className="closee"></div>
                    <Buttons RightIcon={<Xmark />} Style="textBTN" />
                </div>
                <div className="logoCase">
                    <Icon icon="logo" />
                </div>
            </div>
            <p className="line">ورود/ثبت نام</p>
            <span className="UpCap">با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.</span>
            <Input title="شماره همراه" darkmode transparency={"white"} />

            <div className="buttonsw">
                <Buttons size={40}>
                    ثبت نام
                </Buttons>
            </div>
            <span className="UpCap cap">
                ورود و عضویت در ترخینه به منزله قبول قوانین و مقررات است.
            </span>

        </div >
    )
}


export default Singin