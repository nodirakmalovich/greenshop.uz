"use client";

import MainButton from "@/components/Buttons/MainButton";
import ProductCard from "@/components/Cards/ProductCard";
import MenuList from "@/components/MenuList/MenuList";
import ShopProductRow from "@/components/Shop/ShopProductRow";
import { Basket, ProductsData } from "@/data/data";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page({ params }) {
  const { productId } = params;
  const [count, setCount] = useState(0);
  const [selectedItem, setSelectedItem] = useState({});
  const route = useRouter()

  useEffect(() => {
    const selected = ProductsData.filter((product) => product.id == productId);
    setSelectedItem(selected[0]);
  }, [productId]);
  console.log(selectedItem);


  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [pages, setPages] = useState([
    {
      name: "Product Description",
      selected: true,
    },
    {
      name: "Reviews (19)",
      selected: false,
    },
  ]);

  const handlePageSelect = (index) => {
    const updatedPages = pages.map((page, i) => ({
      ...page,
      selected: i === index,
    }));
    setPages(updatedPages);
  };

  const handleBuy = (id) => {
    route.push('/checkout')
    Basket.push(selectedItem);
    localStorage.setItem('basket', JSON.stringify(Basket));
  }


  return (
    <div className="my-container">
      <div className="ShopHero flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-[52px] mt-[50px]">
        <div className="left w-full md:w-[50%]">
          <ProductCard
            leftImage={selectedItem && selectedItem.image ? selectedItem.image.props.src : ''}
            mainImage={selectedItem && selectedItem.image ? selectedItem.image.props.src : ''}
            mainImageAlt={selectedItem ? selectedItem.name : ''}
          />
        </div>
        <div className="right w-full md:w-[50%]">
          <p className="text-[28px] font-[700] leading-[16px]">
            {selectedItem ? selectedItem.name : "Product Name"}
          </p>
          <div className="mt-[21px] mb-[13px] border-b-[0.3px] border-[#46A35880] pb-3">
            <p className="flex justify-between items-center text-[22px] font-[700] leading-[16px] text-[#46A358]">
              ${selectedItem ? selectedItem.price : "Product Price"}
              <span className="text-[15px] font-[400] leading-[16px] text-[#3D3D3D]">
                19 Customer Review
              </span>
            </p>
          </div>

          <p className=" text-[15px] font-[500] leading-[16px] text-[#3D3D3D]">
            Short Description:
          </p>

          <p className="text-[14px] font-[400] leading-[24px] text-[#727272]">
            {selectedItem ? selectedItem.categories : "Product description"}
          </p>

          <div className="flex flex-wrap gap-5  items-center justify-between">

            <div className="flex items-center">
              <MainButton text={"+"} onClick={handlePlus} />

              <p className="mx-3">
                {count}
              </p>

              <MainButton onClick={handleMinus} text={"-"} />
            </div>

            <div className="flex gap-5 md:gap-3">

              <MainButton onClick={() => { handleBuy(selectedItem ? selectedItem.id : NaN) }} text={"buy now"} />

              <MainButton variant="white" text={"Add to cart"} />

              <button className="border-[1px] rounded-md border-[#46A358] w-[30px] h-[30px] flex justify-center items-center">
                <img src={"/LikeGreen.svg"} alt="LikeGreen" />
              </button>
            </div>
          </div>

          <p className="mt-[10px] text-[15px] font-[400] leading-[16px] ">
            SKU: {selectedItem ? selectedItem.sku : "Product sku"}
          </p>

          <p className="mt-[10px] text-[15px] font-[400] leading-[16px] ">
            Categories:{" "}
            {selectedItem ? selectedItem.categories : "Product Category"}
          </p>

          <p className="mt-[10px] text-[15px] font-[400] leading-[16px] ">
            Tags: {selectedItem ? selectedItem.categories : "Product tags"}
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

      <div>
        <ul className="mb-10 flex gap-[50px] mt-[92px] border-b-[0.3px] border-[#46A35880]">
          {pages.map((page, index) => (
            <MenuList
              key={index}
              name={page.name}
              index={index}
              page={page}
              onClick={() => {
                handlePageSelect(index);
              }}
            />
          ))}
        </ul>

        <p className="text-[14px] font-[400] leading-[24px] text-[#727272]">
          {selectedItem && selectedItem.description && selectedItem.description[0]
            ? selectedItem.description[0].main
            : "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. "}
        </p>

        <p className="text-[14px] font-[700] leading-[24px] text-[#3D3D3D] mt-[18px]">
          Living Room:
        </p>
        <p className="text-[14px] font-[400] leading-[24px] text-[#727272]">
          {selectedItem && selectedItem.description && selectedItem.description[0]
            ? selectedItem.description[1].living
            : "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>

        <p className="text-[14px] font-[700] leading-[24px] text-[#3D3D3D] mt-[18px]">
          Dining Room:
        </p>
        <p className="text-[14px] font-[400] leading-[24px] text-[#727272]">
          {selectedItem && selectedItem.description && selectedItem.description[2]
            ? selectedItem.description[2].dining
            : "The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life."}
        </p>

        <p className="text-[14px] font-[700] leading-[24px] text-[#3D3D3D] mt-[18px]">
          Office:
        </p>
        <p className="text-[14px] font-[400] leading-[24px] text-[#727272]">
          {selectedItem && selectedItem.description && selectedItem.description[3]
            ? selectedItem.description[3].office
            : "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>
      </div>

      <ShopProductRow />
    </div>

  );
}

export default Page;
