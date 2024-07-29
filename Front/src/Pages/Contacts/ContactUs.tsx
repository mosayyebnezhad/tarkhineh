
import { useState } from "react";
import Image from "../../Components/Images/Image";
import Input from "../../Components/input/input";
import "./Contactus.scss"
const ContactUs = () => {





    return (



        <>
            {/* <Image path="image2.jpg" width={"260px"} height={"180px"} /> */}
            <div className="countainer">

                <Input
                    title="شماره تماس ضروری"
                    sizew={32}
                    transparency="lightcoral"

                />
                <Input
                    title="شماره تماس ضروری"
                    sizew={32}
                    type="password"

                />
                <Input
                    title="رمز عبور"
                    sizew={32}
                    type="password"
                    error="لطفا رمز عبور را وارد کنید"
                />
                <Input
                    title="شما خر تاریک هستید"
                    sizew={40}
                    darkmode
                />
                <Input
                    title="شما خر تاریک هستید"
                    sizew={40}
                    darkmode
                    error="لطفا رمز عبور را وارد کنید"
                />

                <Input
                    title="شما خر هستید"
                    sizew={48}
                />
                <Input
                    style={{

                    }}
                    title="شما خر هستید"
                    sizew={56}
                    disable
                />
        


            </div>

            {/* <Image path="image4.jpg" width={"260px"} height={"180px"} /> */}
        </>


    )
}

export default ContactUs;