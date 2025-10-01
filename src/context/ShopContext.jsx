



import React, { createContext, } from 'react'

import { products } from '../assets/asset.js'
import axios from 'axios'
import { useState, useEffect } from 'react'
export const ShopContext = createContext()

const ShopContextProvider = (props) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const token = import.meta.env.VITE_TOKEN


   const [category, setCategory] = useState([])
   const [subCategory, setSubCategory] = useState({});


  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.post(backendUrl + '/category_data/category_list_API', {
          tbl_dealer_id: "8",
          pagesize: "10",
          pagenumber: "1"
        }, { headers: { token } }

        )
        console.log("category api response data -------------:", response.data.data);
        setCategory(response.data.data || [])
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchCategory()
  }, [])


  //  subcategory 

    const fetchSubCategory = async (categoryId) => {
         if (subCategory[categoryId]) return;

        try {
            const response = await axios.post(backendUrl + '/category_data/sub_category_list_API', {
                tbl_dealer_id: '11',
                tbl_category_id: categoryId, 
                pagesize: '10',
                pagenumber: '1'
            }, { headers: { token } })

            setSubCategory((prev) => ({
                ...prev,
                [categoryId]: response.data.data || []
            }))
        }
        catch (error) {
            console.log(error)
        }
    }

























  const value = {
    products,
    category,
    subCategory,
    fetchSubCategory,
 




  }


  return (

    <ShopContext.Provider value={value}>

      {props.children}

    </ShopContext.Provider>

  )
}

export default ShopContextProvider