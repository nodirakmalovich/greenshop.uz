import Image from "next/image";
import { useState } from "react";

export default function MainCard({ image, name, price }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }


    return (
        <div
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            className={`Card w-[258px] shadow-md rounded-lg p-5 box-border border-t-[1px]  ${isOpen ? 'border-[#46A358] ' : 'border-transparent'}`}
        >

            <div className="w-[218px] h-[300px]  flex items-center justify-center box-border relative">
                <img className="card_image object-contain w-[258px] " src={image} alt={name} />

                <div className={`absolute bottom-[5px]  gap-2 items-center justify-center ${isOpen ? 'flex' : 'hidden'}`}>

                    <div className="w-[35px] h-[35px] items-center justify-center shadow-md flex rounded-md">
                        <img src={'/basket.svg'} alt="basket" />
                    </div>
                    <div className="w-[35px] h-[35px] items-center justify-center shadow-md flex rounded-md">
                        <img src={'/like.svg'} alt="like" />
                    </div>
                    <div className="w-[35px] h-[35px] items-center justify-center shadow-md flex rounded-md">

                        <img src={'/search.svg'} alt="search" />
                    </div>
                </div>
            </div>
            <div className="card_body">
                <p className="text-[#3D3D3D] font-[400] text-[16px]">
                    {name}
                </p>
                <p className="text-[#46A358] font-[700] text-[18px]">
                    ${price}
                </p>
            </div>
        </div>
    )
}