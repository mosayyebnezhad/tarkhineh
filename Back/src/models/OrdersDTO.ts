import UserAddress from "./UserAddress";

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    id: { type: String, required: true },
    findingCode: { type: String, required: true },
    userId: { type: String, required: true },
    date: { type: String, required: true },
    foods: [
        {
            foodId: { type: String, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    address: { type: [UserAddress], required: true }, // آرایه‌ای از رشته‌ها
    payment: {
        type: { type: String, enum: ['پرداخت نقدی', 'کارت اعتباری'], required: true }, // گزینه‌های پرداخت
        price: { type: Number, required: true }
    },
    SendType: { type: String, enum: ['پیک', 'پست'], required: true }, // نوع ارسال
    status: { type: String, enum: ['پرداخت شده', 'در حال بررسی'], required: true }, // وضعیت سفارش
    DeliveryStatus: { type: String, enum: ['تحویل شده', 'در حال ارسال'], required: true }, // وضعیت تحویل
    comment: { type: String } // توجه: 'Cooemnt' اصلاح شد به 'comment'
});

export default mongoose.model("OrderSchema", OrderSchema)

