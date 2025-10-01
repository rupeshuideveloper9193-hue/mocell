


import {React} from 'react'



const QuickView = ({product,onClose}) => {


    
    if(!product){
         return null;
    }
    
    
  return (
    <> 
          <div className="quickView_overlay"  onClick={onClose}></div>
      
        <div className='product_detail_section'>

            

        </div>


     </>
  )
}

export default QuickView