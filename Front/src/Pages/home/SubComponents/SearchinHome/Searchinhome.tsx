import { Search } from "iconoir-react";

import "./styling.scss"
import Input from "../../../../Components/input/input";
const SearchBar = () => {


    if (window.innerWidth < 1000) {
        return (
            <Input
                darkmode
                title='جست و تو' transparency='white'

                iconL={<Search color="black" />}
               
            />
        )
    } else {
        return (
            <></>
        )
    }
}

export default SearchBar;