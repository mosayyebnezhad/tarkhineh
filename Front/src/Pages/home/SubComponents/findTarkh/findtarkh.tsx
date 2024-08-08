import { lazy, useEffect, useState } from "react";
import Branch from "../../../../Components/Branch/branch";
import "./findtarkh.scss"
import axios from "axios";
import { useInView } from "react-intersection-observer";
const url: string = process.env.REACT_APP_DOMAIN || '';

const Findtarkh = () => {
    const { ref, inView } = useInView({ threshold: 0.1 })

    const [branches, setBranches] = useState<any[]>();

    useEffect(() => {


        if (inView) {
            const fetchingData = async () => {
                try {
                    const result = await axios.get(`${url}/branch`)
                    setBranches(result.data)
                } catch (er) {
                    console.error('Error fetching data', er)
                }


            }
            fetchingData()
        }

    }, [inView])






    return (
        <div className={`findtarkh ${!branches&&"isloadingfetching"}`} ref={ref} >

            {branches &&
                branches.map((item, index) => {
                    return (
                        <Branch key={index} Branch={item.name} address={item.address} link={`/${item.id}`} image={item.image} />


                    )
                })
            }


        </div>
    )
}



export default Findtarkh;