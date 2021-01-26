import React from 'react'

import AddCommentIcon from '@material-ui/icons/AddComment';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Cover2() {
    return (
        <div className="md:flex justify-center mt-16">
        <div>
            <h1 className="text-4xl max-w-xl font-semibold mb-4 text-blue-600">
                
The benefit your employees will use </h1>
                <p className="max-w-lg mb-8">Our membership can provide private healthcare quality fast and for free. Enjoy more motivated, loyal, and healthy teams.</p>
              
              <p className="mb-10">Service included:</p>

              <ul >
                  <li className="mb-4"><FiberManualRecordIcon className="text-blue-800 mr-3"/>Virtual visits</li>
                  <li className="mb-4"><FiberManualRecordIcon className="text-blue-800 mr-3"/>Same day medical and psychological consultationsVirtual visits</li>
                  <li className="mb-4"><FiberManualRecordIcon className="text-blue-800 mr-3"/>AI-based symptom checker</li>
                  <li className="mb-4"><FiberManualRecordIcon className="text-blue-800 mr-3"/>Prescription and sick leave issuing</li>
              </ul>
              
        </div>

        <img className="max-w-lg" src="https://fleming.app/img/landing/png/screens/membership-screen.png"/>
        
    </div>
    )
}

export default Cover2
