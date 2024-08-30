import Image from "next/image";
import MainButton from "../Buttons/MainButton";
import SecButton from "../Buttons/secButton";

export default function HomeTrend() {
    return (
        <div className="Trend my-10 ">
            <div className="Trend_body grid grid-cols-2 gap-7 justify-between items-center " >

                <div className="left flex justify-between items-center p-5 shadow-lg rounded-lg">
                    <Image src={'/BlushingBromeliad.svg'} width={200} height={200} alt="BlushingBromeliad" />

                    <div className="body">

                        <p className="text-end text-[18px] font-[900] leading-6 uppercase text-[#3D3D3D]">
                            Summer cactus <br /> & succulents
                        </p>
                        <p className="text-end text-[14px] font-[400] text-[#727272] mt-3 leading-6 ">
                            We are an online plant shop offering a wide  <br /> range of cheap and trendy plants
                        </p>
                        <div className="text-end mt-3">
                            <SecButton
                                text={'find more'}
                            />
                        </div>
                    </div>
                </div>


                <div className="right flex justify-between items-center p-5 shadow-lg rounded-lg">

                    <Image src={'/AfricanViolet.svg'} width={200} height={200} alt="AfricanViolet" />

                    <div className="body">

                        <p className="text-end text-[18px] font-[900] leading-6 uppercase text-[#3D3D3D]">
                            Styling Trends <br /> & much more
                        </p>
                        <p className="text-end text-[14px] font-[400] text-[#727272] mt-3 leading-6 ">
                            We are an online plant shop offering a wide  <br /> range of cheap and trendy plants
                        </p>
                        <div className="text-end mt-3">
                            <SecButton
                                text={'find more'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}