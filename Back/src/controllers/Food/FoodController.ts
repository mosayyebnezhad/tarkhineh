import { json, NextFunction, Request, Response, Router } from "express";
import FoodDTO from "../../models/FoodDTO";
import UsersDTO from "../../models/UsersDTO";
import mongoose from "mongoose";
import AuthMiddleware from "../../middlewares/authmiddleware";
import commentDTO from "../../models/commentDTO";
import rateDTO from "../../models/rateDTO";
import Requestauthed from "../../types/authTypes";


const router = Router();


router.get("/", async (req: Request, res: Response) => {

    const Query = req.query;







    const categori: any | null = Query.category ? String(Query.category).split(" ").map(s => s.trim()) : null;
    const searchParam: String | null = Query.search ? String(Query.search) : null;




    // تبدیل startPrice و endPrice به عدد و تنظیم مقادیر پیش‌فرض
    const startPrice: number | null = !isNaN(Number(Query.startPrice)) ? Number(Query.startPrice) : 0;
    const endPrice: number | null = !isNaN(Number(Query.endPrice)) ? Number(Query.endPrice) : Infinity;

    // if(categori)
    // if(searchParam)
    // if(startPrice)
    // if(endPrice)

    let filters: any = {};

    if (categori) {
        filters.Category = { $all: categori };
    }

    if (searchParam) {
        filters.$or = [
            { name: { $regex: searchParam, $options: 'i' } },
            { detail: { $regex: searchParam, $options: 'i' } }
        ];
    }


    filters["price.price"] = { $gte: startPrice, $lte: endPrice };


    // let Data = filters;
    // let Data: Array<any> = await FoodDTO.find(filters).sort({ "price.price": 1 });

    let SortDetail = String(Query.sort).split(" ").map((s) => s.trim())
    let sortW: any = {};
    let Ordering = 1

    console.log(SortDetail)
    if (SortDetail[1] === "0") Ordering = -1

    switch (SortDetail[0]) {
        case "price":
            sortW["price.price"] = Ordering;
            break
        case "date":
            sortW["CreateDate"] = Ordering;
            break
        case "udate":
            sortW["UpdateDate"] = Ordering;
            break
    }



    let Data: Array<any> = await FoodDTO.find(filters).sort(sortW);

    let len = Data.length








    // const output = {
    //     status:200,
    //     message: "اطلاعات با موفقیت دریافت شد",
    //     data: Data
    // }

    return res.status(200).json(Data)

    // return res.json(Data)
})


router.get("/One", async (req: Request, res: Response) => {
    const Query = req.query;

    if (Query.productID) {

        try {
            const Data = await FoodDTO.findById(Query.productID)



            if (Data) return res.status(200).json(Data)
            return res.status(404).json({ message: "اطلاعاتی یافت نشد" })
        }
        catch {
            return res.status(404).json({ message: "اطلاعاتی یافت نشد" })
        }
    }


    return res.status(400).json({ message: "آیدی ضروری است" })

})


router.post("/Many", async (req: Request, res: Response) => {
    const Body = req.body;

    if (Body.foods) {

        const foodsId = Body.foods;



        try {
            const Data = await FoodDTO.find({
                _id: { $in: foodsId }
            })



            if (Data) return res.status(200).json(Data)
            return res.status(404).json({ message: "اطلاعاتی یافت نشد" })


        }
        catch {
            return res.status(404).json({ message: "اطلاعاتی یافت نشد" })
        }
    }


    // return res.status(400).json({ message: "آیدی ضروری است" })
    return res.status(400).json({ message: Body.foods })

})







router.post("/", AuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {


    try {
        const Data = req.body
        const logic = await FoodDTO.findOne({ ID: Data.ID }).lean();

        if (logic) return res.status(409).send({ message: "آی دی اطلاعات تکراری است" })

        Data.CreateDate = Date.now();


        // Data['Rate.rating'] = 0
        // Data['Rate.count'] = 0
        Data['RateID'] = new mongoose.mongo.ObjectId();
        Data['CommentID'] = new mongoose.mongo.ObjectId();

        Data['price.solidPriceView'] = String(Data.price.price)

        const price = Data.price.price - (Data.price.price * Data.price.Off / 100)
        Data['price.priceView'] = String(price)

        const Upload = await FoodDTO.create(Data);

        return res.status(200).send({ message: "اطلاعات با موفقیت ثبت شد" })





    }
    catch (err) {
        next(err)
    }
})
router.post("/Lsit", AuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {


    try {
        // const Data = req.body;
        const { body: Data } = req;

        Data


    }
    catch (err) {
        next(err)
    }
})


router.patch("/edit", async (req: Request, res: Response) => {


    const { price: priceStr, name, detail, image, Category, productId } = req.query;
    // price , name , detail , Category
    let updatefiled: any = {}

    if (!productId) {
        return res.status(400).json({ message: "آیدی ضروری است" });
    }





    if (priceStr) {
        let Price = Number(String(priceStr).split(" ")[0])
        let Off = Number(String(priceStr).split(" ")[1])



        if (isNaN(Price)) {
            return res.status(400).json({ message: "عددی که برای قیمت وارد کردید صحیح نمی باشد" });
        }

        if (isNaN(Off)) {
            Off = 0;
        }

        const PriceWithOff = Price - (Price * (Off / 100));


        updatefiled.price = {
            priceView: String(PriceWithOff),
            solidPriceView: String(Price),
            price: Price,
            Off: Off
        }



    }


    if (name) {
        updatefiled.name = name
    }
    if (detail) {
        updatefiled.detail = detail
    }
    if (image) {
        updatefiled.Image = image
    }
    if (Category) {

        const Cat = String(Category).split(" ").map(s => s.trim())


        updatefiled.Category = Cat
    }





    try {


        console.log(updatefiled)

        // به‌روزرسانی پایگاه داده
        const result = await FoodDTO.updateOne(
            { _id: productId },
            {
                $set: updatefiled
            }
        );

        return res.status(200).json({ message: "به‌روزرسانی موفقیت‌آمیز بود", result });
    } catch (error) {
        // مدیریت خطا
        return res.status(500).json({ message: "خطایی در به‌روزرسانی پایگاه داده رخ داد", error });
    }

})


