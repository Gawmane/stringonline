import style from '../../../assets/Style/App.scss';
import { Layout } from '../../Tools/Layout/Layout';
export const NotFound = () => {
    return (
        <section className={style.notfound}>
            <Layout title="Fejl" description="Fejlside" />
            <p>Det ser ud til vi ikke kunne finde den side du søgte</p>
            <p>Prøv igen og jekt om du har skrevet rigtigt</p>
            <img style={{ width: '40%' }} src="https://cdn.pixabay.com/photo/2019/02/04/08/38/pixel-cells-3974187_1280.png" alt="" />

        </section>
    )
}