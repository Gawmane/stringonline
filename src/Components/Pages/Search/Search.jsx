import { BsArrowRightShort } from "react-icons/bs";
import styles from '../../../assets/Style/Header.module.scss'
export const Search = () => {
    return (
        <>
            <input className={styles.searchinput} type="text" />
            <button className={styles.searchbutton}> <BsArrowRightShort /></button>

        </>
    )
}