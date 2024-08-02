import { NextFunction } from "express";
import { decodtoken } from "../tools";

const AuthMiddleware = async (req: any, res: any, next: NextFunction) => {
    try {
        let token = req.headers.authorization;

        if (!token) return res.status(401).json({ message: "مشکلی در احراز هویت به وجود آمده است" });

        try {

            token = String(token).split(" ")[1]

            const data = decodtoken(token)
        } catch {
            return res.status(401).json({ message: "توکن نا معتبر است" });
        }

        // req.user = data;
        return next();
    }
    catch (err: any) {
        next(err)
    }
}

export default AuthMiddleware;