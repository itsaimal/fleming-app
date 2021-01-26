import React from 'react'
import SpaIcon from '@material-ui/icons/Spa';
import {NavLink} from "react-router-dom"

function Cover4() {
    return (
        <div className="md:flex justify-center mt-20">
            <div> 
            <h1 className="text-4xl font-semibold mb-4 text-blue-600">
                    Talk to doctor </h1>
                    <p className="max-w-lg mb-8">Write messages to specialists and book virtual appointments. Forget about trips to clinics and long hours in the waiting room.</p>

                    <NavLink to="/vitamins">
                    <h1 className="text-blue-800 mb-7 cursor-pointer hover:text-gray-700"><SpaIcon className="mr-1"/>Talk to doctor</h1></NavLink>
            </div>

            <img src="https://fleming.app/img/landing/svg/abstractions/vitamins-composition-abstraction.svg"/>
            
        </div>
    )
}

export default Cover4
