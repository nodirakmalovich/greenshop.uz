import Data from "@/app/data/data";
import { useState } from "react";
import MainCard from "../Cards/MainCard";

export default function ShopProductRow() {



    const { productData } = Data()

    const [secPages, setSecPages] = useState([
        {
            name: "Releted Products",
            selected: true,
        },
    ]);


    const handleSecPageSelect = (index) => {
        const updatedPages = secPages.map((page, i) => ({
            ...page,
            selected: i === index
        }));
        setSecPages(updatedPages);
    };


    return (

        <div>
            <ul className="mb-10 flex gap-[50px] mt-[92px] border-b-[0.3px] border-[#46A35880]">
                {
                    secPages.map((page, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer text-[16px] ${page.selected ? 'font-[700] text-[#46A358]' : 'font-[400]'} border-b-[3px]  pb-[23.7px] ${page.selected ? 'border-[#46A358]' : 'border-transparent'} `}
                            onClick={() => handleSecPageSelect(index)}
                        >
                            {page.name}
                        </li>
                    ))
                }
            </ul>

            <div className="px-3 flex overflow-hidden overflow-x-auto gap-5 py-3">
                {
                    productData.map((product, index) => {
                        return (
                            <div key={index}>
                                <MainCard
                                    image={product.image.props.src}
                                    name={product.name}
                                    price={product.price}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}