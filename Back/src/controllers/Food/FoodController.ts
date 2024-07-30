import { Router } from "express";
import FoodDTO from "../../models/FoodDTO";


const router = Router();

// const Data = FoodDTO.create({
//     name: "Pizza",
//     price: {
//         priceView: "1600",
//     },
//     description: "موزیب"
// });

router.get("/", async (req, res) => {



    const Data = await FoodDTO.find().lean();
    return res.json(Data);
})


export default router;