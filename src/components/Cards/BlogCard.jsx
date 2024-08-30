export default function BlogCard({ image, title, description, date }) {
    return (
        <div className="BlogCard pb-[13px] bg-[linear-gradient(97.77deg,_rgba(245,245,245,0.5)_-23.46%,_rgba(245,245,245,0.5)_107.51%)]">
            <div className="BlogCard_image">
                <img className="w-full" src={image} alt={"image"} />
            </div>
            <div className="card_body ps-[15px] pe-[20px] pt-2 ">
                <p className="text-[#46A358] text-[14px] font-[500] leading-4 mb-1">
                    {date}
                </p>
                <p className="text-[#3D3D3D] text-[20px] font-[700] leading-[26px] mb-1">
                    {title}
                </p>
                <p className="text-[#727272] text-[14px] font-[400] leading-[22px] mb-1">
                    {description}
                </p>
                <a className="text-[#3D3D3D]  hover:text-[#46A358] text-[14px] font-[500] leading-4 mb-1" href="#">Read More </a>
            </div>
        </div>
    )
}