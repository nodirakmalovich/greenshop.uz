
'use client'

import SecButton from "@/components/Buttons/secButton";
import LoginInput from "@/components/Inputs/loginInput";
import OrRegister from "@/components/Inputs/orRegister";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {

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
            <div className="flex flex-wrap gap-5 items-center justify-center my-5 w-full md:w-[50%] mx-auto">
                <div className="flex gap-5 items-center justify-center">

                    <Link href={'/login'} className="text-[#46A358] text-[20px] font-[500]">Login</Link>
                    <p className="text-[#3D3D3D] text-[18px] font-[250]">|</p>
                    <Link href={'/register'}>Register</Link>
                </div>

                <form className="w-full text-center" action="" onSubmit={handleLogin}>
                    <p className="text-[13px] font-[400] text-[#3D3D3D]">
                        Enter your username and password to login.
                    </p>

                    <LoginInput
                        placeholder={'Username or email address'}
                        type={'text'}
                    />

                    <LoginInput
                        placeholder={'Password'}
                        type={'password'}
                    />


                    <SecButton
                        text={'Login'}
                    />

                    <p className="text-end mt-6 text-[14px] font-[400] text-[#46A358] cursor-pointer">
                        Forgot Password?
                    </p>
                </form>

                <OrRegister
                    mainText={'Or login with'}
                />


            </div>

        </div>
    )
}