import React from 'react'

function Cover2() {
    return (
        <div className="md:flex justify-center mt-16">
        <div>
            <img src="https://fleming.app/img/landing/png/logotypes/vilniaus-kolegija.png"/>
        </div>
        <div className="ml-36">
            <h1 className="font-semibold text-blue-800 text-4xl mb-8">Project overview</h1>
            <ul>
                <li className="mb-5">Executor:<strong> Ltd. Medical Score</strong></li>
                <li className="mb-5">Partner:<strong> Vilnius University of Applied Science</strong> </li>
                <li className="mb-5">Beginning of the project:<strong>  01-09-2020</strong></li>
                <li className="mb-5">End of the project:<strong> 01-09-2022</strong> </li>
                <li className="mb-5">Budget:<strong>  1 310 030,48 EUR</strong></li>
            </ul>
        </div>
        
    </div>
    )
}

export default Cover2
