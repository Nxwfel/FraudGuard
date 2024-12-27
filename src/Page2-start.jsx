import React from 'react';
import './Page2.css';
import arrow from './arrow-right.png';
import Header from './Header';
const Page2 = () => {
    return (
        <div className='background2 bg-background2 bg-cover bg-center h-screen w-screen'>
           <Header />
            <div className='flex flex-col absolute top-52 left-96 font-textfont text-gray-200 font-light'><h1 className='text-5xl max-w-2xl font-textfont2 text-wrap'>Your  AI Assistant in Detecting <span className='text-sky-500 font-bold'>legal/illegal</span> Transactions</h1><div><button className='mt-10 '>Explore More</button><a href=""><div className='absolute h-14 w-80 left-1/3 -ml-10 -mt-14 backdrop-blur-sm shadow-md bg-white/5 rounded-xl hover:scale-105 transition-transform'><p className='text-center absolute top-4 left-10 text-white font-textfont'>Discover the new ai we made</p><img src={arrow} className='h-3 w-3 right-4 top-5 absolute' /> </div></a></div></div>
            <div className='flex flex-col'><div><h1 className='absolute font-textfont text-9xl blur-lg text-white bottom-0 -mb-10 left-60' >FraudGuard</h1></div></div>
        </div>
    );
};

export default Page2;