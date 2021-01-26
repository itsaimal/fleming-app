import React from 'react'
import PersonIcon from '@material-ui/icons/Person';

function Cover10() {
    return (
        <div className="md:flex justify-center mt-16">
            <div>
                <h1 className="font-semibold text-4xl text-blue-800 mb-8">
Alexander Fleming</h1>
<p className="max-w-md mb-8">We chose our product name to honor the physician, microbiologist, and discoverer of penicillin - the person who made a revolutionary step towards more effective medicine.</p>
<h1 className="text-blue-800 cursor-pointer"><PersonIcon className="mr-2"/>About Alexander Fleming</h1>
            </div>

            <div>
                <img src="https://fleming.app/img/landing/png/rounded-pics/fleming-rounded-min.png"/>
            </div>
            
        </div>
    )
}

export default Cover10
