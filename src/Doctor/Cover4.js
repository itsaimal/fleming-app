import React from 'react'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {NavLink} from "react-router-dom"

function Cover4() {
    return (
        <div className="md:flex justify-center mt-24">
        <div> 
        <h1 className="text-4xl font-semibold mb-4 text-blue-800">
               
Get paid </h1>
                <p className="max-w-lg mb-8">Set your service list. The system will automatically collect money from your patients.</p>

                <NavLink to="onboard">
                <h1 className="text-blue-800 mb-7 cursor-pointer hover:text-gray-700"><PersonAddIcon className="mr-1"/>Patient onboard</h1></NavLink>
        </div>

        <img src="https://fleming.app/img/landing/svg/screens/payment-screen.svg"/>
        
    </div>
    )
}

export default Cover4
