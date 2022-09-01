import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../Tools/Layout/Layout";
import styles from "../../../assets/Style/Produkt.module.scss"
export const ProductDetails = () => {
    const { product_id } = useParams();
    //Får objekt ud {} - fordi [] arrey kommer kun ud ved lister
    const [productData, setProductData] = useState({});

    // Hook til styring af renders
    useEffect(() => {
        const getProductData = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/stringsonline/products/${product_id}`)
                setProductData(result.data.item)
            } catch {
                console.error(err)
            }
        }
        // Funktionskald
        getProductData()
    },
        // Dependency array - hvis product_id  ændres renderes komponenten
        [product_id])

    return (
        <Layout title="Produkt detaljer">
            {productData ? (
                <span>
                    <h2>{productData.name}</h2>
                    {productData.image && productData.image.fullpath && (
                        <img src={productData.image.fullpath} alt={productData.name} />
                    )}
                    <p className={styles.longdes}>{productData.description_long}</p>
                </span>
            ) : null}
        </Layout>
    )
}


