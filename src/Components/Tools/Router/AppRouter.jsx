import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../../Pages/NotFound/NotFound'
import { Home } from '../../Pages/Home/Home'
import { Terms } from '../../Pages/Home/Terms'
import { Login } from '../../Pages/Login/Login'
import { ProductList } from '../../Pages/Produkt/ProduktListe'


export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/handelsbetingelser' element={<Terms />} />
            <Route path='/login' element={<Login />} />
            <Route path='/produkter' element={<ProductList />} />


            <Route path='*' element={<NotFound />} />
        </Routes>
    )

}