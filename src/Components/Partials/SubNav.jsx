
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import appService from "../Tools/Appservice/AppService";
import style from '../../assets/Style/Nav.module.scss'
import { BrandDetails } from "../Pages/Brands/Brands";

export const SubNav = () => {

    const [subNav, setSubNav] = useState([])
    const [brands, setBrands] = useState([]);
    const [dropdown, setDropdown] = useState(false);


    // //Definer getEvent og render den hvis den ændre sig
    useEffect(() => {
        const getSubNav = async () => {
            // Henter get fra appservice og henter "events" og dens id
            try {
                const result = await appService.getList('productgroups');
                if (result.data) {
                    setSubNav(result.data.items)
                    // console.log(result.data.items)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getSubNav()
    }, []);



    useEffect(() => {
        const getBrands = async () => {
            //Ændres til produkter når det er lavet
            try {
                const result = await appService.getList('brands');
                if (result.data) {
                    setBrands(result.data.items);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getBrands();
    }, []);

    const showDropdown = () => {
        setDropdown(true);
    }

    return (
        <nav className={style.subnav} >

            {/* Tjekker ekstitere det og kan den mappes*/}
            {subNav && subNav.map((subNav) => {
                return (

                    <li key={subNav.id}>
                        <Link to={''} onClick={showDropdown}> {subNav.title} </Link>

                        {dropdown ? (<ul onClik={showDropdown}>
                            {subNav && subNav.subgroups.map((subGroup) => {
                                return (
                                    <li key={subGroup.id}>
                                        <Link to=''>{subGroup.title}</Link>
                                    </li>

                                )
                            })}


                        </ul>) : null}

                    </li>




                )
            })}
            <li key={brands.id}>
                <Link to={''} onClick={showDropdown}> Brands </Link>

                {dropdown ? (<ul onClik={showDropdown}>
                    {brands && brands.map((brands) => {
                        return (
                            <li key={brands.id}>
                                <Link to={`/brands/${brands.id}`}>{brands.title}</Link>
                            </li>

                        )
                    })}


                </ul>) : null}

            </li>

        </nav>
    )
}
