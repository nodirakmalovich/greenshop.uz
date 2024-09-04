'use client'

import BasketTable from "@/components/Basket/BasketTable";
import SecButton from "@/components/Buttons/secButton";
import { Basket } from "@/data/data";
import { useRouter } from "next/navigation";

export default function Checkout() {
    const route = useRouter();

    const handleRoute = (event) => {
        event.preventDefault()
        const form = document.querySelector('form');

        if (form.checkValidity()) {
            route.push('/');
            localStorage.setItem('basket', JSON.stringify([]));
        } else {
            form.reportValidity();
        }

    }

    return (
        <div className="my-container">
            <BasketTable />

            <div>
                <p className="text-[#3D3D3D] text-[17px] font-[700] mb-[21px]">
                    Billing Address
                </p>

                <form onSubmit={handleRoute} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5 justify-between">
                    <div>
                        <label htmlFor="firstName" className="block text-[15px] font-[400] text-[#3D3D3D] mb-[10px]">
                            First Name
                        </label>
                        <input required className=" px-3 py-2 w-full border-[1px] border-[#EAEAEA] outline-none rounded-[3px]" placeholder="First name" type="text" id="firstName" />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-[15px] font-[400] text-[#3D3D3D] mb-[10px]">
                            Last Name
                        </label>
                        <input required className=" px-3 py-2 w-full border-[1px] border-[#EAEAEA] outline-none rounded-[3px]" placeholder="Last name" type="text" id="lastName" />
                    </div>

                    <div>
                        <label htmlFor="country" className="block text-[15px] font-[400] text-[#3D3D3D] mb-[10px]">
                            Country / Region
                        </label>
                        <input required className=" px-3 py-2 w-full border-[1px] border-[#EAEAEA] outline-none rounded-[3px]" placeholder="Country / Region" type="text" id="country" />
                    </div>

                    <div>
                        <label htmlFor="City" className="block text-[15px] font-[400] text-[#3D3D3D] mb-[10px]">
                            Town / City
                        </label>
                        <input required className=" px-3 py-2 w-full border-[1px] border-[#EAEAEA] outline-none rounded-[3px]" placeholder="Town / City" type="text" id="City" />
                    </div>

                    <div>
                        <label htmlFor="Street" className="block text-[15px] font-[400] text-[#3D3D3D] mb-[10px]">
                            Street Address
                        </label>
                        <input required className=" px-3 py-2 w-full border-[1px] border-[#EAEAEA] outline-none rounded-[3px]" placeholder="Street Address" type="text" id="Street" />
                    </div>

                    <div>
                        <label htmlFor="Appartment" className="block text-[15px] font-[400] text-[#3D3D3D] mb-[10px]">
                            Appartment (optional)
                        </label>
                        <input className=" px-3 py-2 w-full border-[1px] border-[#EAEAEA] outline-none rounded-[3px]" placeholder="Appartment, suite, unit, etc. (optional)" type="text" id="Appartment" />
                    </div>

                    <div>
                        <label htmlFor="State" className="block text-[15px] font-[400] text-[#3D3D3D] mb-[10px]">
                            State
                        </label>
                        <input required className=" px-3 py-2 w-full border-[1px] border-[#EAEAEA] outline-none rounded-[3px]" placeholder="State" type="text" id="State" />
                    </div>

                    <div>
                        <label htmlFor="Zip" className="block text-[15px] font-[400] text-[#3D3D3D] mb-[10px]">
                            Zip
                        </label>
                        <input required className=" px-3 py-2 w-full border-[1px] border-[#EAEAEA] outline-none rounded-[3px]" placeholder="Zip" type="text" id="Zip" />
                    </div>

                    <div>
                        <label htmlFor="Email" className="block text-[15px] font-[400] text-[#3D3D3D] mb-[10px]">
                            Email address
                        </label>
                        <input required className=" px-3 py-2 w-full border-[1px] border-[#EAEAEA] outline-none rounded-[3px]" placeholder="Email address" type="email" id="Email" />
                    </div>

                    <div>
                        <label htmlFor="Phone" className="block text-[15px] font-[400] text-[#3D3D3D] mb-[10px]">
                            Phone Number
                        </label>
                        <input required className=" px-3 py-2 w-full border-[1px] border-[#EAEAEA] outline-none rounded-[3px]" placeholder="Phone Number" type="number" id="Phone" />
                    </div>

                    <div>
                        <label htmlFor="textArea">Order notes (optional)</label>
                        <textarea id="textArea" cols="30" rows="3" className="border-[1px] border-[#EAEAEA] outline-none p-3"></textarea>
                    </div>

                    <div>
                        <p className="text-[#3D3D3D] text-[17px] font-[700] mb-[21px]">
                            Payment Method
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 border-[1px] border-[#EAEAEA] rounded-md p-3">
                                <input type="radio" name="payment-method" id="bank" className="accent-[#46A358]" />
                                <label htmlFor="bank" className="text-[#3D3D3D] text-[15px] font-[500]">
                                    <img src={'/pay.svg'} alt='pay' />
                                </label>
                            </div>

                            <div className="flex items-center gap-3 border-[1px] border-[#EAEAEA] rounded-md p-3">
                                <input type="radio" name="payment-method" id="bank-transfer" className="accent-[#46A358]" />
                                <label htmlFor="bank-transfer" className="text-[#3D3D3D] text-[15px] font-[500]">
                                    Direct Bank Transfer
                                </label>
                            </div>

                            <div className="flex items-center gap-3 border-[1px] border-[#EAEAEA] rounded-md p-3">
                                <input type="radio" name="payment-method" id="cash-on-delivery" className="accent-[#46A358]" />
                                <label htmlFor="cash-on-delivery" className="text-[#3D3D3D] text-[15px] font-[500]">
                                    Cash on Delivery
                                </label>
                            </div>


                            <SecButton
                                text={'Place Order'}
                            />
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )
}
