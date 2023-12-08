import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer/footer';

const Menu: React.FC = () => {
    return (
       <div className=' h-56 bg-white bg-cover bg-center bg-[url("/images/bg-menu.png")]'>
        <Navbar/>
        <div className=' h-28 flex items-center justify-center text-3xl'>
            Our Menu
        </div>
        <div className='h-fit bg-white rounded-3xl p-5 text-[#34100A] font-bold text-xl'>
            Categories
            <div className='flex my-4'>
                <div>
                    <div className='flex  w-28 shadow-lg rounded-3xl bg-[#846046] p-3'>
                        <div className='w-fit h-fit rounded-full flex items-center  bg-white'>
                            <Image src='/images/bg-drink.svg' width={25} height={50} alt="logo drink" className='rounded-full'/>
                        </div>
                        <div className='font-semibold ml-2 text-white text-'>
                            Drink
                        </div>
                    </div>
                </div>
                <div>
                     <div className='flex w-28 shadow-lg rounded-3xl bg-[#846046] p-3'>
                        <div className='w-fit h-fit rounded-full flex items-center  bg-white'>
                            <Image src='/images/bg-drink.svg' width={25} height={50} alt="logo drink" className='rounded-full'/>
                        </div>
                        <div className='font-semibold ml-2 text-white'>
                            Food
                        </div>
                    </div>

                </div>
                <div>
                    <div className='flex justify-between w-32 shadow-lg rounded-3xl bg-[#846046] p-3'>
                        <div className='w-fit h-fit rounded-full flex items-center  bg-white'>
                            <Image src='/images/bg-drink.svg' width={25} height={50} alt="logo drink" className='rounded-full'/>
                        </div>
                        <div className='ml-3 text-white'>
                            Snack
                        </div>
                    </div>
                    
                </div>

            </div>
                <div className='font-bold text-[#34100A] my-4'>
                    Popular Now
                </div>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='text-black'>
                        <Image src="/images/menu1.svg" alt="gambar menu" width={155} height={20}/>
                        <h1 className='text-sm mt-2 ml-3'>Cappucino</h1>
                        <p className='text-sm ml-3'>With Chocolate</p>
                    </div>
                    <div className='text-black'>
                        <Image src="/images/menu1.svg" alt="gambar menu" width={155} height={20}/>
                        <h1 className='text-sm mt-2 ml-3'>Cappucino</h1>
                        <p className='text-sm ml-3'>With Chocolate</p>
                    </div>
                    <div className='text-black'>
                        <Image src="/images/menu1.svg" alt="gambar menu" width={155} height={20}/>
                        <h1 className='text-sm mt-2 ml-3'>Cappucino</h1>
                        <p className='text-sm ml-3'>With Chocolate</p>
                    </div><div className='text-black'>
                        <Image src="/images/menu1.svg" alt="gambar menu" width={155} height={20}/>
                        <h1 className='text-sm mt-2 ml-3'>Cappucino</h1>
                        <p className='text-sm ml-3'>With Chocolate</p>
                    </div>
                </div>
                <div className='font-bold text-[#34100A] mt-4 mb-3'>
                    Special Offer
                </div>
                <div className=' flex justify-center'>
                <Image src='/images/specialoffer.svg' width={280} height={50} alt="logo drink" className='rounded-full'/>
                </div>
                <div className='font-bold text-[#34100A] my-4'>
                    Popular Now
                </div>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='text-black'>
                        <Image src="/images/menu1.svg" alt="gambar menu" width={155} height={20}/>
                        <h1 className='text-sm mt-2 ml-3'>Cappucino</h1>
                        <p className='text-sm ml-3'>With Chocolate</p>
                    </div>
                    <div className='text-black'>
                        <Image src="/images/menu1.svg" alt="gambar menu" width={155} height={20}/>
                        <h1 className='text-sm mt-2 ml-3'>Cappucino</h1>
                        <p className='text-sm ml-3'>With Chocolate</p>
                    </div>
                    <div className='text-black'>
                        <Image src="/images/menu1.svg" alt="gambar menu" width={155} height={20}/>
                        <h1 className='text-sm mt-2 ml-3'>Cappucino</h1>
                        <p className='text-sm ml-3'>With Chocolate</p>
                    </div><div className='text-black'>
                        <Image src="/images/menu1.svg" alt="gambar menu" width={155} height={20}/>
                        <h1 className='text-sm mt-2 ml-3'>Cappucino</h1>
                        <p className='text-sm ml-3'>With Chocolate</p>
                    </div>
                </div>
        </div>
       </div>
    )
};

export default Menu;
