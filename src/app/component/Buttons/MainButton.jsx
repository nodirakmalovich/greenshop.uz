export default function MainButton({ text, onClick, variant = "default" }) {
    const baseStyles = "text-[16px] font-[700] rounded-md px-4 py-2 uppercase leading-4";
    const variantStyles =
        variant === "white"
            ? "bg-white text-[#46A358] border border-[#46A358]"
            : "bg-[#46A358] text-white";

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles}`}>
            {text}
        </button>
    );
}