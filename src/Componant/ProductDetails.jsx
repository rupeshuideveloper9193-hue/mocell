import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper/modules';
import SimilerProduct from './SimilerProduct';
import '../Css/ProductDetails.css'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/thumbs'
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoShareSocial } from "react-icons/io5";
import 'react-responsive-modal/styles.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from "@fancyapps/ui";




const ProductDetails = () => {
  const { productId } = useParams()
  const [productDetails, setProductDetails] = useState({})
  //  for slider 
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const token = import.meta.env.VITE_TOKEN

  console.log("backendurl", backendUrl)


  useEffect(() => {
    const fetchProductDetailApi = async () => {

      try {
        const response = await axios.post(backendUrl + '/product_data/product_details_API', {

          "tbl_dealer_id": "11",
          "tbl_product_id": productId

        }, { headers: { token } }
        )
        setProductDetails(response.data.data[0] || [])
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchProductDetailApi()
  }, [productId]) 

  console.log("oooooo----", productDetails)


  //  share product for application 
  const ShareProduct = () => {

    if (navigator.share) {
      navigator.share({
        title: 'Check out this product.',
        text: 'Take a look at this awesome product.',
        url: window.location.href,
      })
        .then(() => console.log('Product shared sucessfully'))
        .catch((error) => console.log('Sharing Failed', error))

    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("link copy to clipboard.")
    }

  }

  //  fancy box

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {

    });


    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    < >
      <div className="container">
        <div className='product_detail_section'>

          <div className="col_half">
            <div className="img_section">
              <div className='left_img'>

                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  direction="horizontal"
                  slidesPerView={4}
                  watchSlidesProgress={true}
                  slideToClickedSlide={true}

                  breakpoints={{
                    0: {
                      direction: 'horizontal', // Mobile (under 768px)
                    },
                    768: {
                      direction: 'vertical',   // Tablet & Desktop (768px and up)
                    }
                  }}
                >

                  {
                    productDetails.feature_image?.map((item, idx) => (
                      <SwiperSlide key={idx}>
                        <img className='all_img' src={`${productDetails.product_image_base_url}${item.feature_image}`} alt="img2" />
                      </SwiperSlide>
                    ))
                  }
                </Swiper>

              </div>


              <div className='right_img'>
                <Swiper
                  spaceBetween={10}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Thumbs, Navigation]}
                  navigation={true}
                  className='mainSwiper'>

                  {productDetails.feature_image?.map((item, idx) => (
                    <SwiperSlide key={idx} >

                      <a
                        href={`${productDetails.product_image_base_url}${item.feature_image}`}
                        data-fancybox="gallery"
                        data-caption={productDetails.title}
                      >
                        <img
                          className='thumbnail_img'
                          src={`${productDetails.product_image_base_url}${item.feature_image}`}
                          alt={productDetails.title}
                        />

                      </a>

                    </SwiperSlide>
                  ))}
                </Swiper>

              </div>



            </div>
          </div>

          <div className="col_half">

            <div className="product_all_description">

              <span className='model_name'>
                {productDetails.product_model}
              </span>
              <p className='title'>
                {productDetails.title}
              </p>
              <div>
                <p className='price'>
                  ₹{productDetails.price} /-
                </p>
                <span className='price_of_mrp'>
                  MRP(Inclusive off all taxes.)
                </span>
              </div>

              <p className='short_description'>    {productDetails.short_description}
              </p>

              <p className='seller_name'>
                Seller Name - {productDetails.seller_name}
              </p>

              <div className='quantity'>
                Quantity :
                <p className='quanity_number'>
                  <button><FiMinus /></button>
                  <input type="text" value={1} />
                  <button><GoPlus /></button>
                </p>
              </div>

              <div className="add_to_cart_button">

                <button className='cart_btn'> Add To Cart </button>
                <button className='wishlist_btn'> Add To Wishlist </button>
              </div>

              <div className="buy_now">
                <button> Buy It Now </button>

              </div>

              <div className="share_product" onClick={ShareProduct}>
                Share This Product :  <IoShareSocial />
              </div>

            </div>

          </div>


        </div>


        <div className="product_descrip">

          <div className="col_half">

            <h2 className='title'>Product Description</h2>

            <p>
              {productDetails.long_description}
            </p>


          </div>
          <div className="col_half dedcription_img">
            {
              productDetails.description_image?.map((item, idx) => (
                <div key={idx} className=''>
                  <img className='all_img' src={`${productDetails.product_image_base_url}${item.description_image}`} alt="img2" />

                </div>
              ))
            }

          </div>

        </div>

        <div className='product_attribute'>
          <h2 className='title'>Product Attributes</h2>
          <table  >
            <thead>
              <tr>
                <th>S no.</th>
                <th>Attribute</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>

              {productDetails.product_attribute?.map((item, id) => (


                <tr key={id}>
                  <td>{`${id + 1}`}</td>
                  <td>{item.attribute_key}</td>
                  <td>{item.attribute_value}</td>
                </tr>

              ))
              }

            </tbody>
          </table>
        </div>





        <SimilerProduct id={productDetails.tbl_product_id} />



      </div>





    </>


  )
}

export default ProductDetails