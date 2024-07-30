import { Router } from "express";
import router from '../user/userControllers';



router.get("/", (req, res) => {


    return res.json({
        "message": "We Cannot Connect to the Database", 
        "status": 500
    });
})




export default router;