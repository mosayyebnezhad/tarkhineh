import { IconoirProvider } from "iconoir-react";
import { IconoirProviderProps } from "iconoir-react/dist/IconoirContext";



interface Iprop {
    children: IconoirProviderProps['children'],
    width?: number,
    height?: number,
}


const IconNpm = (prop: Iprop) => {

    const { width, height } = prop;

    let u = {


        width: "16px",
        height: "16px",
    }


    if (width) {
        u = { ...u, width: width + "px" }
    }

    if (height) {
        u = { ...u, height: height + "px" }
    }

    return (

        <>
            <IconoirProvider iconProps={u}>

                {prop.children}

            </IconoirProvider>
        </>

    )
}
export default IconNpm;