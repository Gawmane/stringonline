import style from '../../assets/Style/Nav.module.scss'
import { NavLink } from "react-router-dom"


export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to={'/'}>Forside</NavLink></li>
                <li><NavLink to={'/handelsbetingelser'}>Salgs- og handelsbetingelser</NavLink></li>
                <li><NavLink to={'/login'}>Login</NavLink></li>

            </ul>
        </nav>
    )
}
