
import Slider from '../../Components/Slider/slider';
import Aboutrestrunt from './SubComponents/AboutResturant/aboutrestrunt';
import Findtarkh from './SubComponents/findTarkh/findtarkh';
import ResturantMenu from './SubComponents/ResturantMenu/RestruntMenu';
const Home = () => {
    return (
        <>

            <Slider />
            <ResturantMenu/>
            <Aboutrestrunt/>
            <Findtarkh/>
        </>
    )
}


export default Home;