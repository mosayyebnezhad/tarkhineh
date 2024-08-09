import { ImgHTMLAttributes, useState } from "react";
import "./image.scss"
import Loading from '../Loading/Loading';


interface Propp extends ImgHTMLAttributes<HTMLImageElement> {
    path: string

    BeforTxt?: string
}

export const ImageGithub = (prop: Propp) => {
    let path = "https://raw.githubusercontent.com/mosayyebnezhad/mohammadmosayyeb.github.io/mohammadmosayyebnezahd/Projects/Tarkhineh/";


    let imageTitle = prop.path.split(".")[0];
    let beforTextinAltAndTitle = prop.BeforTxt ? prop.BeforTxt : "The image countain";
    let Alt = prop.alt ? prop.alt : beforTextinAltAndTitle + " " + imageTitle
    let Title = prop.alt ? prop.alt : beforTextinAltAndTitle + " " + imageTitle
    const image = path + prop.path;



    // console.log(document.documentElement.offsetHeight)
    const [load, setLoading] = useState(true);

    const Load = () => {

        setLoading(!load);
        // console.log("loaded")
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

                <img  {...prop} src={image} alt={Alt} title={Title} width={prop.width} height={prop.height} />
            }



        </>

    )
}

interface IProm extends ImgHTMLAttributes<HTMLImageElement> {

}
export const Image = (prop: IProm) => {

    const [load, setLoading] = useState(false);

    return (
        <>

            <img  {...prop} style={{ display: "none" }} onLoad={() => { setLoading(true)}} />



            {load ? <img {...prop} /> : <div className="image loading"></div>}

        </>
    )
}