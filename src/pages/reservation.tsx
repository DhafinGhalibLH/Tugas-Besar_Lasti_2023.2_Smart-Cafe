import React from 'react';
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";


const Reservation: React.FC = () => {

    return (
        <div className='base flex flex-col items-center justify-center'>
              <div className="h-full w-full md:w-[390px]"> 
              <Navbar/>
              <div className="flex flex-col items-center justify-center w-full h-[95px] mt-[47px]" style={{ backgroundImage: `url(/images/bg-menu.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                  <p className="font-lato text-h1mobile text-[#D0CFCF]">Reservation</p>
              </div> <div className='h-fit bg-white rounded-3xl p-5 text-[#8B4513]'> <div className='my-4'>
                  <label className='my-8'>Name</label>
                  <input type ="text" className="border-2 rounded-[15px] w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brown-500" placeholder="Input your name here..."></input></div>
                  <div className='my-8'>
                  <label className='my-8'>Table For</label>
                  <input type ="text" className="border-2 rounded-[15px] w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brown-500" placeholder="Input total"></input></div>
                  <div className='my-8'>
                  <label className='my-8'>Date</label>
                  <input type ="text" className="border-2 rounded-[15px] w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brown-500" placeholder="Input your date"></input></div>
                  <div className="my-8">
                <div className="flex items-center mt-1">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="mt-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Would you like to be notified when your reservation is ready?
                  </label>
                </div> </div>
                  <div className="flex items-center justify-around bg-[#846046] w-[267px] h-[57px] rounded-[30px] px-[50px] mt-[150px] mb-[25px] mx-[45px] hover:brightness-110">
                    <p className="text-body1 text-white font-poppins">Save Reservation</p>
                  </div>
          </div>
          <Footer />
          </div>
        </div>
    );
};

export default Reservation;