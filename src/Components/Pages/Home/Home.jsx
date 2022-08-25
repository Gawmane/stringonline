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
            <Favorites />


        </>
    )
}
export const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        const getFavorites = async () => {
            //Ændres til produkter når det er lavet
            try {
                const result = await appService.getList('');
                if (result.data) {
                    setFavorites(result.data.productgroups.items[0].subgroups[0].products);
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
            {favorites && favorites.map((favorites, i) => {
                if (i < 4) {
                    return (
                        <figure key={favorites.id}>
                            <img src={favorites.image_fullpath} alt={favorites.name} />
                            <figcaption>
                                <article>
                                    <h1>{favorites.name}</h1>
                                    <h2>{favorites.brand}</h2>
                                    <p>{favorites.description_long.substring(0, 580)} <a href="">Læs mere</a></p>

                                </article>
                                <article>
                                    <p>{favorites.price}</p>
                                    <button>Læg i kurv</button>

                                </article>
                            </figcaption>

                        </figure>
                    )
                }
                else {
                    return null
                }
            })}
        </>
    )
}