import Icon from "../../../../Components/Icons/icons";
import "./aboutrestrunt.scss"
import icon from '../../../../Components/Icons/type';
import Buttons from "../../../../Components/Buttons/buttons";

const Aboutrestrunt = () => {
    return (
        <div
            className="aboutrestrunt"
        >
            <div className="shader">
                <div className="side deleteOndesktop">

                    <div className="countainerSafe">
                        <div className="title">
                            رستوران‌های زنجیره‌ای ترخینه
                        </div>
                        <p>

                            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.

                        </p>
                        <Buttons
                            IconFirst="ArrowLeft"
                            btnStyle="border"
                            color="white"
                            size="medium"
                            iconcolor="white"
                            textColor="white"
                            onclick={() => {

                                alert("hi")

                            }}

                        >اطلاعات بیشتر</Buttons>
                    </div>
                </div>
                <div className="side flexiblize">
                    <div className="LabIcons">
                        <div className="labs">
                            <div className="iconBaseinLab">
                                <Keifiat />
                            </div>
                            <span>کیفیت بالای غذا</span>
                        </div>
                        <div className="labs">
                            <div className="iconBaseinLab">
                                <Persenel />
                            </div>
                            <span>پرسنلی مجرب و حرفه‌ای</span>
                        </div>
                        <div className="labs">
                            <div className="iconBaseinLab">
                                <Menoo />
                            </div>
                            <span>منوی متنوع</span>
                        </div>
                        <div className="labs">
                            <div className="iconBaseinLab">
                                <Mohit />
                            </div>
                            <span>محیطی دلنشین و آرام</span>
                        </div>

                    </div>
                </div>
                <div className="side deleteonPhone">

                    <div className="countainerSafe">
                        <div className="title">
                            رستوران‌های زنجیره‌ای ترخینه
                        </div>
                        <p>

                            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.

                        </p>
                        <Buttons
                            IconFirst="ArrowLeft"
                            btnStyle="border"
                            color="white"
                            size="medium"
                            iconcolor="white"
                            textColor="white"
                            onclick={() => {

                                alert("hi")

                            }}

                        >اطلاعات بیشتر</Buttons>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default Aboutrestrunt;


const Mohit = () => {
    return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.99962 14C8.99962 14 10.3121 15.5 12.4996 15.5C14.6871 15.5 15.9996 14 15.9996 14M15.2496 9H15.2596M9.74962 9H9.75962M12.4996 20C17.194 20 20.9996 16.1944 20.9996 11.5C20.9996 6.80558 17.194 3 12.4996 3C7.8052 3 3.99962 6.80558 3.99962 11.5C3.99962 12.45 4.15547 13.3636 4.443 14.2166C4.55119 14.5376 4.60529 14.6981 4.61505 14.8214C4.62469 14.9432 4.6174 15.0286 4.58728 15.1469C4.55677 15.2668 4.48942 15.3915 4.35472 15.6408L2.71906 18.6684C2.48575 19.1002 2.36909 19.3161 2.3952 19.4828C2.41794 19.6279 2.50337 19.7557 2.6288 19.8322C2.7728 19.9201 3.01692 19.8948 3.50517 19.8444L8.62619 19.315C8.78127 19.299 8.85881 19.291 8.92949 19.2937C8.999 19.2963 9.04807 19.3029 9.11586 19.3185C9.18478 19.3344 9.27145 19.3678 9.44478 19.4345C10.3928 19.7998 11.4228 20 12.4996 20ZM15.7496 9C15.7496 9.27614 15.5258 9.5 15.2496 9.5C14.9735 9.5 14.7496 9.27614 14.7496 9C14.7496 8.72386 14.9735 8.5 15.2496 8.5C15.5258 8.5 15.7496 8.72386 15.7496 9ZM10.2496 9C10.2496 9.27614 10.0258 9.5 9.74962 9.5C9.47348 9.5 9.24962 9.27614 9.24962 9C9.24962 8.72386 9.47348 8.5 9.74962 8.5C10.0258 8.5 10.2496 8.72386 10.2496 9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}


function Keifiat() {
    return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}
function Persenel() {
    return (
        <Icon icon="user" color="white" width={48} height={48} />

    )
}
function Menoo() {
    return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12M14 11H8M10 15H8M16 7H8M14.5 19L16.5 21L21 16.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}