
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SubNav } from "../../Partials/SubNav";
import appService from "../../Tools/Appservice/AppService";



export const ProductsList = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams();

    // //Definer getEvent og render den hvis den ændre sig
    useEffect(() => {
        const getProduct = async () => {

            try {
                const result = await appService.getDetails('productgroups', id);
                if (result.data) {
                    setProduct(result.data.group.products);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getProduct();
    }, [id]);
    return (
        <><SubNav />
            <article>

                {/* Tjekker ekstitere det og kan den mappes */}
                {product && product.map((product) => {
                    return (
                        <figure key={product.id}>
                            <img src={product.image_fullpath} alt={product.id} />
                            <figcaption>
                                <article>
                                    <h2>{product.name}</h2>
                                    <h2>{product.brand}</h2>
                                    <p>{product.description_short} <Link to={`/produkter/id`}>Læs mere</Link> </p>
                                </article>
                                <article>
                                    <p>{product.price}</p>

                                    <Link to=""><button>Læg i kurv</button></Link>
                                    <p>{product.stock}På lager</p>
                                </article>

                            </figcaption></figure>
                    )
                })}



            </article></>
    )
}


