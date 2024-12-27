import './Page1.css';
import Home from './home.png';
import Main from './balance.png'; 
import Settings from './settings.png';
import Logout from './logout.png';
import { Link } from 'react-router-dom';
function Page1() {
  return (

    <div className='background bg-background bg-cover bg-center h-screen w-screen'>
      <header className='flex items-center'>
        <h1 className='ml-10 mt-7 text-gray-200 font-textfont font-normal text-2xl hover:text-white transition '>FraudGuard</h1>  
        <form class="form"><label for="search"><input class="input" type="text" required="" placeholder="Search" id="search" /><div class="fancy-bg"></div><div class="search"><svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg></div></label></form>
        <div className='absolute right-0 mt-4 flex content-center'><h1 className='text-gray-300 font-textfont mt-5 mr-5'>Hi ,Username!!</h1><div className='size-14 rounded-full bg-gray-700 mr-3'></div></div>
        </header>
        <div className='flex flex-col  bg-white rounded-full backdrop-blur-sm shadow-md bg-white/5 h-32 w-12 ml-12 mt-24 items-center '><div className='size-10 mt-1 rounded-full justify-center hover:scale-125 transition-transform cursor-pointer'><Link to="/Page2"><img className='h-5 w-5 ml-2.5 mt-3' src={Home}/></Link></div><div className='size-10 mt-10 rounded-full justify-center hover:scale-125 transition-transform cursor-pointer'><img className='h-5 w-5 ml-2.5 mt-2' src={Main}/></div></div>
        <div className='flex flex-col  bg-white rounded-full backdrop-blur-sm shadow-md bg-white/5 h-14 w-12 ml-12 mt-2 items-center cursor-pointer'><img src={Settings} className='h-5 w-5 mt-4 hover:scale-125 transition-transform'/></div>
        <div className=' absolute bottom-5 flex flex-col  bg-white rounded-full backdrop-blur-sm shadow-md bg-white/5 h-12 w-12 ml-12  items-center cursor-pointer'><img src={Logout} className='h-5 w-5 mt-4 hover:scale-125 transition-transform'/></div>
        <div className='felx flex-col items-center'>
          <h1 className='absolute  top-40 left-36 text-5xl font-textfont text-white'>My Dashboard</h1>
          <div className='flex'>
            <div className='absolute backdrop-blur-sm shadow-md bg-white/10 top-56 left-52 rounded-2xl h-10 w-20 hover:bg-white/40 transition cursor-pointer'>
            <a><h1 className='font-textfont text-white mt-1.5 m-4'>Stats</h1></a>
            </div>
            <div className='absolute backdrop-blur-sm shadow-md bg-white/10 top-56 left-1/4 rounded-2xl h-10 w-20 hover:bg-white/40 transition cursor-pointer'>
            <a><h1 className='font-textfont text-white mt-1.5 m-3'>History</h1></a>
            </div>
            <div className='absolute backdrop-blur-sm shadow-md bg-white/10 top-56 left-1/3 rounded-2xl h-10 w-fit hover:bg-white/40 transition cursor-pointer'>
            <a><h1 className='font-textfont text-white mt-1.5 m-2'>Golbal-stats</h1></a>
            </div>
            </div>
            <div className='flex flex-col'>
            <div className='h-44 w-5/12 backdrop-blur-sm shadow-md bg-white/10 ml-44 -mt-20 rounded-2xl'>
            <h1 className='font-textfont text-white -ml-96 text-lg pt-4'>Your Flow</h1> <h2 className=' absolute right-6 top-1 underline font-textfont text-white text-sm pt-4'>View All</h2>
            </div>
            <div className='flex'>
              <div className='h-44 w-5/12 ml-44 mt-8 backdrop-blur-sm shadow-md bg-white/10 rounded-xl'>
              <h1 className='absolute bottom-0 font-textfont text-gray-500 text-base ml-3 pt-4'>This week's use</h1>
            </div>
            </div>
            </div>
            </div>
            <div className='flex'>
              <div className='z-10 absolute h-96 w-96 top-28 right-28 backdrop-blur-sm shadow-md bg-white/5 rounded-2xl justify-center flex hover:z-30 hover:scale-105 transition-transform'><h1 className='absolute left-3 text-xl mt-3 font-light font-textfont text-white'>My Stats:</h1><div className='z-30 h-1/2 w-11/12 mt-16 bg-sky-950 rounded-2xl '><h1 className='font-textfont text-white font-light ml-2 mt-9 mb-3'>Total Use:</h1><h1 className='font-textfont font-light tracking-widest text-3xl ml-2 text-white'>8808 Times</h1></div><div className='absolute h-1/2 w-9/12 mt-12 bg-white/5 border-2 rounded-xl border-sky-900'></div><div className='absolute h-1/2 w-10/12 mt-14 bg-white/5 border-2 rounded-xl border-sky-900'></div></div>
              <div className='z-20 absolute h-80 w-96 top-72 right-28 backdrop-blur-sm shadow-md bg-white/5 rounded-3xl'>
              <h1 className='absolute left-3 text-xl mt-3 font-light font-textfont text-white'>History:</h1>
              <div>
                <div className='h-10 w-full mt-14 bg-transparent border-b-2 border-gray-400 flex'>
                  <h1 className='font-textfont text-white ml-14'>Transaction1</h1><h1 className='font-textfont text-white ml-32'>Result</h1>
                </div>
                  <div className='h-10 w-full mt-14 bg-transparent border-b-2 border-gray-400 flex'>
                    <h1 className='font-textfont text-white ml-14'>Transaction2</h1><h1 className='font-textfont text-white ml-32'>Result</h1>
                  </div>
                  <div className='h-10 w-full  mt-14 bg-transparent border-b-2 border-gray-400 flex'>
                    <h1 className='font-textfont text-white ml-14'>Transaction3</h1><h1 className='font-textfont text-white ml-32'>Result</h1>
                  </div>
              </div>
              </div>
            </div>
    </div>
  );
}

export default Page1;