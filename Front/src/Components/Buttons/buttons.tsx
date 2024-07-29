
import "./button.scss"
import IProps from "./buttonType";
import { RefreshDouble } from "iconoir-react";
import IconNpm from "../Icons/iconnpm";




const Buttons = (prop: IProps) => {

    let { Style, color, state, size, children, loading, disable, RightIcon, leftIcon, ...restProp } = prop;

    // let { size, color, Style, disable, loading, children, } = prop;


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



    let marginSize = 0;


    marginSize = size === 32 ? 8 : 16;

    return (
        <button {...restProp} disabled={loading || disable} className={`Custombtn size-${size} ${colorStyle} ${oneOftwo}`}>
            {loading ?
                <>


                    <div className="SvgInButton ">     <RefreshDouble className="LoadingItem" stroke="5px" /></div>




                </>
                :
                <>
                    {leftIcon &&
                        <div className="SvgInButton">     <IconNpm height={size === 32 ? 16 : 24} width={size === 32 ? 16 : 24}>{leftIcon}</IconNpm></div>
                    }
                    {children && <p


                        style={{
                            marginLeft: leftIcon ? "0px" : `${marginSize}px`,
                            marginRight: RightIcon ? "0px" : `${marginSize}px`
                        }}

                        className="TextInButton"> {children}</p>}
                    {RightIcon &&
                        <div className="SvgInButton"
                            style={
                                leftIcon ? { marginLeft: "0px" } : {
                                    marginLeft: `${marginSize}px`
                                }
                            }
                        >     <IconNpm height={size === 32 ? 16 : 24} width={size === 32 ? 16 : 24}>{RightIcon}</IconNpm></div>
                    }


                </>

            }
        </button >




    )
}

export default Buttons;