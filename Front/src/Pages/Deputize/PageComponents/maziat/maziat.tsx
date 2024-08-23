import "./maziat.scss"
const Maziat = () => {


    return (
        <div className="CountainterInMaziat">



            <div className="leftDrive">
                {DataL.map((item, index) => {
                    return (
                        <div className="Titles" key={index}>
                            <Iconhere />
                            <p> {item}</p>

                        </div>
                    )
                })}
            </div>
            <div className="RightDrive">
                {DataR.map((item, index) => {
                    return (
                        <div className="Titles" key={index}>
                            <Iconhere />
                            <p> {item}</p>

                        </div>
                    )
                })}
            </div>



        </div>
    )
}

export default Maziat;



const Iconhere = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.414214" y="10" width="14" height="14" rx="3" transform="rotate(-45 0.414214 10)" stroke="#417F56" stroke-width="2" />
        </svg>

    )
}


const DataL = [
    "استفاده از برند شناخته شده ترخینه",
    "به حداقل رساندن ریسک سرمایه گذاری",
    "تسریع روند بازگشت سرمایه",
    "مشاوره های تخصصی جهت مدیریت رستوران"

]
const DataR = [

    "طرح های تشویقی برای ارتقا فروش",
    "دریافت مشاوره جهت تامین مواد اولیه و تجهیزات",
    "پشتیبانی بازاریابی و منابع انسانی",
    "مشاوره در امور حقوقی، مالی و مالیاتی"
]