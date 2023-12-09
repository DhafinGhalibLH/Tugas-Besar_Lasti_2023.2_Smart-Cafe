import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer/footer';

const Menufood: React.FC = () => {
    return (
        <div className="base flex flex-col items-center justify-center bg-white">
        <div className="h-full w-full md:w-[390px] bg-white">
            <Navbar/>
                <div className=' pt-[70px] h-56 bg-white bg-cover bg-center bg-[url("/images/bg-menu.png")] font-lato'>
                <div className=' h-28 flex items-center justify-center text-3xl  text-white'>
                    Our Menu
                </div>
                <div className='h-fit bg-white rounded-3xl p-5 text-[#34100A] font-bold text-xl'>
                    Categories
                    <div className='flex my-4'>
                        <div>
                            <Link href='/menudrink'>
                            <div className='text-[#3A3A3A] flex w-28 shadow-lg rounded-3xl bg-white p-3 hover:bg-[#846046] hover:text-white'>
                                <div className='w-fit h-fit rounded-full flex items-center  bg-[#846046]'>
                                    <Image src='/images/bg-drink.svg' width={25} height={50} alt="logo drink" className='rounded-full'/>
                                </div>
                                <div className='font-semibold ml-2'>
                                    Drink
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/menufood'>
                            <div className='ml-2.5 mr-2.5 flex w-28 shadow-lg rounded-3xl bg-[#846046] p-3 text-[#3A3A3A] hover:bg-[#846046] hover:text-white'>
                                <div className='w-fit h-fit rounded-full flex items-center  bg-white'>
                                    <Image src='/images/food.svg' width={50} height={50} alt="logo drink" className='rounded-full'/>
                                </div>
                                <div className='font-semibold ml-2 text-white '>
                                    Food
                                </div>
                            </div>
                            </Link>

                        </div>
                        <div>
                            <Link href='/menusnack'>
                            <div className='text-[#3A3A3A] flex w-28 shadow-lg rounded-3xl bg-white p-3 hover:bg-[#846046] hover:text-white'>
                                <div className='w-fit h-fit rounded-full flex items-center bg-[#846046]'>
                                    <Image src='/images/snack.png' width={25} height={50} alt="logo drink" className='rounded-full'/>
                                </div>
                                <div className='font-semibold ml-2'>
                                    Snack
                                </div>
                            </div>
                            </Link>
                            
                        </div>

                    </div>
                    <div className='font-bold text-[#34100A] my-4'>
                            Popular Now
                        </div>
                        <div className='grid grid-cols-2 gap-8'>
                            <div className='text-black'>
                                <Image src="/images/food1.svg" alt="gambar menu" width={155} height={20}/>
                                <h1 className='text-sm mt-2 ml-3'>Spaghetti</h1>
                                <p className='font-thin text-xs ml-3'>Carbonara</p>
                            </div>
                            <div className='text-black'>
                                <Image src="/images/food3.svg" alt="gambar menu" width={155} height={20}/>
                                <h1 className='text-sm mt-2 ml-3'>Sambal Matah</h1>
                                <p className='font-thin text-xs ml-3'>Rice Bowl</p>
                            </div>
                        </div>
                        <div className='font-bold text-[#34100A] mt-4 mb-3'>
                            Special Offer
                        </div>
                        <div className=' flex justify-center'>
                        <Image src='/images/specialoffer.svg' width={280} height={50} alt="logo drink" className='rounded-full'/>
                        </div>
                        <div className='font-bold text-[#34100A] my-4'>
                            All
                        </div>
                        <div className='grid grid-cols-2 gap-8'>
                            <div className='text-black'>
                                <Image src="/images/food2.svg" alt="gambar menu" width={155} height={20}/>
                                <h1 className='text-sm mt-2 ml-3'>Spaghetti</h1>
                                <p className='font-thin text-xs ml-3'>Bolognese</p>
                            </div>
                            <div className='text-black'>
                                <Image src="/images/food1.svg" alt="gambar menu" width={155} height={20}/>
                                <h1 className='text-sm mt-2 ml-3'>Spaghetti</h1>
                                <p className='font-thin text-xs ml-3'>Carbonara</p>
                            </div>
                            <div className='text-black'>
                                <Image src="/images/food3.svg" alt="gambar menu" width={155} height={20}/>
                                <h1 className='text-sm mt-2 ml-3'>Sambal Matah</h1>
                                <p className='font-thin text-xs ml-3'>Rice Bowl</p>
                            </div><div className='text-black'>
                                <Image src="/images/food4.svg" alt="gambar menu" width={155} height={20}/>
                                <h1 className='text-sm mt-2 ml-3'>Sambal Bawang</h1>
                                <p className='font-thin text-xs ml-3'>Rice Bowl</p>
                            </div>
                        </div>
                </div>
                <Footer/>
            </div>
        </div>
        </div>
    )
};

export default Menufood;
