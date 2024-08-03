import { Request } from "express";

interface Requestauthed extends Request {
    id: any;
}


export default Requestauthed