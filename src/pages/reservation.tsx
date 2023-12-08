import React from 'react';


const Reservation: React.FC = () => {

    return (

        <><div className="flex flex-col items-center justify-center w-full h-[95px] mt-[47px]" style={{ backgroundImage: `url(/images/bg-menu.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <p className="font-lato text-h1mobile text-[#D0CFCF]">Reservation</p>
        </div> <div className='h-fit bg-white rounded-3xl p-5 text-[#8B4513]'> <div className='my-4'>
            <label className='my-8'>Name</label>
            <input type ="text" className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brown-500" placeholder="Input your name here..."></input></div>
            <div className='my-8'>
            <label className='my-8'>Table For</label>
            <input type ="text" className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brown-500" placeholder="Input total"></input></div>
            <div className='my-8'>
            <label className='my-8'>Date</label>
            <input type ="text" className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brown-500" placeholder="Input your date"></input></div>
            <div className="flex items-center justify-around bg-[#846046] w-[267px] h-[57px] rounded-[30px] px-[50px] mt-[300px] mb-[33px] mx-[45px] hover:brightness-110">
              <p className="text-body1 text-white font-poppins">Save Reservation</p>
            </div>
    </div>

    </>






    


    

    );



};

export default Reservation;