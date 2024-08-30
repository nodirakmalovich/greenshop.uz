export default function MenuList({index, name, page, onClick}) {
    return (
        <li
            key={index}
            className={`cursor-pointer text-[16px] ${page.selected ? 'font-[700] text-[#46A358] ' : 'font-[400]'} border-b-[3px]  pb-[17.7px] ${page.selected ? 'border-[#46A358]' : 'border-transparent'} `}
            onClick={onClick}
        >
            {name}
        </li>
    )
}