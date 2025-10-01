
import React from 'react'

import { FiChevronsRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const BreadCrum = ({ title1, title2, showArrow = true, title3 }) => {
    return (
        <div className='bread_crum'>
            <h3>{title1}</h3>
            <ul>
                <li className='title2'>
                    <Link  to='/'>{title2}</Link>
                </li>

                {(showArrow && title3) && (
                    <>
                     <FiChevronsRight />
                    <li className='title3'>
                        {title3} 
                    </li>
                    </>
                    
                )}
            </ul>

        </div>
    )
}

export default BreadCrum