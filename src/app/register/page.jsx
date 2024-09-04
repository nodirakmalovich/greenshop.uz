'use client'
import SecButton from "@/components/Buttons/secButton";
import LoginInput from "@/components/Inputs/loginInput";
import OrRegister from "@/components/Inputs/orRegister";
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
            <div className="flex flex-wrap gap-5 items-center justify-center my-5 w-full md:w-[50%] mx-auto">
                <div className="flex gap-5 items-center justify-center">

                    <Link href={'/login'}>Login</Link>
                    <p className="text-[#3D3D3D] text-[18px] font-[250]">|</p>
                    <Link className="text-[#46A358] text-[20px] font-[500]" href={'/register'}>Register</Link>
                </div>

                <form className="w-full text-center" action="" onSubmit={handleLogin}>
                    <p className="text-[13px] font-[400] text-[#3D3D3D]">
                        Enter your email and password to register.
                    </p>

                    <LoginInput
                        placeholder={'Username'}
                        type={'text'}
                    />


                    <LoginInput
                        placeholder={'Enter your email address'}
                        type={'email'}
                    />


                    <LoginInput
                        placeholder={'Password'}
                        type={'password'}
                    />


                    <LoginInput
                        placeholder={'Confirm Password'}
                        type={'password'}
                    />



                    <SecButton
                        text={'Register'}
                    />
                </form>

                <OrRegister
                    mainText={'Or register with'}
                />


            </div>

        </div>
    )
}