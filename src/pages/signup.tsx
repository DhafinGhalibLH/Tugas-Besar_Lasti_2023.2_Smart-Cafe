import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Signup: React.FC = () => {
    return (
      <div className="bg-black">
        <div className="flex flex-col items-center justify-center w-full h-[210px]" style={{ backgroundImage: `url(/images/bg-menu.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
            <p className="font-lato text-heading3 font-bold text-[#D0CFCF]">SIGN UP</p>
        </div> 
        <div className='flex flex-col items-center px-[40px] pt-[40px] bg-white rounded-t-3xl text-[#8B4513]'> 
          <div className='w-[291px] my-[5px]'>
            <label className='my-8'>Email</label>
            <input type ="text" className="border-2 rounded-[15px] w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brown-500" placeholder="Input your email here..."></input>
          </div>
          <div className='w-[291px] my-[5px]'>
            <label className='my-8'>Password</label>
            <input type ="text" className="border-2 rounded-[15px] w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brown-500" placeholder="Create your password..."></input>
          </div>
          <div className='w-[291px] my-[5px]'>
            <label className='my-8'>Confirm Password</label>
            <input type ="text" className="border-2 rounded-[15px] w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brown-500" placeholder="Confirm your password..."></input>
          </div>
          <div className="flex items-center justify-around bg-[#846046] w-[171px] h-[57px] rounded-[20px] px-[50px] mt-[65px] mb-[33px] mx-[45px] hover:brightness-110">
            <p className="text-body1 text-white font-poppins">Sign Up</p>
          </div>
          <div className="text-orange-950 text-center text-sm">Or Sign Up with</div>
          <Link href="#gugel">
            <Image className="my-[10px]" src="/images/gugel.svg" alt="gugel" width={28} height={28}/>
          </Link>
          <div className="text-orange-950 text-center text-sm pb-[80px]">
            <span className="">Already have an account?</span>
            <Link href="/login"><span className="font-bold"> Login</span></Link>
          </div>
        </div>
      </div>
    );
};

export default Signup;