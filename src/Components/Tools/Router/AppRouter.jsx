import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../../Pages/NotFound/NotFound'
import { Home } from '../../Pages/Home/Home'
import { Terms } from '../../Pages/Home/Terms'
import { ProductsList } from '../../Pages/Produkt/ProduktListe'
import { BrandDetails, Brands } from '../../Pages/Brands/Brands'
import { Login } from '../../Pages/Login/LoginPage'
import { Form } from '../../Pages/CheckOut/Form'
import { ProductsDetails } from '../../Pages/Produkt/ProduktDetails'
import { Extranet } from '../../Pages/Extranet/Extranet'


export const AppRouter = () => {


    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/handelsbetingelser' element={<Terms />} />
            <Route path='/login' element={<Login />} />
            <Route path='/kasse' element={<Form />} />
            <Route path='/extranet' element={<Extranet />} />



            <Route path='/produkter' element={<ProductsList />} >
                <Route path=':id' element={<ProductsDetails />} />
            </Route>
            <Route path='/brands' element={<Brands />} >
                <Route path=':id' element={<BrandDetails />} />

            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )

}