import React from 'react';
import TextPressure from '../Animation/TextPressure';
import { motion } from 'framer-motion';

const Login = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.3 }}> 

    <div className='flex h-screen w-screen'>
      <div className='h-screen w-screen items-center justify-center bg-gradient-to-b from-cyan-500 to-sky-950 '>
        <div style={{ position: 'absolute', height: '300px', width: "100%", top: '30%' }}>
          <TextPressure
            text="FraudGuard"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
        <div className='h-3/5 w-96 bg-transparent backdrop-blur-md border-2 border-zinc-600   mt-28 relative mr-auto ml-auto rounded-xl'>
          <h1 className='font-textfont2 text-4xl text-white tracking-widest mt-5 text-center'>Login</h1>
          
          <form>
    <div class="mb-6 p-3 pb-2">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div> 
    <div class="mb-6 p-3 -mt-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    </div> 
    <p className='font-textfont2 text-white ml-16 '>Don't have an account <a href="#/Signup" className='font-textfont2 text-blue-500 ml-2'>Signup for free</a></p>
    <button type="submit" class="ml-32 mt-2  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
        </div>
      </div>
    </div>
    </motion.div>
  );
};
export default Login;
