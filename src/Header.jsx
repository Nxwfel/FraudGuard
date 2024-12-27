import React from 'react';

const Header = () => {
    return (
        <header className='fixed z-50'>
        <h1 className='absolute left-8 pt-6 text-gray-200 font-textfont font-normal text-2xl hover:text-white transition '>FraudGuard</h1> 
        <ul className=' absolute left-72 justify-center flex gap-14 pt-4'>
            <a href="#/Page2" className=' active:scale-95 p-3 hover:border-b-2'><li className='font-textfont text-gray-200'>Home</li></a>
            <a href="#/Page3" className=' active:scale-95 p-3 hover:border-b-2'><li className='font-textfont text-gray-200'>IsFraud?</li></a>
            <a href="#/Page2" className=' active:scale-95 p-3 hover:border-b-2'><li className='font-textfont text-gray-200 text-nowrap'>Contact Us</li></a>
        
        <div className='ml-80 mt-2 backdrop-blur-sm shadow-md bg-white/5  w-fit h-fit p-2 pr-5 pl-5 cursor-pointer rounded-full hover:scale-105 transition-transform hover:bg-white'><p className='font-textfont text-sky-600'>Login</p></div><div className='-ml-10 backdrop-blur-sm shadow-md mt-2 bg-white/5  w-fit h-fit p-2 pr-5 pl-5 cursor-pointer rounded-full hover:scale-105 transition-transform hover:bg-white'><p className='font-textfont text-sky-600'>Signup</p></div>
        </ul>
    </header>
    );
};

export default Header;