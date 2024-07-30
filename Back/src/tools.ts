
import jwt from "jsonwebtoken";
const SECRET = "THISISMYSECRET"

export const ecnodetoken = (payload: any) => {
    const token = jwt.sign(payload, SECRET, { expiresIn: "30d" })

    return token;
}

export const decodtoken = (token: string) => {

    const decode = jwt.verify(token, SECRET)

    return decode;

}