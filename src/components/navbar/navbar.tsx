//navbar
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="relative flex justify-between items-center py-[15px] px-[15px] rounded-b-[15px] bg-[#846046]">
            <div className="flex justify-between items-center">
                <Image src="images/logo.svg" alt="logo" width={43} height={37}/>
                <p className="text-h2mobile text-white font-lato font-extrabold ">Cafe ITB</p>
            </div>
            <Image src="images/dropdown.svg" alt="dropdown" width={35} height={25}/>
        </div>
    )
}