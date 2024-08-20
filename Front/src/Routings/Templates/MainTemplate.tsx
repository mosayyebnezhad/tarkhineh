import Alert from "../../Components/Alert/Alert";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/header/header";
import Slider from "../../Components/Slider/slider";

interface Iprop {
  Componenet: React.ReactNode;
}
export const Template = (prop: Iprop) => {
  return (
    <>
      <Header />
      <Slider />
      <Alert />
      {prop.Componenet}
      <Footer />

    </>
  )

}
export const Template2 = (prop: Iprop) => {
  return (
    <>
      <Header />
     
      <Alert />
      {prop.Componenet}
      <Footer />

    </>
  )

}
