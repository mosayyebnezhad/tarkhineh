function invertHexColor(hex: string): string {
    // حذف علامت # اگر وجود داشته باشد


    if (hex === "white") hex = "#ffffff";
    if (hex === "black") hex = "#f0f0f0";
    // if (hex === "white") hex = "#ffffff";
    // if (hex === "white") hex = "#ffffff";
    // if (hex === "white") hex = "#ffffff";
    // if (hex === "white") hex = "#ffffff";
    // if (hex === "white") hex = "#ffffff";



    hex = hex.replace(/^#/, '');

    // بررسی طول ورودی
    if (hex.length !== 6) {
        throw new Error('Invalid hex color length');
    }

    // تبدیل رنگ هگز به مقادیر RGB
    const r: number = parseInt(hex.substring(0, 2), 16);
    const g: number = parseInt(hex.substring(2, 4), 16);
    const b: number = parseInt(hex.substring(4, 6), 16);

    // معکوس کردن مقادیر RGB و تبدیل به هگز
    const rInv: string = (255 - r).toString(16).padStart(2, '0');
    const gInv: string = (255 - g).toString(16).padStart(2, '0');
    const bInv: string = (255 - b).toString(16).padStart(2, '0');

    // ترکیب مقادیر معکوس شده و اضافه کردن علامت #
    return `#${rInv}${gInv}${bInv}`;
}

export default invertHexColor;