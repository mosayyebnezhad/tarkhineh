import { Phone, User, Timer } from "iconoir-react"
import Input from "../../../../Components/input/input"
import "./moshaver.scss"
import Buttons from "../../../../Components/Buttons/buttons"

const Moshaver = () => {
    return (
        <div className="ContainerinMoshaver">
            <div className="inputs">
                <Input title="نام و نام خانوادگی" darkmode iconR={<User />} transparency="white" />
                <Input title="شماره تماس" darkmode iconR={<Phone />} transparency="white" />
                <Input title="زمان ایده آل" darkmode iconR={<Timer />} transparency="white" />
            </div>
            <div className="buttonheere">
                <Buttons >
                    درخواست
                </Buttons>
            </div>

        </div>
    )
}
export default Moshaver