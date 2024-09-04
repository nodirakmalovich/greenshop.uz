export default function LoginInput({placeholder, type}) {
    return (
        <input
            required
            className="border-[1px] border-[#EAEAEA] my-3 w-full rounded-[5px] py-3 px-[14px] text-[#A5A5A5] outline-none"
            type={type}
            placeholder={placeholder}
        />
    )
}