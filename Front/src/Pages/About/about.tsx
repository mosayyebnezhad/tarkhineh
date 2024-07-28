import { EyeClosed, UserLove, } from "iconoir-react";
import Buttons from "../../Components/Buttons/buttons"
import Icon from "../../Components/Icons/icons";
import { useEffect, useState } from "react";

const Aboute = () => {



    const [loading, setLoading] = useState(true)

    useEffect(() => {


       setTimeout(()=>{
        setLoading(!loading)
        console.log("loaded")
       },500)
    },[])
    return (

        <Buttons Style="fill" color="black" loading={loading}

            size={56}
            RightIcon={<EyeClosed />}
            leftIcon={<UserLove />}
        >

            سلامسسسسسس
        </Buttons>
    )
}
export default Aboute;