import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";


const ProductsList = () => {
    const [product, setProduct] = useState([])



    return (
        <>

            <article>

                {/* Tjekker ekstitere det og kan den mappes*/}
                {product && product.map(product => (
                    <>
                        <figure key={product.id}>
                            <figcaption> <img src="" alt="" /></figcaption>
                            <article>
                                <h2>{product.name}</h2>
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

export default ProductsList;
