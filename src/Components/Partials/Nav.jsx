import style from '../../assets/Style/Nav.module.scss'
import { NavLink } from "react-router-dom"


export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
            </ul>
        </nav>
    )
}
