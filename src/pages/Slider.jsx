
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import slider1 from '../image/Slider/slider1.jpg'
import slider2 from '../image/Slider/slider2.jpg'
import slider3 from '../image/Slider/slider3.jpg'
import slider4 from '../image/Slider/slider4.jpg'
import axios from 'axios';
import { useState,useEffect} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';



const Slider = () => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL
    
       const [sliderImg,setSliderImg] = useState([])
        
     useEffect(() => {

    const fetchSliderBanner = async () => {

      try {
        const response = await axios.get(backendUrl + '/product_data/slider_list_API')
        console.log("  slider banner response data -------------:", response.data.data);
       setSliderImg(response.data.data || [])
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchSliderBanner()
  }, [])


    return (

        <>
            <Swiper
                className="mySwiper   banner_slider "
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={true}


                slidesPerView={1}

                onSwiper={(swiper) => console.log(swiper)}

            >
                {
                    sliderImg.map((banner,id)=>(
                        <div key={id}>

                            <SwiperSlide>
                                <img src={banner.slider_image} alt={banner.tbl_slider_id} />
                            </SwiperSlide>

                        </div>
                    ))
                }
                {/* <SwiperSlide> <img src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide> <img src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide> <img src={slider3} alt="" /></SwiperSlide>
                <SwiperSlide> <img src={slider4} alt="" /> </SwiperSlide> */}

            </Swiper>
        </>

    )
}

export default Slider