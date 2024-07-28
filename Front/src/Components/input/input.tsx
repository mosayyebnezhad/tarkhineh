import React, { useState } from "react"
import "./input.scss"
import Icon from '../Icons/icons';
import icon from '../Icons/type';
import { EyeClosed, EyeSolid, User } from "iconoir-react";
import { IconoirProviderProps } from "iconoir-react/dist/IconoirContext";
interface IInterface extends React.InputHTMLAttributes<HTMLInputElement> {
    iconw?: IconoirProviderProps["children"],
    title: string,
    sizew?: 32 | 40 | 48 | 56,
    darkmode?: boolean
}



const Input = (prop: IInterface) => {

    const [eye, seteye] = useState(false)
    const handleeye = () => {
        seteye(!eye)
    }
    return (
        <div className={`fieldset sizeinp-${prop.sizew} ${prop.darkmode ? "darkmode" : "lightmode"}`}>
            {prop.iconw ? prop.iconw : <User />}
            {/* <legend>{prop.title}</legend> */}
            <span className="titlea">hi</span>
            <input {...prop} type={eye ? "text" : prop.type} />


            {prop.type == "password" &&

                <button type="button" className={`nohere`} onClick={handleeye}>

                    {eye ? <EyeClosed /> : <EyeSolid />}



                </button>
            }







        </div>





    )
}


export default Input;