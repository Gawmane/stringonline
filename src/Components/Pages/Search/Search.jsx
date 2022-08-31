import { BsArrowRightShort } from "react-icons/bs";
import styles from '../../../assets/Style/Header.module.scss'
import { useState, useEffect } from "react";
import axios from "axios";
import { BrandDetails } from "../Brands/Brands";
import { useForm } from "react-hook-form";

//Funtion component
const Search = () => {
    const [keyword, setKeyword] = useState('')
    const { register, handleSubmit } = useForm();

    //sætter data.keyword hvis getsearchresult har data
    const getSearchResult = data => {
        setKeyword(data.keyword);
    }
    return (
        <>
            {/* //closure = sender funktion videre som tager en funktion som argument og så lukker */}
            <form onSubmit={handleSubmit(getSearchResult)}>
                {/* //Spread operator(...) - giver mulighed for at kopiere hele eller dele af et eksisterende array eller objekt til et andet array eller objekt. */}
                <input className={styles.searchinput} id="keyword" type="text" placeholder="Søg" {...register("keyword", { required: true })} />
                <button className={styles.searchbutton}> <BsArrowRightShort /></button>

            </form>
            {keyword && (
                <SearchResult keyword={keyword} />
            )}

        </>)
}


const SearchResult = props => {
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`https://api.mediehuset.net/stringsonline/search/${props.keyword}`);
            setSearchData(result.data)
        }

        getData()

    }, [props.keyword, setSearchData]);
    return (<>
        <p>Fandt {searchData.num_items} resultater på ordet <i>{props.keyword}</i></p>
        {searchData.items && searchData.items.map(item => {
            return (
                <div key={item.id}>{item.name}</div>
            )
        })}</>)
}
export { Search, SearchResult }

