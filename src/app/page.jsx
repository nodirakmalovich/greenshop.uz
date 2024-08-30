"use client";

import HomeBlog from "./component/Home/Blog";
import HomeHero from "./component/Home/Hero";
import HomeProducts from "./component/Home/Products";
import HomeTrend from "./component/Home/Trend";

export default function Home() {



  return (

    <div className="my-container">
      <HomeHero />
      <HomeProducts />
      <HomeTrend />
      <HomeBlog />
    </div>


  );
}
