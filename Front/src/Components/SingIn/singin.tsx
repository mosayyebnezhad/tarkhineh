import { ArrowUp, SineWave, Xmark } from "iconoir-react"
import Buttons from "../Buttons/buttons"
import Input from "../input/input"
import "./sining.scss"
import Icon from "../Icons/icons"
import { useState } from "react"
import axios from "axios"



const Singin = () => {


    const [next, setNext] = useState(0)
    const [phoneValidation, Setvalidation] = useState(false)
    const [phoneNumber, SetPhoneNumber] = useState("")
    const [codeValidation, setcodeValidation] = useState(false)


    const btnHandle = () => {

        setNext(next + 1)
        // alert("btn clicked")
    }
    const cameback = () => {

        setNext(next - 1)
        // alert("btn clicked")
    }

    const validationchecker = async (e: any) => {
        const val = e.target.value;
        if (val.length === 11) {
            SetPhoneNumber(val)
            Setvalidation(true)


            //INFO register user to the server

            const url: string = process.env.DOMAIN || ''


            let data = {
                phone: "09384850816",
                authCode: "858585"
            };


            let config = {
                method: 'post',

                url: 'http://localhost:8080/auth',
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                data: data
            };
            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });



        } else {
            Setvalidation(false)
        }


    }
    const codevalidationcheker = (e: any) => {
        const val = e.target.value;
        if (val.length === 6) {

            setcodeValidation(true)



        } else {
            setcodeValidation(false)
        }


    }




    return (
        <div className="Singin">

            <div className={`slides`}
                style={{ transform: `translateY(-${next * 448}px)` }}
            >
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
                <Input onInput={validationchecker}

                    error={!phoneValidation ? "شماره موبایل اشتباه است" : ""}

                    title="شماره همراه" darkmode transparency={"white"} />

                <div className="buttonsw">
                    <Buttons onClick={btnHandle} disable={!phoneValidation} Style="fill" size={40}>
                        ادامه
                    </Buttons>
                </div>
                <span className="UpCap cap">
                    ورود و عضویت در ترخینه به منزله قبول قوانین و مقررات است.
                </span>
            </div>
            <div className={`slides`}
                style={{ transform: `translateY(-${next * 448}px)` }}
            >
                <div className="headUp">
                    <div onClick={cameback}>
                        <div className="closee"></div>
                        <Buttons RightIcon={<ArrowUp color="red" />} Style="textBTN" />
                    </div>
                    <div className="logoCase">
                        <Icon icon="logo" />
                    </div>

                </div>
                <p className="line">کد برای شما ارسال شد!</p>
                <span className="UpCap">یک کد شش رقمی برای شماره {phoneNumber} ارسال شد</span>
                <Input title="کد شش رقمی" darkmode transparency="white" onInput={codevalidationcheker} />

                <div className="buttonsw">
                    <Buttons disable={!codeValidation} size={40} Style="fill">
                        ادامه
                    </Buttons>
                </div>
                <span className="UpCap cap">
                    ورود و عضویت در ترخینه به منزله قبول قوانین و مقررات است.
                </span>
            </div>


        </div >
    )
}


export default Singin


