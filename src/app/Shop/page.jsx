"use client";
import { useState } from "react";
import HomeProducts from "../../components/Home/Products";
import ShopHero from "../../components/Shop/ShopHero";
import Data from "../../data/data";
import ShopDescription from "../../components/Shop/ShopDescription";
import MainCard from "../../components/Cards/MainCard";
import ShopProductRow from "../../components/Shop/ShopProductRow";

export default function Shop() {
  return (
    <div className="my-container">
      <ShopHero />
      <ShopDescription />
      <ShopProductRow />
    </div>
  );
}
