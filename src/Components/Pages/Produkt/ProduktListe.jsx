
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import appService from "../../Tools/Appservice/AppService";



export const ProductsList = () => {
    const [product, setProduct] = useState([])

    // //Definer getEvent og render den hvis den ændre sig
    useEffect(() => {
        const getProduct = async () => {

            const getProduct = async () => {
                // const url = `https://api.mediehuset.net/stringsonline/groups/${id}/subgroup/${id}`
                const url = 'https://api.mediehuset.net/stringsonline/'

                const result = await axios.get(url);

                setProduct(result.data.items.productgroups.subgroups.products)
                // console.log(result.data.items)
            }
        }
        getProduct()
    }, []);
    return (
        <article>

            {/* Tjekker ekstitere det og kan den mappes */}
            {product && product.map((product) => {
                return (
                    <figure key={product.id}>
                        {product && product.map((subGroups, i) => (
                            <figcaption key={subGroups.id}>
                                <h1>{product.name}</h1>
                                <figcaption> <img src="" alt="" /></figcaption>
                                <article>

                                    <h2>{product.brand}</h2>
                                    <p>{product.description_long}</p>
                                    <a href=""></a>
                                </article>
                                <article>
                                    <p>{product.price}</p>
                                    <button></button>
                                    <p>{product.stock}</p>
                                </article>
                                <Link to={`/produkter/${subGroups.id}`}>{subGroups.title}</Link>
                            </figcaption>

                        ))}
                    </figure>
                )
            })}

        </article>
    )
}


