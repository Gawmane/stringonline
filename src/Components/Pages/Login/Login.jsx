import { Layout } from "../../Tools/Layout/Layout"
import { useForm } from "react-hook-form"
import appService from "../../Tools/Appservice/AppService";
import UseLoginStore from "./UseLoginStore";
import style from '../../../assets/Style/Login.module.scss'
const Login = () => {

    const { setLoggedIn } = UseLoginStore((store) => ({
        setLoggedIn: store.setLoggedIn,
    }));

    const { register, handleSubmit } = useForm();

    const onSubmit = (submitData) => {
        async function fecthResults() {
            try {
                const response = await appService.login(submitData.username, submitData.password);
                if (response.data) {
                    sessionStorage.setItem("user", JSON.stringify(response.data));
                    setLoggedIn();
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        fecthResults();
    }
    return (
        <section>
            <Layout title="Login" description="Login side" subtitle="Indtast brugernav og adgangskode for at logge på">


                {/* Laver form der kan register brugernavn og adgangskode */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* //Spret oparter */}
                    <label>Brugernavn:</label>
                    <input type="username" {...register("username", { required: "Brugernavn er påkrævet " })} autoComplete="username" />
                    <label>Adgangskode:</label>
                    <input type="password" {...register("password", { required: "Password er påkrævet " })} autoComplete="password" />
                    <button >Login </button>
                </form>
            </Layout>
        </section>
    );
}

export default Login;

