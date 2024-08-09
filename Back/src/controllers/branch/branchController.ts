import { Request, Response, Router } from 'express';

import BranchsDTO from '../../models/BranchsDTO';




const router = Router();



router.get('/', async (req: Request, res: Response) => {

    const Data = await BranchsDTO.find();


    return res.json(Data);


})


router.get('/:id', async (req: Request, res: Response) => {

    const { id } = req.params
    const Data = await BranchsDTO.findOne({ id: id });


    return res.json(Data);


})

router.post('/', async (req: Request, res: Response) => {

    const Data = req.body;

    if (!Data) return res.status(400).json({ message: "اطلاعاتی ارسال نشده است " });




    const OldData = await BranchsDTO.findOne({ id: Data.id })


    if (OldData) return res.status(409).json({ messge: "این آیدی تکراری است" })


    try {

        await BranchsDTO.create(Data);
        return res.status(200).json({ message: "شعبه با موفقیت ایجاد شد" });


    } catch {
        return res.status(400).json({ message: "عملیات با شکست رو به رو شد" });

    }

})

router.patch('/', async (req: Request, res: Response) => {

    const { id, name, time, address, image } = req.query


    if (!id) return res.status(400).json({ message: "ایدی ضروری است" });


    if (!name && !time && !address && !image) return res.status(400).json({ message: "حد اقل یکی از فیلد هارا پر کنید" })


    let QueryForSend: any = {};


    if (name) QueryForSend.name = name

    if (address) QueryForSend.address = address
    if (image) QueryForSend.image = image

    if (time) {

        let Times = String(time).split(" ")

        if (Times.length > 1) {
            QueryForSend.WorgingTimeStart = Times[0];
            QueryForSend.WorgingTimeEnd = Times[1];
        }

    }


    try {
        await BranchsDTO.findByIdAndUpdate(id, QueryForSend, { new: true })
        return res.status(200).json({ message: "شعبه با موفقیت به‌روزرسانی شد" })
    } catch {
        return res.status(400).json({ message: "عملیات با شکست رو به رو شد" })
    }





})

// id: { type: String, required: true },
// name: { type: String, required: true },
// address: { type: String, required: true },
// WorgingTimeStart: { type: Number, required: true },
// WorgingTimeEnd: { type: Number, required: true },




export default router