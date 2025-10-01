
import React from 'react'
import Slider from './Slider.jsx'
import VideoContainer from './VideoContainer.jsx'
import CategorySlider from './CategorySlider.jsx'

import NewArrivals from '../Componant/NewArrivals.jsx'
import Instapost from './Instapost.jsx'
import HotSelling from '../Componant/HotSelling.jsx'
import FeatureProducts from '../Componant/FeatureProducts.jsx'

const Home = () => {
  return (
    <div className=''>

      <Slider />


      <CategorySlider />

      <HotSelling />
      <VideoContainer />
      <FeatureProducts />
      <NewArrivals />

      <Instapost />




    </div>
  )
}

export default Home