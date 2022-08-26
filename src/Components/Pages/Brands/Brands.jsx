import { Link, Outlet, useParams } from "react-router-dom"
import { useState, useEffect } from "react";

import appService from "../../Tools/Appservice/AppService"

import style from "../../../assets/Style/Brands.module.scss"

export const Brands = () => {
    const [brandList, setBrandList] = useState([]);

    useEffect(() => {
        const getBrandList = async () => {
            //Ændres til produkter når det er lavet
            try {
                const result = await appService.getList('brands');
                if (result.data) {
                    setBrandList(result.data.item);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getBrandList();
    }, []);
    return (
        <>
            <section className={style.brand}>




                {brandList && brandList.map((item) => {
                    return (
                        <article>

                            <h2>{item.title}</h2>
                            <img src={item.image_fullpath} alt={item.title} />
                            <p>{item.description}</p>
                        </article>
                    )
                })}
            </section><Outlet />
        </>

    )
}
export const BrandDetails = ({ data }) => {
    const [brandDetails, setBrandDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getBrands = async () => {
            //Ændres til produkter når det er lavet
            try {
                const result = await appService.getDetails('brands', id);
                if (result.data) {
                    setBrandDetails(result.data.item);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getBrands();
    }, [id]);
    return (
        <>
            {/* Udkommenteret da den placere en tom article på hver side - skal først vises når den er lavet færig */}
            {/* <article>
                <figure key={brandDetails.id}>
                    <img src={brandDetails.image_fullpath} alt={brandDetails.title} />
                    <figcaption>
                        <h2>{brandDetails.title}</h2>
                        <p>{brandDetails.description}</p>
                    </figcaption>
                </figure>
            </article> */}

        </>

    )
}