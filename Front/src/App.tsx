
import Routings from './Pages/Routes';
import Header from './Components/header/header';
import Footer from './Components/Footer/footer';
import { createContext, useState } from 'react';
import { ICart, ILogin } from './types/Puplictyps';
import { useCookies } from 'react-cookie';
import Slider from './Components/Slider/slider';
import Alert from './Components/Alert/Alert';


export const appContext = createContext(null as any);

function App() {



  const [alert, setAlert] = useState({
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

        <Header />
        <Slider />
        <Alert />
        <Routings />
        <Footer />
      </appContext.Provider>

    </>
  );
}

export default App;
