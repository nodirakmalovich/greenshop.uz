"use client";

import Data, { BlogData } from "@/data/data";
import BlogCard from "../Cards/BlogCard";

export default function HomeBlog() {

  return (
    <div className="Blog mt-5">
      <p className="text-center text-[30px] font-[700] text-[#3D3D3D]">
        Our Blog Posts
        <br />
        <span className="text-[14px] font-[400] text-[#727272]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </span>
      </p>

      <div className="grid grid-cols-4 gap-10 my-5">
        {BlogData.map((blog, index) => {
          return (
            <div key={index}>
              <BlogCard
                image={blog.image.props.src}
                date={blog.seen}
                title={blog.title}
                description={blog.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
