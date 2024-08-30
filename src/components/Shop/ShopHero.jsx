// import { useDispatch } from "react-redux";
import Data from "@/data/data";
import ProductCard from "../Cards/ProductCard";
import MainButton from "../Buttons/MainButton";
import { useState } from "react";

export default function ShopHero() {
  // const dispatch = useDispatch()

  const { singleProduct } = Data();
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    // singleProduct.count += 1
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
      // singleProduct.count -= 1
    }
  };

  return (
    <div className="ShopHero flex items-center gap-[52px] mt-[50px]">
      <div className="left w-[50%]">
        <ProductCard />
      </div>
      <div className="right w-[50%]">
        <p className="text-[28px] font-[700] leading-[16px]">
          {singleProduct ? singleProduct.name : "Product Name"}
        </p>
        <div className="mt-[21px] mb-[13px] border-b-[0.3px] border-[#46A35880] pb-3">
          <p className="flex justify-between items-center text-[22px] font-[700] leading-[16px] text-[#46A358]">
            ${singleProduct ? singleProduct.price : "Product Price"}
            <span className="text-[15px] font-[400] leading-[16px] text-[#3D3D3D]">
              19 Customer Review
            </span>
          </p>
        </div>

        <p className=" text-[15px] font-[500] leading-[16px] text-[#3D3D3D]">
          Short Description:
        </p>

        <p className="text-[14px] font-[400] leading-[24px] text-[#727272]">
          {singleProduct ? singleProduct.description : "Product description"}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MainButton text={"+"} onClick={handlePlus} />

            <p className="mx-3">
              {singleProduct ? singleProduct.count : count}
            </p>

            <MainButton onClick={handleMinus} text={"-"} />
          </div>
          <div className="flex gap-3">
            <MainButton text={"buy now"} />

            <MainButton variant="white" text={"Add to cart"} />

            <button className="border-[1px] rounded-md border-[#46A358] w-[30px] h-[30px] flex justify-center items-center">
              <img src={"LikeGreen.svg"} alt="LikeGreen" />
            </button>
          </div>
        </div>

        <p className="mt-[10px] text-[15px] font-[400] leading-[16px] ">
          SKU: {singleProduct ? singleProduct.sku : "Product sku"}
        </p>

        <p className="mt-[10px] text-[15px] font-[400] leading-[16px] ">
          Categories:{" "}
          {singleProduct ? singleProduct.categories[0] : "Product Category"}
        </p>

        <p className="mt-[10px] text-[15px] font-[400] leading-[16px] ">
          Tags: {singleProduct ? singleProduct.categories : "Product tags"}
        </p>
        <div className="flex justify-start gap-4 items-center mt-[18px] ">
          <p className=" text-[15px] font-[500] leading-[16px] text-[#3D3D3D]">
            Share this products:
          </p>
          <div className="flex gap-3">
            <img src={"/FacebookBlack.svg"} alt="FacebookBlack" />
            <img src={"/TwitterBlack.svg"} alt="TwitterBlack" />
            <img src={"/LinkedinBlack.svg"} alt="LinkedinBlack" />
            <img src={"/MessageBlack.svg"} alt="MessageBlack" />
          </div>
        </div>
      </div>
    </div>
  );
}
