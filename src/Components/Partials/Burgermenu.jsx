import { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../../assets/Style/Nav.module.scss'
import { AiFillHome, AiOutlineClose } from "react-icons/ai";


export function BurgerMenu() {

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    }

    return (
        <>
            <div className={isActive ? Style.burgerMenuActive : Style.burgerMenu} onClick={handleToggle}>
                <AiFillHome className={Style.burgerMenuHome} />
                <AiOutlineClose className={Style.burgerMenuClose} />
            </div>

            <ul className={isActive ? Style.activeMenu : Style.menu}>
                <li><Link className={Style.navigationLinks} to="/" onClick={handleToggle}>Forside</Link></li>
                <li><Link className={Style.navigationLinks} to="/handelsbetingelser" onClick={handleToggle}>Salgs- og handelsbetingelser</Link></li>
                <li><Link className={Style.navigationLinks} to="/login" onClick={handleToggle}>Login</Link></li>
            </ul>
        </>
    )
}