import { Link } from "react-router-dom"
import style from "../../../assets/Style/Produkt.module.scss"
export const ProductDetailItem = props => {
    return (
        <article >

            <figure className={style.productdetails}>

                {props.data.image && props.data.image.fullpath && (
                    <img src={props.data.image.fullpath} alt={props.data.name} className={style.rotateimg} />
                )}
                <figcaption>
                    <h2>{props.data.name}</h2>
                    <h3>{props.data.brand}</h3>
                    <p className={style.longdes}>{props.data.description_long}</p>

                </figcaption>

                <article>
                    <img src={props.data.brand_image} alt={props.data.name} />
                    <p className={style.price}>Pris: DKK{props.data.price}</p>
                    <button>Læg i kurv</button>
                    <p>{props.data.stock} + på lager</p>
                    <p>{props.data.rating}</p>

                </article>
            </figure>
            {/* {props.data.gallery && props.data.gallery.fullpath && (
                <img src={props.data.gallery.fullpath} alt={props.data.name} />
            )} */}
        </article>
    )
}