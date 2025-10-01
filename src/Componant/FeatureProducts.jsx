import React, { useContext, } from 'react'
import Title from './Title'
import ProductItems from './ProductItems'

import { useState,useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios'

const FeatureProducts = () => {
    

      const backendUrl = import.meta.env.VITE_BACKEND_URL
   const token  = import.meta.env.VITE_TOKEN
   
  const [featureProducts, setFeatureProducts] = useState([])
     

  useEffect(() => {
    const fetchFeatureProducts = async () => {

      try {
        const response = await axios.post(backendUrl + '/product_data/featured_product_list_API', {
          tbl_dealer_id: "8",
          pagesize: "10",
          pagenumber: "1"
        }, { headers: { token } }

        )
        console.log("featureproducts api response data:",response.data.data);
       setFeatureProducts(response.data.data || []) 
      }
      catch (error) {
        console.log(error)
      }
    }
   fetchFeatureProducts()
  }, [])



   

    return (
        <div className='top_selling_section  pt-[40px] pb-[70px]' >
            <div className="container">
                <Title heading1={'Feature Products'} />

                <Swiper
                    className="mySwiper"
                    modules={[Navigation]}
                    spaceBetween={15}
                    navigation={true}
                    slidesPerView={4}
                    slidesPerGroup={4}
                >
                    { 
                       featureProducts.map((item,id) =>(
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

export default FeatureProducts