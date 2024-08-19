import { memo, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { appContext } from "../../App";
import api from "../../Api/api";

import "./branchPage.scss"


import 'swiper/css';
import 'swiper/css/pagination';

import SectionBranch from "./componnents/SectionBranch";







const BranchPage = () => {
    const { name } = useParams();
    const [food, setFood] = useState<any[]>();
    const [branch, setBranch] = useState<any>(null);
    const { SetbranchName } = useContext(appContext);

    useEffect(() => {


        const fetch = async () => {
            try {
                const res = await api.get("/branch/" + name);
                // console.log(res.data);
                setBranch(res.data);
                SetbranchName(res.data.name);
            } catch (err) {
                console.log(err);
            }





            try {
                const res = await api.get("/food");
                // console.log(res.data);
                setFood(res.data);

            } catch (err) {
                console.log(err);
            }
        };


        fetch();

    }, [name]);


    const BranchFiltered = food?.filter(s => s.Branch.includes(name))

    // console.log(name);
    const Offer = BranchFiltered?.filter(s => s.price.Off > 50)
    const Popular = BranchFiltered?.filter(s => s.Rate.rating > 5)
    const foregin = BranchFiltered?.filter(s => s.Category.includes("غیرایرانی"))

    return (
        <>



            <div className="sectionOne ">
                <div className="titleOfsection">
                    پیشنهاد ویژه
                </div>
                <SectionBranch food={Offer} />
            </div>




            <div className="greenBackgrnd sectionOne ">
                <div className="titleOfsection">
                    غذا های محبوب
                </div>
                <SectionBranch food={Popular} />
            </div>




            <div className="sectionOne ">
                <div className="titleOfsection">
                    غذا های غیر ایرانی
                </div>
                <SectionBranch food={foregin} />
            </div>





        </>
    );
};

export default memo(BranchPage);
