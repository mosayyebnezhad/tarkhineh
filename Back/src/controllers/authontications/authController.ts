import express, { Router, Request, Response, NextFunction } from "express";
import UsersDTO from "../../models/UsersDTO";
import bcrypt from 'bcryptjs';
import { ecnodetoken } from "../../tools";

const router = Router()

interface UserLogin {

    email: String,
    password: String
}


interface LoginSimply {

    phone: String,
    authCode: String
}
interface exist {

    phone: String
}




router.get("/", async (req: any, res: any) => {


    let Data: UserLogin = req.body;

    if (!Data.email || !Data.password) return res.status(400).json({ message: "اطلاعات وارد شده نامعتبر است" })
    let user = await UsersDTO.findOne({ email: Data.email }).lean();

    if (!user) return res.status(400).json({ message: "کاربری با این مشخصات یافت نشد" })

    const compare = await bcrypt.compare(String(Data.password), String(user.password));

    if (!compare) return res.status(400).json({ message: "رمز عبور نا درست است" })


    const token = ecnodetoken({ id: user._id })



    const { _id, password, ...safeUser } = await user;

    return await res.json({
        token: token,
        user: safeUser

    });
}


)


router.post("/", async (req: any, res: any) => {


    let Data: LoginSimply = req.body;

    if (!Data.phone || !Data.authCode) return res.status(400).json({ message: "اطلاعات وارد شده نامعتبر است" })

    let user = await UsersDTO.findOne({ phone: Data.phone }).lean();

    if (user) return res.status(409).json({ message: "شماره همراه شما قبلا ثبت شده است" })


    try {
        await UsersDTO.create({
            phone: Data.phone,
            authCode: Data.authCode,
            CreateDate: Date.now()
        })



        return res.status(200).json({ message: "با موفقیت ایجاد شد" })
    }
    catch (err) {
        return res.status(400).json({
            message: "عملیات با شکست مواجع شده",
            Error: err
        })
    }


}


)
router.post("/exist", async (req: any, res: any) => {


    let Data: exist = req.body;

    if (!Data.phone) return res.status(400).json({ message: "اطلاعات وارد شده نامعتبر است" })

    let user = await UsersDTO.findOne({ phone: Data.phone }).lean();

    if (user) return res.status(409).json({ message: "شماره همراه شما قبلا ثبت شده است" })

    if (Data.phone.length == 11) return res.status(200).json({ message: "ایجاد کاربر بلا مانع است" })




    return res.status(400).json({ message: "تعداد کاراکتر مورد تایید نمی باشد" })



}


)

router.post("/AuthCodeauthorized", async (req: any, res: any) => {


    let Data: LoginSimply = req.body;

    if (!Data.phone || !Data.authCode) return res.status(400).json({ message: "اطلاعات وارد شده نامعتبر است" })

    try {
        let user = await UsersDTO.findOne({ phone: Data.phone }).lean();
        if (user.authCode != Data.authCode) return res.status(409).json({ message: "کد ارسالی برابر نیست!" })
            return res.status(200).json({ message: "کد ارسالی کاملا درست است!" })
    }
    catch {
        return res.status(400).json({ message: "شماره موبایل وارده در دیتابیس وجود ندارد" })
    }











}


)









export default router;
