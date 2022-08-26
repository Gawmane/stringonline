import Login from "./Login";
import Logout from "./Logout";
import UseLoginStore from "../Login/UseLoginStore";
import appService from "../../Tools/Appservice/AppService";

export const LoginPage = () => {
    const { loggedIn } = UseLoginStore((store) => ({
        loggedIn: store.loggedIn,
    }))

    return (
        <>

            <section> {!loggedIn ? <Login /> : <Logout />}</section>
        </>
    );
}