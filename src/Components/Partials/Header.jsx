import style from '../../assets/Style/Header.module.scss'
import { Navigation } from '../Partials/Nav'
import { Search } from '../Pages/Search/Search';
import mail from "../../assets/Images/mail-icon.png"
import phone from "../../assets/Images/phone-icon.png"
import cart from "../../assets/Images/cart-icon.png"


export const Header = () => {
    return (

        <header>
            <Navigation />
            <section>
                <article>
                    <div>
                        <img src={mail} alt="mailicon" />
                        <p>Sale@stringonline.com</p>

                        <img src={phone} alt="phoneicon" />
                        <p>+45 98 12 22 68</p>

                        <button><img src={cart} alt="carticon" /></button>
                    </div>
                    <Search />
                </article>
            </section>



        </header>

    )
}