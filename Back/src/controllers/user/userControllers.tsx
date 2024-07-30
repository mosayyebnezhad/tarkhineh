import express, { Router } from "express";
import UsersDTO from "../../models/UsersDTO";
import Shobeh from "../../models/ShobehDTO";

const router = Router()

router.get("/", async (req, res) => {

    // return res.json(Data.users);

    // const Data: any = UsersDTO.create({


    //     Addresses: ["Mohammadreza", "Ahmadreza"],
    //     birthDate: "2024",
    //     email: "mo@mo.io",
    //     family: "Gates",
    //     id: 1,
    //     name: "mohammad",
    //     phone: "09123456789",
    //     password: "123456",
    //     username: "mohammad123",
    //     YourLovely: {
    //         foods: [1, 6, 2, 3]
    //     },
    //     YourRating: {
    //         foods: [{
    //             foodID: "Nemidanam",
    //             Comment: "ملایمت",
    //             rate: 3
    //         },
    //         {
    //             foodID: "Nemidanam2",
    //             Comment: "ملایمت",
    //             rate: 3
    //         }],
    //         Shobe: [
    //             {
    //                 shobehID: "Nemidanam",
    //                 Comment: "ملایمت",
    //                 rate: 4
    //             },
    //             {
    //                 shobehID: "Nemidanam4",
    //                 Comment: "ملایمت",
    //                 rate: 4
    //             }
    //         ]
    //     }

    // })



        const Data = await UsersDTO.find();
    // console.log(UsersDTO.f)


    // Shobeh.find


    // return res.json(process.env.PORT);
    return res.json(Data);
})


export default router;
