import { useState } from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Home() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="h-[100vh] bg-slate-200">
      <div className="grid grid-cols-1 grid-rows-1  bg-gradient-to-r from-cyan-500 to-blue-500 p-5">
        <div className="flex flex-row items-center ml-3 text-[#fff] text-xl justify-between">
          <div className="flex flex-row items-center">
            <FaMobileAlt />
            <h1>PhoneMe</h1>
          </div>
          <div className="flex items-center flex-row mr-3 outline-none border-none md:m-0">
            <div className="flex md:hidden" onClick={toggleMobileNav}>
              <AiOutlineMenu />
            </div>
            <div className="max-[650px] hidden md:flex md:p-0 ">
              <button className="bg-[#fff] text-[#333] hover:bg-[#06b6d4] hover:text-[#fff] p-1 mr-2 rounded-md">
                Home
              </button>
              <button className="bg-[#fff] text-[#333] hover:bg-[#06b6d4] hover:text-[#fff] p-1 mr-2 rounded-md">
                Shop
              </button>
              <button className="bg-[#fff] text-[#333] hover:bg-[#06b6d4] hover:text-[#fff] p-1 mr-2 rounded-md">
                Login
              </button>
              <button className="bg-[#fff] text-[#333] hover:bg-[#06b6d4] hover:text-[#fff] p-1 mr-2 rounded-md">
                Register
              </button>
            </div>
          </div>
        </div>
        
    </div>
    {isMobileNavOpen && (
          <div className="md:hidden bg-[#fff] w-full h-[200px] flex flex-col justify-center items-center  text-center">
            <button  className=' mt-3'>
              Home
            </button>
            <button className=' mt-3'>
              Shop
            </button>
            <button className=' mt-3'>
              Login
            </button>
            <button className=' mt-3'>
              Register
            </button>
          </div>
    
        )}
      </div>
  );
}
