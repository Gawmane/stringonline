import style from '../../assets/Style/Header.module.scss'
import { Search } from '../Pages/Search/Search';
import mail from "../../assets/Images/mail-icon.png"
import phone from "../../assets/Images/phone-icon.png"
import cart from "../../assets/Images/cart-icon.png"
import { Link } from 'react-router-dom';
import { BurgerMenu } from './Burgermenu';
import { NavLink } from "react-router-dom"
import logo from "../../assets/Images/header-bg.png"

export const Header = () => {
    return (

        <header>
            <nav className={style.mainnav}>
                <NavLink to={'/'}> <img src={logo} alt="logo" className={style.logo} /></NavLink>
                <ul className={style.navwrapper}>
                    <li><NavLink to={'/'}>Forside</NavLink></li>
                    <li><NavLink to={'/handelsbetingelser'}>Salgs- og handelsbetingelser</NavLink></li>
                    <li><button><NavLink to={'/login'}>Login</NavLink></button></li>
                </ul>
            </nav>

            <section>
                <article>
                    <div className={style.wrapper}>
                        <img src={mail} alt="mailicon" />
                        <p>Sale@stringonline.com</p>

                        <img src={phone} alt="phoneicon" className={style.phone} />
                        <p>+45 98 12 22 68</p>

                        <Link to="/kasse"><img src={cart} alt="carticon" className={style.kurv} /></Link>
                    </div>
                    <Search />
                </article>
            </section>
            <BurgerMenu />


        </header>

    )
}