import { json, NextFunction, Request, Response, Router } from "express";
import FoodDTO from "../../models/FoodDTO";
import UsersDTO from "../../models/UsersDTO";
import mongoose from "mongoose";
import AuthMiddleware from "../../middlewares/authmiddleware";


const router = Router();

interface ICom {
    UserId: String,
    comment: String,
    date: Date,
    _id: mongoose.Types.ObjectId
}

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


router.post("/", AuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {


    try {
        const Data = req.body
        const logic = await FoodDTO.findOne({ ID: Data.ID }).lean();

        if (logic) return res.status(409).send({ message: "آی دی اطلاعات تکراری است" })

        Data.CreateDate = Date.now();
        const Upload = await FoodDTO.create(Data);

        return res.status(200).send({ message: "اطلاعات با موفقیت ثبت شد" })
    }
    catch(err) {
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


router.post("/comment", async (req: Request, res: Response) => {
    // Comments: [
    //     {
    //         UserId: String,
    //         comment: String,
    //         date: String
    //     }
    // ],





    const { userID, comment, productID } = req.query;


    if (!userID && !comment && !productID) return res.status(400).json({ message: "اطلاعات ناقص است " });

    let food: any;

    try {
        food = await FoodDTO.findById(productID);
        if (!food) return res.status(400).json({ message: "عملیات یافتن اطلاعات بر اساس آیدی با مشکل رو به رو شد" });
    } catch {
        return res.status(400).json({ message: "عملیات یافتن اطلاعات بر اساس آیدی با مشکل رو به رو شد" });
    }


    const comments: any = food.Comments


    const outpot = comments.push({
        comment: comment,
        date: Date.now(),
        UserId: userID
    })

    const result = await FoodDTO.updateOne({
        Comments: comments
    })



    return res.status(200).json({ message: "عملیات با موفقیت انجام شد" });

})



router.delete("/comment", async (req: Request, res: Response) => {


    const { ID, foodID } = req.query

    if (!ID && !foodID) return res.status(400).json({ message: "اطلاعات ناقص است" })

    const food = await FoodDTO.findById(foodID);
    if (!food) return res.status(400).json({ message: "غذایی با این آیدی پیدا نشد" })

    const Comment = food.Comments.find(s => s._id == ID);
    if (!Comment) return res.status(400).json({ message: "کامنتی با این آیدی پیدا نشد" })

    const Icomments = food.Comments.filter(s => s._id != ID);


    const result = await FoodDTO.updateOne(
        { _id: foodID },
        { $set: { Comments: Icomments } })




    return res.status(200).json({ message: "با موفقیت حذف شد" })




})



router.patch("/comment", async (req: Request, res: Response) => {


    let query = req.query;


    const foodID: String = String(query.foodid);
    const commentID: String = String(query.commentid);
    const newCommentText: String = String(query.comment);


    if (!query.foodid || !query.commentid || !query.comment) {
        return res.status(400).json({ message: "اطلاعات ناقص است" });
    }

    try {
        // یافتن غذا
        const food = await FoodDTO.findById(foodID);
        if (!food) {
            return res.status(404).json({ message: "غذایی با این آیدی پیدا نشد" });
        }

        // یافتن کامنت و به‌روزرسانی آن
        const commentIndex = food.Comments.findIndex(c => String(c._id) === commentID);
        if (commentIndex === -1) {
            return res.status(404).json({ message: "کامنتی با این آیدی پیدا نشد" });
        }

        food.Comments[commentIndex].comment = String(newCommentText);

        // به‌روزرسانی سند در پایگاه داده
        await FoodDTO.updateOne(
            { _id: foodID },
            { $set: { Comments: food.Comments } }
        );

        return res.status(200).json({ message: "کامنت با موفقیت به‌روزرسانی شد" });
    } catch (error) {
        return res.status(500).json({ message: "خطا در به‌روزرسانی کامنت" });
    }


})





export default router;