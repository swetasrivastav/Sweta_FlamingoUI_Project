import React from 'react'
import blog01 from "../assets/blog01.svg"
import blog02 from "../assets/blog02.svg"

import blog03 from "../assets/blog03.svg"


const Blog = () => {
  return (
    <>
<div className='my-8 text-center lg:text-5xl text-xl font-extrabold'>
<h1>Our Latest Blogs</h1>
</div>
<div className='flex  lg:flex-row flex-col mb-20 gap-6 lg:ml-52'>
    <div className='bg-white w-[330px] h-[520px] shadow-lg rounded-lg'>
    <img src={blog01} alt='blog01' className=''/>
<div>
    <h2 className='text-center text-lg font-bold text-black mt-4 mb-2'>The Power of Mindfulness</h2>
    <p className='text-start text-sm font-normal mx-4 text-black'>Mindfulness is the practice of being present and fully engaged in the moment. It is about paying attention to our thoughts, feelings, and sensations in a non-judgmental way. </p>
</div>
<div className='w-24 h-9 bg-[#f29479] rounded-lg  mx-28  mt-14'>
    <h4 className='text-sm font-medium text-white text-center py-2 '>Read More</h4>
</div>
<div className='text-xs  font-medium mt-6 ml-4'>
    <p>08-05-2022</p>
</div>
</div>
<div className='bg-white  w-[330px] h-[520px] shadow-lg rounded-lg'>
    <img src={blog02} alt='blog01' className=''/>
<div>
    <h2 className='text-center text-lg font-bold text-black mt-4 mb-2'>Connecting with the Divine</h2>
    <p className='text-start text-sm font-normal mx-4 text-black'>Connecting with the Divine refers to the process of establishing a spiritual connection or relationship with a higher power, such as God, the Universe, or a higher consciousness. </p>
</div>
<div className='w-24 h-9 bg-[#f29479] rounded-lg  mx-28  mt-14'>
    <h4 className='text-sm font-medium text-white text-center py-2 '>Read More</h4>
</div>
<div className='text-xs  font-medium mt-6 ml-4'>
    <p>11-06-2022</p>
</div>
</div>
<div className='bg-white  w-[330px] h-[520px] shadow-lg rounded-lg'>
    <img src={blog03} alt='blog01' className=''/>
<div>
    <h2 className='text-center text-lg font-bold text-black mt-4 mb-2'>The Beauty of Forgiveness</h2>
    <p className='text-start text-sm font-normal mx-4 text-black'>The beauty of forgiveness lies in its transformative power. It has the ability to heal wounds and to restore relationships that have been damaged. Forgiveness brings a new level of understanding. </p>
</div>
<div className='w-24 h-9 bg-[#f29479] rounded-lg  mx-28  mt-10'>
    <h4 className='text-sm font-medium text-white text-center py-2 '>Read More</h4>
</div>
<div className='text-xs  font-medium mt-6 ml-4'>
    <p>11-07-2022</p>
</div>
</div>
</div>
 </>
  )
}

export default Blog
