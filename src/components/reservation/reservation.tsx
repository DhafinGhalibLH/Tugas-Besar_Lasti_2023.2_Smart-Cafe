import Image from "next/image";

export default function Reservation() {
    return (
        <div className="relative top-[600px] left-[120px] z-50 flex flex-row items-center justify-around w-[250px] h-[48px] bg-[#846046] rounded-t-[20px] rounded-l-[20px] hover:brightness-110">
            <Image className="" src="/images/reservation.svg" alt="reservation" width={32} height={16}/>
            <p className="font-poppins text-subtitle1 text-white">Book Your Reservation</p>
        </div>
    )
}