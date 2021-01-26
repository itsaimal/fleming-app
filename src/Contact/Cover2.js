import React from 'react'

function Cover2() {
    return (
        <div className="md:flex justify-center mt-12 h">
            <div>
                <h1 className="text-blue-700 text-4xl font-semibold">Contact us</h1>

                <h1>Name</h1>
                <input className="plh h-7 border-gray-300 border-2 mb-6 rounded-md focus:ring-4 focus:ring-indigo-300 focus:outline-none" type="text" />

                <h1>Email</h1>
                <input className="plh mb-6 h-7 border-gray-300 border-2 rounded-md focus:ring-4 focus:ring-indigo-300 focus:outline-none" type="text" />

                <h1 className="mb-1">Message</h1>
                <input className=" plh h-36 border-gray-300 border-2 mb-24 rounded-md focus:ring-4 focus:ring-indigo-300 focus:outline-none" type="text" />
                <div className="flex justify-center">

                <button className="bg-blue-700 text-white w-96 h-10 rounded-3xl ">SEND</button></div> 
            </div>
            
        </div>
    )
}

export default Cover2
