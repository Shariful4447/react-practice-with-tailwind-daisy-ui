import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const NavBar = () => {
    const [open, setOpen]= useState(false);
    const routes = [{id: '1', path: '/', name: 'Home'},
    {id: '2', path: '/about', name: 'About'},
    {id: '3', path: '/services', name: 'Services'},
    {id: '4', path: '/contact', name: 'Contact'},
    {id: '5', path: '/dashboard', name: 'Dashboard'}
    ];
    return (
        <nav>
            <div onClick={()=> setOpen(!open)}>
                {
                    open === true ?<AiOutlineClose className="text-2xl md:hidden"></AiOutlineClose> : <AiOutlineMenu className="text-2xl md:hidden"></AiOutlineMenu>
                }
                

            </div>
            <ul className="flex">
                {
                routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;