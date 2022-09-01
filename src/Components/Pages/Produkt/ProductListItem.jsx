import { Link } from "react-router-dom"
import style from "../../../assets/Style/Produkt.module.scss"
export const ProductListItem = props => {
    return (
        <article className={style.productlist}>
            <figure>
                <img src={props.data.image_fullpath} alt="Billede" />
                <figcaption>
                    <article>
                        <h2>{props.data.name}</h2>
                        <p>{props.data.description_short}  <Link to={`/products/${props.group_id}/${props.data.id}`}>Læs mere &raquo;</Link></p>
                        <p>Varenummer: {props.data.item_number} </p>

                    </article>

                    <article>
                        <p className={style.price}>Pris: {props.data.price} DKK</p>
                        <button>Læg i kurv</button>
                        <p>{props.data.stock} På lager</p>
                    </article>
                </figcaption>
            </figure>
        </article>
    )
}