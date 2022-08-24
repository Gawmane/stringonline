import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { SubNav } from "../../Partials/SubNav"
import appService from "../../Tools/Appservice/AppService"
import { Layout } from "../../Tools/Layout/Layout"


export const Home = () => {
    return (
        <>
            <Layout title="Home page" description="opgave">
                Hallo
            </Layout>
            <SubNav />
            {/* <Favorites /> */}


        </>
    )
}
export const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        const getFavorites = async () => {
            //Ændres til produkter når det er lavet
            try {
                const result = await appService.getList('productgroups');
                if (result.data) {
                    setFavorites(result.data.items);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getFavorites();
    }, []);
    return (
        <>
            <h2>Kundernes faroritter</h2>
            {favorites && favorites.map((favorites) => {
                return (
                    <figure key={favorites.id}>
                        {favorites && favorites.subgroups.map((subGroup, i) => (
                            <figcaption>
                                {/* 
                                Til når jeg får løst mit probelm med produkt endpoint
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
                                </article> */}
                                <p key={subGroup.id}>
                                    <Link to={`/faroritter/${subGroup.id}`}>{subGroup.title}</Link>
                                </p></figcaption>
                        ))}
                    </figure>
                )
            })}
        </>
    )
}