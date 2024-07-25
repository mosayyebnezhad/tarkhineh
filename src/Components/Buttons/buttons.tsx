import Icon from "../Icons/icons";
import "./button.scss"
import IProps from "./buttonType";



const Buttons = (prop: IProps) => {

    const { IconFirst, disabled, onclick, type, children, IconSecond, color, btnStyle, size } = prop;

    var backGColor;
    var textColor;
    var style;

    switch (color) {
        case "white":

            textColor = "#417F56";
            backGColor = "#E5F2E9";
            break;
        case "green":

            textColor = "white";
            backGColor = "#417F56";


            // setColor = "#417F56";
            break;
        case "gray":

            textColor = "#417F56";
            backGColor = "#717171";



            // setColor = "#717171";
            break;

    }


    if (btnStyle === "filled") {
        style = {
            backgroundColor: backGColor,
            color: textColor,

        }
    } else if (btnStyle === "border") {
        style = {
            // backgroundColor: "#E5F2E9",
            color: "black",
            border: "1px solid " + backGColor,
        }
    } else if (btnStyle === "no-border") {
        style = {
            // backgroundColor: "none",
            color: "",
            // border: "1px solid " + backGColor,
        }
    }


    switch (size) {
        case "small":
            style = {
                ...style,
                width: "114px",
                height: "32px",
                fontSize: "12px"
            }
            break;
        case "medium":

            style = {
                ...style,
                width: "174px",
                height: "48px",
                fontSize: "16px"
            }
            break;
        case "large":

            style = {
                ...style,
                width: "174px",
                height: "56px",
                fontSize: "16px"
            }
            break;

    }







    return (


        <button type={type} onClick={onclick} style={style} disabled={disabled} className={color + " customBTN"} >
            {IconFirst && <Icon icon={IconFirst} />
            }
            {prop.disabled ?

                <div className="RotateIcon">
                    <Icon icon="rotator" />

                </div>

                : children}


            {IconSecond && <Icon icon={IconSecond} />}
        </button >






    )
}

export default Buttons;