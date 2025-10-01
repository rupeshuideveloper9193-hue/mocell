import React from 'react'

import "../Css/SlideBar.css"
const WishlistSideBar = ({ open, close }) => {
  return (

    <>
      {
        open &&
        (
          <>
            <div className='slidebar_overlay' onClick={close}> </div>

            <div className="slidebar_slide">

              <h2> My Wishlist</h2>
            </div>

          </>
        )
      }



    </>

  )
}

export default WishlistSideBar