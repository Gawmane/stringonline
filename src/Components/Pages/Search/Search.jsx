import { BsArrowRightShort } from "react-icons/bs";
import styles from '../../../assets/Style/Header.module.scss'
import { useState, useEffect } from "react";
import axios from "axios";
import { BrandDetails } from "../Brands/Brands";


export const Search = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`https://api.mediehuset.net/stringsonline/brands?q=${query}`);
            setData(result.data);
        };
        if (query.length === 0 || query.length > 2) getData();
    }, [query]);
    return (
        <>
            <input className={styles.searchinput} type="search" placeholder="Søg" onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())} />
            <button className={styles.searchbutton}> <BsArrowRightShort /></button>
            {<BrandDetails data={data} />}
        </>
    )
}
/*
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    //Sætter søg forspørgelsen til en tom string
    const [q, setQ] = useState("");
    //Seach parameter - vi søger i brands og produkter
    const [searchParam] = useState(["brands", "products"]);

    useEffect(() => {
        fetch("https://api.mediehuset.net/stringsonline/search/all")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
    // brug array-egenskaben .some() til at returnere en vare, selvom andre krav ikke matchede
    function search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }
    if (error) {
        return <>{error.message}</>;
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {
        return (
            
            <div>
                <input className={styles.searchinput} type="search" placeholder="Søg" value={q} onChange={(e) => setQ(e.target.value)} />
                <button className={styles.searchbutton}> <BsArrowRightShort /></button>

                <ul>
                    {search(items).map((item) => (


                        <li>
                            population:{" "}
                            <span>{item.title}</span>
                        </li>



                    ))}
                </ul>
            </div>
        );
    }
    */

