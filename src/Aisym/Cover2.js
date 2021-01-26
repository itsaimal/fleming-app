import React from 'react'
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CachedIcon from '@material-ui/icons/Cached';


function Cover2() {
    return (
        <div className="md:flex justify-center mt-16">
            
        <div>
          
           
            <h1 className="text-blue-800 text-4xl font-semibold mb-8">Features</h1>
            <p className="mb-8">How does the symptom checker work?</p>
            <ul>
                <li className="mb-3 text-blue-800"><AssignmentIcon className="mr-2"/> Consults 24/7</li>
                <li className="mb-3 text-blue-800"><LocalHospitalIcon className="mr-2"/>Collects your symptoms as a doctor would</li>
                <li className="mb-3 text-blue-800"><AssignmentTurnedInIcon className="mr-2"/>Gives a pre-medical diagnosis</li>
                <li className="mb-3 text-blue-800"><CachedIcon className="mr-2"/>  Guides to the right specialists</li>
            </ul>
        </div>
        
        
        
        <img className="max-w-2xl ml-10" src="https://fleming.app/img/landing/svg/screens/symptom-checker-screen.svg"/>
        
                </div>
    )
}

export default Cover2