router.get("/comments", async (req: Request, res: Response) => {


    const { commentID: cmtid, UserID: usrid } = req.query;

    let Logic: any = {};

    if (cmtid && usrid) {
        Logic = {
            $and: [
                { CommentID: cmtid },
                { userID: usrid }
            ]
        };
    } else {
        if (cmtid) Logic.CommentID = cmtid;
        if (usrid) Logic.userID = usrid;
    }

    try {
        const Data = await commentDTO.find(Logic);
        return res.json(Data);
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving data", error });
    }

})

router.post("/comments", async (req: Request, res: Response) => {


    const Data = req.body;



    try {
        await commentDTO.create(Data)

        return res.status(200).json({ message: "ارسال موفق" })
    } catch {
        return res.status(400).json({ message: "ارسال نا موفق" })
    }





})
router.patch("/comments", async (req, res) => {

    const { id } = req.query;

    if (!id) return res.status(400).json({ message: "آیدی ضروری است" })

    const { comment } = req.body;
    if (!comment) return res.status(400).json({ message: "محتوای کامنت دریافت نشد" })



    try {
        await commentDTO.findByIdAndUpdate(id,
            { commentText: comment }
        )



        return res.status(200).json({ message: "با موفقیت تغییر کرد" });

    }
    catch {
        return res.status(400).json({ message: "محتوای کامنت دریافت نشد" })
    }



})

router.delete("/comments", async (req: Request, res: Response) => {


    const { ID } = req.query



    try {
        await commentDTO.findByIdAndDelete(ID);

        return res.status(200).json({ message: "با موفقیت حذف شد" });

    }
    catch {
        return res.status(400).json({ message: "اشکالی در کار وجود!" })
    }


})






router.get("/rate", AuthMiddleware, async (req: Requestauthed, res: Response, next: NextFunction) => {


    // const { commentID: cmtid, UserID: usrid } = req.query;

    // let Logic: any = {};

    // if (cmtid && usrid) {
    //     Logic = {
    //         $and: [
    //             { CommentID: cmtid },
    //             { userID: usrid }
    //         ]
    //     };
    // } else {
    //     if (cmtid) Logic.CommentID = cmtid;
    //     if (usrid) Logic.userID = usrid;
    // }

    // try {
    //     const Data = await commentDTO.find(Logic);
    //     return res.json(Data);
    // } catch (error) {
    //     return res.status(500).json({ message: "Error retrieving data", error });
    // }






    try {


        try {

            const UserID = req.id.id
            const Myrates = await FoodDTO.find({ userID: UserID })
            console.log(UserID)

            if (!Myrates) return res.status(404).json({ message: "چیزی پیدا نشد" })

            return res.json(Myrates)

        } catch {
            return res.status(404).json({ message: "اطلاعات ناقص" })
        }


    } catch (err) {
        next(err)
    }





})


router.post("/rate", AuthMiddleware, async (req: Requestauthed, res: Response, next: NextFunction) => {

    try {


        const Data = req.body;
        const UserID = req.id.id


        const User = await UsersDTO.findById(Data.userID);

        const TargetFood = await FoodDTO.findOne({ RateID: Data.RateID })


        const isConflict = await rateDTO.exists({
            $and: [
                { RateID: Data.RateID },
                { userID: UserID }
            ]
        });


        if (isConflict) return res.status(409).json({ message: "این کاربر قبلا برای این مورد نظر ثبت کرده است" })




        try {

            Data.userID = UserID;
            await rateDTO.create(Data)

            return res.status(200).json({ message: "ارسال موفق" })
        } catch {
            return res.status(400).json({ message: "ارسال نا موفق" })
        }


    } catch (err) {
        next(err)
    }


})

// router.patch("/rate", async (req, res) => {

//     const { id } = req.query;

//     if (!id) return res.status(400).json({ message: "آیدی ضروری است" })

//     const { comment } = req.body;
//     if (!comment) return res.status(400).json({ message: "محتوای کامنت دریافت نشد" })



//     try {
//         await commentDTO.findByIdAndUpdate(id,
//             { commentText: comment }
//         )



//         return res.status(200).json({ message: "با موفقیت تغییر کرد" });

//     }
//     catch {
//         return res.status(400).json({ message: "محتوای کامنت دریافت نشد" })
//     }



// })


// router.delete("/rate", async (req: Request, res: Response) => {


//     const { ID } = req.query



//     try {
//         await commentDTO.findByIdAndDelete(ID);

//         return res.status(200).json({ message: "با موفقیت حذف شد" });

//     }
//     catch {
//         return res.status(400).json({ message: "اشکالی در کار وجود!" })
//     }


// })





export default router;