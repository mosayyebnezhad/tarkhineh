
import MainRoutes from './Routings/Routes';
import { createContext, useEffect, useState } from 'react';
import { ICart, ILogin } from './types/Puplictyps';
import { useCookies } from 'react-cookie';


export const appContext = createContext(null as any);

function App() {

  interface IContext {
    message?: string, messageColor?: string
  }

  const [alert, setAlert] = useState<IContext>(
    {
      message: "",
      messageColor: "",
    })





  const [cookies] = useCookies(['Login']);



  // if (cookies.Login.islogin) LoginDetail = json.parse(cookies);


  let Detail = {
    islogin: false,
    username: ""
  }


  if (cookies.Login) Detail = cookies.Login;


  const [Login, SetLogin] = useState<ILogin>(Detail)
  const [branchName, SetbranchName] = useState<String>("شعبه")

  const [Cartcookies, CartsetCookie, CartremoveCookie] = useCookies(['Cart']);


  const [Cart, setCart] = useState<ICart[]>(Cartcookies.Cart ? Cartcookies.Cart : [])


  // console.log(Cart);

  const SendingData = {
    branchName,
    SetbranchName,
    SetLogin,
    Login,
    Cart,
    setCart,


    setAlert,
    alert
  }


  return (
    <>

      <appContext.Provider value={SendingData} >


        <MainRoutes />

      </appContext.Provider>

    </>
  );
}

export default App;
