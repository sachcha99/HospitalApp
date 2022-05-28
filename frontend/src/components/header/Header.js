import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import axios from 'axios'


function Header() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user)
    function logout() {
        sessionStorage.removeItem('user')
        window.location.reload()
    }

    return (
        <header>

            <div className='logo'>
                <h1><Link to="/">MediLab HMS</Link></h1>
            </div>
            {
                user && user.role == "patient" &&
                <ul>
                    <li><Link to='/dashboardpatient'> DashboardPatient </Link></li>
                    <li><Link to='/appointmentpatient'> AppointmentPatient </Link></li>
                    <li><Link to='/contactus'> Contact Us </Link></li>
                    <li><Link to='/aboutus'> About Us </Link></li>



                        <li onClick={() => { logout() }}><Link to='/'> Logout </Link></li>

                </ul>

            }

            {
                user && user.role == "doctor" &&
                <ul>
                    <li><Link to='/dashboarddoctor'> DashboardDoctor </Link></li>
                    <li><Link to='/contactus'> Contact Us </Link></li>
                    <li><Link to='/aboutus'> About Us </Link></li>



                        <li onClick={() => { logout() }}><Link to='/'> Logout </Link></li>
                </ul>

            }
            {
                !user &&
                <ul>
                    <li><Link to='/contactus'> Contact Us </Link></li>
                    <li><Link to='/aboutus'> About Us </Link></li>


                    <li><Link to='/login'> Sign In </Link></li>
                    <li><Link to='/register'> Sign Up </Link></li>
                </ul>

            }
        </header>
    )
}

export default Header



