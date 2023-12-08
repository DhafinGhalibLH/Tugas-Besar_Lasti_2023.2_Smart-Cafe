import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function SlideableMenu() {
  return (
    <div>
      <Carousel showArrows={false} showStatus={false} showThumbs={false}>
        <div className="flex flex-col items-center justify-center text-center mt-[54px]">
          <Image className="px-[40px]" src="/images/drink1.svg" alt="gambar menu" width={308} height={174}/>
          <p className="text-h2mobile text-black mt-[10px] mb-[40px]">Cappucino</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-[54px]">
          <Image className="px-[40px]" src="/images/food2.svg" alt="gambar menu" width={308} height={174}/>
          <p className="text-h2mobile text-black mt-[10px] mb-[40px]">Spaghetti Bolognese</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-[54px]">
          <Image className="px-[40px]" src="/images/snack1.svg" alt="gambar menu" width={308} height={174}/>
          <p className="text-h2mobile text-black mt-[10px] mb-[40px]">Waffle with strawberry</p>
        </div>
        {/* Add more menu items here */}
      </Carousel>
    </div>
  );
}