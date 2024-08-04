import Singin from "../SingIn/singin"
import "./modal.scss"


interface IModal {
    show: boolean
    onClose: () => void
}
const Modal = (prop: IModal) => {


    const handleClick = (e: any) => {
        if (e.target.className === "Modal" || e.target.className === "closee") {
            prop.onClose();
            
        }


        // console.log(e.target.className)
    };


    return (
        <>
            {prop.show &&

                <div className="Modal" onClick={handleClick}>
                    <Singin />
                </div>

            }




        </>

    )

}


export default Modal