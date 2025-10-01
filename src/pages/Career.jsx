import React, { useState } from 'react'
import BreadCrum from '../Componant/BreadCrum'
import '../Css/Career.css'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import profile from "../image/profile/gallery1.png"
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import career from "../image/banner/career.jpg"
import { GrSend } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Career = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const toggleAccordian = (id) => {

        setActiveIndex(activeIndex === id ? null : id)

    }

    const jobOpening = [
        {

            "jobrole": "Graphic Designer",
            "place": "Cloud 9,vaishali,sector 1",
            "jobDescription": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt rem ullam corrupti animi nemo tenetur praesentium dolorem magnam! Aperiam reprehenderit incidunt ut eveniet? Rerum inventore deserunt cumque optio officia!"
        },
        {

            "jobrole": "Graphic Designer",
            "place": "Cloud 9,vaishali,sector 1",
            "jobDescription": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt rem ullam corrupti animi nemo tenetur praesentium dolorem magnam! Aperiam reprehenderit incidunt ut eveniet? Rerum inventore deserunt cumque optio officia!"
        },
        {

            "jobrole": "Graphic Designer",
            "place": "Cloud 9,vaishali,sector 1",
            "jobDescription": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt rem ullam corrupti animi nemo tenetur praesentium dolorem magnam! Aperiam reprehenderit incidunt ut eveniet? Rerum inventore deserunt cumque optio officia!"
        },
        {

            "jobrole": "Graphic Designer",
            "place": "Cloud 9,vaishali,sector 1",
            "jobDescription": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt rem ullam corrupti animi nemo tenetur praesentium dolorem magnam! Aperiam reprehenderit incidunt ut eveniet? Rerum inventore deserunt cumque optio officia!"
        },
        {
            "jobrole": "Graphic Designer",
            "place": "Cloud 9,vaishali,sector 1",
            "jobDescription": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt rem ullam corrupti animi nemo tenetur praesentium dolorem magnam! Aperiam reprehenderit incidunt ut eveniet? Rerum inventore deserunt cumque optio officia!"
        },
        {
            "jobrole": "Graphic Designer",
            "place": "Cloud 9,vaishali,sector 1",
            "jobDescription": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt rem ullam corrupti animi nemo tenetur praesentium dolorem magnam! Aperiam reprehenderit incidunt ut eveniet? Rerum inventore deserunt cumque optio officia!"
        },
    ]

    return (
        <div className='carrer_section'>
            <div className="container">

                <BreadCrum title1={'Career'} />

                <div className="carrer_wrapper">
                    <div className="job_opening">
                        {
                            jobOpening.map((job, id) => (
                                <div className={`acc_item  ${activeIndex === id ? 'active' : ''}`} key={id}   >

                                    <div className="acc_header" onClick={() => toggleAccordian(id)} >

                                        <div>
                                            <h4 className='jobrole'>
                                                {job.jobrole}
                                            </h4>
                                            <p className='place'>{job.place}
                                            </p>
                                        </div>

                                        <div className="arrow">
                                            <FaRegArrowAltCircleDown />
                                        </div>
                                    </div>

                                    <div className={`acc_content ${activeIndex === id ? 'active' : ''}`}>
                                        <p>
                                            {job.jobDescription}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="right_img">
                        <div className="career_info">
                            <h3>
                                Reach Us
                            </h3>
                            <p>
                                Contact us today for more information and support.
                            </p>
                            <img src={profile} width="100%" alt="img" />

                            <div className='mail_us'>
                                <h4>Mail Us </h4>

                                <ul>
                                    <li>
                                        <Link to=" mailto:@gmail.com" target='_blink' > < IoIosMail />  contact@xyz.com</Link>
                                    </li>
                                </ul>
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
                </div>
            </div>


            <div className="form_section">
                <div className="container">
                    <div className='career_form'>
                        <div className="col_half">

                            <div className="career_banner">
                                <img src={career} alt="career-img" />
                            </div>
                        </div>
                        <div className="col_half">
                            <div className='form_container'>

                                <h3 className='title'>
                                    If  You have any doubts contact us.
                                </h3>

                                <form action="">
                                    <div className="form_wrapper">
                                        <div class="form_group">
                                            <label for="name"> Name</label>
                                            <input type="text" className='form_control' id="name" name="name" required placeholder="" />
                                        </div>
                                        <div class="form_group">
                                            <label for="contact"> Contact</label>
                                            <input type="text" className='form_control' id="contact" name="contact" required placeholder=" " />
                                        </div>
                                        <div class="form_group">
                                            <label for="lastCompany">Last Company Name</label>
                                            <input type="text" className='form_control' id="lastCompany" name="lastCompany" required placeholder="" />
                                        </div>

                                        <div class="form_group">
                                            <label for="email">Email</label>
                                            <input type="email" className='form_control' id="email" name="email" required placeholder=" " />
                                        </div>
                                        <div class="file_group">
                                            <label for="resume">Upload Your Resume</label>
                                            <input type="file" className='form_control' id="resume" name="resume" required placeholder=" " />
                                        </div>
                                        <div class="" id='textarea' >
                                            <label for="firstName">Message</label>
                                            <textarea name="" className='form_control' required rows={6} id=""></textarea>
                                        </div>





                                        <button type='submit' className='submit_btn' >
                                            Send Message  <GrSend />
                                        </button>


                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Career