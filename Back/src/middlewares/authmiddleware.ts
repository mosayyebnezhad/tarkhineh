import { NextFunction } from "express";
import { decodtoken } from "../tools";

const AuthMiddleware = async (req: any, res: any, next: NextFunction) => {
    try {
        const token = req.headers.authorization;

        if (!token) return res.status(401).json({ message: "مشکلی در احراز هویت به وجود آمده است" });

        try {
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