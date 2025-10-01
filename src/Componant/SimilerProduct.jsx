import React from 'react'
import Title from './Title'
import ProductItems from './ProductItems'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const SimilerProduct = ({ id }) => {

  const [similerProduct, setSimilerProduct] = useState([])
 
  const token = import.meta.env.VITE_TOKEN
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {

    const fetchSimilerProduct = async () => {

      try {
        const response = await axios.post(backendUrl + '/product_data/similar_product_list_API', {
          tbl_product_id: id,
          tbl_dealer_id: "8",
          pagesize: "10",
          pagenumber: "1"
        }, { headers: { token } })
        console.log(" similer product  api response data -------------:", response.data.data);
        setSimilerProduct(response.data.data || [])
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchSimilerProduct()
  }, [id])

  return (

    <div className='top_selling_section  pt-[40px] pb-[70px]' >
      <div className="container">
        <Title heading1={'Similer Products'} />


        <Swiper
          className="mySwiper"
          modules={[Navigation]}
          spaceBetween={15}
          navigation={true}
          slidesPerView={4}
          slidesPerGroup={4}
        >
          {
            similerProduct.map((item, id) => (
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

export default SimilerProduct