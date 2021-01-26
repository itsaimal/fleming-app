import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Cover3() {
    return (
        <div className="md:flex justify-center mt-24">
            <div>
                <img src="https://fleming.app/img/landing/png/logotypes/es-program-banner-lt-min.png"/>
            </div>

            <div className="ml-24"
            >
                <h1 className="text-blue-800 font-semibold text-4xl mb-8 max-w-lg">Research and technological development</h1>

                <p className="max-w-sm mb-8">From the<strong> 1st of September 2020</strong> the project is in development with an objective for innovative educational and medical telehealth solutions:</p>

                <ul>
                    <li className="mb-5"><FiberManualRecordIcon className="text-blue-800 mr-2" style={{fontSize:"small"}}/>pre-medical diagnostics based on Artificial Intelligence algorithms</li>
                    <li className="mb-5"><FiberManualRecordIcon className="text-blue-800 mr-2" style={{fontSize:"small"}}/>landing.centralized-databases</li>
                    <li className="mb-8 text-blue-800"><FiberManualRecordIcon className="mr-2" style={{fontSize:"small"}}/>medical API</li>
                </ul>

                <p className="max-w-sm">Professionals from medical research fields and AI developers have crafted these products that are currently in the beta version.</p>
            </div>
            
        </div>
    )
}

export default Cover3
