import React from 'react'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CategoryIcon from '@material-ui/icons/Category';
import CodeIcon from '@material-ui/icons/Code';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';

function Cover1() {
    return (
        <div className="md:flex justify-center mt-10">
            <img className="max-w-2xl" src="https://fleming.app/img/landing/png/big-banners/office-work-min.png"/>
            <div className="max-w-lg ml-36 mr-24 mt-20">
                <h1 className="text-4xl font-semibold mb-4 text-blue-600">Products</h1>
                <p className="text-lg font-semibold mb-8">Our team of professional medics and developers are currently working on several beta stage products:</p>

                <h1 className="w-44 text-blue-800  mb-7 cursor-pointer hover:text-gray-700"><AssignmentTurnedInIcon className="mr-1"/>AI symptom checker</h1>

                <h1 className="w-44 text-blue-800  mb-7 cursor-pointer hover:text-gray-700"><DynamicFeedIcon className="mr-1"/>Medical database</h1>

                <h1 className="w-44 text-blue-800  mb-7 cursor-pointer hover:text-gray-700"><CodeIcon className="mr-1"/>Fleming API</h1>

                <h1 className="w-44 text-blue-800  mb-7 cursor-pointer hover:text-gray-700"><WorkIcon className="mr-1"/>Doctor</h1>

                <h1 className="w-44 text-blue-800  mb-7 cursor-pointer hover:text-gray-700"><PersonIcon className="mr-1"/>Patient</h1>
            </div>
            </div>
    )
}

export default Cover1
