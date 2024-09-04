import { useEffect, useState } from "react";
import MainButton from "../Buttons/MainButton";
import SecButton from "../Buttons/secButton";
import Link from "next/link";

export default function BasketTable() {

    const [basket, setBasket] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const shipping = 16.00;

    useEffect(() => {
        const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
        setBasket(storedBasket);
    }, []);

    useEffect(() => {
        const newSubtotal = basket.reduce((acc, product) => acc + product.price * product.count, 0);
        setSubtotal(newSubtotal);
    }, [basket]);

    const handleCountPlus = (index) => {
        const updatedBasket = [...basket];
        updatedBasket[index].count += 1;
        setBasket(updatedBasket);
        localStorage.setItem('basket', JSON.stringify(updatedBasket));
    };

    const handleCountMinus = (index) => {
        const updatedBasket = [...basket];
        if (updatedBasket[index].count > 1) {
            updatedBasket[index].count -= 1;
        } else {
            updatedBasket.splice(index, 1);
        }
        setBasket(updatedBasket);
        localStorage.setItem('basket', JSON.stringify(updatedBasket));
    };

    const total = subtotal + shipping;

    return (
        <div className="flex flex-wrap justify-center gap-10 items-start lg:flex-nowrap lg:justify-between mt-5">

            <table className="w-full lg:w-[70%] text-left text-[#3D3D3D]">
                <thead className="border-b-[1px] border-[#46A35880]">
                    <tr>
                        <th className="py-4 px-2 lg:px-6">Products</th>
                        <th className="py-4 px-2 lg:px-6 ">Price</th>
                        <th className="py-4 px-2 lg:px-6">Quantity</th>
                        <th className="py-4 px-2 lg:px-6">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {basket.map((product, index) => (
                        <tr key={index} className="border-b-[1px] border-[#EAEAEA] last:border-none bg-[#FBFBFB]">
                            <td className="py-4 px-2 lg:px-6">
                                <div className="flex items-center gap-4">
                                    <img className="w-[70px] h-[70px] rounded-md object-cover" src={product.image.props.src} alt={product.name} />
                                    <div>
                                        <p className="font-[500] text-[#3D3D3D]">{product.name}</p>
                                        <p className="font-[400] text-[14px] text-[#727272]">SKU: {product.sku}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 px-2 lg:px-6 text-[#727272] ">${product.price}</td>
                            <td className="py-4 px-2 lg:px-6">
                                <div className="flex flex-wrap lg:flex-nowrap items-center gap-2">
                                    <MainButton text={"+"} onClick={() => handleCountPlus(index)} />
                                    <p className="mx-3">{product.count}</p>
                                    <MainButton onClick={() => handleCountMinus(index)} text={"-"} />
                                </div>
                            </td>
                            <td className="py-4 px-2 lg:px-6 text-[#46A358]">${(product.price * product.count).toFixed(2)}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="w-full lg:w-[30%]">
                <p className="py-4 text-[16px] font-[700] border-b-[1px] border-[#46A35880]">
                    Cart Totals
                </p>
                <p className="py-3 text-[14px] font-[400] text-[#3D3D3D]">
                    Coupon Apply
                </p>

                <form className="flex justify-between shadow-md border-[1px] border-[#46A358]">
                    <input className="py-3 ps-[11px] w-full outline-none" type="text" placeholder="Enter coupon code here..." />
                    <button className="py-3 px-[26px] bg-[#46A358] text-white text-[15px] font-[700]" type="submit">Apply</button>
                </form>

                <div className="flex items-center justify-between mt-[30px] mb-[15px]">
                    <p className="text-[15px] text-[#3D3D3D] font-[400]">
                        Subtotal
                    </p>
                    <p className="text-[18px] text-[#3D3D3D] font-[500]">
                        ${subtotal.toFixed(2)}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-[30px] mb-[15px]">
                    <p className="text-[15px] text-[#3D3D3D] font-[400]">
                        Coupon Discount
                    </p>
                    <p className="text-[18px] text-[#3D3D3D] font-[500]">
                        (-) 00.00
                    </p>
                </div>

                <div className="flex items-center justify-between mt-[30px] mb-[15px]">
                    <p className="text-[15px] text-[#3D3D3D] font-[400]">
                        Shipping
                    </p>
                    <p className="text-[18px] text-[#3D3D3D] font-[500]">
                        ${shipping.toFixed(2)}
                    </p>
                </div>

                <p className="text-end text-[#46A358] text-[12px] font-[400] cursor-pointer">
                    View shipping charge
                </p>

                <div className="flex items-center justify-between mt-[30px] mb-[15px]">
                    <p className="text-[16px] text-[#3D3D3D] font-[700]">
                        Total
                    </p>
                    <p className="text-[18px] text-[#46A358] font-[700]">
                        ${total.toFixed(2)}
                    </p>
                </div>

                <SecButton
                    text={"Proceed To Checkout"}
                />

                <Link className="text-[#46A358] text-[12px] font-[400] cursor-pointer text-center w-full flex justify-center my-3" href={'/checkout'}>Continue Shopping</Link >
            </div>
        </div>
    );
}
