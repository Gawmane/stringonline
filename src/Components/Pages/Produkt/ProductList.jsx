import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { ProductListItem } from "./ProductListItem"
import { Layout } from "../../Tools/Layout/Layout";

// Function Component til Produktlister
export const ProductList = () => {
    // deconstructer vars til api data fra useState hook
    const [productList, setProductList] = useState([])
    // deconstructor group_id fra url params hook
    const { group_id } = useParams(0)

    // Hook til styring af renders
    useEffect(() => {
        const getProductList = async () => {
            const result = await axios.get(`https://api.mediehuset.net/stringsonline/products/group/${group_id}`)
            setProductList(result.data.products)
        }
        // Funktionskald
        getProductList()
    },
        // Dependency array - hvis group_id  ændres renderes komponenten
        [group_id])

    return (
        // Kalder layout komponent med title og description
        <Layout title="Produkter" description="Se vores produkter">
            {/* Mapper product array  */}
            {productList && productList.map(product => {
                // Returnerer komponent med product object som data objekt
                //Splitter html op i yndrelige component (productlistitem) data= smider product ojektet over i andet component som props så vi har adgang til data fra api kaldet
                return (
                    <ProductListItem key={product.id} data={product} group_id={group_id} />
                )
            })
            }
        </Layout>
    )
}