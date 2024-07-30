import { Router } from "express";

const router = Router();


router.get("/", (req, res) => {


    return res.json({
        "message": "We Cannot Connect to the Database", 
        
        "status": 500
    });
})




export default router;