
import { Layout } from "../../Tools/Layout/Layout"
import style from '../../../assets/Style/Contact.module.scss'
import { useForm } from "react-hook-form";
import { useState } from 'react'

//Form const der indeholder alt funktionelt til kontakt formen
export const Form = () => {

    //UseState hook - false
    const [formStatus, setFormStatus] = useState(false);
    const [show, setShow] = useState(false);

    const { register, formState: { errors }, handleSubmit } = useForm();

    //Ved clik onsubmit - vis info i console og gør setformstatus true 
    const onSubmit = data => {
        console.log(data);
        setFormStatus(true)
    }
    const showElement = () => {
        setShow(true);
    }
    return (
        <>
            <Layout title="Kasse" description="Check out betaling" />


            {/* Conditional ternary operator - vis input - efter tryk submit vis message */}
            {!formStatus ?

                // handleSubmit validere  inputs inden kald af "onSubmit" 
                <form onSubmit={handleSubmit(onSubmit)} className={style.form}>

                    {/* Wrapper til at dele formen op i grid */}

                    <div>
                        <h3>Fakturerings- & leveringsadresse</h3>
                        {/* Validering NAVN - tjekker om fullname er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator)*/}
                        <input type="text" {...register("fullname", { required: true })} placeholder="Fornavn" />
                        {errors.fullname && <span>Du skal indtaste dit navn</span>}

                        {/* Validering EFTERNAVN - tjekker om lastname er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator)*/}
                        <input type="text" {...register("lastname", { required: true })} placeholder="Efternavn" />
                        {errors.lastname && <span>Du skal indtaste dit efternavn</span>}

                        {/* Validering VEJ/GADE OG HUSNUMMER - tjekker om address er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator)*/}
                        <input type="text" {...register("address", { required: true })} placeholder="Gade/vej og husnummer" />
                        {errors.address && <span>Du skal indtaste dit Gade/vej og husnummer</span>}

                        {/* Validering VEJ/GADE OG HUSNUMMER - tjekker om zipcode er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator)*/}
                        <input type="number" {...register("zipcode", { required: true })} placeholder="Postnr." />
                        {errors.zipcode && <span>Du skal indtaste dit Postnummer</span>}

                        {/* Validering BY - tjekker om city er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator)*/}
                        <input type="text" {...register("city", { required: true })} placeholder="By" />
                        {errors.city && <span>Du skal indtaste dit bynavn</span>}

                        {/* TJEKBOK - er ikke required da det er et valg*/}
                        <input type="checkbox" {...register("checkbox", { required: false })} className={style.checkbox} />
                        <label htmlFor="checkbox">Anden leveringsadresse</label>

                    </div>
                    {/* Wrapper til at dele formen op i grid */}

                    <div>
                        <h3>Email & telefon</h3>

                        {/* Validering EMAIL - tjekker om email er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator) */}
                        <input type="email" {...register("email", { required: true })} placeholder="Emailadresse" />
                        {errors.email && <span>Du skal indtaste din email</span>}

                        {/* Validering TELEFONNUMMER - tjekker om pbone er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator) */}
                        <input type="text" {...register("phone", { required: true })} placeholder="Telefonnummer" />
                        {errors.phone && <span>Du skal indtaste din email</span>}

                        <article>
                            <p>Med dit telefonnummer kan vi kontakte dig i tilfælde af spørgsmål eller problemer. Hvis du oplyser dit mobilnummer, kan vi også sende dig en forsendelsesbekræftelse via SMS,</p>
                        </article>

                    </div>
                    {/* Wrapper til at dele formen op i grid */}

                    <div>
                        <h3>Betalingsmetode</h3>

                        {/* BANKOVERFØRSEL - */}
                        <input type="radio" {...register("radio", { required: false })} className={style.radio} placeholder="Bankoverførsel" />
                        <label htmlFor="radio">Bankoverførsel</label>

                        <div className={style.divwrapper}>
                            <input type="radio" {...register("radio", { required: false })} className={style.radio} onClick={showElement} />
                            <label htmlFor="radio">Kreditkort (MasterCard, VISA)</label>
                            {show ? (<ul onClik={showElement}>

                                {/* Validering KORTNUMMER - tjekker om cardnumber er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator) */}
                                <input type="number" {...register("cardnumber", { required: true })} placeholder="Kortnummmer" />
                                {errors.cardnumber && <span>Du skal indtaste dit kortnumber</span>}

                                {/* Validering MÅNED - tjekker om måned er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator) */}
                                <select id="month" name="month" {...register("month", { required: true })} placeholder="Måned">
                                    <option>Måned</option>
                                    <option value="01">januar</option>
                                    <option value="02">februar</option>
                                    <option value="03">marts</option>
                                    <option value="04">April</option>
                                    <option value="05">Kan</option>
                                    <option value="06">juni</option>
                                    <option value="07">juli</option>
                                    <option value="08">august</option>
                                    <option value="09">september</option>
                                    <option value="10">oktober</option>
                                    <option value="11">november</option>
                                    <option value="12">december</option>
                                </select>
                                {errors.month && <span>Du skal vælge en måned</span>}

                                {/* Validering ÅR - tjekker om year er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator) */}
                                <select id="year" name="year" {...register("year", { required: true })} placeholder="År">

                                    <option>År</option>
                                    <option value="1990">1990</option>
                                    <option value="1991">1991</option>
                                    <option value="1992">1992</option>
                                    <option value="1993">1993</option>
                                    <option value="1994">1994</option>
                                    <option value="1995">1995</option>
                                    <option value="1996">1996</option>
                                    <option value="1997">1997</option>
                                    <option value="1998">1998</option>
                                    <option value="1999">1999</option>
                                    <option value="2000">2000</option>
                                    <option value="2001">2001</option>
                                    <option value="2002">2002</option>
                                    <option value="2003">2003</option>
                                    <option value="2004">2004</option>
                                    <option value="2005">2005</option>
                                    <option value="2006">2006</option>
                                    <option value="2007">2007</option>
                                    <option value="2008">2008</option>
                                    <option value="2009">2009</option>
                                    <option value="2010">2010</option>
                                    <option value="2011">2011</option>
                                    <option value="2012">2012</option>
                                    <option value="2013">2013</option>
                                    <option value="2014">2014</option>
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                </select>
                                {errors.year && <span>Du skal vælge et år</span>}

                                {/* Validering KONTROLCIFRE - tjekker om ciffer er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator) */}
                                <input type="number" {...register("ciffer", { required: true })} placeholder="Kontrolciffer" />
                                {errors.ciffer && <span>Du skal indtaste dit Kontrolciffer</span>}

                                {/* Validering KoRTINDEHAVER - tjekker om pbone er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator) */}
                                <input type="text" {...register("cardname", { required: true })} placeholder="Kort indehaver" />
                                {errors.cardname && <span>Du skal indtaste dit kortnavn</span>}


                            </ul>) : null}</div>
                        <button type="submit" >Betal</button>
                    </div>

                </form>
                :
                // Ny form med besked om at formen er sendt
                <form className={style.formMessage}>
                    <article>
                        <h2>Tak for din besked</h2>
                        <p>Din besked er nu sendt og vi vil kigge nærmere på den i løbet af nogle dage.</p>
                        <p>Du kan nu forlade siden unden problemer</p>
                    </article>
                </form>
            }
        </>

    )
}
