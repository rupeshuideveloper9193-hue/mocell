

import React, { useContext, useState } from 'react'
import logo from '../image/logo/logo.jpg'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx'
import { FaChevronDown } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import '../Css/Header.css'
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import CartSideBar from './CartSideBar.jsx';
import WishlistSideBar from './WishlistSideBar.jsx';
import SearchBarSlide from './SearchBarSlide.jsx';

const Header = () => {



    //  store category data from context (globally)
    const { category, subCategory, fetchSubCategory } = useContext(ShopContext)
    //  show category when hover on products
    const [showCategory, setShowCategory] = useState(false)
    //  show subategory when hoveron category
    const [hoveredCategory, setHoveredCategory] = useState(null)

    //  for mobile menu 
    const [menuOpen, setMenuOpen] = useState(false);        // For "Our Products"
    const [openCategory, setOpenCategory] = useState(null); // For category

    const [productsOpen, setProductsOpen] = useState(false);





    //search side bar 

    const [searchSideBar, setSearchSideBar] = useState(false)
    const [cartSideBar, setCartSideBar] = useState(false)
    const [wishlistSideBar, setWishlistSideBar] = useState(false)


    console.log("categoryData", category)
    console.log("subCategoryData", subCategory)

    return (
        <>
            <div className="header_container">
                <div className="container">
                    <div className='header_section   flex items-center   justify-between'>



                        <div className="menu_bar" onClick={() => setMenuOpen(true)} >
                            <HiOutlineMenuAlt1 size={25} />
                        </div>

                        <div className="logo">
                            <Link to="/">  <img src={logo} width='100px' alt="keipac technologies private limited" /></Link>
                        </div>

                        <ul className='flex  gap-8   header_link'>
                            <li className='category_list'
                                onMouseEnter={() => setShowCategory(true)}
                                onMouseLeave={() => {
                                    setShowCategory(false)
                                    setHoveredCategory(null)
                                }}

                            >
                                <NavLink to="">

                                    <div className=' main-heading flex items-center gap-1.5'  >
                                        <p className=''> Our Products </p> <FaChevronDown />
                                    </div>

                                    {
                                        showCategory && (
                                            <div className="categories">
                                                <div className="container">
                                                    <div className='category_img'>
                                                        {
                                                            category.map((cat) => (
                                                                <div key={cat.tbl_category_id} className='category_info'>
                                                                    <div className='category_box'
                                                                        onMouseLeave={() => setHoveredCategory(null)}
                                                                        onMouseEnter={() => {
                                                                            setHoveredCategory(cat.tbl_category_id)
                                                                            fetchSubCategory(cat.tbl_category_id);
                                                                        }}
                                                                    >
                                                                        <img src={cat.category_image} width="80px" alt={cat.tbl_category_id} />

                                                                        <p>
                                                                            {cat.category_name}
                                                                        </p>


                                                                        {/*  subcategory show on hover  */}
                                                                        <div className="subcategory_box">

                                                                            {hoveredCategory === cat.tbl_category_id && (
                                                                                subCategory[cat.tbl_category_id]?.map((sub) => (
                                                                                    <div key={sub.tbl_subcategory_id}>



                                                                                        <Link to={`/collection/category/${cat.tbl_category_id}/subcategory/${sub.tbl_subcategory_id}`}>


                                                                                            <div className='subCategory_links' onClick={() => { setHoveredCategory(null), setShowCategory(false) }} >

                                                                                                <img src={sub.subcategory_image} alt={sub.subcategory_name} width='50px' />


                                                                                                <p>
                                                                                                    {sub.subcategory_name}
                                                                                                </p>


                                                                                            </div>

                                                                                        </Link>
                                                                                    </div>
                                                                                ))
                                                                            )
                                                                            }

                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    }



                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about-us'>
                                    <p className='main-heading'> About Us</p>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/contact-us'>
                                    <p className='main-heading' >  Contact Us </p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/distribute-partnership'>
                                    <p className='main-heading' > Partnership </p>
                                </NavLink>
                            </li>

                        </ul>

                        {/* <div className="search_bar ">
                            <input type="text" placeholder=' Find Our Products...' />
                            <button type='submit'  ><CiSearch /></button>
                        </div> */}

                        <div className='user_login  flex gap-5 '>


                            <div className="search" onClick={() => setSearchSideBar(true)}  >
                                <CiSearch className='icon size-5 cursor-pointer' />
                            </div>
                            <SearchBarSlide open={searchSideBar} close={() => setSearchSideBar(false)} />

                            <div className="cart" onClick={() => setCartSideBar(true)}       >
                                <LuShoppingBag className='icon size-5 cursor-pointer' />
                            </div>
                            <CartSideBar open={cartSideBar} close={() => setCartSideBar(false)} />
                            <div className="user">
                                <Link to='/login'>
                                    <FiUser className='icon size-5 cursor-pointer' />
                                </Link>
                            </div>
                            <div className='wishlist' onClick={() => setWishlistSideBar(true)} >
                                <FaRegHeart className='icon size-5 cursor-pointer' />
                            </div>

                            <WishlistSideBar open={wishlistSideBar} close={() => setWishlistSideBar(false)} />
                        </div>


                        {/*  mobile menu  */}

                        {
                            menuOpen && (
                                <div className="mobile_background_overlay" >
                                    <div className="mobile_menu_content">
                                        <div className="overlay_header">

                                            <h3>MENU </h3>

                                            <div className='cross_icon '>
                                                <RxCross2 onClick={() => { setMenuOpen(false), setOpenCategory(null) }} />
                                            </div>

                                        </div>

                                        <ul className='mobile_nav'>
                                            <li >
                                                <NavLink className="mobile_category" onClick={() => setProductsOpen(true)}  >
                                                    Our Products <FaChevronDown />
                                                </NavLink>

                                                {productsOpen && (
                                                    <div className='mobile_categories'>
                                                        {category.map(cat => (
                                                            <div key={cat.tbl_category_id}>
                                                                <div
                                                                    className="mobile_category_item"
                                                                    onClick={() => {
                                                                        setOpenCategory(openCategory === cat.tbl_category_id ? null : cat.tbl_category_id);
                                                                        if (!subCategory[cat.tbl_category_id]) {
                                                                            fetchSubCategory(cat.tbl_category_id);
                                                                        }
                                                                    }}
                                                                >
                                                                    {cat.category_name} <FaChevronDown />
                                                                </div>

                                                                {openCategory === cat.tbl_category_id &&
                                                                    subCategory[cat.tbl_category_id]?.map(sub => (
                                                                        <Link
                                                                            key={sub.tbl_subcategory_id}
                                                                            to={`/collection/category/${cat.tbl_category_id}/subcategory/${sub.tbl_subcategory_id}`}

                                                                            onClick={() => setMenuOpen(false)}
                                                                        >
                                                                            {sub.subcategory_name}
                                                                        </Link>
                                                                    ))
                                                                }


                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </li>
                                            <li>
                                                <NavLink to='/about-us' onClick={() => setMobileMenuOpen(false)}>
                                                    <p > About Us</p>
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink to='/contact-us' onClick={() => setMobileMenuOpen(false)}>
                                                    <p >  Contact Us </p>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/distribute-partnership' onClick={() => setMobileMenuOpen(false)}>
                                                    <p  > Partnership </p>
                                                </NavLink>
                                            </li>
                                        </ul>


                                    </div>
                                </div>
                            )
                        }

                    </div>















                </div>

            </div >
        </>
    )
}

export default Header