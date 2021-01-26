import React, {useState, useEffect} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from "react-router-dom";


function Logo() {


    const menuItems = [{name:"Home", to:"/"},
        {name:"Patient", to:"/patient"},
        {name:"Doctor", to:"/doctor"},
        {name:"Business", to:"/business"},
        {name:"Products", to:"/products"},
        {name:"Contact", to:"/contact"},
        {name:"About", to:"/about"},
        {name:"EU fund", to:"/eu-fund"}];

        const [selected,setSelected] = useState(menuItems[0])
        const [open, setOpen] = useState(false);
        const [show, handleshow] = useState(true)
      

        const handleSelected = name => {
            setSelected(name);
        }

        useEffect(() => {
            window.addEventListener("scroll", () => {
              if (window.scrollY > 30) {
                handleshow(false)
              } else handleshow(true);
            });
            // return () => {
            //   window.removeEventListener("scroll")
            // }
          }, []);
        


        const menuItemMap = menuItems.map((item,index) => {

            const isItemSelected = selected === item.name;

            return (
                <menu  onClick={()=> handleSelected(item.name)} key={index} className={`mr-7  mb-6 cursor-pointer ${isItemSelected ? 'text-md font-bold text-blue-800' : 'text-gray-700 font-normal text-md'} hover:text-blue-800 `}>
                    <NavLink to={item.to}>
                    {item.name}</NavLink>

                </menu>
            )

        })



    return (
        <div className={` ${show?'w-full h-16  bg-white ': 'hidden'}`}>
            <img className="ml-5 pt-7" src="https://fleming.app/img/landing/svg/logotypes/fleming-logo-hor.svg"/>

            <div className="sm:hidden ">

            <MenuIcon onClick={() => setOpen(!open)} className="absolute right-7 top-6 cursor-pointer" style={{fontSize:"2rem"}}/>
            </div>

            {/* head */}

            <div  className={` ${open? 'w-full h  bg-white absolute z-20 transition-all duration-500 ease-in-out transform' : 'transition-all duration-500 ease-in-out'}`}>
            <h1 className={` ${open? 'text-center pt-9 pl-6 transition-all duration-800 delay-200 ease-in-out': 'transition-all duration-800 ease-in-out hidden'}`}>{menuItemMap}</h1>
            </div>
            
        </div>
    )
}

export default Logo
