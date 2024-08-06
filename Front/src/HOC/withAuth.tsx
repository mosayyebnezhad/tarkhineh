import { FC, useContext } from "react"
import { Navigate } from "react-router-dom"
import { appContext } from "../App"
import { ILogin } from "../types/Puplictyps"
import { useCookies } from "react-cookie"


const WithAuth = (WrappedComponent: FC): FC => {

    // const Login: ILogin = useContext(appContext).Login;

  
    const ComponenetwithAuth: FC = (props: any) => {


        const [lg] = useCookies(['Login']);

        if (lg.Login) {
            return <WrappedComponent {...props} />
        } else {
            return <Navigate to={"/login"} />
        }


    }



    return ComponenetwithAuth




}

export default WithAuth