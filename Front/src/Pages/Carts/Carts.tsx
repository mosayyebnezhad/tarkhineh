
import { appContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import api from "../../Api/api";
import { FoodMain } from "../../types/Puplictyps";

import { useAlert } from "../../hook/useAlert";
import FoodInCart from "./Components/CartFoods";
import Buttons from "../../Components/Buttons/buttons";
import { HandCard, Paypal } from "iconoir-react";
import { VideoPlay } from "iconsax-react";


const Cart = () => {
    const Hoock = useAlert()
    const { Cart, Login } = useContext(appContext);


    const [foods, addFoods] = useState<FoodMain[]>([])
    const [Price, SetPrice] = useState<number>(0)

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


    const removeItem = (id: String) => {
        Hoock.Remove(id)
    }



    useEffect(() => {

        const totalPrice = foods.reduce((total, item) => {
            // return total + (Number(item.price.price) * Number(item.price.Off) / 100);
            return total + Number(item.price.priceView);



        }, 0);
        SetPrice(totalPrice)
        console.log(foods)
        console.log(totalPrice)

    }, [foods])



    const registerhanlder = () => {
        Hoock.Create("سفارش شما مثلا ثبت شد 😆" , "violet")
    }

    const registerhanlderNosign = () => {
        Hoock.Create("ابتدا وارد حساب خود شوید !" , "red")
    }
    return (
        <>
            <div className="containerCart">
                {foods && foods.map((item, index) => {
                    return (

                        <FoodInCart key={index} food={item} removeHandler={() => removeItem(item._id)} />
                    )
                })}
            </div>



            <div className="Submit">



                <div className="ShowPrice">
                    جمع محصولات شما : {Price} تومان

                    <HandCard />
                </div>
                {Login.islogin ?


                    <Buttons onClick={registerhanlder}>
                        ثبت سفارش
                    </Buttons>
                    :
                    <Buttons onClick={registerhanlderNosign} color="primery" Style="fill">
                        !لطفا ثبت نام کنید
                    </Buttons>

                }

            </div>
        </>
    )
}

export default Cart;