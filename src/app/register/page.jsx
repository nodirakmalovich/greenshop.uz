'use client'
import SecButton from "@/components/Buttons/secButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {


    const route = useRouter()

    function handleLogin() {
        const form = document.querySelector('form');

        if (form.checkValidity()) {
            route.push('/');
        } else {
            form.reportValidity();
        }
    }


    return (
        <div className="my-container">
            <div className="flex flex-wrap gap-5 items-center justify-center my-5">
                <div className="flex gap-5 items-center justify-center">

                    <Link href={'/login'}>Login</Link>
                    <p className="text-[#3D3D3D] text-[18px] font-[250]">|</p>
                    <Link className="text-[#46A358] text-[20px] font-[500]" href={'/register'}>Register</Link>
                </div>

                <form className="w-full text-center" action="" onSubmit={handleLogin}>
                    <p className="text-[13px] font-[400] text-[#3D3D3D]">
                        Enter your email and password to register.
                    </p>

                    <input
                        required
                        className="border-[1px] border-[#EAEAEA] my-3 w-full rounded-[5px] py-3 px-[14px] text-[#A5A5A5] outline-none"
                        type="text"
                        placeholder="Username"
                    />


                    <input
                        required
                        className="border-[1px] border-[#EAEAEA] my-3 w-full rounded-[5px] py-3 px-[14px] text-[#A5A5A5] outline-none"
                        type="email"
                        placeholder="Enter your email address"
                    />


                    <input
                        required
                        className="border-[1px] border-[#EAEAEA] my-3 w-full rounded-[5px] py-3 px-[14px] text-[#A5A5A5] outline-none"
                        type="password"
                        placeholder="Password"
                    />


                    <input
                        required
                        className="border-[1px] border-[#EAEAEA] my-3 w-full rounded-[5px] py-3 px-[14px] text-[#A5A5A5] outline-none"
                        type="password"
                        placeholder="Confirm Password"
                    />

                    <SecButton
                        text={'Register'}
                    />
                </form>

                <div className="flex gap-3 items-center">
                    <div className="line h-[2px] bg-[#EAEAEA]"></div>
                    <p className="text-[13px] font-[400] text-[#3D3D3D]">
                        Or register with
                    </p>
                    <div className="line h-[2px] bg-[#EAEAEA]"></div>
                </div>

                <button className="flex items-center justify-center gap-3 border-[1px] border-[#EAEAEA] my-2 w-full rounded-[5px] py-3 px-[14px] text-[#A5A5A5] outline-none">
                    <img src={'/google.svg'} alt="google" />
                    <p className="text-[13px] font-[500] text-[#727272]">
                        Continue with Google
                    </p>
                </button>


                <button className="flex items-center justify-center gap-3 border-[1px] border-[#EAEAEA] my-2 w-full rounded-[5px] py-3 px-[14px] text-[#A5A5A5] outline-none">
                    <img src={'/facebook1.svg'} alt="google" />
                    <p className="text-[13px] font-[500] text-[#727272]">
                        Continue with Facebook
                    </p>
                </button>

            </div>

        </div>
    )
}