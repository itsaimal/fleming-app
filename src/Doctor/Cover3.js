import React from 'react'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import {NavLink} from "react-router-dom"

function Cover3() {
    return (
        <div className="md:flex justify-center mt-24">
        <img src="https://fleming.app/img/landing/png/rounded-pics/books-pile-rounded-min.png"/>

        <div className="ml-12">
            <h1  className="text-4xl font-semibold mb-4 text-blue-800">
Receive assistance from AI</h1>
            <p className="max-w-lg mb-8">Use a symptom checker to gather information about patients’ symptoms. The medical AI is created around a modern disease library</p>


<NavLink to="/AI-sym">
            <h1 className="text-blue-800 mb-7 cursor-pointer hover:text-gray-700"><AssignmentTurnedInIcon className="mr-1"/>AI symptom checker</h1></NavLink>
        </div>
    </div>
    )
}

export default Cover3
