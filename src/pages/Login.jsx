
import React from 'react'

import loginImg from "../image/banner/login.jpg"
import "../Css/Login.css"
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
``

    return (
        <div className='login_overlay'>

            <div className="login_section">

                <div className="col_half">
                    <div className="login_form">
                        <div className='title'>
                            <h3 > Welcome Back </h3>
                            <p>
                                login to your account
                            </p>
                        </div>


                        <form action="">


                            <div class="form_group">
                                <label for="email"> Email</label>
                                <input type="email" className='form_control' id="email" name="email" required placeholder=" xyz@gmail.com" />
                            </div>
                            <div class="form_group">
                                <label for="password">Password</label>
                                <input type="password" className='form_control' id="password" name="password" required placeholder=" Your Password" />
                            </div>

                            <button type='submit' className='login_btn' >
                                Submit
                            </button>
                        </form>


                    </div>
                    <div className='bottom_link'>
                        <p> Not any Account? <Link to="/signin">SignIn</Link> </p>
                        {/* <p>
                        <Link to="/term-condition" >Term&conditions</Link>
                    </p> */}
                    </div>



                </div>
                <div className="col_half">
                    <div className="login_img">
                        <img src={loginImg} alt=" loginimg" />
                    </div>
                </div>
                <div className="cross_icon">
                  <Link to="/">
                    <RxCross2 className='icon' />
</Link>
                </div>
            </div>
        </div>
    )
}

export default Login