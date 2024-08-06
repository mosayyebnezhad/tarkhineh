import { ArrowUp, Xmark } from "iconoir-react"
import Buttons from "../Buttons/buttons"
import Input from "../input/input"
import "./sining.scss"
import Icon from "../Icons/icons"
import { useContext, useState } from "react"
import axios from "axios"
import { appContext } from "../../App"
import { ILogin } from '../../types/Puplictyps';
import { useCookies } from "react-cookie"
const url: string = process.env.REACT_APP_DOMAIN || '';



const Singin = () => {
    const { SetLogin } = useContext(appContext)
    const [, setCookie] = useCookies(['Login']);


    const [next, setNext] = useState(0)
    // const [phoneValidation, Setvalidation] = useState(false)
    const [phoneNumber, SetPhoneNumber] = useState("")
    const [codeValidation, setcodeValidation] = useState(false)
    const [Error, SetError] = useState("")
    const [LoginOrRegister, setLoginOrregister] = useState("ثبت نام")
    const [exist, setExist] = useState(false)

    const [fetchloading, setFetchLoading] = useState(false)


    const btnHandle = async () => {

        // 
        //    alert("f")


        if (phoneNumber.length > 10) {
            const CodeGenerating = Math.floor(Math.random() * 10000) + 10000;
            //TODO send code to phone number





            let data = JSON.stringify({
                "phone": String(phoneNumber),
                "authCode": CodeGenerating


            });

            // console.log(data)

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${url}/auth`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };





            try {
                setFetchLoading(true)
                const response = await axios.request(config)
                alert(CodeGenerating)
                setNext(next + 1)

            } catch (error) {
                // console.log("NO-created")

            } finally {
                setFetchLoading(false)
            }


        }



    }
    const cameback = () => {

        setNext(next - 1)
        SetError("")
        // alert("btn clicked")
    }

    const validationchecker = async (e: any) => {
        const val = e.target.value;
        if (val.length === 11) {




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

            try {
                setFetchLoading(true);
                const response = await axios.request(config);
                SetError("");
                setExist(false)
                SetPhoneNumber(val)


                setLoginOrregister("ثبت نام")
            } catch (error: any) {

                const Status = error.response.status;
                if (Status === 409) {
                    setLoginOrregister("ورود به حساب")
                    SetError("");
                    setExist(true)
                    SetPhoneNumber(val)
                } else {
                    SetError(error.response.data.message);
                }
            }
            finally {
                setFetchLoading(false);
            }



        } else {
            SetError("موردی اشتباه است");
        }


    }
    const codevalidationcheker = async (e: any) => {
        const val = e.target.value;
        if (val.length === 5) {

            setcodeValidation(true)




            let data = JSON.stringify({
                "phone": String(phoneNumber),
                "authCode": val

            });
            // console.log(data)

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${url}/auth/AuthCodeauthorized`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };



            try {
                setFetchLoading(true)
                const result = await axios.request(config)
                setNext(next + 1)


                const loginDetail: ILogin = {
                    islogin: true,
                    username: "پروفایل",
                    token : result.data.token,
                }


                SetLogin(loginDetail)
                setCookie("Login", JSON.stringify(loginDetail), { path: '*' });
                SetError("")
                // console.log(loginDetail)


            } catch (error: any) {
                SetError(error.response.data.message)
            } finally {
                setFetchLoading(false)
            }


        } else {
            setcodeValidation(false)

            SetError("")
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

                    error={(Error && fetchloading === false) ? Error : ""}

                    title="شماره همراه" darkmode transparency={"white"} />

                <div className="buttonsw">
                    <Buttons
                        onClick={btnHandle}
                        disable={!!Error}
                        loading={fetchloading}
                        Style="fill" size={40}>
                        {LoginOrRegister}
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

                    error={(Error && fetchloading === false) ? Error : ""}
                    darkmode transparency="white" onInput={codevalidationcheker} />

                <div className="buttonsw">
                    <Buttons disable={!codeValidation} loading={fetchloading} size={40} Style="fill">
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


