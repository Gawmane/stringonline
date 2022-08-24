import style from '../../assets/Style/Nav.module.scss'
import { NavLink } from "react-router-dom"
import logo from "../../assets/Images/header-bg.png"
import styles from '../../assets/Style/Nav.module.scss'
import Login from '../Pages/Login/Login'
import Logout from '../Pages/Login/Logout'
import UseLoginStore from '../Pages/Login/UseLoginStore'

export const Navigation = () => {
    const { loggedIn } = UseLoginStore((store) => ({
        loggedIn: store.loggedIn,
    }))
    return (
        <nav className={styles.mainnav}>
            <img src={logo} alt="logo" />
            <ul>
                <li><NavLink to={'/'}>Forside</NavLink></li>
                <li><NavLink to={'/handelsbetingelser'}>Salgs- og handelsbetingelser</NavLink></li>
                {/* Laver en conditional ternary operator - hvis ikke logget ind skriv login på knappet hvis man er skriv logut */}
                <li><button><NavLink to={'/login'}>Login</NavLink></button></li>
                {/* <li> {!loggedIn ? <Login /> : <Logout />}</li> */}
            </ul>
        </nav>
    )
}
