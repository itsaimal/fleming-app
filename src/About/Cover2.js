import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Cover2() {
    return (
        <div className="md:flex flex-col justify-center">
            <h1 className="text-center text-4xl font-semibold text-blue-800 mt-3 mb-10 ">Representatives</h1>

            <div className="flex justify-center">
            <div className="mr-16">
<img className="mb-8" src="https://fleming.app/img/landing/png/team/member-domas-rounded.png" alt="pic"/>

<h1 className="w-44 text-blue-800 text-lg font-semibold ml-6 mb-2 cursor-pointer hover:text-gray-700 text-center"><LinkedInIcon className="mr-1"/>Domas Pleškus

</h1>
<h1 className="text-center">CEO</h1>
            </div>
            <div>
                <img className="mb-8" src="https://fleming.app/img/landing/png/team/member-mantas-rounded.png" alt="pic"/>

                <h1 className="w-48 text-blue-800 text-lg font-semibold  mb-2 ml-8 cursor-pointer hover:text-gray-700 text-center"><LinkedInIcon className="mr-1"/>Mantas Bacevičius</h1>
                <h1 className="text-center">COO</h1>
            </div>
            </div>
        </div>
    )
}

export default Cover2
