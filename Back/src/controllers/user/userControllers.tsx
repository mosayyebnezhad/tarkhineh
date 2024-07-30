import express, { Router, Request, Response, NextFunction } from "express";
import UsersDTO from "../../models/UsersDTO";
import Shobeh from "../../models/BranchsDTO";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import AuthMiddleware from "../../middlewares/authmiddleware";

const router = Router()




router.get("/", async (req: Request, res: Response) => {

    let Data = await UsersDTO.find();


    return await res.json(Data);

})



router.get("/:id", async (req: Request, res: Response) => {




    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "آی دی وارده صحیح نمی باشد" })
    }




    let Data = await UsersDTO.findById(id);

    if (!Data) {
        return res.status(404).json({ message: "کاربر مورد نظر یافت نشد" })
    }


    // return await res.json(Data);
    return await res.json(Data);




})


router.post("/", AuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {




    try {
        let OldData = await UsersDTO.find();
        let data = await req.body;
        let message = "";
        let isExist = OldData.find(s => s.email === data.email)

        if (isExist) {
            return res.status(400).json({ message: "ایمیل وارد شده قبلا ثبت شده است" })
        }

        try {
            if (!data.email) return res.status(400).json({ message: "ایمیل را وارد کنید" })
            if (!data.password) return res.status(400).json({ message: "ورود رمز عبور را وارد کنید" })

            data.password = await bcrypt.hash(data.password, 10);
            UsersDTO.create(data)
            return res.status(200).json({ message: "کاربر با موفقیت ایجاد شد" })

        } catch {
            message = "فرایند ایجاد کاربر با خطا مواجه شد"
        }

        return res.json({
            "message": message
        });
    } catch (err) {
        next(err);
    }




})








export default router;
