import React, { useState } from 'react'
import '../Css/ProductItems.css'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Tooltip } from 'react-tooltip'
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom';
import QuickView from './QuickView';

const ProductItems = ({ title, id, price, model, images }) => {


  const [showQuickView, setShowQuickView] = useState(false)

  const productData = { title, id, price, model, images, };




  return (
    <div className='product_items_details'>
      <Link to={`/products/${id}`}>
        <div className='product_box' key={id}>

          <div className="product_img">

            <img src={images} alt="" />


            <div className="quick_view1" onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

            }}>

              <div data-tooltip-id='add-wishlist' title='add to wishlist' data-tooltip-content="Add Wishlist" className='icon wishlist_icon' >
                < IoMdHeartEmpty className='icons' /> </div>

              {/* <Tooltip id="add-wishlist" place="bottom"
                style={{
                  backgroundColor: '#000', color: '#fff',
                  borderRadius: '0px', width: '100px', height: '28px', fontSize: '11px'
                }} /> */}

            </div>


            <div className="overlay_icons">
              <div className="add_to_cart_icons">
                {/* <div className="quick_view">

                  <div data-tooltip-id='view-details' data-tooltip-content="View Details" className='icon' onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowQuickView(true);
                  }}>

                    <MdOutlineRemoveRedEye className='icons'/> </div>

                  <div data-tooltip-id='add-wishlist' data-tooltip-content="Add Wishlist" className='icon' >
                    < IoMdHeartEmpty className='icons' /> </div>

                  <Tooltip id="view-details" place="top"
                    style={{ backgroundColor: '#000', color: '#fff', borderRadius: '0px', width: '100px', height: '28px', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />

                  <Tooltip id="add-wishlist" place="top"
                    style={{ backgroundColor: '#000', color: '#fff', borderRadius: '0px', width: '100px', height: '28px', fontSize: '11px' }} />

                </div> */}


                <div className="add_cart">
                  Buy It Now
                </div>



              </div>

            </div>
          </div>

          <div className="product_description">
            <p>{model}</p>

            <p className='product_name '>{title}</p>
            {/* <p>{description}</p> */}
            <div className="price">
              <span> MRP: ₹{price}</span>
            </div>

          </div>

        </div>

      </Link>


      {showQuickView && <QuickView product={productData} onClose={() => setShowQuickView(false)} />}


    </div>
  )
}

export default ProductItems