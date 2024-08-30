import Data from "@/app/data/data"
import { useState } from "react";

export default function ShopDescription() {

    const { singleProduct } = Data()


    const [pages, setPages] = useState([
        {
            name: "Product Description",
            selected: true,
        },
        {
            name: "Reviews (19)",
            selected: false,
        },
    ]);



    const handlePageSelect = (index) => {
        const updatedPages = pages.map((page, i) => ({
            ...page,
            selected: i === index
        }));
        setPages(updatedPages);
    };


    return (
        <div >
            <ul className="mb-10 flex gap-[50px] mt-[92px] border-b-[0.3px] border-[#46A35880]">
                {
                    pages.map((page, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer text-[16px] ${page.selected ? 'font-[700] text-[#46A358] ' : 'font-[400]'} border-b-[3px]  pb-[23.7px] ${page.selected ? 'border-[#46A358]' : 'border-transparent'} `}
                            onClick={() => handlePageSelect(index)}
                        >
                            {page.name}
                        </li>
                    ))
                }
            </ul>

            <p className="text-[14px] font-[400] leading-[24px] text-[#727272]">
                {singleProduct ? singleProduct.description[0] : 'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. '}
            </p>

            <p className="text-[14px] font-[700] leading-[24px] text-[#3D3D3D] mt-[18px]">
                Living Room:
            </p>
            <p className="text-[14px] font-[400] leading-[24px] text-[#727272]">
                {singleProduct ? singleProduct.description[1] : 'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            </p>


            <p className="text-[14px] font-[700] leading-[24px] text-[#3D3D3D] mt-[18px]">
                Dining Room:
            </p>
            <p className="text-[14px] font-[400] leading-[24px] text-[#727272]">
                {singleProduct ? singleProduct.description[1] : 'The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.'}
            </p>

            <p className="text-[14px] font-[700] leading-[24px] text-[#3D3D3D] mt-[18px]">
                Office:
            </p>
            <p className="text-[14px] font-[400] leading-[24px] text-[#727272]">
                {singleProduct ? singleProduct.description[1] : 'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            </p>
        </div>
    )
}