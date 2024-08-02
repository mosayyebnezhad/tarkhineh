import { Request, Response, Router } from "express";
import OrdersDTO from "../../models/OrdersDTO";


const router = Router();



router.get("/", async (req: Request, res: Response) => {





    const Logic = req.query.userID;
    let Magic: any = {};


    if (Logic) Magic.userId = Logic


    const Data = await OrdersDTO.find(Magic);




    return res.json(Data);






})




router.post("/", async (req: Request, res: Response) => {

    const Data = req.body;


    try {

        await OrdersDTO.create(Data);
        return res.status(200).json({ message: "با موفقیت ایجاد شد" })
    } catch {
        return res.status(400).json({ message: "خطا در ایجاد" })
    }



})

export default router