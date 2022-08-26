import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { SubNav } from "../../Partials/SubNav"
import appService from "../../Tools/Appservice/AppService"
import { Layout } from "../../Tools/Layout/Layout"
import style from "../../../assets/Style/Home.module.scss"
import hero from "../../../assets/Images/hero-banner.png"
export const Home = () => {
    return (
        <>
            <Layout title="" description="opgave">

            </Layout>
            <SubNav />
            <section>
                <img src={hero} alt="" />
                <h2>Kundernes faroritter</h2>
                <Favorites /></section>


        </>
    )
}

export const Favorites = () => {
    const [farvorit, setFarvorit] = useState([]);
    useEffect(() => {
        const getFavorites = async () => {
            //Ændres til produkter når det er lavet
            try {
                const result = await appService.getList('');
                if (result.data) {
                    setFarvorit(result.data.productgroups.items[0].subgroups[0].products);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getFavorites();
    }, []);
    return (
        <section className={style.favorites}>

            {farvorit && farvorit.map((favorites, i) => {
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

                                <p>Pris DKK{favorites.price}</p>
                                <button>Læg i kurv</button>


                            </figcaption>

                        </figure>
                    )
                }
                else {
                    return null
                }
            })}
        </section>
    )
}