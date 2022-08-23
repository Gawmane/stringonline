import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../../Pages/NotFound/NotFound'
import { Home } from '../../Pages/Home/Home'
import { Terms } from '../../Pages/Home/Terms'
import Login from '../../Pages/Login/Login'
import { ProductsList } from '../../Pages/Produkt/ProduktListe'
import { SubNav } from '../../Partials/SubNav'
import Logout from '../../Pages/Login/Logout'



export const AppRouter = () => {

    //Const der kan styre om siden skal vises hvis vi er logget ind
    // const { loggedIn } = UseLoginStore((store) => ({
    //     loggedIn: store.loggedIn,
    // }));
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/handelsbetingelser' element={<Terms />} />
            <Route path='/login' element={<Login />} />
            {/* <Route path="/dashboard" element={!loggedIn ? <Login /> : <Logout />}></Route> */}

            <Route path=':id' element={<SubNav />} />
            <Route path='/produkter' element={<ProductsList />} />






            <Route path='*' element={<NotFound />} />
        </Routes>
    )

}