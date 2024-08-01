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


interface ISet {
    status: Number,
    message: String
}

router.put("/updatePrice", async (req: Request, res: Response) => {

    let setution: ISet = {
        status: 200,
        message: "ok"
    };

    const price: String = String(req.query.price);
    const off: String = String(req.query.off);


    if (!price) {
        setution = {
            status: 400,
            message: "لطفا قیمت را وارد کنید"
        }

    } else {
        if (isNaN(Number(price))) {
            setution = {
                status: 400,
                message: "عددی که برای قیمت وارد کردید صحیح نمی باشد"
            }

        }
        if (isNaN(Number(off))) {
            setution = {
                status: 400,
                message: "عددی که برای قیمت وارد کردید صحیح نمی باشد"
            }

        }
    }




    if (setution["status"] === 200) {

        // if (!isNaN(Number(price))) {

        //     console.log(" thi is found")
        // }else{
        //     console.log("how")
        // }
        // const Nprice = Number(price)
        // const Noff = Number(off)


        // const productID = req.query.productId;



        // let priceView = 0;


        // priceView = Nprice * Noff / 100


        // const result = await FoodDTO.updateOne(
        //     { _id: productID },
        //     {
        //         $set:
        //         {
        //             price: {
        //                 priceView: String(priceView),
        //                 solidPriceView: String(price),
        //                 price: price,
        //                 Off: off
        //             }
        //         }
        //     }
        // )


        return res.send(200).json({ message: "hi" })
        // return res.json({ message: result })
    } else {
        return res.send(setution["status"]).json({ message: setution["message"] })
    }


})







export default router;