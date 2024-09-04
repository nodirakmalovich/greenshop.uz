export default function SecButton({text, onClick}){
    return (
        <button onClick={onClick} type="submit" className="bg-[#46A358] w-full text-white text-[16px] font-[700] rounded-md px-4 py-2  capitalize leading-4">{text}</button>
    )
}