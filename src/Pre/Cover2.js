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
    <p className="mb-8">The information you will see:</p>
    <ul>
        <li className="mb-3 text-blue-800"><AssignmentIcon className="mr-2"/>Instruction for use</li>
        <li className="mb-3 text-blue-800"><LocalHospitalIcon className="mr-2"/>Medicine's info</li>
        <li className="mb-3 text-blue-800"><AssignmentTurnedInIcon className="mr-2"/>Diagnosis</li>
        <li className="mb-3 text-blue-800"><CachedIcon className="mr-2"/> Repeated prescriptions</li>
    </ul>
</div>



<img className="max-w-2xl ml-10" src="https://fleming.app/img/landing/svg/screens/prescriptions-screen.svg"/>

        </div>
    )
}

export default Cover2
