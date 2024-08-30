"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {

    const [pages, setPages] = useState([
        {
            name: "Home",
            selected: true,
            link: '/'
        },
        {
            name: "Shop",
            selected: false,
            link: '/shop'
        },
        {
            name: "Plant Care",
            selected: false,
            link: '/plant-care'
        },
        {
            name: "Blogs",
            selected: false,
            link: '/blog'
        }
    ]);

    const handlePageSelect = (index) => {
        const updatedPages = pages.map((page, i) => ({
            ...page,
            selected: i === index
        }));
        setPages(updatedPages);
    };

    return (
        <div className="navbar">
            <div className="my-container ">
                <div className="flex justify-between items-center border-b-[0.3px] border-[#46A35880] py-[17.7px] w-full">
                    <Link href={'/'}>
                        <img src={'/logo.svg'} alt="logo" />
                    </Link>

                    <ul className="flex gap-[50px]">
                        {
                            pages.map((page, index) => (
                                <li
                                    key={index}
                                    className={`text-[16px] ${page.selected ? 'font-[700]' : 'font-[400]'}  `}
                                    onClick={() => handlePageSelect(index)}
                                >
                                    <Link className={`border-b-[3px]  pb-[23.7px] ${page.selected ? 'border-[#46A358]' : 'border-transparent'}`} href={page.link}>
                                        {page.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="actions flex gap-[30px]">
                        <img src={'/search.svg'} alt="search" />
                        <img src={'/basket.svg'} alt="basket" />
                        <button className="bg-[#46A358] flex text-white w-[100px] rounded-md h-[35px] items-center justify-center gap-2">
                            <img src={'/logout.svg'} alt="logout" />
                            <p>Login</p>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
