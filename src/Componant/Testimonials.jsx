import React from 'react'
import Title from './Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import "../Css/Testimonials.css"
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';
import { IoMdStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
    {
        "name": "Rajesh Kumar",
        "role": "Authorized Distributor",
        "location": "Delhi",
        "testimonial": "Mobibaazaar has been a game changer for our distribution business. The clear area distribution rights and marketing support helped our sales grow rapidly.",
    },
    {
        "name": "Sneha Patel",
        "role": "Authorized Retailer",
        "location": "Mumbai",
        "testimonial": "With Mobibaazaar's credit limit assessment, our retail network finances are easier to manage. Their branding and promotional support is truly impressive.",
    },
    {
        "name": "Anil Sharma",
        "role": "Customer",
        "location": "Bangalore",
        "testimonial": "Whenever I need genuine products, Mobibaazaar's wide network never disappoints. Their authorized distributors and retailers deliver excellent service.",
    },
    {
        "name": "Meera Joshi",
        "role": "Sales Manager",
        "location": "Chennai",
        "testimonial": "Mobibaazaar’s marketing and promotional support has helped our sales team exceed targets. Their focus on customer needs is unmatched.",
    },
    {
        "name": "Amit Verma",
        "role": "Authorized Distributor",
        "location": "Hyderabad",
        "testimonial": "The support from Mobibaazaar in market expansion and branding has been phenomenal. We have reached new customers thanks to their strategic guidance.",
    },
    {
        "name": "Priya Singh",
        "role": "Retail Partner",
        "location": "Pune",
        "testimonial": "Mobibaazaar keeps our store stocked with top products and their promotional campaigns drive customer engagement like never before."
    },
    {
        "name": "Vikram Chauhan",
        "role": "Distributor",
        "location": "Jaipur",
        "testimonial": "Mobibaazaar’s distributor support and financial assistance made business planning easy. Our customers are happier and our inventory now moves faster.",
    }
]


const Testimonials = () => {

    return (

        <div className='test_section'>
            <div className="container">
                <Title heading1={'What people Say'} />

                <div className='test_wrapper'>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        effect={'fade'}
                        spaceBetween={50}
                        slidesPerView={3}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            reverseDirection: false
                        }}
                        pagination={{ clickable: true }}
                    >
                        {
                            testimonials.map((item, id) => (
                                <SwiperSlide key={id}>
                                    <div className="testimonial_main">
                                        <div className="rating">
                                            <IoMdStar /> <IoMdStar /> <IoMdStar /><IoMdStar /><IoStarHalfSharp />
                                        </div>
                                        <div className="testimonial_text"><FaQuoteLeft className='icon' /> {item.testimonial} <FaQuoteRight  className='icon' /> </div>
                                        <div className="testimonial_info">
                                            <div className="testimonial_name">{item.name}</div>
                                            <div className="testimonial_role">{item.role}, {item.location}</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonials