import React, { useState } from "react"
import "./input.scss"

import { EyeClosed, EyeSolid, User, UserCart, WarningCircle } from "iconoir-react";
import { IconoirProviderProps } from "iconoir-react/dist/IconoirContext";
import invertHexColor from "../../utils/Colorinverter";
interface IInterface extends React.InputHTMLAttributes<HTMLInputElement> {
    iconR?: IconoirProviderProps["children"],
    iconL?: IconoirProviderProps["children"],
    title: string,
    sizew?: 32 | 40 | 48 | 56,
    darkmode?: boolean,
    disable?: boolean,
    error?: string,
    transparency?: string,

}



const Input = (prop: IInterface) => {
    const { transparency } = prop;
    let darkmode = prop.darkmode
    let disable = prop.disable ? "InActive" : ""
    let error = prop.error ? "HasError" : ""



    let colorWWW;


    if (transparency) colorWWW = invertHexColor(transparency)

    let Sizing = `INPSIE-${prop.sizew ? prop.sizew : 32}`
    let clasess = disable + error + " " + Sizing
    const [eye, setEye] = useState(false)


    const eyeHandle = () => {
        setEye(!eye)
    }
    return (



        <div className="inputArea">
            <div className={darkmode ? "InputDark" + clasess : "Input" + clasess}


                style={{
                    marginTop: "16px"
                }}


            >

                <div className="iconBaseL">
                    {prop.iconR && prop.iconR }
                </div>


                <div className="input-container">
                    <input onInput={prop.onInput} type={eye ? "password" : "text"} disabled={prop.disable} className="inp" placeholder="" />
                    <div className="lable"



                        style={
                            transparency ? {
                                background: transparency,
                                color: colorWWW

                            }
                                : {}
                        }



                    >
                        {prop.title}
                    </div>
                </div>



                {prop.type === "password" ?
                    <button onClick={eyeHandle} type="button" className="iconBaseR">
                        {eye ? <EyeClosed /> : <EyeSolid />}

                    </button>

                    :


                    prop.iconL ?
                        <div className="iconBaseL">
                            {prop.iconL}
                        </div>


                        : null
                }

            </div>

            {
                prop.error && <span>
                    <WarningCircle />
                    <p>
                        {prop.error}
                    </p>
                </span>
            }
        </div >


    )
}


export default Input;