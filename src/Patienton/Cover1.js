import React from 'react'

function Cover1() {
    return (
        <div className="md:flex justify-center mt-16">

        <img className="max-w-2xl mr-10" src="https://fleming.app/img/landing/png/big-banners/girl-table-min.png"/>

        <div >
            <h1 className="text-4xl font-semibold text-blue-800 mb-8">Patient onboard</h1>
            <p className="max-w-sm mb-8 font-semibold">
            Patients can find a specialist in 2 ways:
            </p>

            <ul>
                <li className="mb-3">by name and surname or speciality</li>
                <li>by entering a specialist's code</li>
            </ul>

        </div>

        </div>
    )
}

export default Cover1
