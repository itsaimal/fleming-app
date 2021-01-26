import React from 'react'

import AddCommentIcon from '@material-ui/icons/AddComment';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {NavLink} from "react-router-dom"


function Cover2() {
    return (
        <div className="md:flex justify-center mt-16">
        <div>
            <h1 className="text-4xl font-semibold mb-4 text-blue-600">
                Talk to patients </h1>
                <p className="max-w-lg mb-8">Make quick assessments from messages with photos. Examine your patients’ health with voice or video calls. Set the time when you are available for chatting.</p>

                <NavLink to="/Talk-to-doc">
                <h1 className="text-blue-800 mb-7 cursor-pointer hover:text-gray-700"><AddCommentIcon className="mr-1"/>Talk to doctor</h1></NavLink>

                <h1 className="text-4xl font-semibold mb-4 text-blue-600">Write prescriptions</h1>
                <p className="max-w-md mb-8">Fill the prepared form and send it directly to the patient. Save time from administrative tasks.</p>

                <NavLink to="/prescription">
                <h1 className="text-blue-800 mb-7 cursor-pointer hover:text-gray-700"><LocalHospitalIcon className="mr-1"/>Prescription</h1></NavLink>
        </div>

        <img className="max-w-lg" src="https://fleming.app/img/landing/png/screens/doctor-profile-screen-min.png"/>
        
    </div>
    )
}

export default Cover2
