"use client";
import { useState } from "react";
import HomeProducts from "../component/Home/Products";
import ShopHero from "../component/Shop/ShopHero";
import Data from "../data/data"
import ShopDescription from "../component/Shop/ShopDescription";
import MainCard from "../component/Cards/MainCard";
import ShopProductRow from "../component/Shop/ShopProductRow";

export default function Shop() {



    return (
        <div className="my-container">
            <ShopHero />
            <ShopDescription />
            <ShopProductRow />

        </div>
    )
}