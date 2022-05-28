import React from 'react'
import {Link} from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import axios from 'axios'


function Header () {
    
    return (
        <header>

            <div className='logo'>
                <h1><Link to = "/">MediLab HMS</Link></h1> 
            </div>

            <ul>
                <li><Link to = '/dashboarddoctor'> DashboardDoctor </Link></li>
                <li><Link to = '/dashboardpatient'> DashboardPatient </Link></li>
                <li><Link to = '/appointmentpatient'> AppointmentPatient </Link></li>
                <li><Link to = '/contactus'> Contact Us </Link></li>
                <li><Link to = '/aboutus'> About Us </Link></li>
                {
                    // isLogged
                    // ?patientLink()
                    <li><Link to = '/login'> Sign In </Link></li>
                }
                <li><Link to = '/register'> Sign Up </Link></li>
                
            </ul>



        </header>
    )
}

export default Header



