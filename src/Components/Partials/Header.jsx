import style from '../../assets/Style/Header.module.scss'
import { Navigation } from '../Partials/Nav'
import { Search } from '../Pages/Search/Search';
import mail from "../../assets/Images/mail-icon.png"
import phone from "../../assets/Images/phone-icon.png"
import cart from "../../assets/Images/cart-icon.png"
import { Link } from 'react-router-dom';


export const Header = () => {
    return (

        <header>
            <Navigation />
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



        </header>

    )
}