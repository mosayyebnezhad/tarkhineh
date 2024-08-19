import { Heart, Star1, } from "iconsax-react"
import "./food.scss"
import Buttons from "../Buttons/buttons"
import { useContext, useEffect, useState } from "react"
import { appContext } from "../../App"
import { useCookies } from "react-cookie"

interface IFood {
    image?: string
    name?: string
    title?: string
    off?: string
    price?: number
    solidPrice?: string
    rate?: number
    ratecount?: number
    loading?: boolean
    productId?: string
}

const Food = (prop: IFood) => {
    let size: 40 | 32 = 40
    if (window.innerWidth < 768) {
        size = 32;
    }
    const [loaded, setLoaded] = useState(false)

    const handleLoad = () => {
        setLoaded(true)
    }

    const { Cart, setCart, setAlert, alert } = useContext(appContext)



    const [cookies, setCookie, removeCookie] = useCookies(['Cart']);

    const [isExistInCart, changeExisting] = useState(false)


    useEffect(() => {

        if (Cart.includes(prop.productId)) changeExisting(true)
    }, [Cart])

    const AddToCart = () => {
        const IDD = prop.productId;
        if (!Cart.includes(IDD)) {
            setAlert({
                message: prop.name + "  " + " به سبد خرید اضافه شد!",
                messageColor: "green",
            })
            const updatedCart = [...Cart, IDD];

            console.log(Cart);
            setCart(updatedCart); // به‌روزرسانی State
            setCookie('Cart', JSON.stringify(updatedCart), { path: '/' }); // ذخیره‌سازی در کوکی
        }


        // setCart([...Cart, prop.productId]);
        // // removeCookie('Cart', { path: '/' });

        // const Datas : string[] = [...Cart , prop.productId];


        // setCookie('Cart', JSON.stringify(Datas), { path: '/' });

        // // console.log('setted', Datas)
    }
    if (prop.loading) {

        return (
            <div className={`foodCase loadingFood`}>
                <div className="Foodimage"></div>
                <div className="title">{prop.title}</div>
                <div className="details">

                    <div className="Oldprice">
                    </div>
                    <div className="addtolike">

                    </div>

                    <div className="Price">

                    </div>

                    <div className="rating">

                    </div>


                </div>


                <Buttons


                    size={size}

                >

                </Buttons>
            </div>
        )


    } else {



        return (
            <div className={`foodCase`}>

                <img style={{ display: "none" }} onLoad={handleLoad} src={prop.image} alt={""} />
                {loaded ?
                    <img className="Foodimage" src={prop.image} alt={prop.name} /> :
                    <div className="Foodimage imgldr"></div>}

                <div className="title">{prop.title}</div>
                <div className="details">

                    <div className="Oldprice">
                        <span className="off">%{prop.off}</span>
                        <span className="solidPrice">{prop.solidPrice}</span>
                    </div>
                    <div className="addtolike">
                        <span className="addtext">افزودن به علافه مندی ها</span>
                        <Heart />
                    </div>

                    <div className="Price">
                        <span>تومان</span>
                        <span> {prop.price}</span>
                    </div>

                    <div className="rating">

                        <p className="ratingDetail">
                            (
                            <span>
                                {prop.ratecount}
                            </span>
                            <span>
                                امتیاز
                            </span>
                            )
                        </p>
                        <span className="NumberOfRating">
                            {prop.rate}
                        </span>

                        <Star1 />
                    </div>


                </div>


                <Buttons

                    onClick={AddToCart}
                    size={size}
                    Style="fill"
                    color="primery"
                    disable={isExistInCart}
                >
                    {isExistInCart ? "در سبد شما موجود است" : " افزودن به سبد خرید"}

                </Buttons>
            </div>
        )
    }
}


export default Food;