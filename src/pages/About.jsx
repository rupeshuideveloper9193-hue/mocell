import React from 'react'
import BreadCrum from '../Componant/BreadCrum'

import '../Css/About.css'
import aboutImg from '../image/instapost/neckband4.jpg'
import { GoGoal } from "react-icons/go";
import { PiChartLineUp } from "react-icons/pi";
import { BiSolidLowVision } from "react-icons/bi";
import Title from '../Componant/Title';

import { ImMobile } from "react-icons/im";
import { FaCheckSquare } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";

import Testimonials from '../Componant/Testimonials';
import OurTeam from './OurTeam';
import Gallery from './Gallery';

const About = () => {
  return (
    <>    <div className="about_section">
      <div className="container">

        <BreadCrum title1={'About Us'} />

        <div className="about_information  ">
          <div className="col_half">

            <h2 className='main_title '>About Mocell Telecom </h2>


            <p className='main_content '>
              Welcome to MobiBaazaar, your one-stop destination for the latest and greatest in mobile technology. At MobiBaazaar.com, we believe that staying connected should be simple, stylish, and smart.

              Born out of a passion for innovation, MobiBaazaar was founded to bridge the gap between the best of global mobile technology and Indian consumers. We are a team of tech lovers, gadget experts, customer-first service professionals, and forward-thinkers—all united by a shared goal: to make your mobile buying journey seamless, transparent, and satisfying.
            </p>
            <div className=" cta-btn bg-slide-effect">
              <span>
                Contact Us
              </span>

            </div>
          </div>
          <div className="col_half">
            <img src={aboutImg} width="100%" alt="about_us" />
          </div>

        </div>
        {/*  mission and vision and value */}
      </div>
    </div>

      <div className="mission_section">
        <div className="container">
          <div className="mission_vision">

            <div className='mission_box ' >
              <div className="icons">
                <GoGoal className='icon' />
              </div>
              <h3 className='heading' >Our Mission </h3>
              <p>
                We aim to provide genuine mobiles and accessories at fair prices, ensuring secure shopping, speedy delivery, and dedicated customer support.
              </p>
            </div>

            <div className='mission_box' >
              <div className="icons">
                <BiSolidLowVision className='icon' />
              </div>
              <h3 className='heading'>Our Vision </h3>
              <p>
                Our vision is to become India’s most trusted mobile marketplace, delivering innovative technology, unmatched value, and excellent customer shopping experiences.
              </p>
            </div>

            <div className='mission_box' >
              <div className="icons">
                <PiChartLineUp className='icon' />
              </div>
              <h3 className='heading' >Our Value </h3>
              <p>
                Integrity, authenticity, affordability, innovation, customer satisfaction, trust, and dedication guide every interaction, ensuring seamless, reliable, rewarding shopping.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  what we offer */}
      <div className="our_offer">
        <div className="container">
          <Title heading1={'What we offer '} />

          <div className="offer_boxes">
            <div className="box_slide">
              <div className="icons">
                <ImMobile size={22} />
              </div>
              <h3>
                Wide Range of  Accessories
              </h3>
              <p>
                From flagship smartphones to budget-friendly devices, we offer top brands plus essential mobile accessories.
              </p>
            </div>
            <div className="box_slide">
              <div className="icons">
                <FaCheckSquare size={22} />
              </div>
              <h3>
                100% Genuine Products
              </h3>
              <p>
                Every device sold on MobiBaazaar is brand-authorized and authentic, ensuring you always get original quality.
              </p>
            </div>
            <div className="box_slide">
              <div className="icons">
                <GiReceiveMoney size={22} />
              </div>
              <h3>
                Best Price & Value
              </h3>
              <p>
                We provide competitive pricing, special discounts, and exclusive deals, so you get more value for your money.
              </p>
            </div>
            <div className="box_slide">
              <div className="icons">
                <FaTruck size={22} />

              </div>
              <h3>
                Fast & Secure Delivery
              </h3>
              <p>
                Enjoy safe, reliable, and quick delivery right to your doorstep—because we know you can’t wait to unbox your new phone!
              </p>
            </div>
            <div className="box_slide">
              <div className="icons">

                <RiSecurePaymentLine size={22} />

              </div>
              <h3>
                Secure Shopping Experience
              </h3>
              <p>
                Your payments and personal details are fully protected with industry-standard encryption and secure checkout.
              </p>
            </div>
            <div className="box_slide">
              <div className="icons">
                <MdOutlineSupportAgent size={22} />

              </div>
              <h3>
                Customer-First Support
              </h3>
              <p>
                Our dedicated team is always ready to assist, guide, and resolve queries, making your shopping journey smooth.
              </p>
            </div>
          </div>

        </div>
      </div>

 {/*  testimonailas */}

  <OurTeam />
  <Gallery/>
  <Testimonials />

    </>


  )
}

export default About