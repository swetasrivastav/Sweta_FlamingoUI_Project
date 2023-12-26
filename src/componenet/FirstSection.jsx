
import React from 'react'
import topimg from "../assets/topimg.svg"
import logo from "../assets/logo.svg"
import searchicon from "../assets/searchicon.svg"
import location from "../assets/location.svg"
import additemicon from "../assets/additemicon.svg"
 import Vector from "../assets/Vector.svg"
import MobileNavbar from './MobileNavbar'
 

const FirstSection = () => {
  return (
    <>
    <div>
        <img src={topimg} alt=''/>
    </div>
    <div className='lg:hidden '>
    <div className='flex gap-20 ml-4 items-center'>
     <img src={logo} alt='logo' /> 
      <MobileNavbar/>
        </div>
    </div>
 <div className='flex mt-6  '>
        <div className='lg:ml-36 hidden lg:block'>
     <img src={logo} alt='logo'/> 
        </div>
        <div className='flex lg:flex-row flex-col gap-2 '>
   <div className='flex ml-4 lg:ml-20 lg:w-[580px] w-72   h-12 border border-[#f6a58a] rounded'>
<div className='lg:w-32 w-20 h-12  bg-[#fa5c98]'>
<div className='flex items-center justify-center p-2 gap-1'>
<img src={location} alt='logo'/> 
<p className='text-white lg:text-xs text-[9px] font-medium'>Deliver to<br/>110094</p>  
</div>
</div>
<div className='flex items-center ml-4'>
<p className='lg:text-xs text-[9px] font-normal text-[#301F4A59]'>Search for medication & Wellness products..</p>
<img src={searchicon} alt='logo' className='w-4 h-6 lg:ml-44'/> 
</div>
   </div>
   <div className='flex items-center space-x-6    lg:ml-14 mt-2 lg:mt-0 ml-14 '>
   <div >
   <img src={additemicon} alt='logo' /> 
</div>
  
 <div className='bg-[#fa5c98] lg:w-8 lg:h-8 w-6 h-6 rounded-full lg:ml-8'>
   <img src={Vector} alt='logo' className='lg:mx-2.5 lg:mt-2 mx-1.5 mt-1' /> 
   </div>
<p className='text-sm  font-bold text-black lg:ml-4'>SIGN IN / SIGN UP</p>
   </div>
   </div>
   </div>
  
    
    </>

  )
}

export default FirstSection