import React from 'react';
import '../Style/Page2.css';
import BlurText from "../Animation/BlurText";
import TrueFocus from '../Animation/TrueFocus';
import arrow from '../Images/arrow-right.png';
import Header from '../Templates/Header'; 
import Close from "../Images/close.png"
import { motion } from 'framer-motion';
const Popup = () => {
    document.getElementById('User-Page').style.top = '-700px';
    document.getElementById('User-Page').style.transition = '1s';
}
const Page2 = () => {
    
    return (
        <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.3 }}> 
        <div className='background2 bg-background2 bg-cover bg-center h-screen w-screen'>
           <Header />
           <motion.div
                initial={{opacity:0 , y:-300}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:2}}
                className='absolute -top-96 left-1/3 w-96 h-3/5 rounded-lg bg-white z-50 items-center justify-center text-center'
                id='User-Page'
                >
                    <div className='absolute -top-32 left-36 ml-2 h-36 w-20 bg-sky-700'></div> <img src={Close} className='absolute h-6 w-6 left-3 top-3' onClick={Popup} /><div className=' relative mr-auto ml-auto mt-8 h-24 w-24 rounded-full bg-black/30'></div><h1 className='text-sky-700 font-textfont mt-4'>Hi, Username</h1><h2 className='text-left ml-5 text-sky-700 font-textfont mt-4'>Recent Transactions:</h2> <ul className='flex flex-col gap-4'> <li className='text-sky-700 font-textfont mt-4 text-left pl-20 border-b-2 border-neutral-500'>Transaction1</li> <li className='text-sky-700 font-textfont mt-4 text-left pl-20 border-b-2 border-neutral-500'>Transaction2</li> <li className='text-sky-700 font-textfont mt-4 text-left pl-20 border-b-2 border-neutral-500'>Transaction3</li> </ul>
                </motion.div>
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
                        className="text-8xl max-md:text-7xl font-textfont2 text-wrap text-center textalpha"
                    />
                    <h1 className='text-8xl max-md:text-7xl font-textfont2 text-wrap text-center textalpha'> <span className='text-sky-500 font-bold'>legal/illegal</span> Transactions</h1></motion.div>
                <motion.div
                initial={{opacity:0 , y:100}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:2}}
                delay={1}
                >
                <div className='flex max-md:flex-col max-md:gap-5 items-center justify-center gap-11'>
                <a href="#/Page3"><motion.div
                initial={{opacity:0 , y:100}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:1.5}}
                className='relative z-40 max-md:h-9 max-md:w-32 h-14 w-52 right-0 mt-5 justify-center items-center text-center backdrop-blur-sm shadow-md bg-white/5 p-2 pr-5 pl-5 cursor-pointer rounded-full hover:scale-105 hover:transition-colors hover:bg-white'><p className='text-center relative top-2 left-auto right-auto font-textfont text-sky-600 max-md:top-0 max-md:text-sky-300'>Try it Now!</p></motion.div></a>
                <a href="#/Page1"><div className='relative z-40 max-md:h-11 max-md:w-62 h-14 w-80 right-auto left-auto mt-5 backdrop-blur-sm shadow-md bg-white/5 rounded-xl hover:scale-105 transition-transform'><p className='text-center absolute z-50 max-md:top-3 top-4 left-10 text-white font-textfont'>Discover the new ai we made</p><img src={arrow} className='h-3 w-3 right-4 max-md:top-4 top-5 absolute' /> </div></a>
                </div></motion.div>
            </div>
                <div className='flex flex-col w-screen h-fit justify-center items-center'>
                    <h1 className='absolute font-textfont text-9xl max-md:6xl blur-lg text-white left-auto right-auto bottom-11 cursor-default z-0 ' id='suite' >FraudGuard</h1>
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
        </motion.div>
    );
};

export default Page2;