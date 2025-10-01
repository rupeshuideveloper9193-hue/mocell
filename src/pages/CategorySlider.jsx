import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '../Css/Category.css'
import 'swiper/css';
import 'swiper/css/navigation';


import Title from '../Componant/Title'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const CategorySlider = () => {

    const { products } = useContext(ShopContext)

    const uniqueProducts = Array.from(
        new Map(products.map(product => [product.category.trim(), product])).values()
    );
    console.log("uniqcateg", uniqueProducts)
    return (
        <>
            <div className="category_section  pt-[70px] pb-[30px]">

                <div className="container">
                    <Title heading1={"Shop By Category"} > </Title>

                    {/*category Slide*/}
                    
                    <Swiper
                        className="mySwiper"
                        modules={[Navigation]}
                        spaceBetween={30}
                        navigation={true}
                        slidesPerView={6}
                    > 
                        {
                            uniqueProducts.map((item, id) => (
                                <SwiperSlide key={id}>
                                    <Link>
                                     <div className="category_boxes">   
                                        <img src={item.image[0]} alt="" />
                                        <p> {item.category}</p>
                                    </div> 
                                    </Link>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>


 {/*  second category slider  */}
                    {/* <div className="slider_wrapper">
                        {uniqueProducts.map((item, id) => (
                            <div key={id}  className='category_wrapper'>
                                  <div className="img_wrapper">
                                       <img src={item.image[0]}  width="80px" alt="" />
                                  </div>
                                <p>
                                    {item.category}
                                </p>
                            </div>
                        ))}
                    </div> */}


                </div>
            </div>
        </>
    )
}

export default CategorySlider