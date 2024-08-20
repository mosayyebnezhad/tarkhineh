import Buttons from "../../../Components/Buttons/buttons";
import { Image, Image2 } from "../../../Components/Images/Image";
import { FoodMain } from "../../../types/Puplictyps";
import "./cartStyleFood.scss"
interface Iprop {
    key: any,
    food: FoodMain,
    removeHandler: () => void
}
const FoodInCart = (prop: Iprop) => {
    const { food, removeHandler } = prop;
    return (
        <div key={prop.key} className="Cartinfood">
            <Image src={`${food.Image}`} alt={`${food.name}`}
                style={{ height: "50%", }}
            />
            {/* <Image /> */}
            <h2>{food.name}</h2>
            <h4>{food.price.priceView}
                <span>تومان</span>
            </h4>
            <Buttons onClick={removeHandler} color="black">حذف</Buttons>
        </div>
    )
}

export default FoodInCart;