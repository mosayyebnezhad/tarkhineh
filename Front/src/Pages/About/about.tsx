import { Send } from "iconoir-react";
import Buttons from "../../Components/Buttons/buttons"

import { useState } from "react";

const Aboute = () => {



    const [loading, setLoading] = useState(true)





    return (

        <Buttons
            onClick={
                () => {
                    setLoading(!loading)


                }
            }
            Style="fill"
            color="primery"
            loading={!loading}


            size={40}

            RightIcon={<Send />}
        // leftIcon={<Cart />}
        >

            ارسال پیام
        </Buttons>
    )
}
export default Aboute;