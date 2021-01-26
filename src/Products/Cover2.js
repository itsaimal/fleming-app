import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import {NavLink} from "react-router-dom"

function Cover2() {
    return (
        <div className="md:flex justify-center mt-20">
        <div> 
        <h1 className="text-4xl font-semibold mb-4 text-blue-600">
        Be first to try</h1>
                <p className="max-w-lg mb-8">If you are interested in being a part of our user-testers community, please contact us.</p>

                <NavLink to="/contact">
                <h1 className="text-blue-800 mb-7 cursor-pointer hover:text-gray-700"><EmailIcon className="mr-1"/>Contact</h1>
                </NavLink>
        </div>

        <img src="https://fleming.app/img/landing/png/rounded-pics/woman-phone-rounded-min.png"/>
        
    </div>
    )
}

export default Cover2
