import express, { Router, Request, Response } from "express";
import UsersDTO from "../../models/UsersDTO";
import Shobeh from "../../models/BranchsDTO";
import mongoose from "mongoose";

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


router.post("/", async (req: Request, res: Response) => {




    let OldData = await UsersDTO.find();
    let data = await req.body;
    let message = "";
    let isExist = OldData.find(s => s.email === data.email)

    if (isExist) {
        return res.status(400).json({ message: "ایمیل وارد شده قبلا ثبت شده است" })
    }

    try {
        if (!data.email) return res.status(400).json({ title: "Email Is Defind", message: "این ایمیل هست" })
        UsersDTO.create(data)
        message = "کاربر با موفقیت ایجاد شد"
    } catch {
        message = "فرایند ایجاد کاربر با خطا مواجه شد"
    }







    return res.json({
        "message": message
    });




})








export default router;
