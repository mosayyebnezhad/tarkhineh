import { Route, Routes, Navigate } from "react-router-dom";
import Aboute from "./About/about";
import Home from "./home/home";
import ContactUs from "./Contacts/ContactUs";
import Notfound from "./Notfound/notfound";

function Routings() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Navigate to={"/home"}/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboute" element={<Aboute />} />
        <Route path="/contact" element={<ContactUs />} />


        <Route path="/Branch" element={<Notfound />} />
        <Route path="/menu" element={<Notfound />} />
        <Route path="/Deputize" element={<Notfound />} />

        <Route path="*" element={<Notfound />} />

      </Routes>


    </>
  );
}

export default Routings;


