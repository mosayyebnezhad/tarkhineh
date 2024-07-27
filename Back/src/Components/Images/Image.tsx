


interface Propp {
    path: string
    alt?: string
    BeforTxt?: string
}

const Image = (prop: Propp) => {
    let path = "https://raw.githubusercontent.com/mosayyebnezhad/mohammadmosayyeb.github.io/mohammadmosayyebnezahd/Projects/Tarkhineh/";


    let imageTitle = prop.path.split(".")[0];
    let beforTextinAltAndTitle = prop.BeforTxt ? prop.BeforTxt : "The image countain";
    let Alt = prop.alt ? prop.alt : beforTextinAltAndTitle + " " + imageTitle
    let Title = prop.alt ? prop.alt : beforTextinAltAndTitle + " " + imageTitle

    return (
        <img src={path + prop.path} alt={Alt} title={Title} />
    )
}

export default Image;