
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SubNav } from "../../Partials/SubNav";
import appService from "../../Tools/Appservice/AppService";


export const ProductsDetails = () => {
    const [productDetails, setProductDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getProductDetails = async () => {

            try {
                const result = await appService.getDetails('productgroups', id);
                if (result.data) {
                    setProductDetails(result.data.group.products);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getProductDetails();
    }, [id]);
    return (
        <>


            {/* <article>


                <figure key={productDetails.id}>
                    <img src={productDetails.image_fullpath} alt={productDetails.id} />
                    <figcaption>
                        <article>
                            <h2>{productDetails.name}</h2>
                            <h2>{productDetails.brand}</h2>
                            <p>{productDetails.description_short}  </p>
                        </article>
                        <article>
                            <p>{productDetails.price}</p>

                            <Link to=""><button>Læg i kurv</button></Link>
                            <p>{productDetails.stock}På lager</p>
                        </article>

                    </figcaption></figure>




            </article> */}
        </>

    )
}