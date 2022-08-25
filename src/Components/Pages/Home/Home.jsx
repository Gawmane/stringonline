import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { SubNav } from "../../Partials/SubNav"
import appService from "../../Tools/Appservice/AppService"
import { Layout } from "../../Tools/Layout/Layout"
import style from "../../../assets/Style/Home.module.scss"

export const Home = () => {
    return (
        <>
            <Layout title="" description="opgave">

            </Layout>
            <SubNav />
            <section>
                <Hero />
                <h2>Kundernes faroritter</h2>
                <Favorites /></section>


        </>
    )
}

export const Hero = () => {
    const [hero, setHero] = useState([]);
    useEffect(() => {
        const getHero = async () => {
            //Ændres til produkter når det er lavet
            try {
                const result = await appService.getList('');
                if (result.data) {
                    setHero(result.data.productgroups.items[1].subgroups[0].products[0]);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getHero();
    }, []);
    return (


        <section className={style.hero}>
            <figure>
                <img src={hero.image_fullpath} alt={hero.title} />
                <figcaption>
                    <h1>{hero.title}</h1>
                    <h3>{hero.brand}</h3>
                    <h2>{hero.description_short}</h2>
                    <Link to="/product/1"><button>Læs mere</button></Link>
                </figcaption>
            </figure>
        </section>


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