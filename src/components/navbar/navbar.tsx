//navbar
import Image from "next/image";
import Link from "next/link";
import Reservation from "../reservation/reservation";

export default function Navbar() {
    return (
        <div className="fixed top-0 z-50">
            <div className="flex justify-between items-center py-[15px] px-[15px] rounded-b-[15px] bg-[#846046] w-screen">
                <div className="flex justify-between items-center">
                    <Image src="images/logo.svg" alt="logo" width={43} height={37}/>
                    <p className="text-h2mobile text-white font-lato font-extrabold ">Cafe ITB</p>
                </div>
                <Image src="images/dropdown.svg" alt="dropdown" width={35} height={25}/>
            </div>
            {/* reservation */}
            <Link href="/reservation">
                    <Reservation />
            </Link>
        </div>
    )
}