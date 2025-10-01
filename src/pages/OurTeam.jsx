import React from 'react'
import "../Css/Testimonials.css"

import teamuser from '../image/profile/user.jpg'
import Title from '../Componant/Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import { useEffect } from 'react';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const OurTeam = () => {

    useEffect(() => {
        Fancybox.bind("[data-fancybox='team']", {
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);


    const ourteam = [
        {
            "id": "1",
            "image": teamuser,
            "name": "Rupesh",
            "role": "Web Developer",
        },
        {
            "id": "2",
            "image": teamuser,
            "name": "Rupesh",
            "role": "Web Developer",
        },
        {
            "id": "3",
            "image": teamuser,
            "name": "Rupesh",
            "role": "Web Developer",
        },
        {
            "id": "4",
            "image": teamuser,
            "name": "Rupesh",
            "role": "Web Developer",
        },
        {
            "id": "5",
            "image": teamuser,
            "name": "Rupesh",
            "role": "Web Developer",
        },
        {
            "id": "6",
            "image": teamuser,
            "name": "Rupesh",
            "role": "Web Developer",
        },
        {
            "id": "7",
            "image": teamuser,
            "name": "Rupesh",
            "role": "Web Developer",
        },
        {
            "id": "8",
            "image": teamuser,
            "name": "Rupesh",
            "role": "Web Developer",
        },
        {
            "id": "9",
            "image": teamuser,
            "name": "Rupesh",
            "role": "Web Developer",
        },
        {
            "id": "10",
            "image": teamuser,
            "name": "Rupesh",
            "role": "Web Developer",
        },
    ]

    return (

        <div className='our_team_section'>

            <div className="container">
                <Title heading1={"Meet Our Experts"} />
                <div className="our_team_wrapper">

                    <Swiper
                        slidesPerView={4}
                        grid={{
                            rows: 2,
                            fill: 'row',
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Grid, Pagination]}
                        className="mySwiper"
                        breakpoints={{

                            320: {
                                slidesPerView: 2,
                                grid: { rows: 2 },
                                spaceBetween: 15,
                            },
                            640: {
                                slidesPerView: 3,
                                grid: { rows: 2 },
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                grid: { rows: 2 },
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {
                            ourteam.map((team, id) => (
                                <SwiperSlide key={id}>

                                    <a
                                        href={team.image}
                                        data-fancybox="team"
                                        data-caption={team.name}
                                    >
                                        <div className="team_box">

                                            <img src={team.image} alt={team.id} />
                                            <div className="employee_name">
                                                <div className="profile_detail">
                                                    <h4> {team.name}</h4>
                                                    <p className='role'> {team.role}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide >
                            ))
                        }
                    </Swiper>


                </div>
            </div>
        </div>
    )
}

export default OurTeam