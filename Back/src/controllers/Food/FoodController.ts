import { Router } from "express";


const router = Router();



router.get("/", (req, res) => {
    return res.json({ message: "API is running here is Foods" });
})


export default router;