import React from 'react'
import FlagIcon from '@material-ui/icons/Flag';

function Cover5() {
    return (
        <div className="md:flex justify-center mt-16">

            <div>
                <img src="https://fleming.app/img/landing/png/logotypes/es-program-banner-lt-min.png"/>
            </div>

            <div className="ml-24">
                <h1 className="font-semibold text-blue-800 text-4xl mb-4">Project funding</h1>
                <p className="mb-7 max-w-sm">This project is funded by the European Regional Development Fund.</p>

                <h1 className="text-blue-900"><FlagIcon className="mr-2"/>EU fund</h1>




            </div>
            
        </div>
    )
}

export default Cover5
