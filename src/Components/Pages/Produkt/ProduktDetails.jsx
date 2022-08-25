
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import appService from "../../Tools/Appservice/AppService";


export const ProductsDetails = () => {
    const [productDetails, setProductDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getProductDetails = async () => {

            try {
                const result = await appService.getDetails('productgroups', id);
                if (result.data) {
                    setBrandDetails(result.data.productgroups.item);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getProductDetails();
    }, [id]);
    return (
        <>


        </>

    )
}