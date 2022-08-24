
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import appService from "../Tools/Appservice/AppService";
import style from '../../assets/Style/Nav.module.scss'

export const SubNav = () => {

    const [subNav, setSubNav] = useState([])
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

    const showDropdown = () => {
        setDropdown(true);
    }
    const hideDropdown = () => {
        setDropdown(false);
    }
    return (
        <nav className={style.subnav} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>

            {/* Tjekker ekstitere det og kan den mappes*/}
            {subNav && subNav.map((subNav) => {
                return (

                    <li key={subNav.id}>
                        <Link to={subNav.id}> {subNav.title} </Link>
                        {dropdown ? (<ul onMouseEnter={showDropdown}>
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

        </nav>
    )
}