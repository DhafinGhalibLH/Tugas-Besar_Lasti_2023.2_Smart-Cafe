// Homepage
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import SlideableMenu from "@/components/slideableMenu/slideableMenu";
import Reservation from "@/components/reservation/reservation";

const operationalSchedule = [
  { day: 'MONDAY - FRIDAY', hours: '11:00 AM - 10:00PM' },
  { day: 'SATURDAY', hours: '11:00 AM - 00:00 AM' },
  { day: 'SUNDAY', hours: 'CLOSED' },
];

export default function Homepage() {
  return (
    <div className="base flex flex-col items-center justify-center bg-white">
      <div className="h-full w-full md:w-[375px] bg-white">
        {/* navbar */}
        <Navbar/>
        {/* reservation */}
        <Link href="/reservation">
        <Reservation />
        </Link>
        {/* main */}
        {/* jam operasional cafe */}
        <div className="relative flex flex-col items-center justify-center font-lato py-[200px] bg-black">
          <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover z-10 fadeInAnimation">
            <source src="/video/videoDashboard.mp4" type="video/mp4"/>
          </video>
          <div className="z-10">
            <p className="text-heading2 text-[#C4AA97] ">open</p>
              <div className="h-[1px] w-[222px] my-[18px] bg-white"></div>
              {operationalSchedule.map((schedule, index) => (
                <div key={schedule.day}>
                  <div className="text-white flex flex-col items-center">
                    <p className="text-h2mobile my-[5px]">{`${schedule.day}`}</p>
                    <p className="text-body1 my-[5px]">{`${schedule.hours}`}</p>
                  </div>
                  {schedule.day === 'MONDAY - FRIDAY' && <div className="h-[1px] w-[222px] my-[18px] bg-white"></div>}
                </div>
              ))}
          </div>
        </div>
        {/* about us */}
        <div>
          <div className="flex flex-col items-center justify-center w-full h-[87px] mt-[47px]" style={{ backgroundImage: `url(/images/tanganKopi.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <p className="font-lato text-h1mobile text-[#D0CFCF]">ABOUT US</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-[40px]">
            <p className="font-poppins text-body2 text-black py-[16px]">
            Selamat datang di Cafe ITB! Kami adalah pusat kopi di tengah inovasi kampus. Rasakan kopi berkualitas dalam suasana yang nyaman. Cocok untuk belajar, bertemu teman, atau sekadar menikmati momen sendirian. Bergabunglah dengan kami dan nikmati keunggulan kopi dalam semangat dinamis ITB!
            </p>
            <Image src="/images/map.svg" alt="map" width={308} height={174}/>
          </div>
          <div className="flex flex-row items-center px-[40px] py-[16px]">
              <Image src="/images/marker.svg" alt="marker" width={24} height={24}/>
              <p className="font-poppins text-caption text-black">ITB Kampus Jatinangor</p>
            </div>
        </div>
        {/* our bestsellers */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full h-[87px]" style={{ backgroundImage: `url(/images/tanganKopi.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <p className="font-lato text-h1mobile text-[#D0CFCF] text-center">OUR <br></br>BEST SELLERS</p>
          </div>
          {/* slideable menu items*/}
            <SlideableMenu/>
          <p className="font-poppins text-body2 text-black text-center mx-[40px]">
          Dipenuhi dengan cita rasa yang memikat dan kelezatan yang tak tertandingi, hidangan ini adalah persembahan kami untuk pencinta kuliner. Setiap suap menghadirkan harmoni rasa dari bahan-bahan pilihan, dipadukan dengan sentuhan kreatif yang unik.
          </p>
          {/* button  */}
          <Link href="/menudrink">
            <div className="flex items-center justify-around bg-[#846046] w-[267px] h-[57px] rounded-[30px] px-[20px] mt-[13px] mb-[33px] hover:brightness-110">
              <p className="text-body1 text-white font-poppins">See More of Our Menu</p>
              <Image src="/images/arrow.svg" alt="arrow" width={21} height={21}/>
            </div>
          </Link>
        </div>
      </div>
      {/* footer */} 
      <Footer />
    </div>
  );
}