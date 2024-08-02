import { json, Request, Response, Router } from "express";
import FoodDTO from "../../models/FoodDTO";
import UsersDTO from "../../models/UsersDTO";


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


router.post("/", async (req: Request, res: Response) => {


    const Data = req.body
    const logic = await FoodDTO.findOne({ ID: Data.ID }).lean();

    if (logic) return res.status(409).send({ message: "آی دی اطلاعات تکراری است" })

    Data.CreateDate = Date.now();
    const Upload = await FoodDTO.create(Data);

    return res.status(200).send({ message: "اطلاعات با موفقیت ثبت شد" })
})



router.put("/updatePrice", async (req: Request, res: Response) => {

    const { price: priceStr, off: offStr, productId } = req.query;

    // تبدیل مقادیر ورودی به عدد
    const price = Number(priceStr);
    const off = Number(offStr);

    // بررسی اعتبار ورودی‌ها
    if (!productId) {
        return res.status(400).json({ message: "لطفا آی دی را ورد کنید" });
    }
    if (!priceStr) {
        return res.status(400).json({ message: "لطفا قیمت را وارد کنید" });
    }

    if (isNaN(price)) {
        return res.status(400).json({ message: "عددی که برای قیمت وارد کردید صحیح نمی باشد" });
    }

    if (isNaN(off)) {
        return res.status(400).json({ message: "عددی که برای تخفیف وارد کردید صحیح نمی باشد" });
    }

    // محاسبه قیمت با تخفیف
    const priceView = price - (price * (off / 100));

    try {
        // به‌روزرسانی پایگاه داده
        const result = await FoodDTO.updateOne(
            { _id: productId },
            {
                $set: {
                    price: {
                        priceView: String(priceView),
                        solidPriceView: String(price),
                        price: price,
                        Off: off
                    }
                }
            }
        );

        return res.status(200).json({ message: "به‌روزرسانی موفقیت‌آمیز بود", result });
    } catch (error) {
        // مدیریت خطا
        return res.status(500).json({ message: "خطایی در به‌روزرسانی پایگاه داده رخ داد", error });
    }

})

router.put("/NameDetail", async (req: Request, res: Response) => {

    const { name, detail, productID } = req.query;



    // بررسی اعتبار ورودی‌ها
    if (!productID) {
        return res.status(400).json({ message: "آیدی ضروری است" });
    }
    if (!name && !detail) {
        return res.status(400).json({ message: "حد اقل یکی را وارد کنید" });
    }


    try {

        let updatefiled: any = {}


        if (name) {
            updatefiled.name = name
        }

        if (detail) {
            updatefiled.detail = detail
        }

        console.log(updatefiled)

        // به‌روزرسانی پایگاه داده
        const result = await FoodDTO.updateOne(
            { _id: productID },
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








export default router;