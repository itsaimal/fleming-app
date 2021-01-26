import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Cover4() {
    return (
        <div className="md:flex justify-center mt-24">
            
            <div className="mr-36">
                <h1 className="text-blue-800 font-semibold text-4xl mb-12">2 years vision</h1>
                <ul>
                    <li className="mb-3"><FiberManualRecordIcon className="text-blue-800 mr-2" style={{fontSize:"small"}}/><strong className="text-blue-800 ">2020 September</strong> - Project start</li>
                    <li className="mb-3"><FiberManualRecordIcon className="text-blue-800 mr-2" style={{fontSize:"small"}}/><strong className="text-blue-800 ">2020 December 22</strong> - Minimum viable product</li>
                    <li className="mb-3"><FiberManualRecordIcon className="text-blue-800 mr-2" style={{fontSize:"small"}}/><strong className="text-blue-800 ">2021 March 1 </strong>- Minimum marketable product</li>
                    <li className="mb-3"><FiberManualRecordIcon className="text-blue-800 mr-2" style={{fontSize:"small"}}/><strong className="text-blue-800 ">2022 September</strong> - Official launch in market</li>
                </ul>
            </div>
            <div>
                <img src="https://fleming.app/img/landing/png/rounded-pics/office-work-rounded-min.png"/>
            </div>
        </div>
    )
}

export default Cover4
