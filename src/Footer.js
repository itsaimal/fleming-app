import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';

import AddCommentIcon from '@material-ui/icons/AddComment';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SpaIcon from '@material-ui/icons/Spa';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CodeIcon from '@material-ui/icons/Code';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EmailIcon from '@material-ui/icons/Email';
import CategoryIcon from '@material-ui/icons/Category';
import FlagIcon from '@material-ui/icons/Flag';

function Footer() {
    return (
        <div className="w-full h md:flex justify-center">
           

            <div className="md:flex">
                {/* 1 */}
<div>
    <img className="mt-20 mb-24 mr-60" src="https://fleming.app/img/landing/svg/logotypes/fleming-logo-hor.svg"/>     
    <img className="w-56" src="https://fleming.app/img/landing/svg/doctor-set-animation/corner-abstraction.svg"/>      </div>

                {/* 2 */}
                <div className="mt-20  mr-24">
                    <h1 className="text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><PersonIcon className="mr-1"/>Patient</h1>
                    <h1 className="text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><WorkIcon className="mr-1"/>Doctor</h1>
                    <h1 className="text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><AddCommentIcon className="mr-1"/>Talk to doctor</h1>
                    <h1 className="text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><PersonAddIcon className="mr-1"/>Patient onboard</h1>
                    <h1 className="text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><LocalHospitalIcon className="mr-1"/>Prescription</h1>
                    <h1 className="text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><SpaIcon className="mr-1"/>Vitamins</h1>
                    <h1 className="w-44 text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><AssignmentTurnedInIcon className="mr-1"/>AI symptom checker</h1>
                    <h1 className="text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><DynamicFeedIcon className="mr-1"/>Medical database</h1>
                    <h1 className="text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><EqualizerIcon className="mr-1"/>Health monitoring</h1>
                    <h1 className="text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><CodeIcon className="mr-1"/>Fleming API</h1>
                </div>

                {/* 3 */}
<div className="mt-20  mr-28 w-44">
    <h1 className="text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><MenuBookIcon className="mr-1"/>About</h1>
    <h1 className="text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><WorkIcon className="mr-1" />Business</h1>
    <h1 className="text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><EmailIcon className="mr-1"/>Contact</h1>
</div>
                {/* 4 */}
<div className="mt-20 mb-24 w-56">
    <h1 className="text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><CategoryIcon className="mr-1"/>Products</h1>
    <h1 className="text-gray-700 mb-7 cursor-pointer hover:text-blue-800"><FlagIcon className="mr-1"/>EU Fund</h1>
</div>

                {/* 5 */}
                <img className=" object-contain ml-56" src="https://fleming.app/img/landing/png/logotypes/es-program-logo-min.png"/>
            </div>
        </div>
    )
}

export default Footer
