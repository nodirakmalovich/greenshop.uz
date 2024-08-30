import Image from "next/image";

export default function Footer() {
    return (
        <div className="Footer mt-10">
            <div className="my-container ">

                <div className="Footer_top p-[25px] bg-[linear-gradient(97.77deg,_rgba(245,245,245,0.5)_-23.46%,_rgba(245,245,245,0.5)_107.51%)]">
                    <div className="body flex justify-between gap-12">
                        <div className="footer_card px-3">
                            <img className="w-full h-[100px]" src={'/footer1.svg'} alt="footerImage" />
                            <p className="font-[700] text-[17px] text-[#3D3D3D]">
                                Garden Care
                            </p>
                            <p className="font-[400] text-[14px] text-[#727272] leading-[22px]">
                                We are an online plant shop offering a wide range of cheap and trendy plants.
                            </p>
                        </div>
                        <div className="footer_card px-4 border-x-2 border-[#46A3581A]">
                            <img className="w-full h-[100px]" src={'/footer2.svg'} alt="footerImage" />
                            <p className="font-[700] text-[17px] text-[#3D3D3D]">
                                Garden Care
                            </p>
                            <p className="font-[400] text-[14px] text-[#727272] leading-[22px]">
                                We are an online plant shop offering a wide range of cheap and trendy plants.
                            </p>
                        </div>
                        <div className="footer_card px-3">
                            <img className="w-full h-[100px]" src={'/footer3.svg'} alt="footerImage" />
                            <p className="font-[700] text-[17px] text-[#3D3D3D]">
                                Garden Care
                            </p>
                            <p className="font-[400] text-[14px] text-[#727272] leading-[22px]">
                                We are an online plant shop offering a wide range of cheap and trendy plants.
                            </p>
                        </div>

                        <div className="px-5 text-[18px] font-[700]">
                            <p>
                                Would you like to join newsletters?
                            </p>

                            <form className="flex justify-between my-[18px] shadow-md rounded-lg">
                                <input className="py-3 rounded-s-lg ps-[11px] w-full outline-none" type="text" placeholder="enter your email address..." />
                                <button className="py-3 rounded-e-lg px-[26px] bg-[#46A358] text-white text-[18px] font-[700]" type="submit">Join</button>
                            </form>

                            <p className="text-[13px] font-[400] text-[#727272] leading-[22px] ">
                                We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Footer_middle grid grid-cols-4 justify-between bg-[#46A3581A] px-[23px] py-[27px]">
                    <img src={'/logo.svg'} alt="logo" />

                    <div className="flex gap-2 items-center">
                        <img src={'/location.svg'} alt="location" />
                        <p className="text-[14px] font-[400] text-[#3D3D3D]">
                            70 West Buckingham Ave. <br />
                            Farmingdale, NY 11735
                        </p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <img className="w-5 h-5" src={'/Message.svg'} alt="Message" />
                        <p className="text-[14px] font-[400] text-[#3D3D3D]">
                            contact@greenshop.com
                        </p>
                    </div>


                    <div className="flex gap-2 items-center">
                        <img className="w-5 h-5" src={'/calling.svg'} alt="calling" />
                        <p className="text-[14px] font-[400] text-[#3D3D3D]">
                            +88 01911 717 490
                        </p>
                    </div>
                </div>
                <div className="Footer_bottom py-[33px] px-[23px] grid grid-cols-4 bg-[linear-gradient(97.77deg,_rgba(245,245,245,0.5)_-23.46%,_rgba(245,245,245,0.5)_107.51%)]">
                    <ul>
                        <li className="text-[18px] font-[700] text-[#3D3D3D] leading-[30px]">My Account</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">My Account</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">Our stores</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">Contact us</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">Career</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">Specials</li>
                    </ul>

                    <ul>
                        <li className="text-[18px] font-[700] text-[#3D3D3D] leading-[30px]">Help & Guide</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">Help & Guide</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">How to Buy</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">Shipping & Delivery</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">Product Policy</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">How to Return</li>
                    </ul>

                    <ul>
                        <li className="text-[18px] font-[700] text-[#3D3D3D] leading-[30px]">Categories</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">House Plants</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">Potter Plants</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">Seeds</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">Small Plants</li>
                        <li className="text-[14px] font-[400] text-[#3D3D3D] leading-[30px]">Accessories</li>
                    </ul>

                    <div>
                        <p className="text-[18px] font-[700] text-[#3D3D3D] leading-[30px]">
                            Social Media
                        </p>

                        <div className="images flex w-full gap-[10px] mt-5">
                            <button className="border-[2px] rounded-md border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center">
                                <img src={'Facebook.svg'} alt="Facebook" />
                            </button>

                            <button className="border-[2px] rounded-md border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center">
                                <img src={'Instagram.svg'} alt="Instagram" />
                            </button>

                            <button className="border-[2px] rounded-md border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center">
                                <img src={'Twitter.svg'} alt="Twitter" />
                            </button>

                            <button className="border-[2px] rounded-md border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center">
                                <img src={'Linkedin.svg'} alt="Linkedin" />
                            </button>

                            <button className="border-[2px] rounded-md border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center">
                                <img src={'Union.svg'} alt="Union" />
                            </button>
                        </div>


                        <p className="text-[18px] font-[700] text-[#3D3D3D] leading-[30px] mt-[33px] mb-[13px]">
                            We accept
                        </p>

                        <img src={'pay.svg'} alt="pay" />
                    </div>

                </div>
            </div>
        </div >
    )
}