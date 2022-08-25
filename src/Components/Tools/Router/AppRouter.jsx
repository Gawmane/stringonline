import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../../Pages/NotFound/NotFound'
import { Favorites, Home } from '../../Pages/Home/Home'
import { Terms } from '../../Pages/Home/Terms'
import { ProductsList } from '../../Pages/Produkt/ProduktListe'
import { BrandDetails, Brands } from '../../Pages/Brands/Brands'
import { LoginPage } from '../../Pages/Login/LoginPage'
import { Form } from '../../Pages/CheckOut/Form'



export const AppRouter = () => {


    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/handelsbetingelser' element={<Terms />} />
            <Route path='/login' element={<LoginPage />} />
            {/* <Route path="/dashboard" element={!loggedIn ? <Login /> : <Logout />}></Route> */}
            <Route path='/produkter' element={<ProductsList />} />
            <Route path='/faroritter' element={<Favorites />} />
            <Route path='/kasse' element={<Form />} />



            <Route path='/brands' element={<Brands />} >
                <Route path=':id' element={<BrandDetails />} />
            </Route>









            <Route path='*' element={<NotFound />} />
        </Routes>
    )

}