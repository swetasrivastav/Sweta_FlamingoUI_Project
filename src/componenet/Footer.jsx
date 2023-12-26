import React from 'react'
import emailicon from "../assets/emailicon.svg"
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import youtube from "../assets/youtube.svg"



const Footer = () => {
  return (
    <>
    <div className=" flex lg:flex-row flex-col bg-[#fa5c98] border-b border-white lg:justify-around items-center">
      <div className='flex   gap-2 mt-4 lg:mt-0'>
<img src={emailicon} alt='emailicon' className='w-6'/>
<p className='text-white text-base font-medium'>Sign Up To Shop Now</p>
      </div>
<div className='h-12 lg:w-[450px] bg-white my-4 rounded-md flex '>
<input type='text' placeholder='Enter your email' className='p-3 text-sm font-normal lg:w-80 rounded-md outline-none'/>

        <button className="h-8 bg-[#fa5c98] rounded-md uppercase lg:w-28 text-white mt-2 text-sm font-medium ">Subscribe</button>
        </div>
      </div>
      <footer className="footer px-20 py-10 bg-[#fa5c98] text-neutral-content">
  <nav>
 <header className="footer-center text-white text-base font-medium">Contact Us</header> 
    <a href='/' className="link link-hover text-xs font-normal">Demo Store</a>
    <a href='/' className="link link-hover text-xs font-normal">No. 1258 Utawala, Nairobi, 01010</a>
    <a href='/' className="link link-hover text-xs font-normal">Kenya</a>
    <a href='/' className="link link-hover text-xs font-normal">+25470101010</a>
    <a href='/' className="link link-hover text-xs font-normal">example@gmail.com</a>
 </nav> 
  <nav>
  <header className="footer-center text-white text-base font-medium">Information</header> 
    <a href='/' className="link link-hover text-xs font-normal">Follow us on social media and stay updated.</a>
    <a href='/' className="link link-hover text-xs font-normal">Refund Policy</a>
    <a href='/' className="link link-hover text-xs font-normal">Shipping Policy</a>
    <a href='/' className="link link-hover text-xs font-normal">Terms Of Service</a>
    <a href='/' className="link link-hover text-xs font-normal">Blogs</a>
  </nav> 
  <nav>
  <header className="footer-center text-white text-base font-medium">Account</header> 
    <a href='/' className="link link-hover text-xs font-normal">Search</a>
    <a href='/' className="link link-hover text-xs font-normal">About Us</a>
    <a href='/' className="link link-hover text-xs font-normal">Faq</a>
    <a href='/' className="link link-hover text-xs font-normal">Contact</a>
    <a href='/' className="link link-hover text-xs font-normal">Help</a>
  </nav>
  <nav>
  <header className="footer-center text-white text-base font-medium">Quick Links</header> 
    <a href='/' className="link link-hover text-xs font-normal">Incense Sticks</a>
    <a href='/' className="link link-hover text-xs font-normal">Shankh</a>
    <a href='/' className="link link-hover text-xs font-normal">Kalash</a>
    <a href='/' className="link link-hover text-xs font-normal">Incense Holders</a>
    <a href='/' className="link link-hover text-xs font-normal">Cone Dhoop</a>
  </nav>
  <nav>
  <header className="footer-center text-white text-base font-medium">Social Media.</header> 

    <p className="text-xs font-normal">Follow us on social media and stay updated.</p>
    <div className='flex gap-2 mt-2'>

    
<a href='/'><img src={twitter} alt='formimg01' className=' '/></a>
<a href='/'><img src={facebook} alt='formimg01' className=' '/></a>

<a href='/'><img src={instagram} alt='formimg01' className=' '/></a>

<a href='/'><img src={youtube} alt='formimg01' className=' '/></a>

</div>
  </nav>
</footer>
    
    </>
  )
}

export default Footer