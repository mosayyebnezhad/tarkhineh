
import Routings from './Pages/Routes';
import Header from './Components/header/header';
import Footer from './Components/Footer/footer';
import { createContext, useState } from 'react';
import { ILogin } from './types/Puplictyps';
import { useCookies } from 'react-cookie';
import Slider from './Components/Slider/slider';


export const appContext = createContext(null as any);

function App() {




  const [cookies] = useCookies(['Login']);



  // if (cookies.Login.islogin) LoginDetail = json.parse(cookies);


  let Detail = {
    islogin: false,
    username: ""
  }
  interface Cart{
    id:String
  }


  if (cookies.Login) Detail = cookies.Login;


  const [Login, SetLogin] = useState<ILogin>(Detail)
  const [branchName, SetbranchName] = useState<String>("شعبه")

  const [Cart, setCart] = useState<Cart[]>()



  const SendingData = {
    branchName,
    SetbranchName,
    SetLogin,
    Login,
    Cart,
    setCart
  }


  return (
    <>

      <appContext.Provider value={SendingData} >
        <Header />
        <Slider />

        <Routings />
        <Footer />
      </appContext.Provider>

    </>
  );
}

export default App;
