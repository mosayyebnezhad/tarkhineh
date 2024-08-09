import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./home/home";
import ContactUs from "./Contacts/ContactUs";
import Notfound from "./Notfound/notfound";
import Singout from "./singOut/singOut";
import BrachPage from "./Branch/Branchpage";
import Cart from "./Carts/Carts";

function Routings() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />

        <Route path="/branch/:name" element={<BrachPage />} />
        <Route path="/Carts" element={<Cart />} />

        {/* test */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Branch" element={<Notfound />} />
        <Route path="/menu" element={<Notfound />} />
        <Route path="/Deputize" element={<Notfound />} />

        <Route path="/singOut" element={<Singout />} />

        <Route path="*" element={<Notfound />} />

      </Routes>


    </>
  );
}

export default Routings;


