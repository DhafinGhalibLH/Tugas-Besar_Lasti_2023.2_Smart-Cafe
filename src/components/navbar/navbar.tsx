//navbar
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Reservation from "../reservation/reservation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <div className="fixed top-0 z-50 w-screen">
            <div className="flex justify-between items-center py-[15px] px-[15px] rounded-b-[15px] bg-[#846046] z-30">
            <div className="flex justify-between items-center">
                <Image src="images/logo.svg" alt="logo" width={43} height={37}/>
                <p className="text-h2mobile text-white font-lato font-extrabold ">Cafe ITB</p>
            </div>
            <div onClick={toggleDropdown}>
                <Image src="images/dropdown.svg" alt="dropdown" width={35} height={25}/>
            </div>
            </div>
        </div>
        <div className={`fixed top-0 mt-[20px] transition-transform duration-500 ease-in-out overflow-hidden flex flex-col bg-[#846046] w-full z-20 px-[48px] rounded-b-[30px] transform ${isOpen ? 'translate-y-[30px]' : '-translate-y-full'}`}>
            <Link className="font-poppins text-subtitle1 my-[10px] pt-[20px] text-white hover:brightness-90" href="/">Home</Link>
            <Link className="font-poppins text-subtitle1 my-[10px] text-white hover:brightness-90" href="/reservation">Reservation</Link>
            <Link className="font-poppins text-subtitle1 my-[10px] text-white hover:brightness-90" href="/menudrink">Our Menu</Link>
            <Link className="flex flex-row space-x-[10px] my-[10px] pb-[20px] hover:brightness-90" href="/login">
                <p className="font-poppins text-subtitle1 text-white">Login</p>
                <Image src="/images/loginIcon.svg" alt='login' width={20} height={20}/>
            </Link>
        </div>
        </>
    );
}