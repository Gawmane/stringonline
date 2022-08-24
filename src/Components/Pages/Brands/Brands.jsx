import { Link, Outlet, useParams } from "react-router-dom"
import { useState, useEffect } from "react";

import appService from "../../Tools/Appservice/AppService"
import { SubNav } from "../../Partials/SubNav";


export const Brands = () => {


    return (
        <section>
            <SubNav />
            <Outlet />
        </section>

    )
}
export const BrandDetails = ({ data }) => {
    const [brandDetails, setBrandDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getBrands = async () => {
            //Ændres til produkter når det er lavet
            try {
                const result = await appService.getDetails('brands', id);
                if (result.data) {
                    setBrandDetails(result.data.item);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getBrands();
    }, [id]);
    return (
        <>

            <figure key={brandDetails.id}>
                <img src={brandDetails.image_fullpath} alt={brandDetails.title} />
                <figcaption>
                    <h2>{brandDetails.title}</h2>
                    <p>{brandDetails.description}</p>
                </figcaption>
            </figure>
            {/* {brandDetails && brandDetails.map((brands) => {
                return (
                    <figure key={brands.id}>
                        <Link to={''}> {brands.title} </Link>


                        {brandDetails && brandDetails.products.map((product, i) => {
                            return (
                                <figcaption key={product.id}>
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
                                    {/* <Link to={`/produkter/${subGroups.id}`}>{subGroups.title}</Link> 
                                </figcaption>

                            )
                        })}




                    </figure>




                )
            })}*/}
        </>
    )
}