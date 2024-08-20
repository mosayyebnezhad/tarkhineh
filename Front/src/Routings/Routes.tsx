import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../Pages/home/home";
import ContactUs from "../Pages/Contacts/ContactUs";
import Notfound from "../Pages/Notfound/notfound";
import Singout from "../Pages/singOut/singOut";
import BrachPage from "../Pages/Branch/Branchpage";
import Cart from "../Pages/Carts/Carts";

import { Template, Template2 } from "./Templates/MainTemplate";
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
        {Rt("/Carts", <Cart /> , 2)}




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




const Rt = (p: string, El: ReactNode, template: number = 1) => {

  if (template === 1) {
    return (
      <Route path={p} element={<Template Componenet={El} />} />
    )
  }
  else if (template === 2) {
    return (
      <Route path={p} element={<Template2 Componenet={El} />} />
    )
  }

  else {
    return (
      <Route path={p} element={<Template Componenet={El} />} />
    )
  }
}