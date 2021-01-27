import React from 'react'

function Cover1() {
    return (
        <div className="md:flex justify-center mt-10">
        <img className="max-w-2xl" src="https://fleming.app/img/landing/svg/abstractions/rocket-abstraction.svg" alt="pic"/>
        <div className="max-w-lg ml-36 mr-24 mt-20">
            <h1 className="text-4xl font-semibold mb-4 text-blue-600">About</h1>
            <p className="text-xl font-normal">We - Ltd. Medical Score team believe in <strong className="text-blue-900"> available</strong>, modern, and <strong className="text-blue-900">affordable</strong></p>
            <p className="text-xl font-normal">healthcare. And we think that the key to this vision is technology. Our product - <strong >Fleming </strong>allows patients to reach their doctors whenever they are while equipping specialists with tools faster, seamless consulting.</p>
        </div>
        </div>
    )
}

export default Cover1
