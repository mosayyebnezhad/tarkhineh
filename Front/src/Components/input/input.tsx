import React, { useState } from "react"
import "./input.scss"
import Icon from '../Icons/icons';
import icon from '../Icons/type';
interface IInterface extends React.InputHTMLAttributes<HTMLInputElement> {
    icon: icon["icon"],
    title: string
}



const Input = (prop: IInterface) => {

    const [eye, seteye] = useState(false)
    const handleeye = () => {
        seteye(!eye)
    }
    return (
        <fieldset>
            <Icon icon={prop.icon} color="white" />
            <legend>{prop.title}</legend>

            <input {...prop} type={eye ? "text" : prop.type} />


            {prop.type == "password" &&

                <button type="button" className="nohere" onClick={handleeye}>
                    <Icon icon={eye ? "close-eye" : "eye"} color="white" />


                </button>
            }







        </fieldset>





    )
}


export default Input;