import express, { Router, Request, Response, NextFunction } from "express";
import UsersDTO from "../../models/UsersDTO";
import bcrypt from 'bcryptjs';
import { ecnodetoken } from "../../tools";
import AuthMiddleware from "../../middlewares/authmiddleware";

const router = Router()

interface UserLogin {

    email: String,
    password: String
}




router.get("/", async (req: any, res: any) => {


    let Data: UserLogin = req.body;

    if (!Data.email || !Data.password) return res.status(400).json({ message: "اطلاعات وارد شده نامعتبر است" })
    let user = await UsersDTO.findOne({ email: Data.email }).lean();

    if (!user) return res.status(400).json({ message: "کاربری با این مشخصات یافت نشد" })

    const compare = await bcrypt.compare(String(Data.password), user.password);

    if (!compare) return res.status(400).json({ message: "رمز عبور نا درست است" })


    const token = ecnodetoken({ email: user.email })



    const { _id, password, ...safeUser } = await user;

    return await res.json({
        token: token,
        user: safeUser

    });
}


)







export default router;
