'use client'

import HomeBlog from "../components/Home/Blog";
import HomeHero from "../components/Home/Hero";
import HomeProducts from "../components/Home/Products";
import HomeTrend from "../components/Home/Trend";

export default function Home() {
  console.log('Home page has been rendered !!!');
  return (
    <div className="my-container">
      <HomeHero />
      <HomeProducts />
      <HomeTrend />
      <HomeBlog />
    </div>
  );
}
