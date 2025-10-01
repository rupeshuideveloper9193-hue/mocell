
import React from 'react'

import '../Css/Footer.css'

import logo from '../image/logo/logo.jpg'
import { FaTruckFast } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { LiaRedoAltSolid } from "react-icons/lia";
import { AiOutlineSafety } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (

    <div className="footer_Section">
      <div className="container">

        <div className="footer_support">

          <div className="footer_icons">
            <FaTruckFast className='icon' />
            <p>Free Delivery</p>
          </div>
          <div className="footer_icons">
            <BiSupport className='icon' />
            <p>Costumer Support </p>
          </div>
          <div className="footer_icons">
            <LiaRedoAltSolid className='icon' />
            <p> Return Policy </p>
          </div>
          <div className="footer_icons">
            <AiOutlineSafety className='icon' />
            <p> Safe Checkout  </p>
          </div>

        </div>



        <div className="footer_column">
          <div className="footer_item">
            <img src={logo} width='100px' alt="mocell telecom pvt. ltd." />

            <p className='about_comp'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam saepe, dolore repudiandae labore autem eaque soluta doloremque cupiditate quia distinctio
            </p>
          </div>
          <div className="footer_item">

            <h3 className='footer_title '> Company</h3>

            <ul className='footer_links'>
              
               <li>
                <Link> Home</Link>
              </li>
              <li>
                <Link to='about-us'>About Us </Link>
              </li>
              <li>
                <Link> Login </Link>
              </li>
              <li>
                <Link> Contact Us </Link>
              </li>
              <li>
                <Link> Our Blog </Link>
              </li>
             

            </ul>

          </div>
          <div className="footer_item">

            <h3 className='footer_title'> Instant Buy </h3>


            <ul className='footer_links'>
              <li>
                <Link to='about-us'>  Ear Buds </Link>
              </li>
              <li>
                <Link> Data Cable </Link>
              </li>
              <li>
                <Link> Mobile Charger </Link>
              </li>
              <li>
                <Link> Car Battery </Link>
              </li>
              <li>
                <Link>Neck Bands</Link>
              </li>

            </ul>

          </div>
          <div className="footer_item">

            <h3 className='footer_title '> Help </h3>


            <ul className='footer_links'>
              <li>
                <Link to=''>  Terms & Condition </Link>
              </li>
              <li>
                <Link> Privacy Policy </Link>
              </li>
              <li>
                <Link> Shipping Policy </Link>
              </li>
              <li>
                <Link> Return & Refund  </Link>
              </li>
              <li>
                <Link> FAQs</Link>
              </li>

            </ul>

          </div>
          <div className="footer_item">

            <div className="customer_support">
              <h5>Customer Support </h5>

              <div className='contact_links '>
                <p>
                  <IoMdCall className='icon call_icon' />
                  <Link>   +91-0000000000</Link>
                </p>
                <p>
                  <IoLogoWhatsapp className='icon whatsapp_icon' />
                  <Link> Say Hi! on WhatsApp. </Link>
                </p>
                <p>
                  <IoIosMail className='icon mail_icon ' />
                  <Link>  XYZ@gmail.com</Link>
                </p>
              </div>

            </div>

            <div className='social_media_icons'>
              <h5>Connect With Us </h5>
              <div className='contact_icons'>
                <ul>
                  <li>
                    <Link> <FaInstagram /></Link>
                  </li>
                  <li>
                    <Link><GrFacebookOption /></Link>
                  </li>
                  <li>
                    <Link><FaYoutube /></Link>
                  </li>
                  <li>
                    <Link>  <IoLogoWhatsapp /> </Link>
                  </li>
                  <li>
                    <Link> < IoIosMail />  </Link>
                  </li>
                </ul>

              </div>
            </div>

          </div>

        </div>

        {/* footer_bottom */}
        <div className="footer_bottom">
                <p> <Link >&copy;mobi bazaar.</Link> all right reserved </p>
        </div> 

      </div>
    </div>
  )
}

export default Footer