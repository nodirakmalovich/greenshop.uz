import { useState } from "react";
import MainCard from "../Cards/MainCard";
import MenuList from "../MenuList/MenuList";
import { ProductsData } from "@/data/data";

export default function ShopProductRow() {


    const [secPages, setSecPages] = useState([
        {
            name: "Releted Products",
            selected: true,
        },
    ]);

    const handleSecPageSelect = (index) => {
        const updatedPages = secPages.map((page, i) => ({
            ...page,
            selected: i === index,
        }));
        setSecPages(updatedPages);
    };

    return (
        <div>
            <ul className="mb-10 flex gap-[50px] mt-[52px] border-b-[0.3px] border-[#46A35880]">
                {secPages.map((page, index) => (
                    <MenuList
                        key={index}
                        page={page}
                        index={index}
                        name={page.name}
                        onClick={() => {
                            handleSecPageSelect(index);
                        }}
                    />
                ))}
            </ul>

            <div className="px-3 flex overflow-hidden overflow-x-auto gap-5 py-3">
                {ProductsData.map((product, index) => {
                    return (
                        <div key={index}>
                            <MainCard
                                image={product.image.props.src}
                                name={product.name}
                                price={product.price}
                                id={product.id}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}