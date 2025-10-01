import React from 'react'
import Title from '../Componant/Title'

import '../Css/Partnership.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { HashLink } from 'react-router-hash-link';
import { FaArrowUpWideShort } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { GrSend } from "react-icons/gr";
import { Link } from 'react-router-dom';

import banner from '../image/banner/contact-banner.jpg'
const DistributePartnership = () => {


  const partnershipBenefits = [
    {
      id: 1,
      icon: FaArrowUpWideShort,
      title: "Wide Product Range",
      description: "Chargers, batteries, neckbands, and buds designed to meet modern customer demands.",

    },
    {
      id: 2,
      icon: FaArrowUpWideShort,
      title: "High Profit Margins",
      description: "Competitive wholesale pricing and tiered discounts so partners can enjoy healthy margins.",

    },
    {
      id: 3,
      icon: FaArrowUpWideShort,
      title: "Quality & Warranty",
      description: "Strict QC, certified parts and clear warranty policy to build customer trust and repeat business.",

    },
    {
      id: 4,
      icon: FaArrowUpWideShort,
      title: "Marketing Support",
      description: "Ready banners, product descriptions, images and seasonal campaigns to boost your sales.",

    },
    {
      id: 5,
      icon: FaArrowUpWideShort,
      title: "Fast & Reliable Delivery",
      description: "Reliable restocking and fast delivery services ensure partners never miss sales of top-demand best-sellers",

    },
    {
      id: 6,
      icon: FaArrowUpWideShort,
      title: "Dedicated Partner Support",
      description: "Account manager, priority support and onboarding assistance to get you selling fast.",
    }
  ];





  return (
    <>
      {/*  video add here  */}

      {/* <img src={banner}  width="100%"  alt="distribute-partnership-video" /> */}




      <iframe width="100%" height="380"
        src="https://www.youtube.com/embed/rF4Jsp5Lo3w?si=Of8KycjI-sSXW5R6&autoplay=1&mute=1&loop=1&playlist=rF4Jsp5Lo3w&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0"

        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


      <div className="container">


        <div className="top_wrapper">
          <h1 className='main_title '>
            We Are Looking for Distribution Partnership
          </h1>
          <p className='sub_title'>
            Connect with industry leaders, expand your reach, and unlock new revenue streams through our comprehensive partnership distribution platform.
          </p>


          <a href="#partnership-form">
            <button className='apply_now'  >
              Become A Partner
            </button>
          </a>

        </div>
      </div>

      {/*  BENEFITS FOR DISTRIBUTOR */}

      <div className="benefit_section">
        <div className="container">
          <div className="title">
            <Title heading1={"Partnership Benefits"} > </Title>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}

            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}

          >
            {
              partnershipBenefits.map((benefit, id) => {
                const Icon = benefit.icon;
                return (
                  <SwiperSlide key={id}>
                    <div className='benefit_box'>
                      <Icon className='icon' />
                      <h5 className='title' >{benefit.title}</h5>
                      <p className='description'>
                        {benefit.description}
                      </p>
                      <a href="#partnership-form">
                        <button className='apply_now'>
                          Apply Now
                        </button>
                      </a>

                    </div>
                  </SwiperSlide>
                );
              })
            }





          </Swiper>
        </div>
      </div>


      {/*  DIESTRIBUTOR FORM  */}


      <div className='form_container    distributer_form_container' id="partnership-form" >
        <div className="container">

          <div className="form_content">
            <h3 className='title'>
              Apply for Partnership
            </h3>
            <p className='para'>
              Ready to join our distribution network? Fill out the application form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form action="">

            <div className="form_wrapper">
              <div class="form_group">
                <label for="fullName">Full Name</label>
                <input type="text" className='form_control' id="fullName" name="fullName" required placeholder="Enter your full name" />
              </div>

              <div class="form_group">
                <label for="contact"> Contact</label>
                <input type="text" className='form_control' id="contact" name="contact" required placeholder=" +91 000-000-0000 " />
              </div>
              <div class="form_group">
                <label for="email">Email</label>
                <input type="email" className='form_control' id="email" name="email" required placeholder=" your@email.com" />
              </div>
              <div class="form_group">
                <label for="compName">Company Name</label>
                <input type="text" className='form_control' id="compName" name="compName" required placeholder="Company Name" />
              </div>

              <div class="form_group">
                <label for="compName"> Business Type</label>
                <select name="" id="" required>

                  <option value=""> -select business type -</option>
                  <option value=""> Retailer </option>
                  <option value=""> Wholesaler</option>
                  <option value=""> Distributor </option>
                  <option value="">  E-commerce Store </option>
                  <option value=""> MarketPlace Seller </option>
                  <option value=""> Other </option>
                </select>
              </div>

              <div class="form_group">
                <label for="compName"> Years in Business</label>
                <select name="" id="" required>

                  <option value=""> - Select experience -</option>
                  <option value="">  0-1 year  </option>
                  <option value="">   2-5 year  </option>
                  <option value="">  6-10 year  </option>
                  <option value="">  10+ year  </option>

                </select>
              </div>
              <div class="form_group">
                <label for="targetRegion">Target Market/Region</label>
                <input type="text" className='form_control' id="targetRegion" name="targetRegion" required placeholder=" ex.North Delhi , South Delhi. " />
              </div>

              <div class="form_group">
                <label for="compName"> Expected Monthly Sales Volume</label>
                <select name="" id="" required>

                  <option value=""> - Select  expected value -</option>
                  <option value=""> ₹15,000 - ₹20,000  </option>
                  <option value=""> ₹15,000 - ₹20,000  </option>
                  <option value=""> ₹15,000 - ₹20,000  </option>
                  <option value=""> ₹5,000 - ₹20,000  </option>
                </select>
              </div>


              <div class="" id='textarea' >
                <label for="firstName">Why do you want to become a distribution partner?</label>
                <textarea name="" className='form_control' rows={6} id=" " placeholder='Tell us about your motivation and goals for this partnership'   ></textarea>
              </div>

              <div className='agree_box' >
                <input type="checkbox" name="" id="" required /> <p>
                  I agree to the <Link to=''>  Terms and Conditions</Link> and  <Link to="">Privacy Policy </Link>
                </p>
              </div>

              <div>
                <button type='submit' className='submit_btn' >
                  Send Message  <GrSend />
                </button>
              </div>


            </div>
          </form>

        </div>
      </div>


      {/*  last section  */}
      <div className="bottom_section">
        <div className="container">


          <h3>
            Ready to Start Your Partnership Journey?
          </h3>
          <p>
            Join thousands of successful distribution partners worldwide
          </p>

          <ul className='icons'>

            <li>

              <IoIosMail className='icon' />  xyz@gmail.com
            </li>
            <li>
              <IoMdCall className='icon ' /> +91 00000000
            </li>
          </ul>

        </div>
      </div>
    </>
  )
}

export default DistributePartnership