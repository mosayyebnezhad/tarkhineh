
import { useState } from "react";
import Image from "../../Components/Images/Image";
import Input from "../../Components/input/input";
import "./Contactus.scss"
import WithAuth from "../../HOC/withAuth";
const ContactUs = () => {





    return (



        <>
            {/* <Image path="image2.jpg" width={"260px"} height={"180px"} /> */}
            <div className="countainer">

                <Input
                    title="نیاز است"
                    error="لطفا این را پر کنید"

                />



            </div>

            {/* <Image path="image4.jpg" width={"260px"} height={"180px"} /> */}
        </>


    )
}

export default WithAuth(ContactUs);