import { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { appContext } from "../../App";
import { Navigate } from "react-router-dom";

const Signout = () => {
    const [, , deleteCookie] = useCookies(['Login']);
    const { SetLogin } = useContext(appContext);

    useEffect(() => {
        deleteCookie('Login', { path: '*' });
        SetLogin({ islogin: false });
    }, [deleteCookie, SetLogin]);

    return <Navigate to="/" />;
}

export default Signout;
