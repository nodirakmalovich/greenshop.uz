import Image from "next/image";
import MainButton from "../Buttons/MainButton";

export default function HomeHero() {
    return (
        <div className="Hero mt-3 ps-10 flex justify-between items-center bg-[linear-gradient(97.77deg,_rgba(245,245,245,0.5)_-23.46%,_rgba(245,245,245,0.5)_107.51%)]">
            <div className="hero_body">
                <p className="lg:text-[14px] text-[10px] font-[500] leading-4 tracking-widest uppercase">
                    Welcome to GreenShop
                </p>
                <p className="text-[24px] font-[600] leading-8 lg:text-[70px] lg:font-[900] lg:leading-[70px] uppercase mt-[7px] text-[#3D3D3D]">
                    Let’s Make a <br />
                    Better <span className="text-[#46A358]">Planet</span>
                </p>

                <p className="hidden md:block text-[14px] mb-11 font-[400] leading-4 mt-[5px] text-[#727272]">
                    We are an online plant shop offering a wide range of cheap and trendy plants. Use <br />
                    our plants to create an unique Urban Jungle. Order your favorite plants!
                </p>

                <MainButton
                    text={'shop now'}
                />
            </div>
            <img className="lg:h-[450px] w-[50%]" src={'/MainBanner.svg'} alt="MainBanner" />
        </div>

    )
}