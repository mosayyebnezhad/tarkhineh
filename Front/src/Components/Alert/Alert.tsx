import { useContext, useEffect, useState } from "react"
import { appContext } from "../../App"
import "./Alert.scss"

interface IAlert {
    message?: string,
    messageColor?: string,

}

const Alert = (prop: IAlert) => {


    const { alert, setAlert } = useContext(appContext)
    const [show, setShow] = useState(false)


    const Colors = {
        red: "",
        green: "#417F56",
        Orange: "orange"
    }

    useEffect(() => {
        console.log(alert);
        if (alert.message) {
            setShow(true)
            setTimeout(() => {
                setShow(false)
                console.log("clear");
            }, 3000);
        }
    }, [alert])


    return (
        <div className={`AlertCase ${show && "meginefd"}`}>
            <div className="casing">
                <div className={`Color ${show && "anima"}`} style={{ background: `${alert.messageColor}` }}></div>
            </div>
            <p className="textP">
                {alert.message}
          
            </p>

        </div >
    )
}


export default Alert;