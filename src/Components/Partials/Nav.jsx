import style from '../../assets/Style/Nav.module.scss'
import { NavLink } from "react-router-dom"
import logo from "../../assets/Images/header-bg.png"

export const Navigation = () => {
    return (
        <nav>
            <img src={logo} alt="logo" />
            <ul>
                <li><NavLink to={'/'}>Forside</NavLink></li>
                <li><NavLink to={'/handelsbetingelser'}>Salgs- og handelsbetingelser</NavLink></li>
                <li><button><NavLink to={'/login'}>Login</NavLink></button></li>

            </ul>
        </nav>
    )
}
