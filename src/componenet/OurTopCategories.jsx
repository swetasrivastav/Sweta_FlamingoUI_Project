import React from 'react'
 import Rectangle14 from "../assets/Rectangle14.svg"
 import Rectangle15 from "../assets/Rectangle15.svg"

 import Rectangle16 from "../assets/Rectangle16.svg"

 import Rectangle17 from "../assets/Rectangle17.svg"

 import Rectangle18 from "../assets/Rectangle18.svg"

 import Rectangle19 from "../assets/Rectangle19.svg"



     

const OurTopCategories = () => {
  return (
    <>
    <div className='mt-8 lg:ml-52 ml-20'>
     <h2 className='font-bold lg:text-lg lg:ml-2'>Shop From Our Top Categories</h2>
    <div  className=' flex lg:flex-row flex-col  lg:w-[1100px] lg:h-72 mt-3 '>
   <div className=''>
   <img src={Rectangle14} alt='' className=' w-44 p-1' />
    <h3 className='font-semibold text-base text-black ml-10'>Cone Dhoop</h3>
   <h5 className='font-medium text-base text-[#FA5C98] ml-12'>Shop Now</h5>
  </div>
  <div className=''>
   <img src={Rectangle15} alt='' className=' w-44 p-1' />
   <div className=''>
  <h3 className='font-semibold text-base text-black ml-6'>Incense Holders</h3>
   <h5 className='font-medium text-base text-[#FA5C98] ml-10'>Shop Now</h5>
   </div>
  </div>
  <div className=''>
   <img src={Rectangle16} alt='' className=' w-44 p-1' />
   <div className=''>
  <h3 className='font-semibold text-base text-black ml-10'>Incense Sticks</h3>
   <h5 className='font-medium text-base text-[#FA5C98] ml-12'>Shop Now</h5>
   </div>
  </div>
  <div className=''>
   <img src={Rectangle17} alt='' className=' w-44 p-1'/>
   <div className=''>
  <h3 className='font-semibold text-base text-black ml-16'>Shankh</h3>
   <h5 className='font-medium text-base text-[#FA5C98] ml-14'>Shop Now</h5>
   </div>
  </div>
  <div className=''>
   <img src={Rectangle18} alt='' className=' w-44 p-1' />
   <div className=''>
  <h3 className='font-semibold text-base text-black ml-16'>Kalash</h3>
   <h5 className='font-medium text-base text-[#FA5C98] ml-14 '>Shop Now</h5>
   </div>
  </div>
  <div className=''>
   <img src={Rectangle19} alt='' className=' w-44 p-1' />
   <div className=''>
  <h3 className='font-semibold text-base text-black ml-10'>Buddha Statue</h3>
   <h5 className='font-medium text-base text-[#FA5C98] ml-14 '>Shop Now</h5>
   </div>
  </div>
 </div>
  </div>
  </>

  )
}

export default OurTopCategories