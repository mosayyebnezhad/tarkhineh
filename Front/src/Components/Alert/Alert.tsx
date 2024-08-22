import { useContext, useEffect, useState } from "react"
import { appContext } from "../../App"
import "./Alert.scss"
import { useParams } from "react-router-dom"

interface IAlert {
    message?: string,
    messageColor?: string,

}

const Alert = (prop: IAlert) => {


    const { alert, setAlert } = useContext(appContext)
    const [show, setShow] = useState(false)




    useEffect(() => {
        console.log(alert);
    
        if (alert.message) {

       
            setShow(true)
            setTimeout(() => {
                setShow(false)
                setAlert({
                    message: "",
                    messageColor: "",
                })
                // console.log("clear");
            }, 3000);


        }
    }, [alert])


    return (
        <div className={`AlertCase ${show && "meginefd"}`}>
            <div className="casing">
                <div className={`Color ${show && "anima"}`} style={{ background: `${alert?.messageColor}` }}></div>
            </div>
            <p className="textP">
                {alert?.message}

            </p>

        </div >
    )
}


export default Alert;