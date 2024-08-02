
import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    id: String,
    findingCode: String,
    userId: String,
    date: Date,
    foods: [
        {
            foodId: String,
            quantity: Number
        }
    ],
    address: [String], // آرایه‌ای از رشته‌ها
    payment: {
        type: { type: String, enum: ['پرداخت نقدی', 'کارت اعتباری'], required: true }, // گزینه‌های پرداخت
        price: { type: Number, required: true }
    },
    SendType: { type: String, enum: ['پیک', 'پست'], required: true }, // نوع ارسال
    status: { type: String, enum: ['پرداخت شده', 'در حال بررسی'], required: true }, // وضعیت سفارش
    DeliveryStatus: { type: String, enum: ['تحویل شده', 'در حال ارسال'], required: true }, // وضعیت تحویل
    comment: String // توجه: 'Cooemnt' اصلاح شد به 'comment'
});




export default mongoose.model("Orders", OrderSchema)

