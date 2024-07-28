import { useState } from "react";
import "./image.scss"


interface Propp {
    path: string
    alt?: string
    width?: string
    height?: string
    BeforTxt?: string
}

const Image = (prop: Propp) => {
    let path = "https://raw.githubusercontent.com/mosayyebnezhad/mohammadmosayyeb.github.io/mohammadmosayyebnezahd/Projects/Tarkhineh/";


    let imageTitle = prop.path.split(".")[0];
    let beforTextinAltAndTitle = prop.BeforTxt ? prop.BeforTxt : "The image countain";
    let Alt = prop.alt ? prop.alt : beforTextinAltAndTitle + " " + imageTitle
    let Title = prop.alt ? prop.alt : beforTextinAltAndTitle + " " + imageTitle
    const image = path + prop.path;



    console.log(document.documentElement.offsetHeight)
    const [load, setLoading] = useState(true);

    const Load = () => {

        setLoading(!load);
        console.log("loaded")
    }

    return (
        <>
            <img src={image} alt={Alt} style={{ display: "none" }} title={Title} onLoad={Load} />

            {load ?
                <div className="loading" style={{
                    width: prop.width,
                    height: prop.height,
                    // height: document.documentElement.offsetHeight + "px",
                 
                }}></div>
                :
                
                <img src={image} alt={Alt} title={Title} width={prop.width} height={prop.height} />
            }



        </>

    )
}

export default Image;