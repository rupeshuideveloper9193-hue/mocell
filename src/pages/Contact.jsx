import React from 'react'
import Title from '../Componant/Title'
import BreadCrum from '../Componant/BreadCrum'
import '../Css/Contact.css'
import banner from '../image/banner/contact-banner.jpg'
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { BsEnvelopeFill } from "react-icons/bs";

import { GrSend } from "react-icons/gr";




const Contact = () => {
  return (
    <div className='contact_section'>

      <img src={banner} width="100%" alt="contact-us" />
      <div className="container">

        {/* <BreadCrum title1={'Contact Us'} /> */}

        <div className="contact_wrapper">
          <div className="contact_information">
            <div className="contact_box">
              <div className="contact_icon">
                <FaMapMarkedAlt className='icon' />
              </div>
              <div className="contact_detail">
                <h4>Location</h4>
                <p>
                  <a href=""> Cloud9 Towers, Office No. 549, Sector 3F, Sector-1, Vaishali, Ghaziabad, Uttar Pradesh 201010</a>
                </p>
              </div>
            </div>


            <div className="contact_box">
              <div className="contact_icon">
                <IoMdCall className='icon' />
              </div>
              <div className="contact_detail">
                <h4>Make A Call</h4>
                <p>
                  <a href="tel:+91 9811842060">+91 9811842060</a>
                </p>
              </div>
            </div>


            <div className="contact_box">
              <div className="contact_icon">
                <BsEnvelopeFill className='icon' />
              </div>
              <div className="contact_detail">
                <h4>Send A Mail</h4>
                <p>
                  <a href="mailto:support@mobibaazaar.com">support@mobibaazaar.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className='form_container'>

            <h3>Contact Us</h3>

            <form action="">
              <div className="form_wrapper">
                <div class="form_group">
                  <label for="firstName">First Name</label>
                  <input type="text" className='form_control' id="firstName" name="firstName" required placeholder="" />
                </div>
                <div class="form_group">
                  <label for="lastName">Last Name</label>
                  <input type="text" className='form_control' id="lastName" name="lastName" required placeholder="" />
                </div>
                <div class="form_group">
                  <label for="contact"> Contact</label>
                  <input type="text" className='form_control' id="contact" name="contact" required placeholder=" " />
                </div>
                <div class="form_group">
                  <label for="email">Email</label>
                  <input type="email" className='form_control' id="email" name="email" required placeholder=" " />
                </div>
                <div class="" id='textarea' >
                  <label for="firstName">Message</label>
                  <textarea name="" className='form_control' rows={6} id=""></textarea>
                </div>
                 <button type='submit' className='submit_btn' >
                        Send Message  <GrSend />
                 </button>


              </div>

            </form>

          </div>

        </div>
      </div>

      {/*  goole map embedded  */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.598627611207!2d77.33198057416897!3d28.641789283662703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb66b7c108f1%3A0x8fbf463added93ef!2sCA%20Namit%20Gupta%20%7C%20Tax%20Audit%20%7C%20GST%20Return%20%7C%20GST%20Registration%20%7C%20Company%20Registration%20%7C%20Income%20Tax%20Return!5e0!3m2!1sen!2sin!4v1758877384447!5m2!1sen!2sin" width="100%" height="400px"  ></iframe>
    </div>
  )
}

export default Contact