import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SpaIcon from '@material-ui/icons/Spa';
import {motion} from "framer-motion"
import { NavLink } from 'react-router-dom';

function Cover1() {
    return (
        <div className="flex  justify-center ">
            {/* left */}
            <div className=" flex justify-center mt-32">
<div className="w">
                <h1 className="text-4xl text-blue-800 font-semibold">Reach your doctor anytime in need</h1>
                <h1 className="text-xl mt-5">Same day medical consultations with the Fleming app.</h1>

                <div className="flex mt-10">
                    <NavLink to="/patient">
                  <h1 className="text-md text-blue-900 cursor-pointer mr-36"><PersonIcon className=""/>Patient <ArrowRightAltIcon className=""/></h1></NavLink>


                    <NavLink to="/prescription">
                    <h1 className="text-md text-blue-900 cursor-pointer"><LocalHospitalIcon/>Prescription <ArrowRightAltIcon /></h1></NavLink>
                </div>


                <div className="flex mt-5">
                    <NavLink to="/AI-sym">
                    <h1 className="text-md text-blue-900 cursor-pointer mr-14"><AssignmentTurnedInIcon/>Al symptom Checker<ArrowRightAltIcon/></h1></NavLink>

<NavLink to="/vitamins">
                    <h1 className="text-md text-blue-900 cursor-pointer"><SpaIcon/>Vitamins <ArrowRightAltIcon/></h1>
                    </NavLink>
                </div>

               
                </div>
            </div>
            {/* right */}
            <div className="hidden md:block">
            <div className=" flex  ">

          

               <div className="flex mt-44 ">
                <motion.div initial={{opacity:0}}
                animate={{opacity:1,  }}
                transition={{delay:1.5,duration:1.5}} >
                    <img className="ml-3 z-10 absolute" src="https://fleming.app/img/landing/svg/doctor-set-animation/stethoscope.svg"/>
                </motion.div>

                
                <motion.div initial={{opacity:0}}
                animate={{opacity:1,  }}
                transition={{delay:.5,duration:.5}}>
                    <img className="ml-48" src="https://fleming.app/img/landing/svg/doctor-set-animation/card.svg"/>
                </motion.div>
                
                </div>
              
                <div>
                <motion.div initial={{opacity:0}}
                animate={{opacity:1,  }}
                transition={{delay:2,duration:1.5}} >
                    <img src="https://fleming.app/img/landing/svg/doctor-set-animation/corner-abstraction.svg"/>
                </motion.div>
                <motion.div initial={{opacity:0}}
                animate={{opacity:1,  }}
                transition={{delay:1.5,duration:1.5}} >
                    <img src="https://fleming.app/img/landing/svg/doctor-set-animation/pills2.svg"/>
                </motion.div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Cover1
