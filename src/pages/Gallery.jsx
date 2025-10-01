

import React from 'react'
import "../Css/Testimonials.css"

import gallery from '../image/profile/gallery1.png'
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

const Gallery = () => {
    useEffect(() => {
        Fancybox.bind("[data-fancybox='office_pic']", {
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);


    const ourgallery = [
        {
            "id": "1",
            "image": gallery,

        },
        {
            "id": "2",
            "image": gallery,

        },
        {
            "id": "3",
            "image": gallery,

        },
        {
            "id": "4",
            "image": gallery,

        },
        {
            "id": "5",
            "image": gallery,

        },
        {
            "id": "6",
            "image": gallery,

        },
        {
            "id": "7",
            "image": gallery,

        },
        {
            "id": "8",
            "image": gallery,
        },
        {
            "id": "9",
            "image": gallery,

        },
        {
            "id": "10",
            "image": gallery,

        },
    ]



    return (

        <div className="gallery_section">
            <div className="container">
                <Title heading1={"Our Office Vibes "} />


                <div className="gallery_wrapper">
                    <Swiper
                        slidesPerView={3}
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
                                slidesPerView: 3,
                                grid: { rows: 2 },
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {
                            ourgallery.map((gallery, id) => (
                                <SwiperSlide key={id}>

                                    <a
                                        href={gallery.image}
                                        data-fancybox="office_pic"
                                    >
                                        <div className="gallery_box">
                                            <img src={gallery.image} alt={gallery.id} />

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

export default Gallery