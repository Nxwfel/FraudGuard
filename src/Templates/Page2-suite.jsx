import React from 'react';
import '../Style/Page2-suite.css';
import Header from '../Templates/Header'
import { motion } from 'framer-motion';
const Page2Suite = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.3 }}
    >
    <div className='background3 bg-background3 bg-cover bg-center h-screen w-screen flex'>
      <Header />
     <div className="flex flex-col items-center justify-center h-screen dark w-screen">
  <div className="w-full max-w-md backdrop-blur-sm bg-white/5 rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-textfont2 text-gray-200 mb-4">IsFraud?</h2>
    
    <form className="flex flex-col w-96">
      <input placeholder="Step" className= "font-textfont2 bg-white/5 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number" />
      <input placeholder="Amount" className="font-textfont2 bg-white/5 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number" />
      <select className="font-textfont2 bg-white/5 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
        <option value="product-1">Cash-in</option>
        <option value="product-2">Cash-out</option>
        <option value="product-3">Debit</option>
        <option value="product-3">Payments</option>
        <option value="product-3">Transfer</option>
      </select>
      <input placeholder="Sender Balance" className="font-textfont2 bg-white/5 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number" />
      <input placeholder="Receiver Balance" className="font-textfont2 bg-white/5 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number" />
      <button className='ml-24 '>Check</button>
    </form>
  </div>
</div>

<div className='flex mt-72 ml-60'><span className='font-textfont2 text-9xl absolute text-sky-600'>Is</span> <span className='font-textfont2 text-9xl absolute text-sky-600'>Isn't</span><span className='font-textfont2 text-9xl text-gray-200 ml-52'> Fraud</span></div>

      <div className="loader absolute right-96 top-0 mt-80 hidden">
    <div className="box box-1">
        <div className="side-left"></div>
        <div className="side-right"></div>
        <div className="side-top"></div>
    </div>
    <div className="box box-2">
        <div className="side-left"></div>
        <div className="side-right"></div>
        <div className="side-top"></div>
    </div>
    <div className="box box-3">
        <div className="side-left"></div>
        <div className="side-right"></div>
        <div className="side-top"></div>
    </div>
    <div className="box box-4">
        <div className="side-left"></div>
        <div className="side-right"></div>
        <div className="side-top"></div>
    </div>
    </div>
        </div>
    </motion.div>
  );
};

export default Page2Suite;