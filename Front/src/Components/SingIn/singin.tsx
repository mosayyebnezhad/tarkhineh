import { ArrowUp, SineWave, Xmark } from "iconoir-react"
import Buttons from "../Buttons/buttons"
import Input from "../input/input"
import "./sining.scss"
import Icon from "../Icons/icons"
import { useRef, useState } from "react"
import axios from "axios"



const Singin = () => {


    const [next, setNext] = useState(0)
    // const [phoneValidation, Setvalidation] = useState(false)
    const [phoneNumber, SetPhoneNumber] = useState("")
    const [codeValidation, setcodeValidation] = useState(false)
    const [Error, SetError] = useState("")
    const [Error2, SetError2] = useState("")


    const btnHandle = () => {

        // 
        //    alert(phoneNumber)


        if (phoneNumber.length > 10) {
            const CodeGenerating = Math.floor(Math.random() * 10000) + 10000;
            //TODO send code to phone number
            const url: string = process.env.REACT_APP_DOMAIN || '';



            let data = JSON.stringify({
                "phone": String(phoneNumber),
                "authCode": CodeGenerating

            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${url}/auth`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            console.log(config)
            axios.request(config)
                .then((response) => {
                    console.log("created")
                    setNext(next + 1)
                    alert(CodeGenerating)

                })
                .catch((error) => {
                    console.log("NO-created")
                });

        }



    }
    const cameback = () => {

        setNext(next - 1)
        // alert("btn clicked")
    }

    const validationchecker = async (e: any) => {
        const val = e.target.value;
        if (val.length === 11) {

            const url: string = process.env.REACT_APP_DOMAIN || '';



            let data = JSON.stringify({
                "phone": String(val)
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${url}/auth/exist`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            console.log(config)
            axios.request(config)
                .then((response) => {


                    SetError("");

                    SetPhoneNumber(val)
                })
                .catch((error) => {
                    SetError(error.response.data.message);


                });



        } else {
            SetError("موردی اشتباه است");
        }


    }
    const codevalidationcheker = (e: any) => {
        const val = e.target.value;
        if (val.length === 5) {

            setcodeValidation(true)
            const url: string = process.env.REACT_APP_DOMAIN || '';



            let data = JSON.stringify({
                "phone": String(phoneNumber),
                "authCode": val

            });
            console.log(data)

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${url}/auth/AuthCodeauthorized`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            console.log(config)
            axios.request(config)
                .then((response) => {
                    console.log("loged in")
                    setNext(next + 1)
                    SetError2("")

                })
                .catch((error) => {
                    console.log("NO-log")
                    SetError2(error.response.data.message)
                });


        } else {
            setcodeValidation(false)
            
            SetError2("")
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

                    error={Error ? Error : ""}

                    title="شماره همراه" darkmode transparency={"white"} />

                <div className="buttonsw">
                    <Buttons onClick={btnHandle} disable={!!Error} Style="fill" size={40}>
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
                <Input title="کد شش رقمی"

                    error={Error2 ? Error2 : ""}
                    darkmode transparency="white" onInput={codevalidationcheker} />

                <div className="buttonsw">
                    <Buttons disable={!codeValidation} size={40} Style="fill">
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
                    <div className="x">
                        <div className="closee"></div>
                        <Buttons RightIcon={<Xmark />} Style="textBTN" />
                    </div>
                    <div className="logoCase">
                        <Icon icon="logo" />
                    </div>
                </div>
                <p className="line">با موفقیت ثبت نام شدید</p>
                <span className="UpCap">لطفا برای تنظیم پروفایل به قسمت پروفایل خود بروید!</span>


            </div>

        </div >
    )
}


export default Singin


