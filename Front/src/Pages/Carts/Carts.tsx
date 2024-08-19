import { CartAlt } from "iconoir-react"
import { appContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import api from "../../Api/api";
import { FoodMain, ICart } from "../../types/Puplictyps";
import { useCookies } from "react-cookie";


const Cart = () => {

    const { Cart, setCart } = useContext(appContext);

    const [cookies, setCookie, removeCookie] = useCookies(['Cart']);

    const [foods, addFoods] = useState<FoodMain[]>([])

    useEffect(() => {
        console.log(Cart)
        const Obj = {
            foods: Cart
        }
        const fetchData = async () => {
            await api.post("/food/many", Obj)
                .then(res => {
                    console.log(Obj)
                    addFoods(res.data)

                })
                .catch(err => console.log(err.response))
        }
        if (Cart.length > 0) { fetchData() } else {
            addFoods([])
        }

    }, [Cart])


    const { alert, setAlert } = useContext(appContext)
    const removeItem = (id: String) => {
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
            messageColor: "red",
        })
    }

    return (
        <>
            {foods && foods.map((item, index) => {
                return (
                    <div key={index}>
                        {item.name}
                        <div onClick={() => removeItem(item._id)}>Remove This Item</div>
                    </div>
                )
            })}
            welcome here
        </>
    )
}

export default Cart;