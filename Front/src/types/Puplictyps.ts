export interface ILogin {
    islogin: boolean,
    username?: String,
    token?: String
}


export interface FoodMain {
    price: Price
    Rate: Rate
    _id: String
    ID: String
    name: String
    detail: String
    Image: String
    Branch: String
    RateID: String
    CommentID: String
    Category: String[]
    CreateDate: String

}

export interface Price {
    price: Number
    Off: Number
    solidPriceView: String
    priceView: String
}

export interface Rate {
    rating: Number
    count: Number
}

export interface ICart {
    id: String
}
