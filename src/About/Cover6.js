import React from 'react'
import SchoolIcon from '@material-ui/icons/School';

function Cover6() {
    return (
        <div className="md:flex justify-center">
            <div className="mr-16">
                <h1 className="font-semibold text-blue-800 text-4xl mb-8">Partner</h1>
                <p className="mb-8 max-w-md">Our partner and advisor helping to reach precision in medical and artificial intelligence topics: Vilnius University of Applied Science.</p>

                <h1 className="text-blue-800 font-semibold"><SchoolIcon className="mr-2"/>Vilnius University of Applied Science</h1>
            </div>

            <div>
                <img src="https://fleming.app/img/landing/png/logotypes/vilniaus-kolegija.png"/>
            </div>
            
        </div>
    )
}

export default Cover6
