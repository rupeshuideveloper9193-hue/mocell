


import React, { useContext } from 'react'

import "../Css/SlideBar.css"
import { CiSearch } from "react-icons/ci";
import { ShopContext } from '../context/ShopContext';
const SearchBarSlide = ({ open, close }) => {


  const { category } = useContext(ShopContext)

  return (


    <>
      {
        open && (
          <>


            <div className='slidebar_overlay' onClick={close}> </div>

            <div className="slidebar_slide">
              <div className="show_all_category">
                <select name="" id=""> 
                  <option value="">  Select Category </option>

                  {
                    category.map((cat, id) => (
                      <div key={id}>

                        <option value="">{cat.category_name}</option>
                      </div>

                    ))
                  }

                </select>

              </div>

              <div className='search_input'>
                <input type="text" placeholder='Search' />

                <div class="search_icon">
                  <CiSearch />
                </div>

              </div>




            </div>

          </>
        )

      }
    </>

  )
}

export default SearchBarSlide