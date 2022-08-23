
import { useState, useEffect } from "react";

import axios from "axios";

export const ProductsList = () => {
    const [product, setProduct] = useState([])


    // //Definer getEvent og render den hvis den ændre sig
    useEffect(() => {
        const getProduct = async () => {
            // const url = `https://api.mediehuset.net/stringsonline/groups/${id}/subgroup/${id}`
            const url = 'https://api.mediehuset.net/stringsonline/groups/1/subgroup/2'

            const result = await axios.get(url);
            console.log(result.data.items.subgroup.products[7])
            setProduct(result.data.imens.subgroup.products[7])


        }
        getProduct()
    }, [setProduct]);



    return (
        <>

            <article>

                Tjekker ekstitere det og kan den mappes
                {product && product.map(products => (
                    <>
                        <figure key={products[4]}>
                            <h1>{products.name}</h1>
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
                        </figure>
                    </>
                ))}

            </article>
        </>
    )
}

