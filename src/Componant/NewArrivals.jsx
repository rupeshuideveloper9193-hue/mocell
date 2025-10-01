

import React from 'react'
import Title from './Title'
import ProductItems from './ProductItems'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const NewArrivals = () => {

        const backendUrl = import.meta.env.VITE_BACKEND_URL
         const token  = import.meta.env.VITE_TOKEN
   


    const [newArrivals, setNewArrivals] = useState([])


    useEffect(() => {
        const fetchNewArrivals = async () => {
            try {
                const response = await axios.post(backendUrl + '/product_data/featured_product_list_API', {
                    tbl_dealer_id: "8",
                    pagesize: "10",
                    pagenumber: "1"
                }, { headers: { token } }

                )
                console.log("new arrival api response data:", response.data.data);
                setNewArrivals(response.data.data || [])
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchNewArrivals()
    }, [])


    return (
        <div className='top_selling_section  pt-[40px] pb-[70px]' >
            <div className="container">
                <Title heading1={' New Arrivals'} />
                <Swiper
                    className="mySwiper"
                    modules={[Navigation]}
                    spaceBetween={15}
                    navigation={true}
                    slidesPerView={4}
                    slidesPerGroup={4}
                >
                    {
                        newArrivals.map((item, id) => (
                            <SwiperSlide key={id}>
                                <ProductItems id={item.tbl_product_id} title={item.title} model={item.product_model}
                                    images={item.product_image} price={item.price} description={item.description} />
                            </SwiperSlide>
                        ))

                    }
                </Swiper>
            </div>

        </div>
    )
}

export default NewArrivals