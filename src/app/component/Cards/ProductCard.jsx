export default function ProductCard({ leftImage, leftImageAlt, mainImage, mainImageAlt }) {
    return (
        <div className="ProductCard flex gap-7 items-center">
            <div className="left ">
                <img className="w-[100px] mt-4 h-[100px] bg-[linear-gradient(97.77deg,_rgba(245,245,245,0.5)_-23.46%,_rgba(245,245,245,0.5)_107.51%)]" src={leftImage} alt={leftImageAlt} />
                <img className="w-[100px] mt-4 h-[100px] bg-[linear-gradient(97.77deg,_rgba(245,245,245,0.5)_-23.46%,_rgba(245,245,245,0.5)_107.51%)]" src={leftImage} alt={leftImageAlt} />
                <img className="w-[100px] mt-4 h-[100px] bg-[linear-gradient(97.77deg,_rgba(245,245,245,0.5)_-23.46%,_rgba(245,245,245,0.5)_107.51%)]" src={leftImage} alt={leftImageAlt} />
                <img className="w-[100px] mt-4 h-[100px] bg-[linear-gradient(97.77deg,_rgba(245,245,245,0.5)_-23.46%,_rgba(245,245,245,0.5)_107.51%)]" src={leftImage} alt={leftImageAlt} />
            </div>
            <div className="right">
                <img className="w-[404px] h-[404px] bg-[linear-gradient(97.77deg,_rgba(245,245,245,0.5)_-23.46%,_rgba(245,245,245,0.5)_107.51%)]" src={mainImage} alt={mainImageAlt}/>
            </div>
        </div>
    )
}