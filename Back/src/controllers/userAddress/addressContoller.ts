import { Request, Response, Router ,NextFunction} from 'express';

import addressDTO from '../../models/addressDTO';
import AuthMiddleware from '../../middlewares/authmiddleware';
import Requestauthed from '../../types/authTypes';



const router = Router();



router.get('/',AuthMiddleware, async (req: Requestauthed, res: Response, next: NextFunction) => {
    try {

        const Logic = req.query.userID;
        let Magic: any = {};


        if (Logic) Magic.userID = Logic


        const Data = await addressDTO.find(Magic);
        return res.json(Data);
    } catch (err) {
        next(err)
    }

})

router.post("/", async (req: Request, res: Response) => {
    const Data = req.body;


    try {
        await addressDTO.create(Data)
        return res.status(200).json({ message: "با موفقیت ایجاد شد" })
    } catch {
        return res.status(400).json({ message: "عملیات با خطا مواجع شد‌" })
    }



})

router.patch('/', async (req: Request, res: Response) => {

    const { id, city, address, phone } = req.query


    if (!id) return res.status(400).json({ message: "ایدی ضروری است" });


    if (!city && !address && !phone) return res.status(400).json({ message: "حد اقل یکی از فیلد هارا پر کنید" })


    let QueryForSend: any = {};


    if (city) QueryForSend.city = city
    if (phone) QueryForSend.phone = phone
    if (address) QueryForSend.address = address



    try {
        await addressDTO.findByIdAndUpdate(id, QueryForSend, { new: true })
        return res.status(200).json({ message: "شعبه با موفقیت به‌روزرسانی شد" })
    } catch {
        return res.status(400).json({ message: "عملیات با شکست رو به رو شد" })
    }





})


// userID: String,
// city: String,
// phone: String,


export default router