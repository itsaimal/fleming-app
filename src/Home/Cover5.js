import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PersonIcon from '@material-ui/icons/Person';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {NavLink} from "react-router-dom"

function Cover5() {
    return (
        <div className="md:flex justify-center mt-24">
            <img src="https://fleming.app/img/landing/svg/abstractions/doctor-1-abstraction.svg"/>

            <div className="ml-60 mr-16">
                <h1 className="text-blue-800 text-3xl font-semibold">
A new way of consulting</h1>
                <h1 className="mt-4">Doctors can:</h1>
                <ul>

                <li className="flex mt-3" ><FiberManualRecordIcon className="text-blue-800 mr-3"/>Assess patients via chat, voice, or video call</li>
                <li className="mt-3"><FiberManualRecordIcon className="text-blue-800 mr-3"/>Send prescriptions</li>
                <li className="mt-3"><FiberManualRecordIcon className="text-blue-800 mr-3"/>Make follow-ups</li>
                <li className="mt-3"><FiberManualRecordIcon className="text-blue-800 mr-3"/>Get diagnosing assistance from medical AI</li>
             
                </ul>

                <NavLink to="/doctor">
                <h1 className="text-md text-blue-900 mt-12 cursor-pointer mr-36"><LocalHospitalIcon className=""/>Doctor<ArrowRightAltIcon /></h1></NavLink>

            </div>
        </div>
    )
}

export default Cover5
