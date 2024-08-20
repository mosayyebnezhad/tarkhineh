import { useContext } from "react"
import { useCookies } from "react-cookie"
import { appContext } from "../App"

interface Iprop {
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

export const useAlert = () => {
    const [cookies, setCookie, WremoveCookie] = useCookies(['Cart']);
    const { Cart, setCart, setAlert, Walert } = useContext(appContext)


    const Add = (prop: Iprop) => {
        const Prid = prop.productId;






        if (!Cart.includes(Prid)) {
            setAlert({
                message: prop.name + "  " + " به سبد خرید اضافه شد!",
                messageColor: "green",
            })
            const updatedCart = [...Cart, Prid];

            console.log(Cart);
            setCart(updatedCart); // به‌روزرسانی State
            setCookie('Cart', JSON.stringify(updatedCart), { path: '/' }); // ذخیره‌سازی در کوکی
        }

        console.log(prop)
    }


    const Remove = (id: String) => {

        console.log(id)
        const CartArray: string[] = Cart;
        console.log()
        let updatedCart = CartArray.filter(s => s !== id);
        setCart(updatedCart)
        console.log(updatedCart)
        console.log(Cart)
        //remove from cart state



        //remove from cookie

        setCookie('Cart', JSON.stringify(updatedCart), { path: '/' });

        setAlert({
            message: " " + "با موفقیت حذف شد!",
            messageColor: "Orange",
        })


    }


    const Create = (Text: String, Color: String) => {

       
        setAlert({
            message: Text,
            messageColor: Color,
        })


    }

    return {
        Add,
        Remove,
        Create
    }

}



export const useRemoveAlert = () => {

    console.log("use remove alert called")
    return null

}