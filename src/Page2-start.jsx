import React from 'react';
import './Page2.css';
import arrow from './arrow-right.png';
import Header from './Header'; 
import { motion } from 'framer-motion';
const Page2 = () => {
    
    return (
        <div className='background2 bg-background2 bg-cover bg-center h-screen w-screen'>
           <Header />
            <div className='flex flex-col absolute justify-center items-center text-center top-44 font-textfont text-gray-200 font-light'>
                <motion.div
                initial={{opacity:0 , y:-100}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:2}}
                ><h1 className='text-8xl font-textfont2 text-wrap text-center textalpha'>Your  AI Assistant in Detecting <span className='text-sky-500 font-bold'>legal/illegal</span> Transactions</h1></motion.div>
                <motion.div
                initial={{opacity:0 , y:100}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:2}}
                delay={1}
                >
                <a href=""><div className='relative h-14 w-80 right-auto left-auto mt-5 backdrop-blur-sm shadow-md bg-white/5 rounded-xl hover:scale-105 transition-transform'><p className='text-center absolute top-4 left-10 text-white font-textfont'>Discover the new ai we made</p><img src={arrow} className='h-3 w-3 right-4 top-5 absolute' /> </div></a>
                </motion.div>
            </div>
                <div className='flex flex-col w-screen h-fit justify-center items-center'>
                    <h1 className='absolute font-textfont text-9xl blur-lg text-white left-auto right-auto bottom-11 ' id='suite' >FraudGuard</h1>
                </div>
        </div>
    );
};

export default Page2;