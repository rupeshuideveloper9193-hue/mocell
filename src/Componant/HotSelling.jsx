import React, { useContext, } from 'react'
import Title from './Title'
import ProductItems from './ProductItems'
import { ShopContext } from '../context/ShopContext'
import { useState,useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios'

const HotSelling = () => {
    

      const backendUrl = import.meta.env.VITE_BACKEND_URL
   const token  = import.meta.env.VITE_TOKEN
   
  const [hotSelling, setHotSelling] = useState([])
     

  useEffect(() => {
    const fetchHotSelling = async () => {

      try {
        const response = await axios.post(backendUrl + '/product_data/hot_selling_product_list_API', {
          tbl_dealer_id: "8",
          pagesize: "10",
          pagenumber: "1"
        }, { headers: { token } }

        )
        console.log("HotSelling api response data:",response.data.data);
        setHotSelling(response.data.data || []) 
      }
      catch (error) {
        console.log(error)
      }
    }
   fetchHotSelling()
  }, [])



   

    return (
        <div className='top_selling_section  pt-[40px] pb-[70px]' >
            <div className="container">
                <Title heading1={'Hot Selling Products'} />

                <Swiper
                    className="mySwiper"
                    modules={[Navigation]}
                    spaceBetween={15}
                    navigation={true}
                    slidesPerView={4}
                    slidesPerGroup={4}
                >
                    { 
                        hotSelling.map((item,id) =>(
                             <SwiperSlide key={id}>
                                <ProductItems id={item.tbl_product_id} title={item.title}  model={item.product_model}
                                 images={item.product_image} price={item.price} description={item.description} />
                            </SwiperSlide>                        
                        ))
                    }                   

             </Swiper>
            </div>
        </div>
    )
}

export default HotSelling