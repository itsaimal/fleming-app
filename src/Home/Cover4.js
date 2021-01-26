import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PersonIcon from '@material-ui/icons/Person';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {NavLink} from "react-router-dom"

function Cover4() {
    return (
        <div className="md:flex justify-center mt-36">
            <div className="mr-6">
                <h1 className="text-blue-800 text-3xl font-semibold">Easy reachable care</h1>
                <h1 className="mt-4">With Fleming app patients can:</h1>
                <ul>

                <li className="flex mt-3" ><FiberManualRecordIcon className="text-blue-800 mr-3"/>Chat and have video calls with doctors</li>
                <li className="mt-3"><FiberManualRecordIcon className="text-blue-800 mr-3"/>Get e-prescriptions</li>
                <li className="mt-3"><FiberManualRecordIcon className="text-blue-800 mr-3"/>Check symptoms with medical AI</li>
                <li className="mt-3"><FiberManualRecordIcon className="text-blue-800 mr-3"/>Access trusted disease info</li>
                <li className="mt-3"><FiberManualRecordIcon className="text-blue-800 mr-3"/>Order a personalized vitamin complex</li>
                </ul>

                <NavLink to="/patient">
                <h1 className="text-md text-blue-900 mt-12 cursor-pointer mr-36"><PersonIcon className=""/>Patient <ArrowRightAltIcon /></h1></NavLink>

            </div>
            <img className="ml-16 max-w-lg" src="https://fleming.app/img/landing/png/screens/girl-phone-screen.png"/>
            
        </div>
    )
}

export default Cover4
