import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../Tools/Layout/Layout";
import { ProductDetailItem } from "./ProductDetailItem";


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
        // Kalder layout komponent med title og description
        <Layout title="Produkt detaljer">

            {/* // Returnerer komponent med product object som data objekt
            //Splitter html op i yndrelige component (productlistitem) data= smider product ojektet over i andet component som props så vi har adgang til data fra api kaldet
            */}
            {productData ? (
                <ProductDetailItem key={productData.id} data={productData} product_id={product_id} />
            ) : null}
        </Layout>
    )
}


