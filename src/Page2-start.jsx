import React from 'react';
import './Page2.css';
import arrow from './arrow-right.png';
const Page2 = () => {
    return (
        <div className='background2 bg-background2 bg-cover bg-center h-screen w-screen'>
            <header className='fixed z-50'>
                <h1 className='absolute left-8 pt-6 text-gray-200 font-textfont font-normal text-2xl hover:text-white transition '>FraudGuard</h1> 
                <ul className=' absolute left-72 justify-center flex gap-14 pt-4'>
                    <a href="#/Page2" className=' active:scale-95 p-3 hover:border-b-2'><li className='font-textfont text-gray-200'>Home</li></a>
                    <a href="#/Page3" className=' active:scale-95 p-3 hover:border-b-2'><li className='font-textfont text-gray-200'>IsFraud?</li></a>
                    <a href="#/Page2" className=' active:scale-95 p-3 hover:border-b-2'><li className='font-textfont text-gray-200 text-nowrap'>Contact Us</li></a>
                
                <div className='ml-80 mt-2 backdrop-blur-sm shadow-md bg-white/5  w-fit h-fit p-2 pr-5 pl-5 cursor-pointer rounded-full hover:scale-105 transition-transform hover:bg-white'><p className='font-textfont text-sky-600'>Login</p></div><div className='-ml-10 backdrop-blur-sm shadow-md mt-2 bg-white/5  w-fit h-fit p-2 pr-5 pl-5 cursor-pointer rounded-full hover:scale-105 transition-transform hover:bg-white'><p className='font-textfont text-sky-600'>Signup</p></div>
                </ul>
            </header>
            <div className='flex flex-col absolute top-52 left-96 font-textfont text-gray-200 font-light'><h1 className='text-5xl max-w-2xl font-textfont2 text-wrap'>Your  AI Assistant in Detecting <span className='text-sky-500 font-bold'>legal/illegal</span> Transactions</h1><div><button className='mt-10 '>Explore More</button><a href=""><div className='absolute h-14 w-80 left-1/3 -ml-10 -mt-14 backdrop-blur-sm shadow-md bg-white/5 rounded-xl hover:scale-105 transition-transform'><p className='text-center absolute top-4 left-10 text-white font-textfont'>Discover the new ai we made</p><img src={arrow} className='h-3 w-3 right-4 top-5 absolute' /> </div></a></div></div>
            <div className='flex flex-col'><div><h1 className='absolute font-textfont text-9xl blur-lg text-white bottom-0 -mb-10 left-60' >FraudGuard</h1></div></div>
        </div>
    );
};

export default Page2;