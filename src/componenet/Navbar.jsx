import React from 'react'
import dropdownicon from "../assets/dropdownicon.svg"
import dropicon from "../assets/dropicon.svg"
import { Link } from 'react-router-dom'




const Navbar = () => {
  return (
    <>
    <div className='border h-12 mt-6 hidden lg:block '>
    <ul className='flex justify-center dropdown-content p-2 space-x-8'>
  <li className='text-base font-semibold hover:text-[#fb70a5]'><Link to="/" >Home</Link></li>
  <li className=' flex dropdown dropdown-hover text-base font-semibold hover:text-[#fb70a5] '>
    <Link to="/" tabIndex={0}>Products</Link>
    <img src={dropdownicon} alt='dropdownicon' className='p-2'/>


    {/* product dropdown */}
  <ul tabIndex={0} className="dropdown-content z-[1] mt-6 py-6 px-4 space-y-4 shadow bg-white rounded-box w-40">
    <li className='flex dropdown dropdown-right text-black hover:text-[#fb70a5] hover:bg-[#fff2f8] hover:p-1  text-sm  font-medium '>
      <Link to='/' tabIndex={0}>Dhoop Cones</Link>
    <img src={dropicon} alt='dropdownicon' className='ml-6'/>

      {/* dhoop cone dropdown */}
  <ul tabIndex={0} className="dropdown-content z-[1] py-2 px-4 space-y-4 shadow bg-white rounded-box  w-36 ml-5">
    <li className='text-black hover:text-[#fb70a5] hover:bg-[#fff2f8] hover:p-1 text-sm  font-medium'>
      <Link to='/product'>Jar Cones </Link>
      </li>
  <li className='text-black hover:text-[#fb70a5] text-sm  font-medium'><Link to='/'>Chandan Bamboo Dhoop </Link></li>

    <li className='text-black hover:text-[#fb70a5] text-sm  font-medium'><Link to='/'>Backflow Cone Dhoop</Link></li>

    <li className='text-black hover:text-[#fb70a5] text-sm  font-medium'><Link to='/'>Buddha Red Incense Cone</Link></li>
    <li className='text-black hover:text-[#fb70a5] text-sm  font-medium'><Link to='/'>ountain Sandal Dhoop </Link></li>
    <li className='text-black hover:text-[#fb70a5] text-sm  font-medium'><Link to='/'>Cone Sandal Dhoop</Link></li>
</ul>
    </li>


    <li className='text-black hover:text-[#fb70a5] text-sm  font-medium'><Link to='/'>Yantras </Link></li>
    <li className='text-black hover:text-[#fb70a5] text-sm  font-medium'><Link to='/'>Incense Sticks</Link></li>

    <li className='text-black hover:text-[#fb70a5] text-sm  font-medium'><Link to='/'>Pooja Thali Sets</Link></li>

    <li className='text-black hover:text-[#fb70a5] text-sm  font-medium'><Link to='/'>Shankh</Link></li>

    <li className='text-black hover:text-[#fb70a5] text-sm  font-medium'><Link to='/'>Kalash</Link></li>
    <li className='text-black hover:text-[#fb70a5] text-sm  font-medium'><Link to='/'>Book Rests</Link></li>
</ul>
  </li>
  <li className='flex text-base font-semibold hover:text-[#fb70a5]'><Link to="/" >Services</Link>
  <img src={dropdownicon} alt='dropdownicon' className='p-2'/>
  </li>
  <li className='text-base font-semibold hover:text-[#fb70a5]'><Link to="/" >Courses</Link></li>
  <li className='text-base font-semibold hover:text-[#fb70a5]'><Link to="/" >Blogs</Link></li>
<li className='text-base font-semibold hover:text-[#fb70a5]'><Link to="/" >Videos</Link></li>
<li className='text-base font-semibold hover:text-[#fb70a5]'><Link to="/" >Contact us</Link></li>

</ul>
    </div>
   
    </>
  )
}

export default Navbar