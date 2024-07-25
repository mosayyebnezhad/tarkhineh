import { Route, Routes } from "react-router-dom";
import Aboute from "./About/about";
import Home from "./home/home";
import ContactUs from "./Contacts/ContactUs";
import Notfound from "./Notfound/notfound";

function Routings() {
  return (
    <>
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/aboute" element={<Aboute />} />
        <Route path="/contact" element={<ContactUs />} />


        <Route path="/Branch" element={<Notfound />} />
        <Route path="/menu" element={<Notfound />} />
        <Route path="/Deputize" element={<Notfound />} />
       
        <Route path="*" element={<Notfound />} />

      </Routes>


      {/* <Notfound /> */}
    </>
  );
}

export default Routings;