import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../../Pages/NotFound/NotFound'
import { Home } from '../../Pages/Home/Home'


export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route pate='*' element={<NotFound />} />
        </Routes>
    )

}