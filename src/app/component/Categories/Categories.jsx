"use client";
import { useState } from "react";
import RangeSlider from "../Slider/Slider";
import MainButton from "../Buttons/MainButton";
import SecButton from "../Buttons/secButton";
import Image from "next/image";

export default function Categories() {
    const [categories, setCategories] = useState([
        { name: 'House Plants', products: 33, selected: true },
        { name: 'Potter Plants', products: 28, selected: false },
        { name: 'Seeds', products: 45, selected: false },
        { name: 'Small Plants', products: 12, selected: false },
        { name: 'Big Plants', products: 8, selected: false },
        { name: 'Succulents', products: 25, selected: false },
        { name: 'Terrariums', products: 15, selected: false },
        { name: 'Gardening', products: 22, selected: false },
        { name: 'Accessories', products: 19, selected: false }
    ]);

    const [priceRange, setPriceRange] = useState([20, 37]);

    const handleCategoriesSelect = (index) => {
        const updatedCategories = categories.map((category, i) => ({
            ...category,
            selected: i === index
        }));
        setCategories(updatedCategories);
    };

    const handlePriceChange = (newValue) => {
        setPriceRange(newValue);
    };

    return (
        <div className="Categories ">
            <div className="categories_body pb-3 bg-[linear-gradient(97.77deg,_rgba(245,245,245,0.5)_-23.46%,_rgba(245,245,245,0.5)_107.51%)] px-[18px] pt-[14px]">
                <p className="font-[700] text-[18px]">
                    Categories
                </p>
                <div className="ps-3 mt-[7px]">
                    <ul className="w-[310px]">
                        {
                            categories.map((category, index) => (
                                <li
                                    key={index}
                                    className={`mt-5 flex justify-between ${category.selected ? 'text-[#46A358]' : "text-[#3D3D3D]"} cursor-pointer`}
                                    onClick={() => { handleCategoriesSelect(index) }}
                                >
                                    {category.name}
                                    <span>
                                        ({category.products})
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <p className="font-[700] text-[18px] mt-5">
                    Price Range
                </p>
                <div className="ps-3 mt-[7px]">
                    <RangeSlider value={priceRange} onChange={handlePriceChange} />
                    <div className="mb-5">
                        <p className="text-[#46A358]">
                            <span className="text-black me-2">Price:</span>
                            ${priceRange[0]} - ${priceRange[1]}
                        </p>
                    </div>

                    <SecButton
                        text={'Filter'}
                    />
                </div>

                <p className="font-[700] text-[18px] mt-5">
                    Size
                </p>

                <div className="ps-3 mt-[7px]">
                    <ul className="w-[310px]">
                        <li className={`mt-5 flex justify-between cursor-pointer`}>Small <span>(119)</span></li>
                        <li className={`mt-5 flex justify-between cursor-pointer`}>Medium <span>(86)</span></li>
                        <li className={`mt-5 flex justify-between cursor-pointer`}>Large <span>(78)</span></li>
                    </ul>
                </div>
            </div>
            <img className="w-full" src={'/sale.png'} alt="SaleBanner"/>
        </div>
    );
}
