import { useAuth } from '../../Tools/Auth/Auth';
import { Layout } from '../../Tools/Layout/Layout';
export const Extranet = () => {
    const { loginData } = useAuth();
    return (

        <Layout title="Extranet" description="Fejlside" >
           //Kigger i logindata om man er logget ind eller ikke og giver besked
            {!loginData ?
                <p>Du er ikke logget ind</p>
                :
                <p>Du er logget ind som {loginData.username}</p>

            }
        </Layout>


    )
}