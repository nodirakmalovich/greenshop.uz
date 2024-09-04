"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const route = useRouter();
    const [pages, setPages] = useState([
        {
            name: "Home",
            selected: true,
            link: '/'
        },
        // {
        //     name: "Shop",
        //     selected: false,
        //     link: '/shop'
        // },
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

    const [menuOpen, setMenuOpen] = useState(false);

    const handlePageSelect = (index) => {
        const updatedPages = pages.map((page, i) => ({
            ...page,
            selected: i === index
        }));
        setPages(updatedPages);
    };

    const handleBasket = () => {
        route.push('/basket');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
            <div className="my-container">
                <div className="flex justify-between items-center border-b border-[#46A35880] py-[17.7px] w-full relative">
                    <Link href={'/'}>
                        <img src={'/logo.svg'} alt="logo" />
                    </Link>

                    <ul className={`bg-white z-50 absolute top-0 left-0 right-0 gap-[50px] transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-y-0 ' : '-translate-x-full'} hidden_menu md:flex`}>
                        {
                            pages.map((page, index) => (
                                <li
                                    key={index}
                                    className={`text-[16px] ${page.selected ? 'font-bold' : 'font-normal'}`}
                                    onClick={() => handlePageSelect(index)}
                                >
                                    <Link className={`border-b-3 pb-[23.7px] ${page.selected ? 'border-[#46A358]' : 'border-transparent'}`} href={page.link}>
                                        {page.name}
                                    </Link>
                                </li>
                            ))
                        }
                        <li onClick={toggleMenu} className={`text-[16px] font-normal`}>Close</li>
                    </ul>

                    <ul className="hidden md:flex gap-[50px]">
                        {
                            pages.map((page, index) => (
                                <li
                                    key={index}
                                    className={`text-[16px] ${page.selected ? 'font-bold' : 'font-normal'}`}
                                    onClick={() => handlePageSelect(index)}
                                >
                                    <Link className={`border-b-3 pb-[23.7px] ${page.selected ? 'border-[#46A358]' : 'border-transparent'}`} href={page.link}>
                                        {page.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="actions flex gap-[30px] items-center">
                        <img className="hidden md:block" src={'/search.svg'} alt="search" />

                        <img onClick={handleBasket} src={'/basket.svg'} alt="basket" />

                        <button className="bg-[#46A358] flex text-white w-[100px] rounded-md h-[35px] items-center justify-center gap-2">
                            <img src={'/logout.svg'} alt="logout" />
                            <p>Login</p>
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="bg-[#46A358] w-[35px] h-[35px] flex items-center justify-center rounded-full block md:hidden"
                        >
                            <img  src={'/Filter.svg'} alt="Filter" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
