import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../../Pages/NotFound/NotFound'
import { Home } from '../../Pages/Home/Home'
import { Terms } from '../../Pages/Home/Terms'
import { BrandDetails, Brands } from '../../Pages/Brands/Brands'
import { Login } from '../../Pages/Login/LoginPage'
import { Form } from '../../Pages/CheckOut/Form'
import { ProductDetails } from '../../Pages/Produkt/ProduktDetails'
import { Extranet } from '../../Pages/Extranet/Extranet'
import { ProductList } from '../../Pages/Produkt/ProductList'
import { Products } from '../../Pages/Produkt/Prroducts'


export const AppRouter = () => {


    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/handelsbetingelser' element={<Terms />} />
            <Route path='/login' element={<Login />} />
            <Route path='/kasse' element={<Form />} />
            <Route path='/extranet' element={<Extranet />} />



            <Route path="/products">
                <Route index element={<Products />}></Route>
                <Route path=":group_id">
                    <Route index element={<ProductList />}></Route>
                    <Route path=":product_id" element={<ProductDetails />}></Route>
                </Route>
            </Route>

            {/* <Route path='/brands' element={<Brands />} >
                <Route path=':id' element={<BrandDetails />} />

            </Route> */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    )

}