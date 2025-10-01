import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import '../Css/collection.css'
import BreadCrum from './BreadCrum'
import { ShopContext } from '../context/ShopContext'
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const Collection = () => {

  const { categoryId, subCategoryId } = useParams()
  const navigate = useNavigate()
  const { category, subCategory } = useContext(ShopContext)

  const findCategory = category.find(item => String(item.tbl_category_id) === String(categoryId))
  const categoryName = findCategory?.category_name

  const subCategoryList = subCategory[categoryId] || [];
  const findSubCategory = subCategoryList.find(
    (item) => String(item.tbl_subcategory_id) === String(subCategoryId)
  );
  const subCategoryName = findSubCategory?.subcategory_name;



  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const token = import.meta.env.VITE_TOKEN

  console.log("categoryIdandsubcategory", categoryId, subCategoryId)
  const [categoryWiseProduct, setCategoryWiseProduct] = useState([])

  console.log("categorywiseproduct------------", categoryWiseProduct)

  useEffect(() => {

    // if (!categoryId || !subCategoryId) return " Category not fount ";

    const fetchCatogoryAllproduct = async () => {

      try {
        const response = await axios.post(backendUrl + '/product_data/category_wise_product_list_API', {
          tbl_category_id: categoryId,
          tbl_subcategory_id: subCategoryId,
          tbl_dealer_id: '8',
          pagesize: '10',
          pagenumber: '1'
        }, { headers: { token } })

        setCategoryWiseProduct(response.data.data || [])


      }
      catch (error) {
        console.log(error)
      }
    }

    fetchCatogoryAllproduct()

  }, [categoryId, subCategoryId])




  return (
    <div className='collection_section' >

      <div className="container">

        <BreadCrum title1={`${categoryName}`} title2={'Home'} title3={`${subCategoryName}`} />


        <div className="collection_detail">


          <div className="filterd_product">
            <div>
              filter

            </div>
            <div className="sort_price">

              <select name="" id="">
                <div className='select_filter'>
                  <option value=""> -- Default Sorting --  </option>
                  <option value=""> Sort by Price : Low Price </option>
                  <option value=""> Sort by Price : High Price </option>
                  <option value=""> Alphabetically : A-Z </option>
                  <option value="">Alphabetically : A-Z</option>
                </div>
              </select>
            </div>
          </div>



          <div className="collection_product_detail">


            {
              categoryWiseProduct.map((item, id) => (

                <div key={id}>

                  <div className="collection_list">

                    <div className="collection_img" onClick={() => navigate(`/collection/category/${categoryId}/subcategory/${subCategoryId}/products/${item.tbl_product_id}`)} >
                      <img src={item.product_image} alt={item.title} />

                    </div>

                    <div className="about_product">
                      <span className='product_model' >
                        {item.product_model}
                      </span>
                      <p className='product_title'>
                        {item.title}
                      </p>
                      <span className='price'> MRP: {item.price}</span>
                      <p className='seller_name'>
                        Seller :     {item.seller_name}
                      </p>

                      <div className="add_cart">

                        <div className="add_wishlist">

                          <CiHeart className="icon" />


                        </div>
                        <div className="cart_btn" onClick={() => navigate(`/collection/category/${categoryId}/subcategory/${subCategoryId}/products/${item.tbl_product_id}`)}>
                          <button  >add to cart</button>
                          <FaCartPlus className='cart_icon' />
                        </div>
                      </div>



                    </div>


                  </div>

                </div>

              ))
            }





          </div>








        </div>


      </div>

    </div>
  )
}

export default Collection