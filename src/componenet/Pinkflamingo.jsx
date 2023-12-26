import React from 'react'
import Vector05 from "../assets/Vector05.svg"
import check from "../assets/check.svg"


const Pinkflamingo = () => {
  return (
    <>
   
       <div className='lg:w-[1050px] bg-[#fff2f8] lg:h-96 mt-8  lg:ml-52'>
        <div className='p-6'>

<h1 className='font-extrabold lg:text-5xl text-center'>Why PINK FLAMINGO ?</h1>
        </div>

<div className='flex lg:flex-row flex-col'>
<div className='bg-[#fa5c98] lg:w-52 lg:h-52 rounded-full lg:ml-40 lg:mt-10 w-32 h-32 ml-32 '>
   <img src={Vector05} alt='' className=' lg:p-10 lg:ml-5 p-8 ' /> 
   </div>
  <div>
<div  className='flex lg:mt-20 mt-4 lg:ml-10 ml-8'>
  <div>
<img src={check} alt='' className='' /> 
  </div>
<p className='text-sm font-normal ml-3'>Spirituality can provide them with a framework for understanding the <br/>universe and their role in it</p> 
</div>
<div  className='flex  my-3 lg:ml-10 ml-8'>
  <div>
<img src={check} alt='' className='' /> 
  </div>
<p className='text-sm font-normal ml-3'>Coping with stress and uncertainty</p> 
</div>
<div  className='flex  lg:ml-10 ml-8'>
  <div>
<img src={check} alt='' className='' /> 
  </div>
<p className='text-sm font-normal ml-3'>Spirituality can be a path to personal growth and self-discovery</p> 
</div>
<div  className='flex my-3 lg:ml-10 ml-8'>
  <div>
<img src={check} alt='' className='' /> 
  </div>
<p className='text-sm font-normal ml-3'>Spirituality can provide people with a sense of community and<br/> connection with others</p> 
</div>

</div>
</div> 
    </div>
    </>
  )
}

export default Pinkflamingo