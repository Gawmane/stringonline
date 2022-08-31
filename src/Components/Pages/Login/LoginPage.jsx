import { useForm } from "react-hook-form";
import { useAuth } from "../../Tools/Auth/Auth";
import { Layout } from "../../Tools/Layout/Layout";
import axios from "axios";

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginData, setLoginData } = useAuth();


    const sendLogin = async data => {
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);
        const result = await axios.post('https://api.mediehuset.net/token', formData)
        handleSessionData(result)
    }
    const handleSessionData = data => {
        if (data) {
            sessionStorage.setItem("token", JSON.stringify(data));
            setLoginData(data)
        }
    }
    const logOut = () => {
        sessionStorage.removeItem('token')
        setLoginData('')
    }
    return (
        <Layout title="Login" description="Login side" >

            {!loginData && !loginData.username ? (
                //closure = sender funktion videre som tager en funktion som argument og så lukker - sendlogin lukker handelSubmit
                <form onSubmit={handleSubmit(sendLogin)}>
                //Spreat operator - spræder variabler ud
                    <label htmlFor="username">Brugernavn: </label>
                    <input type="text" placeholder="Brugernavn" id="username" {...register("username", { required: true })} />
                    {errors.username && (
                        <span> Indtast dit brugernavn</span>
                    )}
                    <label htmlFor="password">Adgangskode: </label>
                    <input type="password" placeholder="Adgangskode" id="password" {...register("password", { required: true })} />
                    {errors.password && (
                        <span> Indtast din adgangskode</span>
                    )}
                    <button>send</button>
                </form>
            ) : (
                <>
                    <p>du er logget ind som {loginData.username}</p>
                    <button onClick={logOut}>Logout</button></>)}
        </Layout>
    );
}