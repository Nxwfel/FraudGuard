import React from 'react';
import '../Style/Page2.css';
import BlurText from "../Animation/BlurText";
import TrueFocus from '../Animation/TrueFocus';
import arrow from '../Images/arrow-right.png';
import Header from '../Templates/Header'; 
import { motion } from 'framer-motion';
const Page2 = () => {
    
    return (
        <div className='background2 bg-background2 bg-cover bg-center h-screen w-screen'>
           <Header />
            <div className='flex flex-col relative justify-center items-center text-center top-44 font-textfont text-gray-200 font-light'>
                <motion.div
                initial={{opacity:0 , y:-100}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:2}}
                className='text-center justify-center items-center relative'
                >
                    <BlurText
                        text="Your  AI Assistant in Detecting"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-8xl font-textfont2 text-wrap text-center textalpha"
                    />
                    <h1 className='text-8xl font-textfont2 text-wrap text-center textalpha'> <span className='text-sky-500 font-bold'>legal/illegal</span> Transactions</h1></motion.div>
                <motion.div
                initial={{opacity:0 , y:100}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:2}}
                delay={1}
                >
                <div className='flex items-center justify-center gap-11'>
                <a href="#/Page3"><motion.div
                initial={{opacity:0 , y:100}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:1.5}}
                className='z-10 h-14 w-52 right-0 mt-5 justify-center items-center text-center backdrop-blur-sm shadow-md bg-white/5 p-2 pr-5 pl-5 cursor-pointer rounded-full hover:scale-105 hover:transition-colors hover:bg-white'><p className='text-center relative top-2 left-auto right-auto font-textfont text-sky-600'>Try it Now!</p></motion.div></a>
                <a href=""><div className='relative h-14 w-80 right-auto left-auto mt-5 backdrop-blur-sm shadow-md bg-white/5 rounded-xl hover:scale-105 transition-transform'><p className='text-center absolute top-4 left-10 text-white font-textfont'>Discover the new ai we made</p><img src={arrow} className='h-3 w-3 right-4 top-5 absolute' /> </div></a>
                </div></motion.div>
            </div>
                <div className='flex flex-col w-screen h-fit justify-center items-center'>
                    <h1 className='absolute font-textfont text-9xl blur-lg text-white left-auto right-auto bottom-11 cursor-default z-0 ' id='suite' >FraudGuard</h1>
                </div>
             <div className='absolute bottom-10 left-4'>
                <TrueFocus 
                    sentence="Nawfel Ameur"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#2CA6E2"
                    animationDuration={2}
                    pauseBetweenAnimations={1}
                    />
              </div>
        </div>
    );
};

export default Page2;