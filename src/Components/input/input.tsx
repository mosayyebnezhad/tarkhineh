import React, { useState } from "react"
import "./input.scss"
import Icon from '../Icons/icons';
import icon from "../Icons/type";
interface IInterface extends React.InputHTMLAttributes<HTMLInputElement> {
    icon: icon["icon"],
    title: string
}



const Input = (prop: IInterface) => {

    const [eye, seteye] = useState(false)

    return (
        <fieldset>
            <Icon icon={prop.icon} />
            <legend>{prop.title}</legend>
            <input {...prop} type={eye ? "password" : prop.type}  />
            <button className="nohere" onClick={() => seteye(!eye)}>
                <Icon icon={eye ? "close-eye" : "eye"} />
            </button>







        </fieldset>





    )
}


export default Input;