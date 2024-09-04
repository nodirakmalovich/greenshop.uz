export default function OrRegister({ mainText, }) {

    return (
        <div className="w-full">
            <div className="flex gap-3 items-center justify-center my-3">
                <p className="text-[13px] font-[400] text-[#3D3D3D] text-center">
                    {mainText}
                </p>
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
    )
}