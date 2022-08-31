import React from "react";
import { footerSocials } from "./data";

const Footer = () => {
    return (
        <div className="footer section">
            <div className="footer__container container">
                <div className="footer__group">
                    <ul className="footer__social">
                        {footerSocials.map(social => {
                            const { id, url, image } = social;
                            return (
                                <li key={id}>
                                    <a href={url} className="footer__social-link" target="_blank" rel="noreferrer">
                                        <img src={image} alt="social icon" width="40px" height="40px"/>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <span className="footer__copy">&copy; Copyright 2022 DodaDesign All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;