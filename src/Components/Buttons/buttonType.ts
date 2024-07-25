import icon from "../Icons/type";

interface IProps {

    IconFirst?: icon['icon'];
    IconSecond?: icon['icon'];
    // IconFirst: "s"|"w"|"menu"|"ArrowDown"|"ArrowUp";
    children: React.ReactNode;
    btnStyle: "border" | "filled" | "no-border"
    color: "white" | "green" | "gray"
    size: "small" | "medium" | "large"
    onclick?: () => void;
    disabled?: boolean;
    type?: "submit" | "reset" | "button";
    iconcolor?: string;

}
export default IProps;