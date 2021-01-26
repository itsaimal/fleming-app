import React ,{useState,useEffect} from 'react'
import { NavLink } from "react-router-dom";

function Header() {
        const menuItems = [{name:"Home", to:"/"},
        {name:"Patient", to:"/patient"},
        {name:"Doctor", to:"/doctor"},
        {name:"Business", to:"/business"},
        {name:"Products", to:"/products"},
        {name:"Contact", to:"/contact"},
        {name:"About", to:"/about"},
        {name:"EU fund", to:"/eu-fund"}];

        const [selected,setSelected] = useState(menuItems[0].name)

        const handleSelected = name => {
            setSelected(name);
        }

        const menuItemMap = menuItems.map((item,index) => {

            const isItemSelected = selected === item.name;

            return (
                <menu onClick={()=> handleSelected(item.name)} key={index} className={`mr-7  cursor-pointer ${isItemSelected ? 'text-md font-bold text-blue-800' : 'text-gray-700 font-normal text-md'} hover:text-blue-800 `}><NavLink to={item.to}>
                    {item.name}</NavLink>

                </menu>
            )

        })

    return (
        <div className="z-20 w-full h-20 shadow-lg  bg-white hidden md:block fixed">
            <div >
            <h1 className="flex pt-9 pl-6 ">{menuItemMap}</h1>
            
        
            </div>
<div className="flex absolute right-20 top-0 ">
            <div className="flex absolute right-3 top-10  "><img className=" mr-6" src="https://fleming.app/img/landing/svg/flags/english-language.svg"/>
            <img className="mr-6" src="https://fleming.app/img/landing/svg/flags/lithuanian-language.svg"/>
            <img className="mr-6" src="https://fleming.app/img/landing/svg/flags/russian-language.svg"/></div>
            </div>
           
        </div>
    )
}

export default Header
