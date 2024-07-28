import { Children } from "react";
import Icon from "../Icons/icons";
import "./button.scss"
import IProps from "./buttonType";
import { ArrowDown, RefreshDouble, Search } from "iconoir-react";
import IconNpm from "../Icons/iconnpm";
import { IconoirProviderProps } from 'iconoir-react/dist/IconoirContext';



// const Buttons = (prop: IProps) => {

//     const { IconFirst, disabled, iconcolor, iconHeight, IconWidth, onclick, type, children, IconSecond, color, btnStyle, size } = prop;

//     var backGColor;
//     var textColor;
//     var style;

//     switch (color) {
//         case "white":

//             textColor = "#ffffff";
//             backGColor = "#E5F2E9";
//             break;
//         case "green":

//             textColor = "white";
//             backGColor = "#417F56";


//             // setColor = "#417F56";
//             break;
//         case "gray":

//             textColor = "#417F56";
//             backGColor = "#717171";



//             // setColor = "#717171";
//             break;

//     }


//     if (btnStyle === "filled") {
//         style = {
//             backgroundColor: backGColor,
//             color: textColor,

//         }
//     } else if (btnStyle === "border") {
//         style = {
//             // backgroundColor: "#E5F2E9",
//             color: textColor,
//             border: "1px solid " + backGColor,
//         }
//     } else if (btnStyle === "no-border") {
//         style = {
//             // backgroundColor: "none",
//             color: "",
//             // border: "1px solid " + backGColor,
//         }
//     }


//     switch (size) {
//         case "small":
//             style = {
//                 ...style,
//                 width: "114px",
//                 height: "32px",
//                 fontSize: "12px"
//             }
//             break;
//         case "medium":

//             style = {
//                 ...style,
//                 width: "174px",
//                 height: "48px",
//                 fontSize: "16px"
//             }
//             break;
//         case "large":

//             style = {
//                 ...style,
//                 width: "174px",
//                 height: "56px",
//                 fontSize: "16px"
//             }
//             break;

//     }



//     if (prop.textColor) {
//         style = {
//             ...style,
//             color: prop.textColor
//         }
//     }



//     return (


//         <button type={type} onClick={onclick} style={style} disabled={disabled} className={color + " customBTN"} >
//             {IconFirst && <Icon height={iconHeight} width={IconWidth} icon={IconFirst} color={iconcolor} />
//             }
//             {prop.disabled ?

//                 <div className="RotateIcon">
//                     <Icon icon="rotator" />

//                 </div>

//                 : children}


//             {IconSecond && <Icon icon={IconSecond} color={iconcolor} />}
//         </button >






//     )
// }




const Buttons = (prop: IProps) => {



    let { size, color, Style, disable, loading, children, leftIcon, RightIcon } = prop;


    size = size ? size : 40;


    let oneOftwo = "";
    if (disable) {
        oneOftwo = "disable " + Style
    }

    if (loading) {
        oneOftwo = "loadingbtn " + Style
    }


    let colorStyle = "";
    if (!loading && !disable) {
        if (!color) {
            color = "primery";
        }


        if (!Style) {
            Style = "fill";
        }
        colorStyle = `${color}${Style}`;
    }





    return (
        <button className={`Custombtn size-${size} ${colorStyle} ${oneOftwo}`}>
            {loading ?
                <>



                    <RefreshDouble className="LoadingItem" stroke="5px" />



                </>
                :
                <>
                    <IconNpm height={size === 32 ? 16 : 24} width={size === 32 ? 16 : 24}>{leftIcon}</IconNpm>
                    {children}
                    <IconNpm height={size === 32 ? 16 : 24} width={size === 32 ? 16 : 24}>{RightIcon}</IconNpm>
                </>

            }
        </button>




    )
}

export default Buttons;