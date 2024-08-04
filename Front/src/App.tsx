
import Routings from './Pages/Routes';
import Header from './Components/header/header';
import Footer from './Components/Footer/footer';
import { createContext, useState } from 'react';
import { ILogin } from './types/Puplictyps';
import { useCookies } from 'react-cookie';


export const appContext = createContext(null as any);

function App() {




  const [cookies] = useCookies(['Login']);



  // if (cookies.Login.islogin) LoginDetail = json.parse(cookies);


  let Detail = {
    islogin: false,
    username: ""
  }


  if (cookies.Login) Detail = cookies.Login;


  const [Login, SetLogin] = useState<ILogin>(Detail)



  // useEffect(() => {
  //   console.log(Login)
  //   setCookie('Login', JSON.stringify(Login), { path: '/' });
  //   console.log("login Changed")


  // }, [Login])


  return (
    <>

      <appContext.Provider value={{ SetLogin, Login }} >
        <Header />


        <Routings />
        <Footer />
      </appContext.Provider>

    </>
  );
}

export default App;
