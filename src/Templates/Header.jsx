import React from 'react';
import {motion} from 'framer-motion';
const Header = () => {
    return (
        <div><header className='fixed flex z-50'>
        <h1 className='pl-9 pt-6 text-gray-200 font-textfont font-normal text-2xl hover:text-white transition '>FraudGuard</h1> 
        <ul className='w-screen ml-8 flex gap-14 pt-4'>
            <a href="/" className=' active:scale-95 p-3 hover:border-b-2'><li className='font-textfont text-gray-200'>Home</li></a>
            <a href="#/Page3" className=' active:scale-95 p-3 hover:border-b-2'><li className='font-textfont text-gray-200 '>IsFraud?</li></a>
            <a href="" className=' active:scale-95 p-3 hover:border-b-2 mr-22'><li className='font-textfont text-gray-200 '>About</li></a>
        
            <motion.div
            initial={{opacity:0 , y:100}}
            whileInView={{opacity:1 , y:0}}
            transition={{duration:1.5}}
             className='ml-96 right-0 mt-2 backdrop-blur-sm shadow-md bg-white/5  w-fit h-fit p-2 pr-5 pl-5 cursor-pointer rounded-full hover:scale-105 hover:transition-colors hover:bg-white'><a href="#/Login"><p className='font-textfont text-sky-600'>Login</p></a></motion.div>
             
             <motion.div
             initial={{opacity:0 , y:140}}
             whileInView={{opacity:1 , y:0}}
             transition={{duration:1.5}}
              className=' backdrop-blur-sm shadow-md mt-2 bg-white/5  w-fit h-fit p-2 pr-5 pl-5 cursor-pointer rounded-full hover:scale-105 hover:transition-colors hover:bg-white'><a href="#/Signup"><p className='font-textfont text-sky-600'>Signup</p></a></motion.div>
              
        </ul>
    </header>
    </div>
    );
};

export default Header;