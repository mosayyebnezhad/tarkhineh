
import Slider from '../../Components/Slider/slider';
import Aboutrestrunt from './SubComponents/AboutResturant/aboutrestrunt';
import Findtarkh from './SubComponents/findTarkh/findtarkh';
import ResturantMenu from './SubComponents/ResturantMenu/RestruntMenu';
import SearchBar from './SubComponents/SearchinHome/Searchinhome';
const Home = () => {



    return (
        <>

            <Slider />
            <SearchBar />

            <ResturantMenu />
            <Aboutrestrunt />
            <Findtarkh />
        </>
    )
}


export default Home;

