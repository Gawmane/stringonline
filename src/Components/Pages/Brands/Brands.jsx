import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react";

import appService from "../../Tools/Appservice/AppService"


export const Brands = () => {


    return (

        <></>

    )
}
export const BrandDetails = () => {
    const [brandDetails, setBrandDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getBrands = async () => {
            //Ændres til produkter når det er lavet
            try {
                const result = await appService.getDetails('brands', id);
                if (result.data) {
                    setBrandDetails(result.data.items);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getBrands();
    }, [id]);
    return (


        <figure>
            <img src={brandDetails.image_fullpath} alt={brandDetails.title} />
            <figcaption>
                <h2>{brandDetails.title}</h2>
                <p>{brandDetails.description}</p>
            </figcaption>
        </figure>

    )
}