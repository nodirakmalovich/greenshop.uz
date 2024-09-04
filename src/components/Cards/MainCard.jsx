import { Basket, ProductsData } from "@/data/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MainCard({ image, name, price, id }) {

    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleClick = (plantId) => {
        // router.push(`/Shop:${plantId}`)
        router.push(`/products/${plantId}`);
    };

    function handleBasket(id) {
        const selectedItem = ProductsData.find(item => item.id == id);

        const isItemInBasket = Basket.some(item => item.id == id);

        if (!isItemInBasket) {
            selectedItem.count = 1
            Basket.push(selectedItem);
            localStorage.setItem('basket', JSON.stringify(Basket));
            window.location.reload()

        } else {
            alert('This product is already in the basket.');
        }
    }


    return (
        <div
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            className={`Card w-auto lg:w-[258px] shadow-md rounded-lg p-5 box-border border-t-[1px]  ${isOpen ? 'border-[#46A358] ' : 'border-transparent'} relative`}
        >
            {/* <div className={`rounded-lg bg-gray-600/80 absolute z-20 top-0 bottom-0 right-0 left-0 ${isOpen ? 'block' : 'hidden'}`}
                style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}></div> */}

            <div className="w-[140px] h-[150px] lg:w-[218px] lg:h-[300px]  flex items-center justify-center box-border relative">
                <img onClick={() => { handleClick(id) }} className="card_image object-contain w-[258px] " src={image} alt={name} />

                <div className={`absolute z-50 bottom-[5px]  gap-2 items-center justify-center ${isOpen ? 'flex' : 'hidden'}`}>

                    <div onClick={() => { handleBasket(id) }} className="w-[35px] h-[35px] items-center justify-center shadow-md flex rounded-md">
                        <img src={'/basket.svg'} alt="basket" />
                    </div>
                    <div className="w-[35px] h-[35px] items-center justify-center shadow-md flex rounded-md">
                        <img src={'/like.svg'} alt="like" />
                    </div>
                    {/* <div className="w-[35px] h-[35px] items-center justify-center shadow-md flex rounded-md">

                        <img src={'/search.svg'} alt="search" />
                    </div> */}
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