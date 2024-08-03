import { NextFunction, Response } from "express";
import { decodtoken } from "../tools";
import Requestauthed from "../types/authTypes";







const AuthMiddleware = async (req: Requestauthed, res: Response, next: NextFunction) => {
    try {
        let token = req.headers.authorization;

        if (!token) return res.status(401).json({ message: "مشکلی در احراز هویت به وجود آمده است" });

        try {

            token = String(token).split(" ")[1]

            const data = decodtoken(token)
            req.id = data;
        } catch {
            return res.status(401).json({ message: "توکن نا معتبر است" });
        }

       
        return next();
    }
    catch (err: any) {
        next(err)
    }
}

export default AuthMiddleware;