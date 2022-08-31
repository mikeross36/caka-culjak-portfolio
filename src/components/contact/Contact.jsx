import React from "react";
import contact from "../../images/contact-me.svg"

const Contact = () => {
    return (
        <section className="contact section container" id="contact">
            <h2 className="section__title">kontakt</h2>
            <div className="contact__container">
                <div className="contact__info">
                    <p>phone</p>
                    <h3>+381 064 88 17 084</h3>
                    <p>email</p>
                    <h3>cakaculjak@yahoo.com</h3>
                    <p>address</p>
                    <h3>Seljačkih buna 75 Novi Sad</h3>
                </div>
                <div className="contact__image">
                    <img src={contact} alt="contact icon" className="contact__img"/>
                </div>
            </div>
        </section>
    )
}

export default Contact;