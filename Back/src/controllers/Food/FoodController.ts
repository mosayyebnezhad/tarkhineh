import { Request, Router } from "express";
import FoodDTO from "../../models/FoodDTO";
import UsersDTO from "../../models/UsersDTO";


const router = Router();



router.get("/", async (req: Request, res) => {

    const Query = req.query;
    console.log(Query.category)
    console.log(Query.search)

    const categori: any | null = Query.category ? String(Query.category).split(" ").map(s => s.trim()) : null;
    const searchParam: any | null = Query.search ? String(Query.search).split(" ").map(s => s.trim()) : null;

    // const searchParam: any | null = typeof Query.search === 'string' ? String(Query.search).split(" ").map(s => s.trim())  : null;




    
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


    if (SortDetail[1] === "0") Ordering = -1

    switch (SortDetail[0]) {
        case "price":
            sortW["price.price"] = Ordering;
            break
        case "date":
            sortW["CreateDate"] = Ordering;
            break
    }



    let Data: Array<any> = await FoodDTO.find(filters).sort(sortW);

    let len = Data.length




    return res.json({
        filters,
        len,
        Data
    })
    // return res.json(Data)
})


router.post("/", async (req: Request, res) => {


    const Data = req.body
    const logic = await FoodDTO.findOne({ ID: Data.ID }).lean();

    if (logic) return res.status(409).send({ message: "آی دی اطلاعات تکراری است" })

    Data.CreateDate = Date.now();
    const Upload = await FoodDTO.create(Data);

    return res.status(200).send({ message: "اطلاعات با موفقیت ثبت شد" })
})

router.get("/Category", async (req: Request, res) => {

    const searchParam = req.query.search || '';
    if (!searchParam) return res.status(400).send({ message: "اطلاعات نا کافی است" })

    // Convert To Array
    let Data = String(searchParam).split(" ").map(s => s.trim())


    // And
    const Find = await FoodDTO.find({ Category: { $all: Data } }).lean();

    // Or
    // const Find = await FoodDTO.find({ Category: { $in: ["نهار","خوراک"] } }).lean();


    return res.json(Find);
})


router.get("/Name", async (req: Request, res) => {

    const searchParam = req.query.search || '';
    if (!searchParam) return res.status(400).send({ message: "اطلاعات نا کافی است" })


    const Find = await FoodDTO.find({
        $or: [
            { name: { $regex: searchParam, $options: 'i' } },
            { detail: { $regex: searchParam, $options: 'i' } }
        ]
    }).lean();




    return res.json(Find);
})


router.get("/Price", async (req: Request, res) => {

    const startPrice = req.query.start || 0;
    const endPrice = req.query.end || Infinity;
    if (!startPrice && !endPrice) return res.status(400).send({ message: "اطلاعات نا کافی است" })


    const Find = await FoodDTO.find({ "price.price": { $gte: startPrice, $lte: endPrice } }).lean();




    return res.json(Find);
})






export default router;