import React from 'react'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import instaPost from '../image/instapost/neckband4.jpg'
import Title from '../Componant/Title';

const Instapost = () => {

  return (
    <div className='instaPost_section pb-[70px]'>

      <div className='container  flex items-center  justify-between'>

        <Title heading1={"Follow ON Instagram "} />

       

        <Link  to=''   className='  py-2 px-5 rounded-full text-white  hover:underline ' style={{
          background: 'linear-gradient(90deg, rgba(134,71,155,1), rgba(201,31,136,1), rgba(240,89,70,1))',
        }}  >
            Follow Now
        </Link>

      </div>
      <Marquee pauseOnHover={true} speed={100} className='mt-5'>

        <Link>
          <img src={instaPost} width='300px' className=' mr-5' alt="" />

        </Link>
        <Link>
          <img src={instaPost} width='300px' className=' mr-5' alt="" />
        </Link>
        <Link>
          <img src={instaPost} width='300px' className=' mr-5' alt="" />
        </Link>
        <Link>
          <img src={instaPost} width='300px' className=' mr-5' alt="" />
        </Link>
        <Link>
          <img src={instaPost} width='300px' className=' mr-5' alt="" />
        </Link>
      </Marquee>



    </div>
  )
}

export default Instapost