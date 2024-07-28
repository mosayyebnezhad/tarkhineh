import { IconoirProviderProps } from "iconoir-react/dist/IconoirContext";
import icon from "../Icons/type";

// interface IProps {

//     IconFirst?: icon['icon'];
//     IconSecond?: icon['icon'];
//     // IconFirst: "s"|"w"|"menu"|"ArrowDown"|"ArrowUp";
//     children: React.ReactNode;
//     btnStyle: "border" | "filled" | "no-border"
//     color: "white" | "green" | "gray"
//     size: "small" | "medium" | "large"
//     onclick?: () => void;
//     disabled?: boolean;
//     type?: "submit" | "reset" | "button";
//     iconcolor?: string;
//     textColor?: string;
//     iconHeight?:number
//     IconWidth?:number

// }


interface CommonProps {
    Style?: "fill" | "stroke" | "textBTN";
    color?: "primery" | "white" | "black";
    state?: "active" | "disabled";
    size?: 32 | 40 | 48 | 56;
    children?: React.ReactNode;
    leftIcon?: IconoirProviderProps['children'];
    RightIcon?: IconoirProviderProps['children'];
}

interface LoadingPrimaryProps extends CommonProps {
    loading?: boolean;
    disable?: never;  // این خاصیت نباید وجود داشته باشد
}

interface DisablePrimaryProps extends CommonProps {
    disable?: boolean;
    loading?: never;  // این خاصیت نباید وجود داشته باشد
}

type IProps = LoadingPrimaryProps | DisablePrimaryProps;

export default IProps;





