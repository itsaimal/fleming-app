import React from 'react'

import WorkIcon from '@material-ui/icons/Work';

import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

function Cover1() {
    return (
        <div className="md:flex justify-center mt-10">
            <img className="max-w-2xl" src="https://fleming.app/img/landing/svg/abstractions/mail-abstraction.svg"/>
            <div className="max-w-lg ml-36 mr-24 mt-20">
                <h1 className="text-4xl font-semibold mb-4 text-blue-600">Contact</h1>
                <p className="text-lg font-semibold mb-8">Contact us for any additional information or a personalized demo.</p>

               
               

              
                <h1 className="w-44 text-gray-900  mb-7 cursor-pointer "><WorkIcon className="mr-3 text-blue-800"/>Ltd. Medical Score</h1>

                <h1 className="w-44 text-gray-900  mb-7 cursor-pointer "><EmailIcon className="mr-3 text-blue-800"/>hi@fleming.app</h1>

                <h1 className="w-48 text-gray-900  cursor-pointer mb-12 "><LocationOnIcon className="mr-3 text-blue-800"/>Vilnius, Olimpiečių 1</h1>



                <h1 className="w-44 text-blue-800  mb-7 cursor-pointer hover:text-gray-700"><LinkedInIcon className="mr-1"/>Fleming LinkedIn</h1>

                <h1 className="w-44 text-blue-800  mb-7 cursor-pointer hover:text-gray-700"><PeopleAltIcon className="mr-1"/>About</h1>




               
            </div>
            </div>
    )
}

export default Cover1
