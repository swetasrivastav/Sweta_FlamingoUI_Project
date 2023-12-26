import React from 'react'
import connectimg from "../assets/connectimg.svg"
import formimg01 from "../assets/formimg01.svg"
import formimg02 from "../assets/formimg02.svg"
import formimg03 from "../assets/formimg03.svg"


const Connect = () => {
  return (
    <>
    

  <div className='lg:w-[1050px] lg:h-[450px]  mb-20 lg:ml-52 '>
   <div className='lg:my-8 text-center lg:text-5xl text-xl font-extrabold'>
<h1>Let’s Connect</h1>
</div>
 <div className='flex ml-6 mt-14  '>
<form>
  <div className='space-y-8  '>
  <div className='flex lg:flex-row flex-col gap-6'>
<div className='shadow-lg  h-14  flex hover:border-2 bg-white'>
  
<img src={formimg01} alt='formimg01' className='w-10 ml-2'/>
 
<input type='text' placeholder='Name' className='p-3 text-sm font-normal lg:w-44 outline-none'/>
</div>
<div className='shadow-lg  h-14  flex hover:border-2 bg-white'>
  
<img src={formimg02} alt='formimg01' className='w-10 ml-2 '/>
 
<input type='text' placeholder='Phone' className='p-3 text-sm font-normal lg:w-44 outline-none'/>
</div>
</div>
<div className='shadow-lg  h-14  flex hover:border-2 bg-white'>
  
<img src={formimg03} alt='formimg01' className='w-10 ml-2'/>
 
<input type='text' placeholder='Email address' className='p-3 text-sm font-normal lg:w-[430px] outline-none '/>
</div>
<div className='shadow-lg lg:w-[460px] h-32  flex hover:border-2 bg-white'>

<textarea type="text" placeholder="Write your message here!"  className="resize-none p-3 text-sm font-normal  lg:w-[460px] outline-none"></textarea>
</div>
</div>
    </form>
    <div className='hidden lg:block ml-20'>
    <img src={connectimg} alt='connectimg' className='w-[500px] scale-95'/>

    </div>
    </div>
    </div> 
    
    
    
    </>
  )
}

export default Connect