import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../Pages/home/home";
import ContactUs from "../Pages/Contacts/ContactUs";
import Notfound from "../Pages/Notfound/notfound";
import Singout from "../Pages/singOut/singOut";
import BrachPage from "../Pages/Branch/Branchpage";
import Cart from "../Pages/Carts/Carts";

import { Template } from "./Templates/MainTemplate";
import { ReactNode } from "react";

function MainRoutes() {

  return (
    <>

      <Routes>
        {/* redierects */}
        <Route path="/" element={<Navigate to={"/home"} />} />
        {/* <Route path="*" element={<Notfound />} /> */}
        {Rt("*", <Notfound />)}


        
        {/* routes */}
        {Rt("/home", <Home />)}
        {Rt("/branch/:name", <BrachPage />)}
        {Rt("/Carts", <Cart />)}

   
      

        {/* test */}
       
        {Rt("/contact", <ContactUs />)}
        {Rt("/Branch", <Notfound />)}
        {Rt("/menu", <Notfound />)}
        {Rt("/Deputize", <Notfound />)}
        {Rt("/singOut", <Singout />)}







      </Routes>


    </>
  );
}

export default MainRoutes;




const Rt = (p: string, El: ReactNode) => {

  return (
    <Route path={p} element={<Template Componenet={El} />} />
  )
}