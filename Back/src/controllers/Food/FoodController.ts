import { Request, Router } from "express";
import FoodDTO from "../../models/FoodDTO";
import UsersDTO from "../../models/UsersDTO";


const router = Router();



router.get("/", async (req, res) => {



    const Data = await FoodDTO.find().lean();
    return res.json(Data);
})


router.post("/", async (req: Request, res) => {


    const Data = req.body
    const logic = await FoodDTO.findOne({ ID: Data.ID }).lean();

    if (logic) return res.status(409).send({ message: "آی دی اطلاعات تکراری است" })

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


router.get("/GetAllSmart", async (req: Request, res) => {

    const Query = req.query;

    const categori :String[] | null = Query.category ? String(Query.category).split(" ").map(s => s.trim()) : null;
    const searchParam :String | null = typeof Query.search === 'string' ? Query.search.trim() : null;
    // تبدیل startPrice و endPrice به عدد و تنظیم مقادیر پیش‌فرض
    const startPrice:number | null = !isNaN(Number(Query.startPrice)) ? Number(Query.startPrice) : null;
    const endPrice:number | null = !isNaN(Number(Query.endPrice)) ? Number(Query.endPrice) : null;

    // if(categori)
    // if(searchParam)
    // if(startPrice)
    // if(endPrice)


    // let Data = await FoodDTO.find(

    // ).where()

    return res.json({
        categori,
        searchParam,
        startPrice,
        endPrice
    })
})



export default router;